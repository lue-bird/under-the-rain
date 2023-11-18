port module Main exposing (main)

import Angle exposing (Angle)
import Audio exposing (AudioData)
import Axis2d exposing (Axis2d)
import Browser
import Browser.Dom
import Browser.Events
import Bytes
import Circle2d exposing (Circle2d)
import Collage
import Collage.Layout
import Collage.Render
import Collage.Text
import Color exposing (Color)
import Dict exposing (Dict)
import Direction2d exposing (Direction2d)
import Duration exposing (Duration, Seconds)
import Element as Ui
import File
import File.Select
import Forest.Path
import Frame2d exposing (Frame2d)
import Html exposing (Html)
import Html.Attributes
import Html.Events
import Json.Decode
import Json.Encode
import Key
import LineSegment2d exposing (LineSegment2d)
import List.Extra
import Pixels exposing (Pixels)
import Point2d exposing (Point2d)
import Quantity exposing (Quantity, Rate)
import Random
import Random.Extra
import Reaction exposing (Reaction)
import RecordWithoutConstructorFunction exposing (RecordWithoutConstructorFunction)
import Svg as UntypedSvg
import Svg.Lazy
import Task
import Time
import Tree exposing (Tree)
import Tree.Navigate
import Tree.Path exposing (TreePath)
import TypedSvg as Svg
import TypedSvg.Attributes as SvgA
import TypedSvg.Core exposing (Svg)
import TypedSvg.Events
import TypedSvg.Filters
import TypedSvg.Filters.Attributes
import TypedSvg.Types as Svg
import Vector2d exposing (Vector2d)
import VirtualDom


type Event
    = AudioLoaded { piece : AudioKind, result : Result Audio.LoadError Audio.Source }
    | MouseMoved { clientX : Float, clientY : Float }
    | MouseReleased
    | WindowSized { width : Float, height : Float }
    | InitialRandomSeedReceived Random.Seed
    | InitialTimeReceived Time.Posix
    | FrameTickPassed Time.Posix
    | KeyPressed Key.Key
    | KeyReleased Key.Key


type alias State =
    RecordWithoutConstructorFunction
        { audio : EachAudio (Result Audio.LoadError Audio.Source)
        , windowSize : { width : Float, height : Float }
        , audioTimes : EachAudio (List Time.Posix)
        , keysPressed : List Key.Key
        , randomSeed : Random.Seed
        , lastTick : Time.Posix
        , initialTime : Time.Posix
        }


type Effect
    = LoadAudio AudioKind
    | RequestInitialRandomSeed
    | RequestInitialTime
    | GameRequestInitialWindowSize


main : Program () (Audio.Model Event State) (Audio.Msg Event)
main =
    Audio.documentWithAudio
        { init =
            init >> Reaction.toTuple3 interpretEffect
        , update =
            \_ event ->
                reactTo event >> Reaction.toTuple3 interpretEffect
        , subscriptions =
            \_ -> subscriptions
        , view =
            \_ -> uiDocument
        , audio = audio
        , audioPort =
            { toJS = audioPortToJS
            , fromJS = audioPortFromJS
            }
        }


type AudioKind
    = AudioLilyGrow
    | AudioDropletSplash
    | AudioMusic


audioKinds : List AudioKind
audioKinds =
    [ AudioLilyGrow, AudioDropletSplash, AudioMusic ]


type alias EachAudio perKind =
    { lilyGrow : perKind
    , dropletSplash : perKind
    , music : perKind
    }


eachAudio : perKind -> EachAudio perKind
eachAudio perKind =
    { lilyGrow = perKind
    , dropletSplash = perKind
    , music = perKind
    }


alterAudioOfKind : AudioKind -> (a -> a) -> EachAudio a -> EachAudio a
alterAudioOfKind kind f =
    case kind of
        AudioLilyGrow ->
            \r -> { r | lilyGrow = r.lilyGrow |> f }

        AudioDropletSplash ->
            \r -> { r | dropletSplash = r.dropletSplash |> f }

        AudioMusic ->
            \r -> { r | music = r.music |> f }


accessAudioOfKind : AudioKind -> EachAudio a -> a
accessAudioOfKind kind =
    case kind of
        AudioLilyGrow ->
            .lilyGrow

        AudioDropletSplash ->
            .dropletSplash

        AudioMusic ->
            .music


