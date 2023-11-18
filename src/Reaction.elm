module Reaction exposing
    ( Reaction
    , to
    , effectsAdd
    , map, effectMap
    , effects, state
    , toTuple2, toTuple3
    , EffectInterpretation
    , commands, audioCommands
    , effectInterpretationMap
    )

{-|

@docs Reaction


## create

@docs to


## alter

@docs effectsAdd
@docs map, effectMap


## scan

@docs effects, state


## transform

@docs toTuple2, toTuple3


### effect interpretation

@docs EffectInterpretation
@docs commands, audioCommands
@docs effectInterpretationMap

-}

import Audio exposing (AudioCmd)


{-| application update result
-}
type alias Reaction state effect =
    { state : state
    , effects : List effect
    }


{-| The updated state
-}
state : Reaction state effect_ -> state
state =
    .state


{-| All effects caused
-}
effects : Reaction state_ effect -> List effect
effects =
    .effects


to : state -> Reaction state effect_
to stateAltered =
    { state = stateAltered
    , effects = []
    }


map :
    (state -> stateMapped)
    ->
        (Reaction state effect
         -> Reaction stateMapped effect
        )
map stateMap =
    \step ->
        to (step |> state |> stateMap)
            |> effectsAdd (step |> effects)


effectMap :
    (effect -> effectMapped)
    ->
        (Reaction state effect
         -> Reaction state effectMapped
        )
effectMap effectChange =
    \reaction ->
        { state = reaction |> state
        , effects = reaction |> effects |> List.map effectChange
        }


effectsAdd :
    List effect
    -> (Reaction state effect -> Reaction state effect)
effectsAdd effectsAdditional =
    \reaction ->
        { state = reaction |> state
        , effects =
            (reaction |> effects) ++ effectsAdditional
        }


{-| Last step before giving your init/update functions to the audio app:
3-tuple from

  - [`state`](#state)
  - [`effects`](#effects) as first `Cmd`s, then `AudioCmd`s

-}
toTuple3 :
    (effect -> EffectInterpretation event)
    ->
        (Reaction state effect
         ->
            ( state
            , Cmd event
            , AudioCmd event
            )
        )
toTuple3 interpretEffect =
    \step ->
        let
            commandsList : List (EffectInterpretation event)
            commandsList =
                step |> effects |> List.map interpretEffect
        in
        ( step |> state
        , commandsList |> List.concatMap .commands |> Cmd.batch
        , commandsList |> List.concatMap .audioCommands |> Audio.cmdBatch
        )


{-| Last step before giving your init/update functions to the app:
2-tuple from

  - [`state`](#state)
  - [`effects`](#effects) as `Cmd`s batched

-}
toTuple2 :
    (effect -> List (Cmd event))
    ->
        (Reaction state effect
         ->
            ( state
            , Cmd event
            )
        )
toTuple2 interpretEffect =
    \step ->
        ( step |> state
        , step
            |> effects
            |> List.concatMap interpretEffect
            |> Cmd.batch
        )


{-| Interpretation of an effect as `Cmd`s and `AudioCmd`s.
-}
type alias EffectInterpretation event =
    { commands : List (Cmd event)
    , audioCommands : List (AudioCmd event)
    }


commands : List (Cmd event) -> EffectInterpretation event
commands commandList =
    { commands = commandList, audioCommands = [] }


audioCommands : List (AudioCmd event) -> EffectInterpretation event
audioCommands audioCommandList =
    { commands = [], audioCommands = audioCommandList }


effectInterpretationMap :
    (event -> eventMapped)
    -> (EffectInterpretation event -> EffectInterpretation eventMapped)
effectInterpretationMap eventChange =
    \effectInterpretation ->
        { commands = effectInterpretation.commands |> List.map (Cmd.map eventChange)
        , audioCommands = effectInterpretation.audioCommands |> List.map (Audio.cmdMap eventChange)
        }