audioPieceToName : AudioKind -> String
audioPieceToName =
    \audioPiece ->
        case audioPiece of
            AudioLilyGrow ->
                "lily-grow"

            AudioDropletSplash ->
                "droplet-splash"

            AudioMusic ->
                "music"


init : () -> Reaction State Effect
init () =
    Reaction.to
        { audio = eachAudio (Err Audio.UnknownError)
        , windowSize =
            -- dummy
            { width = 1920, height = 1080 }
        , audioTimes = eachAudio []
        , keysPressed = []
        , randomSeed =
            -- dummy
            Random.initialSeed 1635127483
        , initialTime =
            -- dummy
            Time.millisToPosix -1
        , lastTick =
            -- dummy
            Time.millisToPosix -1
        }
        |> Reaction.effectsAdd
            [ RequestInitialRandomSeed
            , RequestInitialTime
            , GameRequestInitialWindowSize
            ]
        |> Reaction.effectsAdd
            (audioKinds |> List.map (\piece -> LoadAudio piece))


reactTo : Event -> (State -> Reaction State Effect)
reactTo event =
    case event of
        AudioLoaded audioLoaded ->
            \state ->
                Reaction.to
                    { state
                        | audio =
                            state.audio
                                |> alterAudioOfKind audioLoaded.piece (\_ -> audioLoaded.result)
                    }

        MouseMoved newMousePoint ->
            \state ->
                Reaction.to state

        MouseReleased ->
            \state ->
                Reaction.to
                    { state
                        | audioTimes =
                            state.audioTimes |> (\r -> { r | dropletSplash = r.dropletSplash |> (::) state.lastTick })
                    }

        WindowSized size ->
            \state -> Reaction.to { state | windowSize = size }

        InitialRandomSeedReceived initialRandomSeed ->
            \state ->
                Reaction.to
                    { state | randomSeed = initialRandomSeed }

        InitialTimeReceived initialTime ->
            \state ->
                Reaction.to
                    { state
                        | initialTime = initialTime
                        , lastTick = initialTime
                    }

        FrameTickPassed newSimulationTime ->
            \state ->
                Reaction.to
                    { state
                        | lastTick = newSimulationTime
                    }

        KeyPressed key ->
            \state ->
                Reaction.to
                    { state | keysPressed = state.keysPressed |> (::) key }

        KeyReleased key ->
            \state ->
                Reaction.to
                    { state
                        | keysPressed =
                            state.keysPressed |> List.filter (\keyPressed -> keyPressed /= key)
                    }


subscriptions : State -> Sub Event
subscriptions =
    \state ->
        [ Browser.Events.onResize
            (\width height ->
                { width = width |> toFloat, height = height |> toFloat }
                    |> WindowSized
            )
        , Time.every (1000.0 / 30.0) FrameTickPassed
        , Browser.Events.onKeyDown (Json.Decode.map KeyPressed Key.decoder)
        , Browser.Events.onKeyUp (Json.Decode.map KeyReleased Key.decoder)
        ]
            |> Sub.batch


port audioPortToJS : Json.Encode.Value -> Cmd msg_


port audioPortFromJS : (Json.Decode.Value -> msg) -> Sub msg


interpretEffect : Effect -> Reaction.EffectInterpretation Event
interpretEffect =
    \effect ->
        case effect of
            LoadAudio piece ->
                Reaction.audioCommands
                    [ Audio.loadAudio
                        (\result -> AudioLoaded { result = result, piece = piece })
                        ([ "public/", piece |> audioPieceToName, ".mp3" ] |> String.concat)
                    ]

            RequestInitialRandomSeed ->
                Reaction.commands [ Random.independentSeed |> Random.generate InitialRandomSeedReceived ]

            RequestInitialTime ->
                Reaction.commands [ Time.now |> Task.perform InitialTimeReceived ]

            GameRequestInitialWindowSize ->
                Reaction.commands
                    [ Browser.Dom.getViewport
                        |> Task.perform
                            (\viewport ->
                                { width = viewport.viewport.width
                                , height = viewport.viewport.height
                                }
                                    |> WindowSized
                            )
                    ]


blossomColorRandom : Random.Generator Color
blossomColorRandom =
    Random.map3 Color.rgb
        (Random.float 0.3 1)
        (Random.float 0.3 0.6)
        (Random.float 0.3 1)
        |> Random.Extra.filter
            (\color ->
                let
                    c =
                        color |> Color.toRgba

                    average =
                        (c.red + c.blue + c.green) / 3

                    isDifferentEnoughFromAverage component =
                        abs (component - average) > 0.2
                in
                List.any isDifferentEnoughFromAverage [ c.red, c.blue, c.green ]
            )


uiDocument : State -> Browser.Document Event
uiDocument =
    \state ->
        { title = "under the rain"
        , body =
            state |> ui |> List.singleton
        }


ui : State -> Html Event
ui =
    \state ->
        let
            since0 : Duration
            since0 =
                Duration.from state.initialTime state.lastTick

            animate config collage =
                let
                    progress : Float
                    progress =
                        (since0 |> Quantity.minus config.start |> Duration.inSeconds)
                            / (config.duration |> Duration.inSeconds)
                in
                if progress >= 1 || progress < 0 then
                    Collage.Text.empty |> Collage.rendered

                else
                    collage progress

            animateLoop duration collage =
                let
                    progress : Float
                    progress =
                        (since0 |> Duration.inSeconds)
                            / (duration |> Duration.inSeconds)
                in
                collage (sin progress)

            dropletSplash progress =
                Collage.Layout.stack
                    (List.range 0 10
                        |> List.map
                            (\index ->
                                Collage.circle (progress * (100 + (index |> Basics.toFloat) * 40))
                                    |> Collage.outlined
                                        (Collage.solid (35 + progress * 50)
                                            (Collage.uniform
                                                (Color.rgba
                                                    0.55
                                                    0.7
                                                    1
                                                    ((1 - progress) * 0.6)
                                                )
                                            )
                                        )
                                    |> Collage.scaleY 0.3
                                    |> Collage.shiftY -300
                            )
                        |> (if progress > 0.3 then
                                (::) (dropletSplashWide (0.2 + progress * 1.1))

                            else
                                identity
                           )
                    )

            withInvertedProgress collage progress =
                collage (1 - progress)

            dropletSplashWide progressOld =
                let
                    progress =
                        0.5 + progressOld / 2
                in
                Collage.Layout.stack
                    (List.range 0 20
                        |> List.map
                            (\index ->
                                Collage.circle (progress * (50 + (index |> Basics.toFloat) * 50))
                                    |> Collage.outlined
                                        (Collage.solid (25 + progress * 30)
                                            (Collage.uniform
                                                (Color.rgba
                                                    0.55
                                                    0.7
                                                    1
                                                    ((1 - progress) * 0.5)
                                                )
                                            )
                                        )
                            )
                    )
                    |> Collage.scaleY 0.3
                    |> Collage.shiftY -300

            withSquaredOutProgress collage progress =
                collage (progress ^ 2)

            withSquaredInProgress collage progress =
                collage (progress ^ 0.5)

            wave progress =
                waveWith { width = 160, color = Color.rgba 1 1 1 0.2 } progress

            waveWith config progress =
                List.range -20 20
                    |> List.map
                        (\x ->
                            ( (x |> Basics.toFloat) * 35, sin ((x |> Basics.toFloat) / 2 + progress * 10) * 35 )
                        )
                    |> Collage.path
                    |> Collage.traced (Collage.solid config.width (Collage.uniform config.color))
        in
        Collage.Render.svgBox ( state.windowSize.width, state.windowSize.height )
            (Collage.Layout.stack
                [ animateLoop (Duration.seconds 13)
                    wave
                    |> Collage.shift ( 0, 540 )
                    |> Collage.scaleX 1.5
                , Collage.Layout.stack
                    [ Collage.Layout.stack
                        [ animateLoop (Duration.seconds 7)
                            (waveWith { width = 70, color = Color.rgba 0.15 0.5 1 0.6 })
                        , animateLoop (Duration.seconds 7.6)
                            (withInvertedProgress (waveWith { width = 90, color = Color.rgba 0 0.55 1 0.6 }))
                            |> Collage.shift ( 100, -310 )
                        , animateLoop (Duration.seconds 9)
                            (waveWith { width = 90, color = Color.rgba 0.4 0.85 1 0.6 })
                            |> Collage.shift ( 50, 330 )
                        , animateLoop (Duration.seconds 6.7)
                            (waveWith { width = 90, color = Color.rgba 0.4 0.7 1 0.6 })
                            |> Collage.shift ( 60, -140 )
                        , animateLoop (Duration.seconds 4.9)
                            (waveWith { width = 90, color = Color.rgba 0.4 0.75 1 0.6 })
                            |> Collage.shift ( 0, 210 )
                        , animateLoop (Duration.seconds 9.8)
                            (withInvertedProgress (waveWith { width = 90, color = Color.rgba 0 0.55 1 0.6 }))
                            |> Collage.shift ( 20, 440 )
                        , animateLoop (Duration.seconds 5.5)
                            (waveWith { width = 90, color = Color.rgba 0.15 0.65 1 0.6 })
                            |> Collage.shift ( 20, -500 )
                        , animateLoop (Duration.seconds 10)
                            (withInvertedProgress (waveWith { width = 90, color = Color.rgba 0 0.55 1 0.6 }))
                            |> Collage.shift ( 50, 570 )
                        , animateLoop (Duration.seconds 8)
                            (withInvertedProgress (waveWith { width = 90, color = Color.rgba 0 0.55 1 0.6 }))
                            |> Collage.shift ( 0, -780 )
                        , animateLoop (Duration.seconds 10)
                            (waveWith { width = 90, color = Color.rgba 0.3 0.79 1 0.6 })
                            |> Collage.shift ( 40, 750 )
                        , animateLoop (Duration.seconds 4.7)
                            (waveWith { width = 90, color = Color.rgba 0.3 0.8 1 0.6 })
                            |> Collage.shift ( 0, -800 )
                        , animateLoop (Duration.seconds 7)
                            (waveWith { width = 90, color = Color.rgba 0.35 0.65 1 0.6 })
                            |> Collage.shift ( 80, 870 )
                        , animateLoop (Duration.seconds 6)
                            (waveWith { width = 90, color = Color.rgba 0.45 0.7 1 0.6 })
                            |> Collage.shift ( 30, -900 )
                        , animateLoop (Duration.seconds 6.5)
                            (waveWith { width = 90, color = Color.rgba 0.45 0.8 1 0.6 })
                        ]
                        |> Collage.shift ( -200, 200 )
                    , animateLoop (Duration.seconds 10)
                        wave
                    , animateLoop (Duration.seconds 7.6)
                        (withInvertedProgress wave)
                        |> Collage.shift ( -50, -300 )
                    , animateLoop (Duration.seconds 13)
                        wave
                        |> Collage.shift ( -70, 300 )
                    , animateLoop (Duration.seconds 8.7)
                        wave
                        |> Collage.shift ( -80, -170 )
                    , animateLoop (Duration.seconds 5.9)
                        wave
                        |> Collage.shift ( -20, 190 )
                    , animateLoop (Duration.seconds 12.8)
                        (withInvertedProgress wave)
                        |> Collage.shift ( 0, 460 )
                    , animateLoop (Duration.seconds 6.5)
                        wave
                        |> Collage.shift ( -10, -460 )
                    , animateLoop (Duration.seconds 12)
                        (withInvertedProgress wave)
                        |> Collage.shift ( 0, 560 )
                    , animateLoop (Duration.seconds 10)
                        (withInvertedProgress wave)
                        |> Collage.shift ( 0, -700 )
                    , animateLoop (Duration.seconds 7.6)
                        (withInvertedProgress (waveWith { width = 90, color = Color.rgb 0 0.55 1 }))
                        |> Collage.shift ( 0, -310 )
                    , animateLoop (Duration.seconds 9)
                        (waveWith { width = 90, color = Color.rgb 0 0.55 1 })
                        |> Collage.shift ( -100, 330 )
                    , animateLoop (Duration.seconds 6.7)
                        (waveWith { width = 90, color = Color.rgb 0.2 0.5 1 })
                        |> Collage.shift ( 0, -140 )
                    , animateLoop (Duration.seconds 4.9)
                        (waveWith { width = 90, color = Color.rgb 0.1 0.4 1 })
                        |> Collage.shift ( -120, 210 )
                    , animateLoop (Duration.seconds 9.8)
                        (withInvertedProgress (waveWith { width = 90, color = Color.rgb 0 0.55 1 }))
                        |> Collage.shift ( 0, 440 )
                    , animateLoop (Duration.seconds 5.5)
                        (waveWith { width = 90, color = Color.rgb 0.15 0.45 1 })
                        |> Collage.shift ( 0, -500 )
                    , animateLoop (Duration.seconds 10)
                        (withInvertedProgress (waveWith { width = 90, color = Color.rgb 0 0.55 1 }))
                        |> Collage.shift ( -100, 570 )
                    , animateLoop (Duration.seconds 8)
                        (withInvertedProgress (waveWith { width = 90, color = Color.rgb 0 0.55 1 }))
                        |> Collage.shift ( 0, -780 )
                    , animateLoop (Duration.seconds 10)
                        (waveWith { width = 90, color = Color.rgb 0 0.55 1 })
                        |> Collage.shift ( 0, 750 )
                    , animateLoop (Duration.seconds 4.7)
                        (waveWith { width = 90, color = Color.rgb 0 0.55 1 })
                        |> Collage.shift ( 0, -800 )
                    , animateLoop (Duration.seconds 7)
                        (waveWith { width = 90, color = Color.rgb 0.1 0.5 1 })
                        |> Collage.shift ( 0, 870 )
                    , animateLoop (Duration.seconds 6)
                        (waveWith { width = 90, color = Color.rgb 0.15 0.45 1 })
                        |> Collage.shift ( -90, -900 )
                    , animateLoop (Duration.seconds 6.5)
                        (waveWith { width = 90, color = Color.rgb 0.2 0.5 1 })
                    , animateLoop (Duration.seconds 12)
                        wave
                        |> Collage.shift ( 0, 700 )
                    , animateLoop (Duration.seconds 9.7)
                        wave
                        |> Collage.shift ( -80, -800 )
                    , animateLoop (Duration.seconds 7)
                        wave
                        |> Collage.shift ( 0, 820 )
                    , animateLoop (Duration.seconds 6)
                        wave
                        |> Collage.shift ( 0, -920 )
                    , animateLoop (Duration.seconds 10)
                        wave
                    ]
                    |> (\stack ->
                            animateLoop (Duration.seconds 8)
                                (\progress ->
                                    stack
                                        |> Collage.rotate
                                            (Basics.turns (0.21 + Basics.sin (progress * 0.5) * 0.03))
                                )
                       )
                    |> Collage.shift ( 0, 500 )
                    |> Collage.scaleX 1.2

                --|> (\_ -> Collage.Text.empty |> Collage.rendered)
                , animate { start = Duration.seconds 0, duration = Duration.seconds 6.5 }
                    (withInvertedProgress (withSquaredOutProgress dropletSplashWide))
                    |> Collage.shift ( -200, 0 )
                , animate { start = Duration.seconds 0, duration = Duration.seconds 6.5 }
                    (withInvertedProgress (withSquaredOutProgress dropletSplashWide))
                    |> Collage.shift ( 200, 0 )
                , animate { start = Duration.seconds 6.5, duration = Duration.seconds 7 }
                    (withSquaredInProgress dropletSplashWide)
                    |> Collage.shift ( -200, 0 )
                , animate { start = Duration.seconds 6.5, duration = Duration.seconds 7 }
                    (withSquaredInProgress dropletSplashWide)
                    |> Collage.shift ( 200, 0 )
                , animate { start = Duration.seconds 7, duration = Duration.seconds 11 }
                    dropletSplash
                    |> Collage.shift ( 0, 0 )
                , animate { start = Duration.seconds 7.4, duration = Duration.seconds 13 }
                    dropletSplash
                    |> Collage.shift ( 400, 0 )
                , animate { start = Duration.seconds 13, duration = Duration.seconds 8 }
                    dropletSplash
                    |> Collage.shift ( -400, -130 )
                , animate { start = Duration.seconds 20, duration = Duration.seconds 5 }
                    dropletSplash
                    |> Collage.shift ( 0, 0 )
                , animate { start = Duration.seconds 21, duration = Duration.seconds 5 }
                    dropletSplash
                    |> Collage.shift ( -300, -100 )
                , animate { start = Duration.seconds 22, duration = Duration.seconds 5 }
                    dropletSplash
                    |> Collage.shift ( 300, 100 )
                , animate { start = Duration.seconds 23, duration = Duration.seconds 5 }
                    dropletSplash
                    |> Collage.shift ( 0, 0 )
                , animate { start = Duration.seconds 23, duration = Duration.seconds 7 }
                    (withInvertedProgress dropletSplashWide)
                    |> Collage.shift ( -200, 0 )
                , animate { start = Duration.seconds 23, duration = Duration.seconds 7 }
                    (withInvertedProgress dropletSplashWide)
                    |> Collage.shift ( 200, 0 )
                , animate { start = Duration.seconds 30, duration = Duration.seconds 7 }
                    dropletSplashWide
                    |> Collage.shift ( -200, 0 )
                , animate { start = Duration.seconds 30, duration = Duration.seconds 7 }
                    dropletSplashWide
                    |> Collage.shift ( 200, 0 )
                , animate { start = Duration.seconds 30.2, duration = Duration.seconds 5 }
                    dropletSplash
                    |> Collage.shift ( -250, -200 )
                , animate { start = Duration.seconds 30.5, duration = Duration.seconds 9 }
                    dropletSplash
                    |> Collage.shift ( 200, 250 )
                , Collage.Layout.stack
                    [ animateLoop (Duration.seconds 7)
                        (waveWith { width = 70, color = Color.rgb 0.15 0.5 0.6 })
                    , animateLoop (Duration.seconds 7.6)
                        (withInvertedProgress (waveWith { width = 90, color = Color.rgb 0 0.55 0.6 }))
                        |> Collage.shift ( 0, -310 )
                    , animateLoop (Duration.seconds 9)
                        (waveWith { width = 90, color = Color.rgb 0 0.75 0.6 })
                        |> Collage.shift ( 0, 330 )
                    , animateLoop (Duration.seconds 6.7)
                        (waveWith { width = 90, color = Color.rgb 0.2 0.65 0.6 })
                        |> Collage.shift ( 0, -140 )
                    , animateLoop (Duration.seconds 4.9)
                        (waveWith { width = 90, color = Color.rgb 0.1 0.7 0.6 })
                        |> Collage.shift ( 0, 210 )
                    , animateLoop (Duration.seconds 9.8)
                        (withInvertedProgress (waveWith { width = 90, color = Color.rgb 0 0.55 0.6 }))
                        |> Collage.shift ( 0, 440 )
                    , animateLoop (Duration.seconds 5.5)
                        (waveWith { width = 90, color = Color.rgb 0.15 0.65 0.6 })
                        |> Collage.shift ( 0, -500 )
                    , animateLoop (Duration.seconds 10)
                        (withInvertedProgress (waveWith { width = 90, color = Color.rgb 0 0.55 0.6 }))
                        |> Collage.shift ( 0, 570 )
                    , animateLoop (Duration.seconds 8)
                        (withInvertedProgress (waveWith { width = 90, color = Color.rgb 0 0.55 0.6 }))
                        |> Collage.shift ( 0, -780 )
                    , animateLoop (Duration.seconds 10)
                        (waveWith { width = 90, color = Color.rgb 0 0.7 0.6 })
                        |> Collage.shift ( 0, 750 )
                    , animateLoop (Duration.seconds 4.7)
                        (waveWith { width = 90, color = Color.rgb 0 0.65 0.6 })
                        |> Collage.shift ( 0, -800 )
                    , animateLoop (Duration.seconds 7)
                        (waveWith { width = 90, color = Color.rgb 0.1 0.65 0.6 })
                        |> Collage.shift ( 0, 870 )
                    , animateLoop (Duration.seconds 6)
                        (waveWith { width = 90, color = Color.rgb 0.15 0.6 0.6 })
                        |> Collage.shift ( 0, -900 )
                    , animateLoop (Duration.seconds 6.5)
                        (waveWith { width = 90, color = Color.rgb 0.3 0.6 0.6 })
                    , animateLoop (Duration.seconds 6.5)
                        (waveWith { width = 900, color = Color.rgb 0.4 0.73 0.5 })
                        |> Collage.shift ( 0, -400 )
                    , animateLoop (Duration.seconds 4.5)
                        (waveWith { width = 900, color = Color.rgb 0.3 0.9 0.6 })
                        |> Collage.shift ( 0, 400 )
                    ]
                    |> Collage.shift ( -240, -300 )
                    |> Collage.scaleY 0.2
                    |> Collage.scaleX 2
                , animateLoop (Duration.seconds 7.6)
                    (withInvertedProgress (waveWith { color = Color.rgb 0.35 0.45 1, width = 460 }))
                    |> Collage.shift ( -40, -800 )
                , animateLoop (Duration.seconds 7.6)
                    (withInvertedProgress (waveWith { color = Color.rgb 0.3 0.5 1, width = 400 }))
                    |> Collage.shift ( 0, -300 )
                , animateLoop (Duration.seconds 12.8)
                    (withInvertedProgress (waveWith { color = Color.rgb 0.1 0.4 1, width = 400 }))
                    |> Collage.shift ( -20, 50 )
                , Collage.rectangle state.windowSize.width state.windowSize.height
                    |> Collage.filled (Collage.uniform (Color.rgb 0.2 0.4 0.9))
                ]
            )


blossomUiWith color =
    \blossom ->
        [ Collage.ellipse 1.7 0.75
            |> Collage.filled (Collage.uniform color)
        , Collage.ellipse 0.75 1.7
            |> Collage.filled (Collage.uniform color)
        ]
            |> Collage.Layout.stack


withAlpha : Float -> Color -> Color
withAlpha newAlpha =
    \color ->
        let
            oldRgba =
                color |> Color.toRgba
        in
        Color.fromRgba { oldRgba | alpha = newAlpha }


backgroundColor : Color
backgroundColor =
    Color.rgb 0.03 0.05 0.09


backgroundUi : Svg event_
backgroundUi =
    Svg.rect
        [ SvgA.width (Svg.percent 100)
        , SvgA.height (Svg.percent 100)
        , SvgA.fill (Svg.Reference "url(#background)")
        ]
        []


audio : AudioData -> State -> Audio.Audio
audio audioData =
    \state ->
        audioWith state.audio.music
            (\music ->
                music
                    |> audioLoop
                        { initialTime = state.initialTime
                        , lastTick = state.lastTick
                        , audioData = audioData
                        }
            )
            :: (audioKinds
                    |> List.map
                        (\audioKind ->
                            audioWith (state.audio |> accessAudioOfKind audioKind)
                                (\loadedAudio ->
                                    state.audioTimes
                                        |> accessAudioOfKind audioKind
                                        |> List.map
                                            (\time -> Audio.audio loadedAudio (Duration.addTo time (Duration.seconds 0.07)))
                                        |> Audio.group
                                )
                        )
               )
            |> Audio.group


audioLoop { audioData, initialTime, lastTick } =
    \audio_ ->
        let
            audioLength =
                audio_ |> Audio.length audioData

            startTime =
                Duration.addTo
                    initialTime
                    (audioLength |> Quantity.multiplyBy (alreadyCompletedLoops |> toFloat))

            alreadyCompletedLoops =
                (Duration.from initialTime lastTick
                    |> Duration.inMilliseconds
                    |> floor
                )
                    // (audioLength |> Duration.inMilliseconds |> floor)
        in
        Audio.audio audio_ startTime


audioWith : Result error value -> (value -> Audio.Audio) -> Audio.Audio
audioWith source with =
    case source of
        Err _ ->
            Audio.silence

        Ok loadedAudio ->
            with loadedAudio



-- helpers


uiToColor : Ui.Color -> Color
uiToColor =
    \uiColor ->
        Color.fromRgba (uiColor |> Ui.toRgb)


colorToUi : Color -> Ui.Color
colorToUi =
    \color ->
        Ui.fromRgb (color |> Color.toRgba)


onJust : Maybe a -> Maybe a -> Maybe a
onJust ifNothing =
    \maybe ->
        case maybe of
            Nothing ->
                ifNothing

            Just exists ->
                Just exists


consJust : Maybe a -> List a -> List a
consJust maybeHead list =
    case maybeHead of
        Nothing ->
            list

        Just head ->
            head :: list


dictUnionBy : (a -> a -> a) -> Dict comparableKey a -> Dict comparableKey a -> Dict comparableKey a
dictUnionBy combineAB aDict bDict =
    Dict.merge
        (\k a soFar -> soFar |> Dict.insert k a)
        (\k a b soFar -> soFar |> Dict.insert k (combineAB a b))
        (\k b soFar -> soFar |> Dict.insert k b)
        aDict
        bDict
        Dict.empty
