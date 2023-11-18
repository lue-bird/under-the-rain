(function (scope) {
    "use strict";
    function $$Record1(dU, bx, aO) {
        this.dU = dU;
        this.bx =
            bx;
        this.aO = aO;
    }
    $$Record1.prototype.$c = function () {
        return new $$Record1(this.dU, this.bx, this.aO);
    };
    function $$Record2(ak) {
        this.ak = ak;
    }
    $$Record2.prototype.$c = function () {
        return new $$Record2(this.ak);
    };
    function $$Record3(a7, bE, a9, bf, aV, ch, bO, cr) {
        this.a7 = a7;
        this.bE = bE;
        this.a9 = a9;
        this.bf = bf;
        this.aV = aV;
        this.ch = ch;
        this.bO = bO;
        this.cr
            = cr;
    }
    $$Record3.prototype.$c = function () {
        return new $$Record3(this.
            a7, this.bE, this.a9, this.bf, this.aV, this.ch, this.bO, this.cr);
    };
    function $$Record4(bm, bD, M, bc, bd, ak, aW) {
        this.
            bm = bm;
        this.bD = bD;
        this.M = M;
        this.bc = bc;
        this.bd = bd;
        this.ak = ak;
        this.aW = aW;
    }
    $$Record4.prototype.$c = function () {
        return new $$Record4(this.bm, this.
            bD, this.M, this.bc, this.bd, this.ak, this.aW);
    };
    function $$Record5(bd) {
        this.bd = bd;
    }
    $$Record5.prototype.$c = function () {
        return new $$Record5(this.bd);
    };
    function $$Record6(bk, cE) {
        this.bk = bk;
        this.cE = cE;
    }
    $$Record6.prototype.$c = function () {
        return new $$Record6(this.bk, this.cE);
    };
    function $$Record7(a2, cb, bA) {
        this.
            a2 = a2;
        this.cb = cb;
        this.bA = bA;
    }
    $$Record7.prototype.$c =
        function () {
            return new $$Record7(this.a2, this.cb, this.bA);
        };
    function $$Record8(bk, cs, bx, b8, aO, eV, bQ) {
        this
            .bk = bk;
        this.cs = cs;
        this.bx
            = bx;
        this.b8 = b8;
        this.aO = aO;
        this.eV = eV;
        this.bQ = bQ;
    }
    $$Record8.prototype.$c = function () {
        return new $$Record8(this.bk, this.cs, this.bx, this.b8, this.aO, this.eV, this
            .bQ);
    };
    function $$Record9(dX, c4, d3, c6, eo, dH) {
        this.dX = dX;
        this.c4 = c4;
        this
            .d3 = d3;
        this.c6 = c6;
        this.eo = eo;
        this.dH = dH;
    }
    $$Record9.prototype.$c = function () {
        return new $$Record9(this.dX, this.c4, this.d3, this.c6, this.eo, this.dH);
    };
    function $$Record10(bn, gu, gY, g9, e$, e2, bJ) {
        this.bn =
            bn;
        this.gu = gu;
        this.gY
            = gY;
        this.g9 = g9;
        this.e$ = e$;
        this
            .e2 = e2;
        this.bJ = bJ;
    }
    $$Record10
        .prototype.$c = function () {
        return new $$Record10(this.bn, this.gu, this.gY, this.g9, this.e$, this.e2, this.bJ);
    };
    function $$Record11(bk, fK, gD, hC, h$, h1) {
        this.bk = bk;
        this.fK = fK;
        this.gD = gD;
        this.hC = hC;
        this.h$ = h$;
        this.h1 = h1;
    }
    $$Record11.prototype.$c = function () {
        return new $$Record11(this.bk, this.fK, this.gD, this.hC, this.h$, this.h1);
    };
    function $$update__M__ak(obj, M, ak) {
        var $r = obj.$c();
        $r.M = M;
        $r.
            ak = ak;
        return $r;
    }
    function $$update__M(obj, M) {
        var $r = obj.$c();
        $r.M = M;
        return $r;
    }
    function $$update__bk(obj, bk) {
        var $r = obj.$c();
        $r.bk = bk;
        return $r;
    }
    function $$update__a2(obj, a2) {
        var $r = obj.$c();
        $r
            .a2 = a2;
        return $r;
    }
    function $$update__b8(obj, b8) {
        var $r = obj.$c();
        $r.b8 = b8;
        return $r;
    }
    function $$update__bJ(obj, bJ) {
        var $r = obj.
            $c();
        $r.bJ = bJ;
        return $r;
    }
    function $$update__bn(obj, bn) {
        var $r = obj.$c();
        $r.bn = bn;
        return $r;
    }
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    function F2(fun) {
        var curried = function (a) {
            return function (b) {
                return fun(a, b);
            };
        };
        curried.a2 = fun;
        return curried;
    }
    function F3(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return fun(a, b, c);
                };
            };
        };
        curried.a3 =
            fun;
        return curried;
    }
    function F4(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return fun(a, b, c, d);
                    };
                };
            };
        };
        curried.a4 = fun;
        return curried;
    }
    function F5(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return fun(a, b, c, d, e);
                        };
                    };
                };
            };
        };
        curried.a5 = fun;
        return curried;
    }
    function F6(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        };
        curried.a6 = fun;
        return curried;
    }
    function F7(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) { return fun(a, b, c, d, e, f, g); };
                            };
                        };
                    };
                };
            };
        };
        curried.
            a7 = fun;
        return curried;
    }
    function F8(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        curried.a8 = fun;
        return curried;
    }
    function F9(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return function (i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        curried
            .a9 = fun;
        return curried;
    }
    function A2(fun, a, b) {
        return fun.a2 ? fun.a2(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.a3 ? fun.a3(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.a4 ? fun.a4(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a5 ? fun.a5(a, b, c, d, e)
            : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a6 ? fun.a6(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a7 ? fun.a7(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a8 ? fun.a8(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a9 ? fun.a9(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
    function _Utils_eq(x, y) {
        for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) { }
        return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) {
            return true;
        }
        if (typeof x !== "object" || x === null || y === null) {
            typeof x === "function" && _Debug_crash(5);
            return false;
        }
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true;
        }
        if (x.$ < 0) {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        for (var key in x) {
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
                return false;
            }
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual_fn = function (a, b) { return !_Utils_eq(a, b); }, _Utils_notEqual = F2(_Utils_notEqual_fn);
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") {
            return x === y ? 0 : x < y ? -1 : 1;
        }
        if (typeof x.$ === "undefined") {
            return (ord = _Utils_cmp(x.a, y.a))
                ? ord
                : (ord = _Utils_cmp(x.b, y.b))
                    ? ord
                    : _Utils_cmp(x.c, y.c);
        }
        for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) { }
        return ord || (x.b ? 1 : y.b ? -1 : 0);
    }
    var _Utils_lt_fn = function (a, b) { return _Utils_cmp(a, b) < 0; }, _Utils_lt = F2(_Utils_lt_fn);
    var _Utils_le_fn = function (a, b) { return _Utils_cmp(a, b) < 1; }, _Utils_le = F2(_Utils_le_fn);
    var _Utils_gt_fn = function (a, b) { return _Utils_cmp(a, b) > 0; }, _Utils_gt = F2(_Utils_gt_fn);
    var _Utils_ge_fn = function (a, b) { return _Utils_cmp(a, b) >= 0; }, _Utils_ge = F2(_Utils_ge_fn);
    var _Utils_compare_fn = function (x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    }, _Utils_compare = F2(_Utils_compare_fn);
    var _Utils_Tuple0 = 0;
    var _Utils_Tuple0_UNUSED = { $: "#0" };
    function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
    function _Utils_Tuple2_UNUSED(a, b) { return { $: "#2", a: a, b: b }; }
    function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
    function _Utils_Tuple3_UNUSED(a, b, c) { return { $: "#3", a: a, b: b, c: c }; }
    function _Utils_chr(c) { return c; }
    function _Utils_chr_UNUSED(c) { return new String(c); }
    function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for (var key in oldRecord) {
            newRecord[key] = oldRecord[key];
        }
        for (var key in updatedFields) {
            newRecord[key] = updatedFields[key];
        }
        return newRecord;
    }
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        if (typeof xs === "string") {
            return xs + ys;
        }
        if (!xs.b) {
            return ys;
        }
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for (var curr = root; xs.b; xs = xs.b) {
            curr = curr.b = _List_Cons(xs.a, ys);
        }
        return root;
    }
    var _List_Nil = { $: 0, a: null, b: null };
    var _List_Nil_UNUSED = { $: "[]" };
    function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
    function _List_Cons_UNUSED(hd, tl) { return { $: "::", a: hd, b: tl }; }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for (var i = arr.length; i--;) {
            out = _List_Cons(arr[i], out);
        }
        return out;
    }
    function _List_toArray(xs) {
        for (var out = []; xs.b; xs = xs.b) {
            out.push(xs.a);
        }
        return out;
    }
    var _List_map2_fn = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
            arr.push(A2(f, xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2_fn_unwrapped = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
            arr.push(f(xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2 = F3(_List_map2_fn);
    var _List_map3_fn = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A3(f, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3_fn_unwrapped = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3 = F4(_List_map3_fn);
    var _List_map4_fn = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4_fn_unwrapped = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4 = F5(_List_map4_fn);
    var _List_map5_fn = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5_fn_unwrapped = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5 = F6(_List_map5_fn);
    var _List_sortBy_fn = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            return _Utils_cmp(f(a), f(b));
        }));
    }, _List_sortBy = F2(_List_sortBy_fn);
    var _List_sortWith_fn = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith_fn_unwrapped = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = f(a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith = F2(_List_sortWith_fn);
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [value];
    }
    function _JsArray_length(array) {
        return array.length;
    }
    var _JsArray_initialize_fn = function (size, offset, func) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
            result[i] = func(offset + i);
        }
        return result;
    }, _JsArray_initialize = F3(_JsArray_initialize_fn);
    var _JsArray_initializeFromList_fn = function (max, ls) {
        var result = new Array(max);
        for (var i = 0; i < max && ls.b; i++) {
            result[i] = ls.a;
            ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
    }, _JsArray_initializeFromList = F2(_JsArray_initializeFromList_fn);
    var _JsArray_unsafeGet_fn = function (index, array) {
        return array[index];
    }, _JsArray_unsafeGet = F2(_JsArray_unsafeGet_fn);
    var _JsArray_unsafeSet_fn = function (index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[index] = value;
        return result;
    }, _JsArray_unsafeSet = F3(_JsArray_unsafeSet_fn);
    var _JsArray_push_fn = function (value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[length] = value;
        return result;
    }, _JsArray_push = F2(_JsArray_push_fn);
    var _JsArray_foldl_fn = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldl_fn_unwrapped = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = func(array[i], acc);
        }
        return acc;
    }, _JsArray_foldl = F3(_JsArray_foldl_fn);
    var _JsArray_foldr_fn = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldr_fn_unwrapped = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = func(array[i], acc);
        }
        return acc;
    }, _JsArray_foldr = F3(_JsArray_foldr_fn);
    var _JsArray_map_fn = function (func, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(array[i]);
        }
        return result;
    }, _JsArray_map = F2(_JsArray_map_fn);
    var _JsArray_indexedMap_fn = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = A2(func, offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap_fn_unwrapped = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap = F3(_JsArray_indexedMap_fn);
    var _JsArray_slice_fn = function (from, to, array) {
        return array.slice(from, to);
    }, _JsArray_slice = F3(_JsArray_slice_fn);
    var _JsArray_appendN_fn = function (n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) {
            itemsToCopy = source.length;
        }
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for (var i = 0; i < destLen; i++) {
            result[i] = dest[i];
        }
        for (var i = 0; i < itemsToCopy; i++) {
            result[i + destLen] = source[i];
        }
        return result;
    }, _JsArray_appendN = F3(_JsArray_appendN_fn);
    var _Debug_log_fn = function (tag, value) {
        return value;
    }, _Debug_log = F2(_Debug_log_fn);
    var _Debug_log_UNUSED_fn = function (tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
    }, _Debug_log_UNUSED = F2(_Debug_log_UNUSED_fn);
    function _Debug_todo(moduleName, region) {
        return function (message) {
            _Debug_crash(8, moduleName, region, message);
        };
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function (message) {
            _Debug_crash(9, moduleName, region, value, message);
        };
    }
    function _Debug_toString(value) {
        return "<internals>";
    }
    function _Debug_toString_UNUSED(value) {
        return _Debug_toAnsiString(false, value);
    }
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") {
            return _Debug_internalColor(ansi, "<function>");
        }
        if (typeof value === "boolean") {
            return _Debug_ctorColor(ansi, value ? "True" : "False");
        }
        if (typeof value === "number") {
            return _Debug_numberColor(ansi, value + "");
        }
        if (value instanceof String) {
            return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        }
        if (typeof value === "string") {
            return _Debug_stringColor(ansi, "\"" + _Debug_addSlashes(value, false) + "\"");
        }
        if (typeof value === "object" && "$" in value) {
            var tag = value.$;
            if (typeof tag === "number") {
                return _Debug_internalColor(ansi, "<internals>");
            }
            if (tag[0] === "#") {
                var output = [];
                for (var k in value) {
                    if (k === "$")
                        continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]));
                }
                return "(" + output.join(",") + ")";
            }
            if (tag === "Set_elm_builtin") {
                return _Debug_ctorColor(ansi, "Set")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            }
            if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
                return _Debug_ctorColor(ansi, "Dict")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            }
            if (tag === "Array_elm_builtin") {
                return _Debug_ctorColor(ansi, "Array")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            }
            if (tag === "::" || tag === "[]") {
                var output = "[";
                value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
                for (; value.b; value = value.b) {
                    output += "," + _Debug_toAnsiString(ansi, value.a);
                }
                return output + "]";
            }
            var output = "";
            for (var i in value) {
                if (i === "$")
                    continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === "\"" || str.indexOf(" ") < 0;
                output += " " + (parenless ? str : "(" + str + ")");
            }
            return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) {
            return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        }
        if (typeof File !== "undefined" && value instanceof File) {
            return _Debug_internalColor(ansi, "<" + value.name + ">");
        }
        if (typeof value === "object") {
            var output = [];
            for (var key in value) {
                var field = key[0] === "_" ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) {
                return "{}";
            }
            return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str
            .replace(/\\/g, "\\\\")
            .replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t")
            .replace(/\r/g, "\\r")
            .replace(/\v/g, "\\v")
            .replace(/\0/g, "\\0");
        if (isChar) {
            return s.replace(/\'/g, "\\'");
        }
        else {
            return s.replace(/\"/g, "\\\"");
        }
    }
    function _Debug_ctorColor(ansi, string) {
        return ansi ? "\u001B[96m" + string + "\u001B[0m" : string;
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? "\u001B[95m" + string + "\u001B[0m" : string;
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? "\u001B[93m" + string + "\u001B[0m" : string;
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? "\u001B[92m" + string + "\u001B[0m" : string;
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? "\u001B[37m" + string + "\u001B[0m" : string;
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? "\u001B[36m" + string + "\u001B[0m" : string;
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    }
    function _Debug_crash(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
    }
    function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4) {
        switch (identifier) {
            case 0:
                throw new Error("What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById(\"elm-node\")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.");
            case 1:
                throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
            case 2:
                var jsonErrorString = fact1;
                throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
            case 3:
                var portName = fact1;
                throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
            case 4:
                var portName = fact1;
                var problem = fact2;
                throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
            case 5:
                throw new Error("Trying to use `(==)` on functions.\nThere is no way to know if functions are \"the same\" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.");
            case 6:
                var moduleName = fact1;
                throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
            case 8:
                var moduleName = fact1;
                var region = fact2;
                var message = fact3;
                throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
            case 9:
                var moduleName = fact1;
                var region = fact2;
                var value = fact3;
                var message = fact4;
                throw new Error("TODO in module `" + moduleName + "` from the `case` expression "
                    + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    "
                    + _Debug_toString(value).replace("\n", "\n    ")
                    + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
            case 10:
                throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
            case 11:
                throw new Error("Cannot perform mod 0. Division by zero error.");
        }
    }
    function _Debug_regionToString(region) {
        if (region.B.cc === region.d8.cc) {
            return "on line " + region.B.cc;
        }
        return "on lines " + region.B.cc + " through " + region.d8.cc;
    }
    var _Basics_add_fn = function (a, b) { return a + b; }, _Basics_add = F2(_Basics_add_fn);
    var _Basics_sub_fn = function (a, b) { return a - b; }, _Basics_sub = F2(_Basics_sub_fn);
    var _Basics_mul_fn = function (a, b) { return a * b; }, _Basics_mul = F2(_Basics_mul_fn);
    var _Basics_fdiv_fn = function (a, b) { return a / b; }, _Basics_fdiv = F2(_Basics_fdiv_fn);
    var _Basics_idiv_fn = function (a, b) { return (a / b) | 0; }, _Basics_idiv = F2(_Basics_idiv_fn);
    var _Basics_pow_fn = Math.pow, _Basics_pow = F2(_Basics_pow_fn);
    var _Basics_remainderBy_fn = function (b, a) { return a % b; }, _Basics_remainderBy = F2(_Basics_remainderBy_fn);
    var _Basics_modBy_fn = function (modulus, x) {
        var answer = x % modulus;
        return modulus === 0
            ? _Debug_crash(11)
            :
                ((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
                    ? answer + modulus
                    : answer;
    }, _Basics_modBy = F2(_Basics_modBy_fn);
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2_fn = Math.atan2, _Basics_atan2 = F2(_Basics_atan2_fn);
    function _Basics_toFloat(x) { return x; }
    function _Basics_truncate(n) { return n | 0; }
    function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    function _Basics_not(bool) { return !bool; }
    var _Basics_and_fn = function (a, b) { return a && b; }, _Basics_and = F2(_Basics_and_fn);
    var _Basics_or_fn = function (a, b) { return a || b; }, _Basics_or = F2(_Basics_or_fn);
    var _Basics_xor_fn = function (a, b) { return a !== b; }, _Basics_xor = F2(_Basics_xor_fn);
    var _String_cons_fn = function (chr, str) {
        return chr + str;
    }, _String_cons = F2(_String_cons_fn);
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word)
            ? $elm$core$Maybe$Just(55296 <= word && word <= 56319
                ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
                : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1)))
            : $elm$core$Maybe$Nothing;
    }
    var _String_append_fn = function (a, b) {
        return a + b;
    }, _String_append = F2(_String_append_fn);
    function _String_length(str) {
        return str.length;
    }
    var _String_map_fn = function (func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while (i < len) {
            var word = string.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
        }
        return array.join("");
    }, _String_map = F2(_String_map_fn);
    var _String_filter_fn = function (isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while (i < len) {
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += str[i];
                i++;
            }
            if (isGood(_Utils_chr(char))) {
                arr.push(char);
            }
        }
        return arr.join("");
    }, _String_filter = F2(_String_filter_fn);
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while (i < len) {
            var word = str.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++;
            }
            else {
                arr[len - i] = str[i];
                i++;
            }
        }
        return arr.join("");
    }
    var _String_foldl_fn = function (func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldl_fn_unwrapped = function (func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = func(_Utils_chr(char), state);
        }
        return state;
    }, _String_foldl = F3(_String_foldl_fn);
    var _String_foldr_fn = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldr_fn_unwrapped = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = func(_Utils_chr(char), state);
        }
        return state;
    }, _String_foldr = F3(_String_foldr_fn);
    var _String_split_fn = function (sep, str) {
        return str.split(sep);
    }, _String_split = F2(_String_split_fn);
    var _String_join_fn = function (sep, strs) {
        return strs.join(sep);
    }, _String_join = F2(_String_join_fn);
    var _String_slice_fn = function (start, end, str) {
        return str.slice(start, end);
    }, _String_slice = F3(_String_slice_fn);
    function _String_trim(str) {
        return str.trim();
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str) {
        return str.toUpperCase();
    }
    function _String_toLower(str) {
        return str.toLowerCase();
    }
    var _String_any_fn = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) {
                return true;
            }
        }
        return false;
    }, _String_any = F2(_String_any_fn);
    var _String_all_fn = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) {
                return false;
            }
        }
        return true;
    }, _String_all = F2(_String_all_fn);
    var _String_contains_fn = function (sub, str) {
        return str.indexOf(sub) > -1;
    }, _String_contains = F2(_String_contains_fn);
    var _String_startsWith_fn = function (sub, str) {
        return str.indexOf(sub) === 0;
    }, _String_startsWith = F2(_String_startsWith_fn);
    var _String_endsWith_fn = function (sub, str) {
        return str.length >= sub.length &&
            str.lastIndexOf(sub) === str.length - sub.length;
    }, _String_endsWith = F2(_String_endsWith_fn);
    var _String_indexes_fn = function (sub, str) {
        var subLen = sub.length;
        if (subLen < 1) {
            return _List_Nil;
        }
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
            is.push(i);
            i = i + subLen;
        }
        return _List_fromArray(is);
    }, _String_indexes = F2(_String_indexes_fn);
    function _String_fromNumber(number) {
        return number + "";
    }
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 || code0 == 45 ? 1 : 0;
        for (var i = start; i < str.length; ++i) {
            var code = str.charCodeAt(i);
            if (code < 48 || 57 < code) {
                return $elm$core$Maybe$Nothing;
            }
            total = 10 * total + code - 48;
        }
        return i == start
            ? $elm$core$Maybe$Nothing
            : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
    }
    function _String_toFloat(s) {
        if (s.length === 0 || /[\sxbo]/.test(s)) {
            return $elm$core$Maybe$Nothing;
        }
        var n = +s;
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
    }
    function _String_fromList(chars) {
        return _List_toArray(chars).join("");
    }
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
            return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        }
        return code;
    }
    function _Char_fromCode(code) {
        return _Utils_chr((code < 0 || 1114111 < code)
            ? "\uFFFD"
            :
                (code <= 65535)
                    ? String.fromCharCode(code)
                    :
                        (code -= 65536,
                            String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
    }
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        };
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        };
    }
    function _Json_decodePrim(decoder) {
        return { $: 2, b: decoder };
    }
    var _Json_decodeInt = _Json_decodePrim(function (value) {
        return (typeof value !== "number")
            ? _Json_expecting("an INT", value)
            :
                (-2147483647 < value && value < 2147483647 && (value | 0) === value)
                    ? $elm$core$Result$Ok(value)
                    :
                        (isFinite(value) && !(value % 1))
                            ? $elm$core$Result$Ok(value)
                            : _Json_expecting("an INT", value);
    });
    var _Json_decodeBool = _Json_decodePrim(function (value) {
        return (typeof value === "boolean")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a BOOL", value);
    });
    var _Json_decodeFloat = _Json_decodePrim(function (value) {
        return (typeof value === "number")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a FLOAT", value);
    });
    var _Json_decodeValue = _Json_decodePrim(function (value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
    });
    var _Json_decodeString = _Json_decodePrim(function (value) {
        return (typeof value === "string")
            ? $elm$core$Result$Ok(value)
            : (value instanceof String)
                ? $elm$core$Result$Ok(value + "")
                : _Json_expecting("a STRING", value);
    });
    function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
    function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }
    function _Json_decodeNull(value) { return { $: 5, c: value }; }
    var _Json_decodeField_fn = function (field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        };
    }, _Json_decodeField = F2(_Json_decodeField_fn);
    var _Json_decodeIndex_fn = function (index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        };
    }, _Json_decodeIndex = F2(_Json_decodeIndex_fn);
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        };
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        };
    }
    var _Json_andThen_fn = function (callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        };
    }, _Json_andThen = F2(_Json_andThen_fn);
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        };
    }
    var _Json_map1_fn = function (f, d1) {
        return _Json_mapMany(f, [d1]);
    }, _Json_map1 = F2(_Json_map1_fn);
    var _Json_map2_fn = function (f, d1, d2) {
        return _Json_mapMany(f, [d1, d2]);
    }, _Json_map2 = F3(_Json_map2_fn);
    var _Json_map3_fn = function (f, d1, d2, d3) {
        return _Json_mapMany(f, [d1, d2, d3]);
    }, _Json_map3 = F4(_Json_map3_fn);
    var _Json_map4_fn = function (f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [d1, d2, d3, d4]);
    }, _Json_map4 = F5(_Json_map4_fn);
    var _Json_map5_fn = function (f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
    }, _Json_map5 = F6(_Json_map5_fn);
    var _Json_map6_fn = function (f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
    }, _Json_map6 = F7(_Json_map6_fn);
    var _Json_map7_fn = function (f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
    }, _Json_map7 = F8(_Json_map7_fn);
    var _Json_map8_fn = function (f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
    }, _Json_map8 = F9(_Json_map8_fn);
    var _Json_runOnString_fn = function (decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
        }
        catch (e) {
            return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn("This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
    }, _Json_runOnString = F2(_Json_runOnString_fn);
    var _Json_run_fn = function (decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
    }, _Json_run = F2(_Json_run_fn);
    function _Json_runHelp(decoder, value) {
        switch (decoder.$) {
            case 2:
                return decoder.b(value);
            case 5:
                return (value === null)
                    ? $elm$core$Result$Ok(decoder.c)
                    : _Json_expecting("null", value);
            case 3:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("a LIST", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
                var field = decoder.d;
                if (typeof value !== "object" || value === null || !(field in value)) {
                    return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
                }
                var result = _Json_runHelp(decoder.b, value[field]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Field_fn(field, result.a));
            case 7:
                var index = decoder.e;
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                if (index >= value.length) {
                    return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
                }
                var result = _Json_runHelp(decoder.b, value[index]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Index_fn(index, result.a));
            case 8:
                if (typeof value !== "object" || value === null || _Json_isArray(value)) {
                    return _Json_expecting("an OBJECT", value);
                }
                var keyValuePairs = _List_Nil;
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var result = _Json_runHelp(decoder.b, value[key]);
                        if (!$elm$core$Result$isOk(result)) {
                            return $elm$core$Result$Err($elm$json$Json$Decode$Field_fn(key, result.a));
                        }
                        keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                    }
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
                var answer = decoder.f;
                var decoders = decoder.g;
                for (var i = 0; i < decoders.length; i++) {
                    var result = _Json_runHelp(decoders[i], value);
                    if (!$elm$core$Result$isOk(result)) {
                        return result;
                    }
                    answer = answer(result.a);
                }
                return $elm$core$Result$Ok(answer);
            case 10:
                var result = _Json_runHelp(decoder.b, value);
                return (!$elm$core$Result$isOk(result))
                    ? result
                    : _Json_runHelp(decoder.h(result.a), value);
            case 11:
                var errors = _List_Nil;
                for (var temp = decoder.g; temp.b; temp = temp.b) {
                    var result = _Json_runHelp(temp.a, value);
                    if ($elm$core$Result$isOk(result)) {
                        return result;
                    }
                    errors = _List_Cons(result.a, errors);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
                return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn(decoder.a, _Json_wrap(value)));
            case 0:
                return $elm$core$Result$Ok(decoder.a);
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for (var i = 0; i < len; i++) {
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) {
                return $elm$core$Result$Err($elm$json$Json$Decode$Index_fn(i, result.a));
            }
            array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
    }
    function _Json_isArray(value) {
        return Array.isArray(value) || (typeof FileList !== "undefined" && value instanceof FileList);
    }
    function _Json_toElmArray(array) {
        return $elm$core$Array$initialize_fn(array.length, function (i) { return array[i]; });
    }
    function _Json_expecting(type, value) {
        return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn("Expecting " + type, _Json_wrap(value)));
    }
    function _Json_equality(x, y) {
        if (x === y) {
            return true;
        }
        if (x.$ !== y.$) {
            return false;
        }
        switch (x.$) {
            case 0:
            case 1:
                return x.a === y.a;
            case 2:
                return x.b === y.b;
            case 5:
                return x.c === y.c;
            case 3:
            case 4:
            case 8:
                return _Json_equality(x.b, y.b);
            case 6:
                return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
                return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
                return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
                return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
                return _Json_listEquality(x.g, y.g);
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) {
            return false;
        }
        for (var i = 0; i < len; i++) {
            if (!_Json_equality(aDecoders[i], bDecoders[i])) {
                return false;
            }
        }
        return true;
    }
    var _Json_encode_fn = function (indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
    }, _Json_encode = F2(_Json_encode_fn);
    function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
    function _Json_unwrap_UNUSED(value) { return value.a; }
    function _Json_wrap(value) { return value; }
    function _Json_unwrap(value) { return value; }
    function _Json_emptyArray() { return []; }
    function _Json_emptyObject() { return {}; }
    var _Json_addField_fn = function (key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    }, _Json_addField = F3(_Json_addField_fn);
    function _Json_addEntry(func) {
        return F2(function (entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        };
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        };
    }
    var _Scheduler_andThen_fn = function (callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        };
    }, _Scheduler_andThen = F2(_Scheduler_andThen_fn);
    var _Scheduler_onError_fn = function (callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        };
    }, _Scheduler_onError = F2(_Scheduler_onError_fn);
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        };
    }
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
    }
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send_fn = function (proc, msg) {
        return _Scheduler_binding(function (callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Scheduler_send = F2(_Scheduler_send_fn);
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function (callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) {
                task.c();
            }
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) {
            return;
        }
        _Scheduler_working = true;
        while (proc = _Scheduler_queue.shift()) {
            _Scheduler_step(proc);
        }
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
        while (proc.f) {
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
                while (proc.g && proc.g.$ !== rootTag) {
                    proc.g = proc.g.i;
                }
                if (!proc.g) {
                    return;
                }
                proc.f = proc.g.b(proc.f.a);
                proc.g = proc.g.i;
            }
            else if (rootTag === 2) {
                proc.f.c = proc.f.b(function (newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc);
                });
                return;
            }
            else if (rootTag === 5) {
                if (proc.h.length === 0) {
                    return;
                }
                proc.f = proc.f.b(proc.h.shift());
            }
            else {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d;
            }
        }
    }
    function _Process_sleep(time) {
        return _Scheduler_binding(function (callback) {
            var id = setTimeout(function () {
                callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function () { clearTimeout(id); };
        });
    }
    var _Platform_worker_fn = function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.gD, impl.h$, impl.hC, function () { return function () { }; });
    }, _Platform_worker = F4(_Platform_worker_fn);
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = _Json_run_fn(flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2);
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            var pair = A2(update, msg, model);
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? { ports: ports } : {};
    }
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
    }
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        for (var key in _Platform_effectManagers) {
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {};
                ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
        };
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return _Scheduler_andThen_fn(loop, _Scheduler_receive(function (msg) {
                var value = msg.a;
                if (msg.$ === 0) {
                    return A3(onSelfMsg, router, value, state);
                }
                return cmdMap && subMap
                    ? A4(onEffects, router, value.i, value.j, state)
                    : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
        }
        return router.h = _Scheduler_rawSpawn(_Scheduler_andThen_fn(loop, info.b));
    }
    var _Platform_sendToApp_fn = function (router, msg) {
        return _Scheduler_binding(function (callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Platform_sendToApp = F2(_Platform_sendToApp_fn);
    var _Platform_sendToSelf_fn = function (router, msg) {
        return _Scheduler_send_fn(router.h, {
            $: 0,
            a: msg
        });
    }, _Platform_sendToSelf = F2(_Platform_sendToSelf_fn);
    function _Platform_leaf(home) {
        return function (value) {
            return {
                $: 1,
                k: home,
                l: value
            };
        };
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        };
    }
    var _Platform_map_fn = function (tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        };
    }, _Platform_map = F2(_Platform_map_fn);
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });
        if (_Platform_effectsActive)
            return;
        _Platform_effectsActive = true;
        for (var fx; fx = _Platform_effectsQueue.shift();) {
            _Platform_dispatchEffects(fx.p, fx.q, fx.r);
        }
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for (var home in managers) {
            _Scheduler_rawSend(managers[home], {
                $: "fx",
                a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
            });
        }
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch (bag.$) {
            case 1:
                var home = bag.k;
                var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
                effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
                return;
            case 2:
                for (var list = bag.m; list.b; list = list.b) {
                    _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
                }
                return;
            case 3:
                _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                    s: bag.n,
                    t: taggers
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for (var temp = taggers; temp; temp = temp.t) {
                x = temp.s(x);
            }
            return x;
        }
        var map = isCmd
            ? _Platform_effectManagers[home].e
            : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || { i: _List_Nil, j: _List_Nil };
        isCmd
            ? (effects.i = _List_Cons(newEffect, effects.i))
            : (effects.j = _List_Cons(newEffect, effects.j));
        return effects;
    }
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) {
            _Debug_crash(3, name);
        }
    }
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            u: converter,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap_fn = function (tagger, value) { return value; }, _Platform_outgoingPortMap = F2(_Platform_outgoingPortMap_fn);
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, cmdList, state) {
            for (; cmdList.b; cmdList = cmdList.b) {
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for (var i = 0; i < currentSubs.length; i++) {
                    currentSubs[i](value);
                }
            }
            return init;
        });
        function subscribe(callback) {
            subs.push(callback);
        }
        function unsubscribe(callback) {
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) {
                subs.splice(index, 1);
            }
        }
        return {
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };
    }
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            u: converter,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap_fn = function (tagger, finalTagger) {
        return function (value) {
            return tagger(finalTagger(value));
        };
    }, _Platform_incomingPortMap = F2(_Platform_incomingPortMap_fn);
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, subList, state) {
            subs = subList;
            return init;
        });
        function send(incomingValue) {
            var result = _Json_run_fn(converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for (var temp = subs; temp.b; temp = temp.b) {
                sendToApp(temp.a(value));
            }
        }
        return { send: send };
    }
    function _Platform_export(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsProd(scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6)
                    : _Platform_mergeExportsProd(obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    function _Platform_export_UNUSED(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6, moduleName)
                    : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    var _VirtualDom_divertHrefToApp;
    var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
    function _VirtualDom_appendChild(parent, child) {
        parent.appendChild(child);
    }
    var _VirtualDom_init_fn = function (virtualNode, flagDecoder, debugMetadata, args) {
        var node = args["node"];
        node.parentNode.replaceChild(_VirtualDom_render(virtualNode, function () { }), node);
        return {};
    }, _VirtualDom_init = F4(_VirtualDom_init_fn);
    function _VirtualDom_text(string) {
        return {
            $: 0,
            a: string
        };
    }
    var _VirtualDom_nodeNS_fn = function (namespace, tag) {
        return F2(function (factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
                var kid = kidList.a;
                descendantsCount += (kid.b || 0);
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 1,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    }, _VirtualDom_nodeNS = F2(_VirtualDom_nodeNS_fn);
    var _VirtualDom_node_a0 = undefined, _VirtualDom_node = _VirtualDom_nodeNS(_VirtualDom_node_a0);
    var _VirtualDom_keyedNodeNS_fn = function (namespace, tag) {
        return F2(function (factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
                var kid = kidList.a;
                descendantsCount += (kid.b.b || 0);
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 2,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    }, _VirtualDom_keyedNodeNS = F2(_VirtualDom_keyedNodeNS_fn);
    var _VirtualDom_keyedNode_a0 = undefined, _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(_VirtualDom_keyedNode_a0);
    function _VirtualDom_custom(factList, model, render, diff) {
        return {
            $: 3,
            d: _VirtualDom_organizeFacts(factList),
            g: model,
            h: render,
            i: diff
        };
    }
    var _VirtualDom_map_fn = function (tagger, node) {
        return {
            $: 4,
            j: tagger,
            k: node,
            b: 1 + (node.b || 0)
        };
    }, _VirtualDom_map = F2(_VirtualDom_map_fn);
    function _VirtualDom_thunk(refs, thunk) {
        return {
            $: 5,
            l: refs,
            m: thunk,
            k: undefined
        };
    }
    var _VirtualDom_lazy_fn = function (func, a) {
        return _VirtualDom_thunk([func, a], function () {
            return func(a);
        });
    }, _VirtualDom_lazy = F2(_VirtualDom_lazy_fn);
    var _VirtualDom_lazy2_fn = function (func, a, b) {
        return _VirtualDom_thunk([func, a, b], function () {
            return A2(func, a, b);
        });
    }, _VirtualDom_lazy2_fn_unwrapped = function (func, a, b) {
        return _VirtualDom_thunk([func, a, b], function () {
            return func(a, b);
        });
    }, _VirtualDom_lazy2 = F3(_VirtualDom_lazy2_fn);
    var _VirtualDom_lazy3_fn = function (func, a, b, c) {
        return _VirtualDom_thunk([func, a, b, c], function () {
            return A3(func, a, b, c);
        });
    }, _VirtualDom_lazy3_fn_unwrapped = function (func, a, b, c) {
        return _VirtualDom_thunk([func, a, b, c], function () {
            return func(a, b, c);
        });
    }, _VirtualDom_lazy3 = F4(_VirtualDom_lazy3_fn);
    var _VirtualDom_lazy4_fn = function (func, a, b, c, d) {
        return _VirtualDom_thunk([func, a, b, c, d], function () {
            return A4(func, a, b, c, d);
        });
    }, _VirtualDom_lazy4_fn_unwrapped = function (func, a, b, c, d) {
        return _VirtualDom_thunk([func, a, b, c, d], function () {
            return func(a, b, c, d);
        });
    }, _VirtualDom_lazy4 = F5(_VirtualDom_lazy4_fn);
    var _VirtualDom_lazy5_fn = function (func, a, b, c, d, e) {
        return _VirtualDom_thunk([func, a, b, c, d, e], function () {
            return A5(func, a, b, c, d, e);
        });
    }, _VirtualDom_lazy5_fn_unwrapped = function (func, a, b, c, d, e) {
        return _VirtualDom_thunk([func, a, b, c, d, e], function () {
            return func(a, b, c, d, e);
        });
    }, _VirtualDom_lazy5 = F6(_VirtualDom_lazy5_fn);
    var _VirtualDom_lazy6_fn = function (func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f], function () {
            return A6(func, a, b, c, d, e, f);
        });
    }, _VirtualDom_lazy6_fn_unwrapped = function (func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f], function () {
            return func(a, b, c, d, e, f);
        });
    }, _VirtualDom_lazy6 = F7(_VirtualDom_lazy6_fn);
    var _VirtualDom_lazy7_fn = function (func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function () {
            return A7(func, a, b, c, d, e, f, g);
        });
    }, _VirtualDom_lazy7_fn_unwrapped = function (func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function () {
            return func(a, b, c, d, e, f, g);
        });
    }, _VirtualDom_lazy7 = F8(_VirtualDom_lazy7_fn);
    var _VirtualDom_lazy8_fn = function (func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function () {
            return A8(func, a, b, c, d, e, f, g, h);
        });
    }, _VirtualDom_lazy8_fn_unwrapped = function (func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function () {
            return func(a, b, c, d, e, f, g, h);
        });
    }, _VirtualDom_lazy8 = F9(_VirtualDom_lazy8_fn);
    var _VirtualDom_on_fn = function (key, handler) {
        return {
            $: "a0",
            n: key,
            o: handler
        };
    }, _VirtualDom_on = F2(_VirtualDom_on_fn);
    var _VirtualDom_style_fn = function (key, value) {
        return {
            $: "a1",
            n: key,
            o: value
        };
    }, _VirtualDom_style = F2(_VirtualDom_style_fn);
    var _VirtualDom_property_fn = function (key, value) {
        return {
            $: "a2",
            n: key,
            o: value
        };
    }, _VirtualDom_property = F2(_VirtualDom_property_fn);
    var _VirtualDom_attribute_fn = function (key, value) {
        return {
            $: "a3",
            n: key,
            o: value
        };
    }, _VirtualDom_attribute = F2(_VirtualDom_attribute_fn);
    var _VirtualDom_attributeNS_fn = function (namespace, key, value) {
        return {
            $: "a4",
            n: key,
            o: { f: namespace, o: value }
        };
    }, _VirtualDom_attributeNS = F3(_VirtualDom_attributeNS_fn);
    var _VirtualDom_RE_script = /^script$/i;
    var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
    var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
    var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;
    function _VirtualDom_noScript(tag) {
        return _VirtualDom_RE_script.test(tag) ? "p" : tag;
    }
    function _VirtualDom_noOnOrFormAction(key) {
        return _VirtualDom_RE_on_formAction.test(key) ? "data-" + key : key;
    }
    function _VirtualDom_noInnerHtmlOrFormAction(key) {
        return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
    }
    function _VirtualDom_noJavaScriptUri(value) {
        return _VirtualDom_RE_js.test(value)
            ? ""
            : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri(value) {
        return _VirtualDom_RE_js_html.test(value)
            ? ""
            : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlJson(value) {
        return (typeof _Json_unwrap(value) === "string" && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
            ? _Json_wrap("") : value;
    }
    var _VirtualDom_mapAttribute_fn = function (func, attr) {
        return (attr.$ === "a0")
            ? _VirtualDom_on_fn(attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
    }, _VirtualDom_mapAttribute = F2(_VirtualDom_mapAttribute_fn);
    function _VirtualDom_mapHandler(func, handler) {
        var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
        return {
            $: handler.$,
            a: !tag
                ? _Json_map1_fn(func, handler.a) : _Json_map2_fn(tag < 3
                ? _VirtualDom_mapEventTuple
                : _VirtualDom_mapEventRecord, $elm$json$Json$Decode$succeed(func), handler.a)
        };
    }
    var _VirtualDom_mapEventTuple_fn = function (func, tuple) {
        return _Utils_Tuple2(func(tuple.a), tuple.b);
    }, _VirtualDom_mapEventTuple = F2(_VirtualDom_mapEventTuple_fn);
    var _VirtualDom_mapEventRecord_fn = function (func, record) {
        return {
            aR: func(record.aR),
            dE: record.dE,
            dz: record.dz
        };
    }, _VirtualDom_mapEventRecord = F2(_VirtualDom_mapEventRecord_fn);
    function _VirtualDom_organizeFacts(factList) {
        for (var facts = {}; factList.b; factList = factList.b) {
            var entry = factList.a;
            var tag = entry.$;
            var key = entry.n;
            var value = entry.o;
            if (tag === "a2") {
                (key === "className")
                    ? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
                    : facts[key] = _Json_unwrap(value);
                continue;
            }
            var subFacts = facts[tag] || (facts[tag] = {});
            (tag === "a3" && key === "class")
                ? _VirtualDom_addClass(subFacts, key, value)
                : subFacts[key] = value;
        }
        return facts;
    }
    function _VirtualDom_addClass(object, key, newClass) {
        var classes = object[key];
        object[key] = classes ? classes + " " + newClass : newClass;
    }
    function _VirtualDom_render(vNode, eventNode) {
        var tag = vNode.$;
        if (tag === 5) {
            return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
        }
        if (tag === 0) {
            return _VirtualDom_doc.createTextNode(vNode.a);
        }
        if (tag === 4) {
            var subNode = vNode.k;
            var tagger = vNode.j;
            while (subNode.$ === 4) {
                typeof tagger !== "object"
                    ? tagger = [tagger, subNode.j]
                    : tagger.push(subNode.j);
                subNode = subNode.k;
            }
            var subEventRoot = { j: tagger, p: eventNode };
            var domNode = _VirtualDom_render(subNode, subEventRoot);
            domNode.elm_event_node_ref = subEventRoot;
            return domNode;
        }
        if (tag === 3) {
            var domNode = vNode.h(vNode.g);
            _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
            return domNode;
        }
        var domNode = vNode.f
            ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
            : _VirtualDom_doc.createElement(vNode.c);
        if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
            domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
        }
        _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
        for (var kids = vNode.e, i = 0; i < kids.length; i++) {
            _VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
        }
        return domNode;
    }
    function _VirtualDom_applyFacts(domNode, eventNode, facts) {
        for (var key in facts) {
            var value = facts[key];
            key === "a1"
                ? _VirtualDom_applyStyles(domNode, value)
                :
                    key === "a0"
                        ? _VirtualDom_applyEvents(domNode, eventNode, value)
                        :
                            key === "a3"
                                ? _VirtualDom_applyAttrs(domNode, value)
                                :
                                    key === "a4"
                                        ? _VirtualDom_applyAttrsNS(domNode, value)
                                        :
                                            ((key !== "value" && key !== "checked") || domNode[key] !== value) && (domNode[key] = value);
        }
    }
    function _VirtualDom_applyStyles(domNode, styles) {
        var domNodeStyle = domNode.style;
        for (var key in styles) {
            domNodeStyle[key] = styles[key];
        }
    }
    function _VirtualDom_applyAttrs(domNode, attrs) {
        for (var key in attrs) {
            var value = attrs[key];
            typeof value !== "undefined"
                ? domNode.setAttribute(key, value)
                : domNode.removeAttribute(key);
        }
    }
    function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
        for (var key in nsAttrs) {
            var pair = nsAttrs[key];
            var namespace = pair.f;
            var value = pair.o;
            typeof value !== "undefined"
                ? domNode.setAttributeNS(namespace, key, value)
                : domNode.removeAttributeNS(namespace, key);
        }
    }
    function _VirtualDom_applyEvents(domNode, eventNode, events) {
        var allCallbacks = domNode.elmFs || (domNode.elmFs = {});
        for (var key in events) {
            var newHandler = events[key];
            var oldCallback = allCallbacks[key];
            if (!newHandler) {
                domNode.removeEventListener(key, oldCallback);
                allCallbacks[key] = undefined;
                continue;
            }
            if (oldCallback) {
                var oldHandler = oldCallback.q;
                if (oldHandler.$ === newHandler.$) {
                    oldCallback.q = newHandler;
                    continue;
                }
                domNode.removeEventListener(key, oldCallback);
            }
            oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
            domNode.addEventListener(key, oldCallback, _VirtualDom_passiveSupported
                && { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 });
            allCallbacks[key] = oldCallback;
        }
    }
    var _VirtualDom_passiveSupported;
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function () { _VirtualDom_passiveSupported = true; }
        }));
    }
    catch (e) { }
    function _VirtualDom_makeCallback(eventNode, initialHandler) {
        function callback(event) {
            var handler = callback.q;
            var result = _Json_runHelp(handler.a, event);
            if (!$elm$core$Result$isOk(result)) {
                return;
            }
            var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
            var value = result.a;
            var message = !tag ? value : tag < 3 ? value.a : value.aR;
            var stopPropagation = tag == 1 ? value.b : tag == 3 && value.dE;
            var currentEventNode = (stopPropagation && event.stopPropagation(),
                (tag == 2 ? value.b : tag == 3 && value.dz) && event.preventDefault(),
                eventNode);
            var tagger;
            var i;
            while (tagger = currentEventNode.j) {
                if (typeof tagger == "function") {
                    message = tagger(message);
                }
                else {
                    for (var i = tagger.length; i--;) {
                        message = tagger[i](message);
                    }
                }
                currentEventNode = currentEventNode.p;
            }
            currentEventNode(message, stopPropagation);
        }
        callback.q = initialHandler;
        return callback;
    }
    function _VirtualDom_equalEvents(x, y) {
        return x.$ == y.$ && _Json_equality(x.a, y.a);
    }
    function _VirtualDom_diff(x, y) {
        var patches = [];
        _VirtualDom_diffHelp(x, y, patches, 0);
        return patches;
    }
    function _VirtualDom_pushPatch(patches, type, index, data) {
        var patch = {
            $: type,
            r: index,
            s: data,
            t: undefined,
            u: undefined
        };
        patches.push(patch);
        return patch;
    }
    function _VirtualDom_diffHelp(x, y, patches, index) {
        if (x === y) {
            return;
        }
        var xType = x.$;
        var yType = y.$;
        if (xType !== yType) {
            if (xType === 1 && yType === 2) {
                y = _VirtualDom_dekey(y);
                yType = 1;
            }
            else {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return;
            }
        }
        switch (yType) {
            case 5:
                var xRefs = x.l;
                var yRefs = y.l;
                var i = xRefs.length;
                var same = i === yRefs.length;
                while (same && i--) {
                    same = xRefs[i] === yRefs[i];
                }
                if (same) {
                    y.k = x.k;
                    return;
                }
                y.k = y.m();
                var subPatches = [];
                _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
                subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
                return;
            case 4:
                var xTaggers = x.j;
                var yTaggers = y.j;
                var nesting = false;
                var xSubNode = x.k;
                while (xSubNode.$ === 4) {
                    nesting = true;
                    typeof xTaggers !== "object"
                        ? xTaggers = [xTaggers, xSubNode.j]
                        : xTaggers.push(xSubNode.j);
                    xSubNode = xSubNode.k;
                }
                var ySubNode = y.k;
                while (ySubNode.$ === 4) {
                    nesting = true;
                    typeof yTaggers !== "object"
                        ? yTaggers = [yTaggers, ySubNode.j]
                        : yTaggers.push(ySubNode.j);
                    ySubNode = ySubNode.k;
                }
                if (nesting && xTaggers.length !== yTaggers.length) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
                    _VirtualDom_pushPatch(patches, 2, index, yTaggers);
                }
                _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
                return;
            case 0:
                if (x.a !== y.a) {
                    _VirtualDom_pushPatch(patches, 3, index, y.a);
                }
                return;
            case 1:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
                return;
            case 2:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
                return;
            case 3:
                if (x.h !== y.h) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
                factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
                var patch = y.i(x.g, y.g);
                patch && _VirtualDom_pushPatch(patches, 5, index, patch);
                return;
        }
    }
    function _VirtualDom_pairwiseRefEqual(as, bs) {
        for (var i = 0; i < as.length; i++) {
            if (as[i] !== bs[i]) {
                return false;
            }
        }
        return true;
    }
    function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
        if (x.c !== y.c || x.f !== y.f) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return;
        }
        var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
        factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
        diffKids(x, y, patches, index);
    }
    function _VirtualDom_diffFacts(x, y, category) {
        var diff;
        for (var xKey in x) {
            if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
                var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
                if (subDiff) {
                    diff = diff || {};
                    diff[xKey] = subDiff;
                }
                continue;
            }
            if (!(xKey in y)) {
                diff = diff || {};
                diff[xKey] =
                    !category
                        ? (typeof x[xKey] === "string" ? "" : null)
                        :
                            (category === "a1")
                                ? ""
                                :
                                    (category === "a0" || category === "a3")
                                        ? undefined
                                        :
                                            { f: x[xKey].f, o: undefined };
                continue;
            }
            var xValue = x[xKey];
            var yValue = y[xKey];
            if (xValue === yValue && xKey !== "value" && xKey !== "checked"
                || category === "a0" && _VirtualDom_equalEvents(xValue, yValue)) {
                continue;
            }
            diff = diff || {};
            diff[xKey] = yValue;
        }
        for (var yKey in y) {
            if (!(yKey in x)) {
                diff = diff || {};
                diff[yKey] = y[yKey];
            }
        }
        return diff;
    }
    function _VirtualDom_diffKids(xParent, yParent, patches, index) {
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        if (xLen > yLen) {
            _VirtualDom_pushPatch(patches, 6, index, {
                v: yLen,
                i: xLen - yLen
            });
        }
        else if (xLen < yLen) {
            _VirtualDom_pushPatch(patches, 7, index, {
                v: xLen,
                e: yKids
            });
        }
        for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
            var xKid = xKids[i];
            _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
            index += xKid.b || 0;
        }
    }
    function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
        var localPatches = [];
        var changes = {};
        var inserts = [];
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        var xIndex = 0;
        var yIndex = 0;
        var index = rootIndex;
        while (xIndex < xLen && yIndex < yLen) {
            var x = xKids[xIndex];
            var y = yKids[yIndex];
            var xKey = x.a;
            var yKey = y.a;
            var xNode = x.b;
            var yNode = y.b;
            var newMatch = undefined;
            var oldMatch = undefined;
            if (xKey === yKey) {
                index++;
                _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
                index += xNode.b || 0;
                xIndex++;
                yIndex++;
                continue;
            }
            var xNext = xKids[xIndex + 1];
            var yNext = yKids[yIndex + 1];
            if (xNext) {
                var xNextKey = xNext.a;
                var xNextNode = xNext.b;
                oldMatch = yKey === xNextKey;
            }
            if (yNext) {
                var yNextKey = yNext.a;
                var yNextNode = yNext.b;
                newMatch = xKey === yNextKey;
            }
            if (newMatch && oldMatch) {
                index++;
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            if (newMatch) {
                index++;
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                index += xNode.b || 0;
                xIndex += 1;
                yIndex += 2;
                continue;
            }
            if (oldMatch) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 1;
                continue;
            }
            if (xNext && xNextKey === yNextKey) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            break;
        }
        while (xIndex < xLen) {
            index++;
            var x = xKids[xIndex];
            var xNode = x.b;
            _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
            index += xNode.b || 0;
            xIndex++;
        }
        while (yIndex < yLen) {
            var endInserts = endInserts || [];
            var y = yKids[yIndex];
            _VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
            yIndex++;
        }
        if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
            _VirtualDom_pushPatch(patches, 8, rootIndex, {
                w: localPatches,
                x: inserts,
                y: endInserts
            });
        }
    }
    var _VirtualDom_POSTFIX = "_elmW6BL";
    function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
        var entry = changes[key];
        if (!entry) {
            entry = {
                c: 0,
                z: vnode,
                r: yIndex,
                s: undefined
            };
            inserts.push({ r: yIndex, A: entry });
            changes[key] = entry;
            return;
        }
        if (entry.c === 1) {
            inserts.push({ r: yIndex, A: entry });
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
            entry.r = yIndex;
            entry.s.s = {
                w: subPatches,
                A: entry
            };
            return;
        }
        _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
    }
    function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
        var entry = changes[key];
        if (!entry) {
            var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);
            changes[key] = {
                c: 1,
                z: vnode,
                r: index,
                s: patch
            };
            return;
        }
        if (entry.c === 0) {
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
            _VirtualDom_pushPatch(localPatches, 9, index, {
                w: subPatches,
                A: entry
            });
            return;
        }
        _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
    }
    function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
        _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
    }
    function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
        var patch = patches[i];
        var index = patch.r;
        while (index === low) {
            var patchType = patch.$;
            if (patchType === 1) {
                _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
            }
            else if (patchType === 8) {
                patch.t = domNode;
                patch.u = eventNode;
                var subPatches = patch.s.w;
                if (subPatches.length > 0) {
                    _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                }
            }
            else if (patchType === 9) {
                patch.t = domNode;
                patch.u = eventNode;
                var data = patch.s;
                if (data) {
                    data.A.s = domNode;
                    var subPatches = data.w;
                    if (subPatches.length > 0) {
                        _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                    }
                }
            }
            else {
                patch.t = domNode;
                patch.u = eventNode;
            }
            i++;
            if (!(patch = patches[i]) || (index = patch.r) > high) {
                return i;
            }
        }
        var tag = vNode.$;
        if (tag === 4) {
            var subNode = vNode.k;
            while (subNode.$ === 4) {
                subNode = subNode.k;
            }
            return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
        }
        var vKids = vNode.e;
        var childNodes = domNode.childNodes;
        for (var j = 0; j < vKids.length; j++) {
            low++;
            var vKid = tag === 1 ? vKids[j] : vKids[j].b;
            var nextLow = low + (vKid.b || 0);
            if (low <= index && index <= nextLow) {
                i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
                if (!(patch = patches[i]) || (index = patch.r) > high) {
                    return i;
                }
            }
            low = nextLow;
        }
        return i;
    }
    function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
        if (patches.length === 0) {
            return rootDomNode;
        }
        _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
        return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
    }
    function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
        for (var i = 0; i < patches.length; i++) {
            var patch = patches[i];
            var localDomNode = patch.t;
            var newNode = _VirtualDom_applyPatch(localDomNode, patch);
            if (localDomNode === rootDomNode) {
                rootDomNode = newNode;
            }
        }
        return rootDomNode;
    }
    function _VirtualDom_applyPatch(domNode, patch) {
        switch (patch.$) {
            case 0:
                return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
            case 4:
                _VirtualDom_applyFacts(domNode, patch.u, patch.s);
                return domNode;
            case 3:
                domNode.replaceData(0, domNode.length, patch.s);
                return domNode;
            case 1:
                return _VirtualDom_applyPatchesHelp(domNode, patch.s);
            case 2:
                if (domNode.elm_event_node_ref) {
                    domNode.elm_event_node_ref.j = patch.s;
                }
                else {
                    domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
                }
                return domNode;
            case 6:
                var data = patch.s;
                for (var i = 0; i < data.i; i++) {
                    domNode.removeChild(domNode.childNodes[data.v]);
                }
                return domNode;
            case 7:
                var data = patch.s;
                var kids = data.e;
                var i = data.v;
                var theEnd = domNode.childNodes[i];
                for (; i < kids.length; i++) {
                    domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
                }
                return domNode;
            case 9:
                var data = patch.s;
                if (!data) {
                    domNode.parentNode.removeChild(domNode);
                    return domNode;
                }
                var entry = data.A;
                if (typeof entry.r !== "undefined") {
                    domNode.parentNode.removeChild(domNode);
                }
                entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
                return domNode;
            case 8:
                return _VirtualDom_applyPatchReorder(domNode, patch);
            case 5:
                return patch.s(domNode);
            default:
                _Debug_crash(10);
        }
    }
    function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
        var parentNode = domNode.parentNode;
        var newNode = _VirtualDom_render(vNode, eventNode);
        if (!newNode.elm_event_node_ref) {
            newNode.elm_event_node_ref = domNode.elm_event_node_ref;
        }
        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode);
        }
        return newNode;
    }
    function _VirtualDom_applyPatchReorder(domNode, patch) {
        var data = patch.s;
        var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
        domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
        var inserts = data.x;
        for (var i = 0; i < inserts.length; i++) {
            var insert = inserts[i];
            var entry = insert.A;
            var node = entry.c === 2
                ? entry.s
                : _VirtualDom_render(entry.z, patch.u);
            domNode.insertBefore(node, domNode.childNodes[insert.r]);
        }
        if (frag) {
            _VirtualDom_appendChild(domNode, frag);
        }
        return domNode;
    }
    function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
        if (!endInserts) {
            return;
        }
        var frag = _VirtualDom_doc.createDocumentFragment();
        for (var i = 0; i < endInserts.length; i++) {
            var insert = endInserts[i];
            var entry = insert.A;
            _VirtualDom_appendChild(frag, entry.c === 2
                ? entry.s
                : _VirtualDom_render(entry.z, patch.u));
        }
        return frag;
    }
    function _VirtualDom_virtualize(node) {
        if (node.nodeType === 3) {
            return _VirtualDom_text(node.textContent);
        }
        if (node.nodeType !== 1) {
            return _VirtualDom_text("");
        }
        var attrList = _List_Nil;
        var attrs = node.attributes;
        for (var i = attrs.length; i--;) {
            var attr = attrs[i];
            var name = attr.name;
            var value = attr.value;
            attrList = _List_Cons(_VirtualDom_attribute_fn(name, value), attrList);
        }
        var tag = node.tagName.toLowerCase();
        var kidList = _List_Nil;
        var kids = node.childNodes;
        for (var i = kids.length; i--;) {
            kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
        }
        return A3(_VirtualDom_node, tag, attrList, kidList);
    }
    function _VirtualDom_dekey(keyedNode) {
        var keyedKids = keyedNode.e;
        var len = keyedKids.length;
        var kids = new Array(len);
        for (var i = 0; i < len; i++) {
            kids[i] = keyedKids[i].b;
        }
        return {
            $: 1,
            c: keyedNode.c,
            d: keyedNode.d,
            e: kids,
            f: keyedNode.f,
            b: keyedNode.b
        };
    }
    var _Debugger_element;
    var _Browser_element = _Debugger_element || F4(function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.gD, impl.h$, impl.hC, function (sendToApp, initialModel) {
            var view = impl.h1;
            var domNode = args["node"];
            var currNode = _VirtualDom_virtualize(domNode);
            return _Browser_makeAnimator(initialModel, function (model) {
                var nextNode = view(model);
                var patches = _VirtualDom_diff(currNode, nextNode);
                domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
                currNode = nextNode;
            });
        });
    });
    var _Debugger_document;
    var _Browser_document = _Debugger_document || F4(function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.gD, impl.h$, impl.hC, function (sendToApp, initialModel) {
            var divertHrefToApp = impl.dD && impl.dD(sendToApp);
            var view = impl.h1;
            var title = _VirtualDom_doc.title;
            var bodyNode = _VirtualDom_doc.body;
            var currNode = _VirtualDom_virtualize(bodyNode);
            return _Browser_makeAnimator(initialModel, function (model) {
                _VirtualDom_divertHrefToApp = divertHrefToApp;
                var doc = view(model);
                var nextNode = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "body")(_List_Nil)(doc.fS);
                var patches = _VirtualDom_diff(currNode, nextNode);
                bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
                currNode = nextNode;
                _VirtualDom_divertHrefToApp = 0;
                (title !== doc.hT) && (_VirtualDom_doc.title = title = doc.hT);
            });
        });
    });
    var _Browser_cancelAnimationFrame = typeof cancelAnimationFrame !== "undefined"
        ? cancelAnimationFrame
        : function (id) { clearTimeout(id); };
    var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== "undefined"
        ? requestAnimationFrame
        : function (callback) { return setTimeout(callback, 1000 / 60); };
    function _Browser_makeAnimator(model, draw) {
        draw(model);
        var state = 0;
        function updateIfNeeded() {
            state = state === 1
                ? 0
                : (_Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1);
        }
        return function (nextModel, isSync) {
            model = nextModel;
            isSync
                ? (draw(model),
                    state === 2 && (state = 1))
                : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
                    state = 2);
        };
    }
    function _Browser_application(impl) {
        var onUrlChange = impl.cM;
        var onUrlRequest = impl.cN;
        var key = function () { key.a(onUrlChange(_Browser_getUrl())); };
        return _Browser_document({
            dD: function (sendToApp) {
                key.a = sendToApp;
                _Browser_window.addEventListener("popstate", key);
                _Browser_window.navigator.userAgent.indexOf("Trident") < 0 || _Browser_window.addEventListener("hashchange", key);
                return F2(function (domNode, event) {
                    if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute("download")) {
                        event.preventDefault();
                        var href = domNode.href;
                        var curr = _Browser_getUrl();
                        var next = $elm$url$Url$fromString(href).a;
                        sendToApp(onUrlRequest((next
                            && curr.eT === next.eT
                            && curr.ej === next.ej
                            && curr.eQ.a === next.eQ.a)
                            ? $elm$browser$Browser$Internal(next)
                            : $elm$browser$Browser$External(href)));
                    }
                });
            },
            gD: function (flags) {
                return A3(impl.gD, flags, _Browser_getUrl(), key);
            },
            h1: impl.h1,
            h$: impl.h$,
            hC: impl.hC
        });
    }
    function _Browser_getUrl() {
        return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
    }
    var _Browser_go_fn = function (key, n) {
        return $elm$core$Task$perform_fn($elm$core$Basics$never, _Scheduler_binding(function () {
            n && history.go(n);
            key();
        }));
    }, _Browser_go = F2(_Browser_go_fn);
    var _Browser_pushUrl_fn = function (key, url) {
        return $elm$core$Task$perform_fn($elm$core$Basics$never, _Scheduler_binding(function () {
            history.pushState({}, "", url);
            key();
        }));
    }, _Browser_pushUrl = F2(_Browser_pushUrl_fn);
    var _Browser_replaceUrl_fn = function (key, url) {
        return $elm$core$Task$perform_fn($elm$core$Basics$never, _Scheduler_binding(function () {
            history.replaceState({}, "", url);
            key();
        }));
    }, _Browser_replaceUrl = F2(_Browser_replaceUrl_fn);
    var _Browser_fakeNode = { addEventListener: function () { }, removeEventListener: function () { } };
    var _Browser_doc = typeof document !== "undefined" ? document : _Browser_fakeNode;
    var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;
    var _Browser_on_fn = function (node, eventName, sendToSelf) {
        return _Scheduler_spawn(_Scheduler_binding(function (callback) {
            function handler(event) { _Scheduler_rawSpawn(sendToSelf(event)); }
            node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
            return function () { node.removeEventListener(eventName, handler); };
        }));
    }, _Browser_on = F3(_Browser_on_fn);
    var _Browser_decodeEvent_fn = function (decoder, event) {
        var result = _Json_runHelp(decoder, event);
        return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
    }, _Browser_decodeEvent = F2(_Browser_decodeEvent_fn);
    function _Browser_visibilityInfo() {
        return (typeof _VirtualDom_doc.hidden !== "undefined")
            ? { gw: "hidden", f2: "visibilitychange" }
            :
                (typeof _VirtualDom_doc.mozHidden !== "undefined")
                    ? { gw: "mozHidden", f2: "mozvisibilitychange" }
                    :
                        (typeof _VirtualDom_doc.msHidden !== "undefined")
                            ? { gw: "msHidden", f2: "msvisibilitychange" }
                            :
                                (typeof _VirtualDom_doc.webkitHidden !== "undefined")
                                    ? { gw: "webkitHidden", f2: "webkitvisibilitychange" }
                                    : { gw: "hidden", f2: "visibilitychange" };
    }
    function _Browser_rAF() {
        return _Scheduler_binding(function (callback) {
            var id = _Browser_requestAnimationFrame(function () {
                callback(_Scheduler_succeed(Date.now()));
            });
            return function () {
                _Browser_cancelAnimationFrame(id);
            };
        });
    }
    function _Browser_now() {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(Date.now()));
        });
    }
    function _Browser_withNode(id, doStuff) {
        return _Scheduler_binding(function (callback) {
            _Browser_requestAnimationFrame(function () {
                var node = document.getElementById(id);
                callback(node
                    ? _Scheduler_succeed(doStuff(node))
                    : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id)));
            });
        });
    }
    function _Browser_withWindow(doStuff) {
        return _Scheduler_binding(function (callback) {
            _Browser_requestAnimationFrame(function () {
                callback(_Scheduler_succeed(doStuff()));
            });
        });
    }
    var _Browser_call_fn = function (functionName, id) {
        return _Browser_withNode(id, function (node) {
            node[functionName]();
            return _Utils_Tuple0;
        });
    }, _Browser_call = F2(_Browser_call_fn);
    function _Browser_getViewport() {
        return {
            e4: _Browser_getScene(),
            fn: {
                fs: _Browser_window.pageXOffset,
                ft: _Browser_window.pageYOffset,
                b: _Browser_doc.documentElement.clientWidth,
                bw: _Browser_doc.documentElement.clientHeight
            }
        };
    }
    function _Browser_getScene() {
        var body = _Browser_doc.body;
        var elem = _Browser_doc.documentElement;
        return {
            b: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
            bw: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
        };
    }
    var _Browser_setViewport_fn = function (x, y) {
        return _Browser_withWindow(function () {
            _Browser_window.scroll(x, y);
            return _Utils_Tuple0;
        });
    }, _Browser_setViewport = F2(_Browser_setViewport_fn);
    function _Browser_getViewportOf(id) {
        return _Browser_withNode(id, function (node) {
            return {
                e4: {
                    b: node.scrollWidth,
                    bw: node.scrollHeight
                },
                fn: {
                    fs: node.scrollLeft,
                    ft: node.scrollTop,
                    b: node.clientWidth,
                    bw: node.clientHeight
                }
            };
        });
    }
    var _Browser_setViewportOf_fn = function (id, x, y) {
        return _Browser_withNode(id, function (node) {
            node.scrollLeft = x;
            node.scrollTop = y;
            return _Utils_Tuple0;
        });
    }, _Browser_setViewportOf = F3(_Browser_setViewportOf_fn);
    function _Browser_getElement(id) {
        return _Browser_withNode(id, function (node) {
            var rect = node.getBoundingClientRect();
            var x = _Browser_window.pageXOffset;
            var y = _Browser_window.pageYOffset;
            return {
                e4: _Browser_getScene(),
                fn: {
                    fs: x,
                    ft: y,
                    b: _Browser_doc.documentElement.clientWidth,
                    bw: _Browser_doc.documentElement.clientHeight
                },
                gi: {
                    fs: x + rect.left,
                    ft: y + rect.top,
                    b: rect.width,
                    bw: rect.height
                }
            };
        });
    }
    function _Browser_reload(skipCache) {
        return $elm$core$Task$perform_fn($elm$core$Basics$never, _Scheduler_binding(function (callback) {
            _VirtualDom_doc.location.reload(skipCache);
        }));
    }
    function _Browser_load(url) {
        return $elm$core$Task$perform_fn($elm$core$Basics$never, _Scheduler_binding(function (callback) {
            try {
                _Browser_window.location = url;
            }
            catch (err) {
                _VirtualDom_doc.location.reload(false);
            }
        }));
    }
    var _Bitwise_and_fn = function (a, b) {
        return a & b;
    }, _Bitwise_and = F2(_Bitwise_and_fn);
    var _Bitwise_or_fn = function (a, b) {
        return a | b;
    }, _Bitwise_or = F2(_Bitwise_or_fn);
    var _Bitwise_xor_fn = function (a, b) {
        return a ^ b;
    }, _Bitwise_xor = F2(_Bitwise_xor_fn);
    function _Bitwise_complement(a) {
        return ~a;
    }
    ;
    var _Bitwise_shiftLeftBy_fn = function (offset, a) {
        return a << offset;
    }, _Bitwise_shiftLeftBy = F2(_Bitwise_shiftLeftBy_fn);
    var _Bitwise_shiftRightBy_fn = function (offset, a) {
        return a >> offset;
    }, _Bitwise_shiftRightBy = F2(_Bitwise_shiftRightBy_fn);
    var _Bitwise_shiftRightZfBy_fn = function (offset, a) {
        return a >>> offset;
    }, _Bitwise_shiftRightZfBy = F2(_Bitwise_shiftRightZfBy_fn);
    function _Time_now(millisToPosix) {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(millisToPosix(Date.now())));
        });
    }
    var _Time_setInterval_fn = function (interval, task) {
        return _Scheduler_binding(function (callback) {
            var id = setInterval(function () { _Scheduler_rawSpawn(task); }, interval);
            return function () { clearInterval(id); };
        });
    }, _Time_setInterval = F2(_Time_setInterval_fn);
    function _Time_here() {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed($elm$time$Time$Zone_fn(-(new Date().getTimezoneOffset()), _List_Nil)));
        });
    }
    function _Time_getZoneName() {
        return _Scheduler_binding(function (callback) {
            try {
                var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
            }
            catch (e) {
                var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
            }
            callback(_Scheduler_succeed(name));
        });
    }
    var $author$project$Main$accessAudioOfKind = function (kind) {
        switch (kind) {
            case 0:
                return function ($) {
                    return $.cb;
                };
            case 1:
                return function ($) {
                    return $.a2;
                };
            default:
                return function ($) {
                    return $.bA;
                };
        }
    };
    var $elm$core$Basics$EQ = 1;
    var $elm$core$Basics$GT = 2;
    var $elm$core$Basics$LT = 0;
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Dict$foldr_fn = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldr_fn(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr_fn_unwrapped = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = func(key, value, $elm$core$Dict$foldr_fn_unwrapped(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr = F3($elm$core$Dict$foldr_fn);
    var $elm$core$Dict$toList = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, list) {
            return _List_Cons(_Utils_Tuple2(key, value), list);
        }, _List_Nil, dict);
    };
    var $elm$core$Dict$keys = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, keyList) {
            return _List_Cons(key, keyList);
        }, _List_Nil, dict);
    };
    var $elm$core$Set$toList = function (_v0) {
        var dict = _v0;
        return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr_fn = function (func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function (node, acc) {
            if (!node.$) {
                var subTree = node.a;
                return _JsArray_foldr_fn(helper, acc, subTree);
            }
            else {
                var values = node.a;
                return _JsArray_foldr_fn(func, acc, values);
            }
        });
        return _JsArray_foldr_fn(helper, _JsArray_foldr_fn(func, baseCase, tail), tree);
    }, $elm$core$Array$foldr = F3($elm$core$Array$foldr_fn);
    var $elm$core$Array$toList = function (array) {
        return $elm$core$Array$foldr_fn($elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Basics$add = _Basics_add;
    var $ianmackenzie$elm_units$Duration$inSeconds = function (_v0) {
        var numSeconds = _v0;
        return numSeconds;
    };
    var $elm$core$Basics$mul = _Basics_mul;
    var $ianmackenzie$elm_units$Duration$inMilliseconds = function (duration) {
        return $ianmackenzie$elm_units$Duration$inSeconds(duration) * 1000;
    };
    var $elm$core$Basics$identity = function (x) {
        return x;
    };
    var $elm$time$Time$Posix = $elm$core$Basics$identity;
    var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
    var $elm$time$Time$posixToMillis = function (_v0) {
        var millis = _v0;
        return millis;
    };
    var $elm$core$Basics$round = _Basics_round;
    var $ianmackenzie$elm_units$Duration$addTo_fn = function (time, duration) {
        return $elm$time$Time$millisToPosix($elm$time$Time$posixToMillis(time) + $elm$core$Basics$round($ianmackenzie$elm_units$Duration$inMilliseconds(duration)));
    }, $ianmackenzie$elm_units$Duration$addTo = F2($ianmackenzie$elm_units$Duration$addTo_fn);
    var $elm$core$Basics$apR_fn = function (x, f) {
        return f(x);
    }, $elm$core$Basics$apR = F2($elm$core$Basics$apR_fn);
    var $elm$core$Maybe$Nothing = { $: 1, a: null };
    var $ianmackenzie$elm_units$Quantity$Quantity = $elm$core$Basics$identity;
    var $ianmackenzie$elm_units$Quantity$zero = 0;
    var $MartinSStewart$elm_audio$Audio$audioDefaultConfig = { a7: $elm$core$Maybe$Nothing, a9: 1, aV: $ianmackenzie$elm_units$Quantity$zero };
    var $MartinSStewart$elm_audio$Audio$BasicAudio = function (a) {
        return { $: 1, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$audioWithConfig_fn = function (audioSettings, source, startTime) {
        return $MartinSStewart$elm_audio$Audio$BasicAudio({ e7: audioSettings, bf: source, ch: startTime });
    }, $MartinSStewart$elm_audio$Audio$audioWithConfig = F3($MartinSStewart$elm_audio$Audio$audioWithConfig_fn);
    var $MartinSStewart$elm_audio$Audio$audio_fn = function (source, startTime) {
        return $MartinSStewart$elm_audio$Audio$audioWithConfig_fn($MartinSStewart$elm_audio$Audio$audioDefaultConfig, source, startTime);
    }, $MartinSStewart$elm_audio$Audio$audio = F2($MartinSStewart$elm_audio$Audio$audio_fn);
    var $author$project$Main$AudioDropletSplash = 1;
    var $author$project$Main$AudioLilyGrow = 0;
    var $author$project$Main$AudioMusic = 2;
    var $author$project$Main$audioKinds = _List_fromArray([0, 1, 2]);
    var $elm$core$Basics$floor = _Basics_floor;
    var $ianmackenzie$elm_units$Duration$seconds = function (numSeconds) {
        return numSeconds;
    };
    var $ianmackenzie$elm_units$Duration$milliseconds = function (numMilliseconds) {
        return $ianmackenzie$elm_units$Duration$seconds(0.001 * numMilliseconds);
    };
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $ianmackenzie$elm_units$Duration$from_fn = function (startTime, endTime) {
        var numMilliseconds = $elm$time$Time$posixToMillis(endTime) - $elm$time$Time$posixToMillis(startTime);
        return $ianmackenzie$elm_units$Duration$milliseconds(numMilliseconds);
    }, $ianmackenzie$elm_units$Duration$from = F2($ianmackenzie$elm_units$Duration$from_fn);
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $MartinSStewart$elm_audio$Audio$audioSourceBufferId = function (_v0) {
        var audioSource = _v0;
        return audioSource.bY;
    };
    var $elm$core$Maybe$Just = function (a) { return { $: 0, a: a }; };
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$get_fn = function (targetKey, dict) {
        get: while (true) {
            if (dict.$ === -2) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = _Utils_compare_fn(targetKey, key);
                switch (_v1) {
                    case 0:
                        var $temp$targetKey = targetKey, $temp$dict = left;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                    case 1:
                        return $elm$core$Maybe$Just(value);
                    default:
                        var $temp$targetKey = targetKey, $temp$dict = right;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                }
            }
        }
    }, $elm$core$Dict$get = F2($elm$core$Dict$get_fn);
    var $elm$core$Maybe$map_fn = function (f, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return $elm$core$Maybe$Just(f(value));
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$map = F2($elm$core$Maybe$map_fn);
    var $MartinSStewart$elm_audio$Audio$rawBufferId = function (_v0) {
        var bufferId = _v0;
        return bufferId;
    };
    var $elm$core$Maybe$withDefault_fn = function (_default, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return value;
        }
        else {
            return _default;
        }
    }, $elm$core$Maybe$withDefault = F2($elm$core$Maybe$withDefault_fn);
    var $MartinSStewart$elm_audio$Audio$length_fn = function (_v0, source) {
        var audioData_ = _v0;
        return $elm$core$Maybe$withDefault_fn($ianmackenzie$elm_units$Quantity$zero, $elm$core$Maybe$map_fn(function ($) {
            return $.z;
        }, $elm$core$Dict$get_fn($MartinSStewart$elm_audio$Audio$rawBufferId($MartinSStewart$elm_audio$Audio$audioSourceBufferId(source)), audioData_.ak)));
    }, $MartinSStewart$elm_audio$Audio$length = F2($MartinSStewart$elm_audio$Audio$length_fn);
    var $ianmackenzie$elm_units$Quantity$multiplyBy_fn = function (scale, _v0) {
        var value = _v0;
        return scale * value;
    }, $ianmackenzie$elm_units$Quantity$multiplyBy = F2($ianmackenzie$elm_units$Quantity$multiplyBy_fn);
    var $author$project$Main$audioLoop = function (_v0) {
        var audioData = _v0.dU;
        var initialTime = _v0.bx;
        var lastTick = _v0.aO;
        return function (audio_) {
            var audioLength = $MartinSStewart$elm_audio$Audio$length_fn(audioData, audio_);
            var alreadyCompletedLoops = ($elm$core$Basics$floor($ianmackenzie$elm_units$Duration$inMilliseconds($ianmackenzie$elm_units$Duration$from_fn(initialTime, lastTick))) / $elm$core$Basics$floor($ianmackenzie$elm_units$Duration$inMilliseconds(audioLength))) | 0;
            var startTime = $ianmackenzie$elm_units$Duration$addTo_fn(initialTime, $ianmackenzie$elm_units$Quantity$multiplyBy_fn(alreadyCompletedLoops, audioLength));
            return $MartinSStewart$elm_audio$Audio$audio_fn(audio_, startTime);
        };
    };
    var $MartinSStewart$elm_audio$Audio$Group = function (a) {
        return { $: 0, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$group = function (audios) {
        return $MartinSStewart$elm_audio$Audio$Group(audios);
    };
    var $MartinSStewart$elm_audio$Audio$silence = $MartinSStewart$elm_audio$Audio$group(_List_Nil);
    var $author$project$Main$audioWith_fn = function (source, _with) {
        if (source.$ === 1) {
            return $MartinSStewart$elm_audio$Audio$silence;
        }
        else {
            var loadedAudio = source.a;
            return _with(loadedAudio);
        }
    }, $author$project$Main$audioWith = F2($author$project$Main$audioWith_fn);
    var $elm$core$List$foldl_fn = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl_fn_unwrapped = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = func(x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl = F3($elm$core$List$foldl_fn);
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$List$reverse = function (list) {
        return $elm$core$List$foldl_fn($elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$List$foldrHelper_fn = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return A2(fn, a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return A2(fn, a, A2(fn, b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_fn(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_fn(fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper_fn_unwrapped = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return fn(a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return fn(a, fn(b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return fn(a, fn(b, fn(c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_fn_unwrapped(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_fn_unwrapped(fn, acc, ctr + 1, r4);
                        return fn(a, fn(b, fn(c, fn(d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper = F4($elm$core$List$foldrHelper_fn);
    var $elm$core$List$foldr_fn = function (fn, acc, ls) {
        return $elm$core$List$foldrHelper_fn(fn, acc, 0, ls);
    }, $elm$core$List$foldr = F3($elm$core$List$foldr_fn);
    var $elm$core$List$map_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; xs.b; xs
            = xs.b) {
            var next = _List_Cons(f(xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$map = F2($elm$core$List$map_fn);
    var $author$project$Main$audio = function (audioData) {
        return function (state) {
            return $MartinSStewart$elm_audio$Audio$group(_List_Cons($author$project$Main$audioWith_fn(state.bk.bA, function (music) {
                return A2($author$project$Main$audioLoop, (new $$Record1(audioData, state.bx, state.aO)), music);
            }), $elm$core$List$map_fn(function (audioKind) {
                return $author$project$Main$audioWith_fn(A2($author$project$Main$accessAudioOfKind, audioKind, state.bk), function (loadedAudio) {
                    return $MartinSStewart$elm_audio$Audio$group($elm$core$List$map_fn(function (time) {
                        return $MartinSStewart$elm_audio$Audio$audio_fn(loadedAudio, $ianmackenzie$elm_units$Duration$addTo_fn(time, $ianmackenzie$elm_units$Duration$seconds(0.07)));
                    }, A2($author$project$Main$accessAudioOfKind, audioKind, state.cs)));
                });
            }, $author$project$Main$audioKinds)));
        };
    };
    var $elm$core$Result$Err = function (a) {
        return { $: 1, a: a };
    };
    var $elm$json$Json$Decode$Failure_fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $elm$json$Json$Decode$Failure = F2($elm$json$Json$Decode$Failure_fn);
    var $elm$json$Json$Decode$Field_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$json$Json$Decode$Field = F2($elm$json$Json$Decode$Field_fn);
    var $elm$json$Json$Decode$Index_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm$json$Json$Decode$Index = F2($elm$json$Json$Decode$Index_fn);
    var $elm$core$Result$Ok = function (a) {
        return { $: 0, a: a };
    };
    var $elm$json$Json$Decode$OneOf = function (a) {
        return { $: 2, a: a };
    };
    var $elm$core$Basics$False = 1;
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join_fn = function (sep, chunks) {
        return _String_join_fn(sep, _List_toArray(chunks));
    }, $elm$core$String$join = F2($elm$core$String$join_fn);
    var $elm$core$String$split_fn = function (sep, string) {
        return _List_fromArray(_String_split_fn(sep, string));
    }, $elm$core$String$split = F2($elm$core$String$split_fn);
    var $elm$json$Json$Decode$indent = function (str) {
        return $elm$core$String$join_fn("\n    ", $elm$core$String$split_fn("\n", str));
    };
    var $elm$core$List$length = function (xs) {
        return $elm$core$List$foldl_fn_unwrapped(function (_v0, i) {
            return i + 1;
        }, 0, xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$List$rangeHelp_fn = function (lo, hi, list) {
        rangeHelp: while (true) {
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = _List_Cons(hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
            }
            else {
                return list;
            }
        }
    }, $elm$core$List$rangeHelp = F3($elm$core$List$rangeHelp_fn);
    var $elm$core$List$range_fn = function (lo, hi) {
        return $elm$core$List$rangeHelp_fn(lo, hi, _List_Nil);
    }, $elm$core$List$range = F2($elm$core$List$range_fn);
    var $elm$core$List$indexedMap_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; xs.b; i++, xs = xs.b) {
            var next = _List_Cons(A2(f, i, xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$indexedMap_fn_unwrapped = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; xs.b; i++, xs = xs.b) {
            var next = _List_Cons(f(i, xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$indexedMap = F2($elm$core$List$indexedMap_fn);
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (97 <= code) && (code <= 122);
    };
    var $elm$core$Char$isUpper = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 90) && (65 <= code);
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = function (_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 57) && (48 <= code);
    };
    var $elm$core$Char$isAlphaNum = function (_char) {
        return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf_fn = function (i, error) {
        return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    }, $elm$json$Json$Decode$errorOneOf = F2($elm$json$Json$Decode$errorOneOf_fn);
    var $elm$json$Json$Decode$errorToString = function (error) {
        return $elm$json$Json$Decode$errorToStringHelp_fn(error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp_fn = function (error, context) {
        errorToStringHelp: while (true) {
            switch (error.$) {
                case 0:
                    var f = error.a;
                    var err = error.b;
                    var isSimple = function () {
                        var _v1 = $elm$core$String$uncons(f);
                        if (_v1.$ === 1) {
                            return false;
                        }
                        else {
                            var _v2 = _v1.a;
                            var _char = _v2.a;
                            var rest = _v2.b;
                            return $elm$core$Char$isAlpha(_char) && _String_all_fn($elm$core$Char$isAlphaNum, rest);
                        }
                    }();
                    var fieldName = isSimple ? ("." + f) : ("['" + (f + "']"));
                    var $temp$error = err, $temp$context = _List_Cons(fieldName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 1:
                    var i = error.a;
                    var err = error.b;
                    var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                    var $temp$error = err, $temp$context = _List_Cons(indexName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 2:
                    var errors = error.a;
                    if (!errors.b) {
                        return "Ran into a Json.Decode.oneOf with no possibilities" + function () {
                            if (!context.b) {
                                return "!";
                            }
                            else {
                                return " at json" + $elm$core$String$join_fn("", $elm$core$List$reverse(context));
                            }
                        }();
                    }
                    else {
                        if (!errors.b.b) {
                            var err = errors.a;
                            var $temp$error = err, $temp$context = context;
                            error = $temp$error;
                            context = $temp$context;
                            continue errorToStringHelp;
                        }
                        else {
                            var starter = function () {
                                if (!context.b) {
                                    return "Json.Decode.oneOf";
                                }
                                else {
                                    return "The Json.Decode.oneOf at json" + $elm$core$String$join_fn("", $elm$core$List$reverse(context));
                                }
                            }();
                            var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                            return $elm$core$String$join_fn("\n\n", _List_Cons(introduction, $elm$core$List$indexedMap_fn($elm$json$Json$Decode$errorOneOf, errors)));
                        }
                    }
                default:
                    var msg = error.a;
                    var json = error.b;
                    var introduction = function () {
                        if (!context.b) {
                            return "Problem with the given value:\n\n";
                        }
                        else {
                            return "Problem with the value at json" + ($elm$core$String$join_fn("", $elm$core$List$reverse(context)) + ":\n\n    ");
                        }
                    }();
                    return introduction + ($elm$json$Json$Decode$indent(_Json_encode_fn(4, json)) + ("\n\n" + msg));
            }
        }
    }, $elm$json$Json$Decode$errorToStringHelp = F2($elm$json$Json$Decode$errorToStringHelp_fn);
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin_fn = function (a, b, c, d) {
        return { $: 0, a: a, b: b, c: c, d: d };
    }, $elm$core$Array$Array_elm_builtin = F4($elm$core$Array$Array_elm_builtin_fn);
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase_fn = function (base, number) {
        return _Basics_log(number) / _Basics_log(base);
    }, $elm$core$Basics$logBase = F2($elm$core$Basics$logBase_fn);
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling($elm$core$Basics$logBase_fn(2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = $elm$core$Array$Array_elm_builtin_fn(0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function (a) {
        return { $: 1, a: a };
    };
    var $elm$core$Basics$apL_fn = function (f, x) {
        return f(x);
    }, $elm$core$Basics$apL = F2($elm$core$Basics$apL_fn);
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$max_fn = function (x, y) {
        return (_Utils_cmp(x, y) > 0) ? x : y;
    }, $elm$core$Basics$max = F2($elm$core$Basics$max_fn);
    var $elm$core$Array$SubTree = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes_fn = function (nodes, acc) {
        compressNodes: while (true) {
            var _v0 = _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = _List_Cons($elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) {
                return $elm$core$List$reverse(newAcc);
            }
            else {
                var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes;
            }
        }
    }, $elm$core$Array$compressNodes = F2($elm$core$Array$compressNodes_fn);
    var $elm$core$Tuple$first = function (_v0) {
        var x = _v0.a;
        return x;
    };
    var $elm$core$Array$treeFromBuilder_fn = function (nodeList, nodeListSize) {
        treeFromBuilder: while (true) {
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) {
                return _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodeList).a;
            }
            else {
                var $temp$nodeList = $elm$core$Array$compressNodes_fn(nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
            }
        }
    }, $elm$core$Array$treeFromBuilder = F2($elm$core$Array$treeFromBuilder_fn);
    var $elm$core$Array$builderToArray_fn = function (reverseNodeList, builder) {
        if (!builder.x) {
            return $elm$core$Array$Array_elm_builtin_fn($elm$core$Elm$JsArray$length(builder.C), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.C);
        }
        else {
            var treeLen = builder.x * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor($elm$core$Basics$logBase_fn($elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.G) : builder.G;
            var tree = $elm$core$Array$treeFromBuilder_fn(correctNodeList, builder.x);
            return $elm$core$Array$Array_elm_builtin_fn($elm$core$Elm$JsArray$length(builder.C) + treeLen, $elm$core$Basics$max_fn(5, depth * $elm$core$Array$shiftStep), tree, builder.C);
        }
    }, $elm$core$Array$builderToArray = F2($elm$core$Array$builderToArray_fn);
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp_fn = function (fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while (true) {
            if (fromIndex < 0) {
                return $elm$core$Array$builderToArray_fn(false, { G: nodeList, x: (len / $elm$core$Array$branchFactor) | 0, C: tail });
            }
            else {
                var leaf = $elm$core$Array$Leaf(_JsArray_initialize_fn($elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = _List_Cons(leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
            }
        }
    }, $elm$core$Array$initializeHelp = F5($elm$core$Array$initializeHelp_fn);
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize_fn = function (len, fn) {
        if (len <= 0) {
            return $elm$core$Array$empty;
        }
        else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = _JsArray_initialize_fn(tailLen, len - tailLen, fn);
            var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
            return $elm$core$Array$initializeHelp_fn(fn, initialFromIndex, len, _List_Nil, tail);
        }
    }, $elm$core$Array$initialize = F2($elm$core$Array$initialize_fn);
    var $elm$core$Basics$True = 0;
    var $elm$core$Result$isOk = function (result) {
        if (!result.$) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$json$Json$Decode$value = _Json_decodeValue;
    var $author$project$Main$audioPortFromJS = _Platform_incomingPort("audioPortFromJS", $elm$json$Json$Decode$value);
    var $author$project$Main$audioPortToJS = _Platform_outgoingPort("audioPortToJS", $elm$core$Basics$identity);
    var $elm$core$Basics$composeR_fn = function (f, g, x) {
        return g(f(x));
    }, $elm$core$Basics$composeR = F3($elm$core$Basics$composeR_fn);
    var $MartinSStewart$elm_audio$Audio$UserMsg = function (a) {
        return { $: 1, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$AudioData = $elm$core$Basics$identity;
    var $MartinSStewart$elm_audio$Audio$audioData = function (_v0) {
        var model = _v0;
        return (new $$Record2(model.ak));
    };
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
        switch (handler.$) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            default:
                return 3;
        }
    };
    var $elm$browser$Browser$External = function (a) {
        return { $: 1, a: a };
    };
    var $elm$browser$Browser$Internal = function (a) {
        return { $: 0, a: a };
    };
    var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
    var $elm$url$Url$Http = 0;
    var $elm$url$Url$Https = 1;
    var $elm$url$Url$Url_fn = function (protocol, host, port_, path, query, fragment) {
        return { bv: fragment, ej: host, bG: path, eQ: port_, eT: protocol, bH: query };
    }, $elm$url$Url$Url = F6($elm$url$Url$Url_fn);
    var $elm$core$String$contains = _String_contains;
    var $elm$core$String$length = _String_length;
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$dropLeft_fn = function (n, string) {
        return (n < 1) ? string : _String_slice_fn(n, $elm$core$String$length(string), string);
    }, $elm$core$String$dropLeft = F2($elm$core$String$dropLeft_fn);
    var $elm$core$String$indexes = _String_indexes;
    var $elm$core$String$isEmpty = function (string) {
        return string === "";
    };
    var $elm$core$String$left_fn = function (n, string) {
        return (n < 1) ? "" : _String_slice_fn(0, n, string);
    }, $elm$core$String$left = F2($elm$core$String$left_fn);
    var $elm$core$String$toInt = _String_toInt;
    var $elm$url$Url$chompBeforePath_fn = function (protocol, path, params, frag, str) {
        if ($elm$core$String$isEmpty(str) || _String_contains_fn("@", str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn(":", str);
            if (!_v0.b) {
                return $elm$core$Maybe$Just($elm$url$Url$Url_fn(protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
            }
            else {
                if (!_v0.b.b) {
                    var i = _v0.a;
                    var _v1 = $elm$core$String$toInt($elm$core$String$dropLeft_fn(i + 1, str));
                    if (_v1.$ === 1) {
                        return $elm$core$Maybe$Nothing;
                    }
                    else {
                        var port_ = _v1;
                        return $elm$core$Maybe$Just($elm$url$Url$Url_fn(protocol, $elm$core$String$left_fn(i, str), port_, path, params, frag));
                    }
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        }
    }, $elm$url$Url$chompBeforePath = F5($elm$url$Url$chompBeforePath_fn);
    var $elm$url$Url$chompBeforeQuery_fn = function (protocol, params, frag, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("/", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforePath_fn(protocol, "/", params, frag, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforePath_fn(protocol, $elm$core$String$dropLeft_fn(i, str), params, frag, $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompBeforeQuery = F4($elm$url$Url$chompBeforeQuery_fn);
    var $elm$url$Url$chompBeforeFragment_fn = function (protocol, frag, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("?", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforeQuery_fn(protocol, $elm$core$Maybe$Nothing, frag, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforeQuery_fn(protocol, $elm$core$Maybe$Just($elm$core$String$dropLeft_fn(i + 1, str)), frag, $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompBeforeFragment = F3($elm$url$Url$chompBeforeFragment_fn);
    var $elm$url$Url$chompAfterProtocol_fn = function (protocol, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("#", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforeFragment_fn(protocol, $elm$core$Maybe$Nothing, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforeFragment_fn(protocol, $elm$core$Maybe$Just($elm$core$String$dropLeft_fn(i + 1, str)), $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompAfterProtocol = F2($elm$url$Url$chompAfterProtocol_fn);
    var $elm$core$String$startsWith = _String_startsWith;
    var $elm$url$Url$fromString = function (str) {
        return _String_startsWith_fn("http://", str) ? $elm$url$Url$chompAfterProtocol_fn(0, $elm$core$String$dropLeft_fn(7, str)) : (_String_startsWith_fn("https://", str) ? $elm$url$Url$chompAfterProtocol_fn(1, $elm$core$String$dropLeft_fn(8, str)) : $elm$core$Maybe$Nothing);
    };
    var $elm$core$Basics$never = function (_v0) {
        never: while (true) {
            var nvr = _v0;
            var $temp$_v0 = nvr;
            _v0 = $temp$_v0;
            continue never;
        }
    };
    var $elm$core$Task$Perform = $elm$core$Basics$identity;
    var $elm$core$Task$succeed = _Scheduler_succeed;
    var $elm$core$Task$init = $elm$core$Task$succeed(0);
    var $elm$core$Task$andThen = _Scheduler_andThen;
    var $elm$core$Task$map_fn = function (func, taskA) {
        return _Scheduler_andThen_fn(function (a) {
            return $elm$core$Task$succeed(func(a));
        }, taskA);
    }, $elm$core$Task$map = F2($elm$core$Task$map_fn);
    var $elm$core$Task$map2_fn = function (func, taskA, taskB) {
        return _Scheduler_andThen_fn(function (a) {
            return _Scheduler_andThen_fn(function (b) {
                return $elm$core$Task$succeed(A2(func, a, b));
            }, taskB);
        }, taskA);
    }, $elm$core$Task$map2_fn_unwrapped = function (func, taskA, taskB) {
        return _Scheduler_andThen_fn(function (a) {
            return _Scheduler_andThen_fn(function (b) {
                return $elm$core$Task$succeed(func(a, b));
            }, taskB);
        }, taskA);
    }, $elm$core$Task$map2 = F3($elm$core$Task$map2_fn);
    var $elm$core$Task$sequence = function (tasks) {
        return $elm$core$List$foldr_fn($elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks);
    };
    var $elm$core$Platform$sendToApp = _Platform_sendToApp;
    var $elm$core$Task$spawnCmd_fn = function (router, _v0) {
        var task = _v0;
        return _Scheduler_spawn(_Scheduler_andThen_fn($elm$core$Platform$sendToApp(router), task));
    }, $elm$core$Task$spawnCmd = F2($elm$core$Task$spawnCmd_fn);
    var $elm$core$Task$onEffects_fn = function (router, commands, state) {
        return $elm$core$Task$map_fn(function (_v0) {
            return 0;
        }, $elm$core$Task$sequence($elm$core$List$map_fn($elm$core$Task$spawnCmd(router), commands)));
    }, $elm$core$Task$onEffects = F3($elm$core$Task$onEffects_fn);
    var $elm$core$Task$onSelfMsg_fn = function (_v0, _v1, _v2) {
        return $elm$core$Task$succeed(0);
    }, $elm$core$Task$onSelfMsg = F3($elm$core$Task$onSelfMsg_fn);
    var $elm$core$Task$cmdMap_fn = function (tagger, _v0) {
        var task = _v0;
        return $elm$core$Task$map_fn(tagger, task);
    }, $elm$core$Task$cmdMap = F2($elm$core$Task$cmdMap_fn);
    _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
    var $elm$core$Task$command = _Platform_leaf("Task");
    var $elm$core$Task$perform_fn = function (toMessage, task) {
        return $elm$core$Task$command($elm$core$Task$map_fn(toMessage, task));
    }, $elm$core$Task$perform = F2($elm$core$Task$perform_fn);
    var $elm$browser$Browser$document = _Browser_document;
    var $MartinSStewart$elm_audio$Audio$getUserModel = function (_v0) {
        var model = _v0;
        return model.aW;
    };
    var $MartinSStewart$elm_audio$Audio$Model = $elm$core$Basics$identity;
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $MartinSStewart$elm_audio$Audio$audioStartTime = function (audio_) {
        return $ianmackenzie$elm_units$Duration$addTo_fn(audio_.ch, audio_.bE);
    };
    var $elm$json$Json$Encode$int = _Json_wrap;
    var $MartinSStewart$elm_audio$Audio$encodeBufferId = function (_v0) {
        var bufferId = _v0;
        return $elm$json$Json$Encode$int(bufferId);
    };
    var $elm$json$Json$Encode$float = _Json_wrap;
    var $MartinSStewart$elm_audio$Audio$encodeDuration_a0 = $ianmackenzie$elm_units$Duration$inMilliseconds, $MartinSStewart$elm_audio$Audio$encodeDuration_a1 = $elm$json$Json$Encode$float, $MartinSStewart$elm_audio$Audio$encodeDuration = A2($elm$core$Basics$composeR, $MartinSStewart$elm_audio$Audio$encodeDuration_a0, $MartinSStewart$elm_audio$Audio$encodeDuration_a1);
    var $elm$json$Json$Encode$null = _Json_encodeNull;
    var $elm$json$Json$Encode$object = function (pairs) {
        return _Json_wrap($elm$core$List$foldl_fn_unwrapped(function (_v0, obj) {
            var k = _v0.a;
            var v = _v0.b;
            return _Json_addField_fn(k, v, obj);
        }, _Json_emptyObject(0), pairs));
    };
    var $MartinSStewart$elm_audio$Audio$encodeLoopConfig = function (maybeLoop) {
        if (!maybeLoop.$) {
            var loop = maybeLoop.a;
            return $elm$json$Json$Encode$object(_List_fromArray([
                _Utils_Tuple2("loopStart", $elm$core$Basics$composeR_fn($MartinSStewart$elm_audio$Audio$encodeDuration_a0, $MartinSStewart$elm_audio$Audio$encodeDuration_a1, loop.ex)),
                _Utils_Tuple2("loopEnd", $elm$core$Basics$composeR_fn($MartinSStewart$elm_audio$Audio$encodeDuration_a0, $MartinSStewart$elm_audio$Audio$encodeDuration_a1, loop.ew))
            ]));
        }
        else {
            return $elm$json$Json$Encode$null;
        }
    };
    var $MartinSStewart$elm_audio$Audio$encodeTime_a0 = $elm$time$Time$posixToMillis, $MartinSStewart$elm_audio$Audio$encodeTime_a1 = $elm$json$Json$Encode$int, $MartinSStewart$elm_audio$Audio$encodeTime = A2($elm$core$Basics$composeR, $MartinSStewart$elm_audio$Audio$encodeTime_a0, $MartinSStewart$elm_audio$Audio$encodeTime_a1);
    var $elm$json$Json$Encode$list_fn = function (func, entries) {
        return _Json_wrap($elm$core$List$foldl_fn(_Json_addEntry(func), _Json_emptyArray(0), entries));
    }, $elm$json$Json$Encode$list = F2($elm$json$Json$Encode$list_fn);
    var $mgold$elm_nonempty_list$List$Nonempty$toList = function (_v0) {
        var x = _v0.a;
        var xs = _v0.b;
        return _List_Cons(x, xs);
    };
    var $MartinSStewart$elm_audio$Audio$encodeVolumeTimeline = function (volumeTimeline) {
        return $elm$json$Json$Encode$list_fn(function (_v0) {
            var time = _v0.a;
            var volume = _v0.b;
            return $elm$json$Json$Encode$object(_List_fromArray([
                _Utils_Tuple2("time", $elm$core$Basics$composeR_fn($MartinSStewart$elm_audio$Audio$encodeTime_a0, $MartinSStewart$elm_audio$Audio$encodeTime_a1, time)),
                _Utils_Tuple2("volume", $elm$json$Json$Encode$float(volume))
            ]));
        }, $mgold$elm_nonempty_list$List$Nonempty$toList(volumeTimeline));
    };
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $mgold$elm_nonempty_list$List$Nonempty$Nonempty_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $mgold$elm_nonempty_list$List$Nonempty$Nonempty = F2($mgold$elm_nonempty_list$List$Nonempty$Nonempty_fn);
    var $mgold$elm_nonempty_list$List$Nonempty$map_fn = function (f, _v0) {
        var x = _v0.a;
        var xs = _v0.b;
        return $mgold$elm_nonempty_list$List$Nonempty$Nonempty_fn(f(x), $elm$core$List$map_fn(f, xs));
    }, $mgold$elm_nonempty_list$List$Nonempty$map = F2($mgold$elm_nonempty_list$List$Nonempty$map_fn);
    var $elm$core$Tuple$mapFirst_fn = function (func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(func(x), y);
    }, $elm$core$Tuple$mapFirst = F2($elm$core$Tuple$mapFirst_fn);
    var $MartinSStewart$elm_audio$Audio$volumeTimelines = function (audio_) {
        return $elm$core$List$map_fn($mgold$elm_nonempty_list$List$Nonempty$map($elm$core$Tuple$mapFirst(function (a) {
            return $ianmackenzie$elm_units$Duration$addTo_fn(a, audio_.bE);
        })), audio_.cr);
    };
    var $MartinSStewart$elm_audio$Audio$encodeStartSound_fn = function (nodeGroupId, audio_) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("action", $elm$json$Json$Encode$string("startSound")),
            _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
            _Utils_Tuple2("bufferId", $MartinSStewart$elm_audio$Audio$encodeBufferId($MartinSStewart$elm_audio$Audio$audioSourceBufferId(audio_.bf))),
            _Utils_Tuple2("startTime", $elm$core$Basics$composeR_fn($MartinSStewart$elm_audio$Audio$encodeTime_a0, $MartinSStewart$elm_audio$Audio$encodeTime_a1, $MartinSStewart$elm_audio$Audio$audioStartTime(audio_))),
            _Utils_Tuple2("startAt", $elm$core$Basics$composeR_fn($MartinSStewart$elm_audio$Audio$encodeDuration_a0, $MartinSStewart$elm_audio$Audio$encodeDuration_a1, audio_.aV)),
            _Utils_Tuple2("volume", $elm$json$Json$Encode$float(audio_.bO)),
            _Utils_Tuple2("volumeTimelines", $elm$json$Json$Encode$list_fn($MartinSStewart$elm_audio$Audio$encodeVolumeTimeline, $MartinSStewart$elm_audio$Audio$volumeTimelines(audio_))),
            _Utils_Tuple2("loop", $MartinSStewart$elm_audio$Audio$encodeLoopConfig(audio_.a7)),
            _Utils_Tuple2("playbackRate", $elm$json$Json$Encode$float(audio_.a9))
        ]));
    }, $MartinSStewart$elm_audio$Audio$encodeStartSound = F2($MartinSStewart$elm_audio$Audio$encodeStartSound_fn);
    var $elm$core$List$append_fn = function (xs, ys) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; xs.b; xs = xs.b) {
            var next = _List_Cons(xs.a, _List_Nil);
            end.b = next;
            end = next;
        }
        end.b = ys;
        return tmp.b;
    }, $elm$core$List$append = F2($elm$core$List$append_fn);
    var $elm$core$List$concat = function (lists) {
        if (!lists.b) {
            return _List_Nil;
        }
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; lists.b.b; lists = lists.b) {
            var xs = lists.a;
            for (; xs.b; xs = xs.b) {
                var next = _List_Cons(xs.a, _List_Nil);
                end.b = next;
                end = next;
            }
        }
        end.b = lists.a;
        return tmp.b;
    };
    var $ianmackenzie$elm_units$Quantity$plus_fn = function (_v0, _v1) {
        var y = _v0;
        var x = _v1;
        return x + y;
    }, $ianmackenzie$elm_units$Quantity$plus = F2($ianmackenzie$elm_units$Quantity$plus_fn);
    var $MartinSStewart$elm_audio$Audio$flattenAudio = function (audio_) {
        switch (audio_.$) {
            case 0:
                var group_ = audio_.a;
                return $elm$core$List$concat($elm$core$List$map_fn($MartinSStewart$elm_audio$Audio$flattenAudio, group_));
            case 1:
                var source = audio_.a.bf;
                var startTime = audio_.a.ch;
                var settings = audio_.a.e7;
                return _List_fromArray([
                    (new $$Record3(settings.a7, $ianmackenzie$elm_units$Quantity$zero, settings.a9, source, settings.aV, startTime, 1, _List_Nil))
                ]);
            default:
                var effect = audio_.a;
                var _v1 = effect.cE;
                switch (_v1.$) {
                    case 0:
                        var scaleVolume_ = _v1.a;
                        return $elm$core$List$map_fn(function (a) {
                            return function () {
                                var $r = a.$c();
                                $r.bO = scaleVolume_.e3 * a.bO;
                                return $r;
                            }();
                        }, $MartinSStewart$elm_audio$Audio$flattenAudio(effect.bk));
                    case 1:
                        var volumeAt = _v1.a.fo;
                        return $elm$core$List$map_fn(function (a) {
                            return function () {
                                var $r = a.$c();
                                $r.cr = _List_Cons(volumeAt, a.cr);
                                return $r;
                            }();
                        }, $MartinSStewart$elm_audio$Audio$flattenAudio(effect.bk));
                    default:
                        var duration = _v1.a;
                        return $elm$core$List$map_fn(function (a) {
                            return function () {
                                var $r = a.$c();
                                $r.bE = $ianmackenzie$elm_units$Quantity$plus_fn(duration, a.bE);
                                return $r;
                            }();
                        }, $MartinSStewart$elm_audio$Audio$flattenAudio(effect.bk));
                }
        }
    };
    var $elm$core$Dict$Black = 1;
    var $elm$core$Dict$RBNode_elm_builtin_fn = function (a, b, c, d, e) {
        return { $: -1, a: a, b: b, c: c, d: d, e: e };
    }, $elm$core$Dict$RBNode_elm_builtin = F5($elm$core$Dict$RBNode_elm_builtin_fn);
    var $elm$core$Dict$RBEmpty_elm_builtin = { $: -2 };
    var $elm$core$Dict$Red = 0;
    var $elm$core$Dict$balance_fn = function (color, key, value, left, right) {
        if ((right.$ === -1) && (!right.a)) {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if ((left.$ === -1) && (!left.a)) {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, $elm$core$Dict$RBNode_elm_builtin_fn(1, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, rK, rV, rLeft, rRight));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, rK, rV, $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, left, rLeft), rRight);
            }
        }
        else {
            if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
                var _v5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _v6 = left.d;
                var _v7 = _v6.a;
                var llK = _v6.b;
                var llV = _v6.c;
                var llLeft = _v6.d;
                var llRight = _v6.e;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_fn(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, key, value, lRight, right));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, left, right);
            }
        }
    }, $elm$core$Dict$balance = F5($elm$core$Dict$balance_fn);
    var $elm$core$Dict$insertHelp_fn = function (key, value, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        }
        else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = _Utils_compare_fn(key, nKey);
            switch (_v1) {
                case 0:
                    return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$insertHelp_fn(key, value, nLeft), nRight);
                case 1:
                    return $elm$core$Dict$RBNode_elm_builtin_fn(nColor, nKey, value, nLeft, nRight);
                default:
                    return $elm$core$Dict$balance_fn(nColor, nKey, nValue, nLeft, $elm$core$Dict$insertHelp_fn(key, value, nRight));
            }
        }
    }, $elm$core$Dict$insertHelp = F3($elm$core$Dict$insertHelp_fn);
    var $elm$core$Dict$insert_fn = function (key, value, dict) {
        var _v0 = $elm$core$Dict$insertHelp_fn(key, value, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$insert = F3($elm$core$Dict$insert_fn);
    var $MartinSStewart$elm_audio$Audio$encodeSetLoopConfig_fn = function (nodeGroupId, loop) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
            _Utils_Tuple2("action", $elm$json$Json$Encode$string("setLoopConfig")),
            _Utils_Tuple2("loop", $MartinSStewart$elm_audio$Audio$encodeLoopConfig(loop))
        ]));
    }, $MartinSStewart$elm_audio$Audio$encodeSetLoopConfig = F2($MartinSStewart$elm_audio$Audio$encodeSetLoopConfig_fn);
    var $MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate_fn = function (nodeGroupId, playbackRate) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
            _Utils_Tuple2("action", $elm$json$Json$Encode$string("setPlaybackRate")),
            _Utils_Tuple2("playbackRate", $elm$json$Json$Encode$float(playbackRate))
        ]));
    }, $MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate = F2($MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate_fn);
    var $MartinSStewart$elm_audio$Audio$encodeSetVolume_fn = function (nodeGroupId, volume) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
            _Utils_Tuple2("action", $elm$json$Json$Encode$string("setVolume")),
            _Utils_Tuple2("volume", $elm$json$Json$Encode$float(volume))
        ]));
    }, $MartinSStewart$elm_audio$Audio$encodeSetVolume = F2($MartinSStewart$elm_audio$Audio$encodeSetVolume_fn);
    var $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt_fn = function (nodeGroupId, volumeTimelines_) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
            _Utils_Tuple2("action", $elm$json$Json$Encode$string("setVolumeAt")),
            _Utils_Tuple2("volumeAt", $elm$json$Json$Encode$list_fn($MartinSStewart$elm_audio$Audio$encodeVolumeTimeline, volumeTimelines_))
        ]));
    }, $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt = F2($MartinSStewart$elm_audio$Audio$encodeSetVolumeAt_fn);
    var $MartinSStewart$elm_audio$Audio$encodeStopSound = function (nodeGroupId) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("action", $elm$json$Json$Encode$string("stopSound")),
            _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId))
        ]));
    };
    var $elm$core$List$filter_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; xs.b; xs = xs.b) {
            if (f(xs.a)) {
                var next = _List_Cons(xs.a, _List_Nil);
                end.b = next;
                end = next;
            }
        }
        return tmp.
            b;
    }, $elm$core$List$filter = F2($elm$core$List$filter_fn);
    var $elm$core$List$maybeCons_fn = function (f, mx, xs) {
        var _v0 = f(mx);
        if (!_v0.$) {
            var x = _v0.a;
            return _List_Cons(x, xs);
        }
        else {
            return xs;
        }
    }, $elm$core$List$maybeCons = F3($elm$core$List$maybeCons_fn);
    var $elm$core$List$filterMap_fn = function (f, xs) {
        return $elm$core$List$foldr_fn($elm$core$List$maybeCons(f), _List_Nil, xs);
    }, $elm$core$List$filterMap = F2($elm$core$List$filterMap_fn);
    var $MartinSStewart$elm_audio$Audio$find_fn = function (predicate, list) {
        find: while (true) {
            if (!list.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var first = list.a;
                var rest = list.b;
                if (predicate(first)) {
                    return $elm$core$Maybe$Just(first);
                }
                else {
                    var $temp$predicate = predicate, $temp$list = rest;
                    predicate = $temp$predicate;
                    list = $temp$list;
                    continue find;
                }
            }
        }
    }, $MartinSStewart$elm_audio$Audio$find = F2($MartinSStewart$elm_audio$Audio$find_fn);
    var $elm$core$Tuple$pair_fn = function (a, b) {
        return _Utils_Tuple2(a, b);
    }, $elm$core$Tuple$pair = F2($elm$core$Tuple$pair_fn);
    var $elm$core$Dict$getMin = function (dict) {
        getMin: while (true) {
            if ((dict.$ === -1) && (dict.d.$ === -1)) {
                var left = dict.d;
                var $temp$dict = left;
                dict = $temp$dict;
                continue getMin;
            }
            else {
                return dict;
            }
        }
    };
    var $elm$core$Dict$moveRedLeft = function (dict) {
        if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
            if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var lLeft = _v1.d;
                var lRight = _v1.e;
                var _v2 = dict.e;
                var rClr = _v2.a;
                var rK = _v2.b;
                var rV = _v2.c;
                var rLeft = _v2.d;
                var _v3 = rLeft.a;
                var rlK = rLeft.b;
                var rlV = rLeft.c;
                var rlL = rLeft.d;
                var rlR = rLeft.e;
                var rRight = _v2.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, rlK, rlV, $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), rlL), $elm$core$Dict$RBNode_elm_builtin_fn(1, rK, rV, rlR, rRight));
            }
            else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v4 = dict.d;
                var lClr = _v4.a;
                var lK = _v4.b;
                var lV = _v4.c;
                var lLeft = _v4.d;
                var lRight = _v4.e;
                var _v5 = dict.e;
                var rClr = _v5.a;
                var rK = _v5.b;
                var rV = _v5.c;
                var rLeft = _v5.d;
                var rRight = _v5.e;
                if (clr === 1) {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
            }
        }
        else {
            return dict;
        }
    };
    var $elm$core$Dict$moveRedRight = function (dict) {
        if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
            if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var _v2 = _v1.d;
                var _v3 = _v2.a;
                var llK = _v2.b;
                var llV = _v2.c;
                var llLeft = _v2.d;
                var llRight = _v2.e;
                var lRight = _v1.e;
                var _v4 = dict.e;
                var rClr = _v4.a;
                var rK = _v4.b;
                var rV = _v4.c;
                var rLeft = _v4.d;
                var rRight = _v4.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_fn(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, lRight, $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight)));
            }
            else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v5 = dict.d;
                var lClr = _v5.a;
                var lK = _v5.b;
                var lV = _v5.c;
                var lLeft = _v5.d;
                var lRight = _v5.e;
                var _v6 = dict.e;
                var rClr = _v6.a;
                var rK = _v6.b;
                var rV = _v6.c;
                var rLeft = _v6.d;
                var rRight = _v6.e;
                if (clr === 1) {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
            }
        }
        else {
            return dict;
        }
    };
    var $elm$core$Dict$removeHelpPrepEQGT_fn = function (targetKey, dict, color, key, value, left, right) {
        if ((left.$ === -1) && (!left.a)) {
            var _v1 = left.a;
            var lK = left.b;
            var lV = left.c;
            var lLeft = left.d;
            var lRight = left.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(color, lK, lV, lLeft, $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, lRight, right));
        }
        else {
            _v2$2: while (true) {
                if ((right.$ === -1) && (right.a === 1)) {
                    if (right.d.$ === -1) {
                        if (right.d.a === 1) {
                            var _v3 = right.a;
                            var _v4 = right.d;
                            var _v5 = _v4.a;
                            return $elm$core$Dict$moveRedRight(dict);
                        }
                        else {
                            break _v2$2;
                        }
                    }
                    else {
                        var _v6 = right.a;
                        var _v7 = right.d;
                        return $elm$core$Dict$moveRedRight(dict);
                    }
                }
                else {
                    break _v2$2;
                }
            }
            return dict;
        }
    }, $elm$core$Dict$removeHelpPrepEQGT = F7($elm$core$Dict$removeHelpPrepEQGT_fn);
    var $elm$core$Dict$removeMin = function (dict) {
        if ((dict.$ === -1) && (dict.d.$ === -1)) {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var lColor = left.a;
            var lLeft = left.d;
            var right = dict.e;
            if (lColor === 1) {
                if ((lLeft.$ === -1) && (!lLeft.a)) {
                    var _v3 = lLeft.a;
                    return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeMin(left), right);
                }
                else {
                    var _v4 = $elm$core$Dict$moveRedLeft(dict);
                    if (_v4.$ === -1) {
                        var nColor = _v4.a;
                        var nKey = _v4.b;
                        var nValue = _v4.c;
                        var nLeft = _v4.d;
                        var nRight = _v4.e;
                        return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
                    }
                    else {
                        return $elm$core$Dict$RBEmpty_elm_builtin;
                    }
                }
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeMin(left), right);
            }
        }
        else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
    };
    var $elm$core$Dict$removeHelp_fn = function (targetKey, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_cmp(targetKey, key) < 0) {
                if ((left.$ === -1) && (left.a === 1)) {
                    var _v4 = left.a;
                    var lLeft = left.d;
                    if ((lLeft.$ === -1) && (!lLeft.a)) {
                        var _v6 = lLeft.a;
                        return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeHelp_fn(targetKey, left), right);
                    }
                    else {
                        var _v7 = $elm$core$Dict$moveRedLeft(dict);
                        if (_v7.$ === -1) {
                            var nColor = _v7.a;
                            var nKey = _v7.b;
                            var nValue = _v7.c;
                            var nLeft = _v7.d;
                            var nRight = _v7.e;
                            return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$removeHelp_fn(targetKey, nLeft), nRight);
                        }
                        else {
                            return $elm$core$Dict$RBEmpty_elm_builtin;
                        }
                    }
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeHelp_fn(targetKey, left), right);
                }
            }
            else {
                return $elm$core$Dict$removeHelpEQGT_fn(targetKey, $elm$core$Dict$removeHelpPrepEQGT_fn(targetKey, dict, color, key, value, left, right));
            }
        }
    }, $elm$core$Dict$removeHelp = F2($elm$core$Dict$removeHelp_fn);
    var $elm$core$Dict$removeHelpEQGT_fn = function (targetKey, dict) {
        if (dict.$ === -1) {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_eq(targetKey, key)) {
                var _v1 = $elm$core$Dict$getMin(right);
                if (_v1.$ === -1) {
                    var minKey = _v1.b;
                    var minValue = _v1.c;
                    return $elm$core$Dict$balance_fn(color, minKey, minValue, left, $elm$core$Dict$removeMin(right));
                }
                else {
                    return $elm$core$Dict$RBEmpty_elm_builtin;
                }
            }
            else {
                return $elm$core$Dict$balance_fn(color, key, value, left, $elm$core$Dict$removeHelp_fn(targetKey, right));
            }
        }
        else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
    }, $elm$core$Dict$removeHelpEQGT = F2($elm$core$Dict$removeHelpEQGT_fn);
    var $elm$core$Dict$remove_fn = function (key, dict) {
        var _v0 = $elm$core$Dict$removeHelp_fn(key, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$remove = F2($elm$core$Dict$remove_fn);
    var $elm$core$List$drop_fn = function (n, list) {
        drop: while (true) {
            if (n <= 0) {
                return list;
            }
            else {
                if (!list.b) {
                    return list;
                }
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs;
                    n = $temp$n;
                    list = $temp$list;
                    continue drop;
                }
            }
        }
    }, $elm$core$List$drop = F2($elm$core$List$drop_fn);
    var $elm$core$List$tail = function (list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(xs);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$core$List$takeReverse_fn = function (n, list, kept) {
        takeReverse: while (true) {
            if (n <= 0) {
                return kept;
            }
            else {
                if (!list.b) {
                    return kept;
                }
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs, $temp$kept = _List_Cons(x, kept);
                    n = $temp$n;
                    list = $temp$list;
                    kept = $temp$kept;
                    continue takeReverse;
                }
            }
        }
    }, $elm$core$List$takeReverse = F3($elm$core$List$takeReverse_fn);
    var $elm$core$List$takeTailRec_fn = function (n, list) {
        return $elm$core$List$reverse($elm$core$List$takeReverse_fn(n, list, _List_Nil));
    }, $elm$core$List$takeTailRec = F2($elm$core$List$takeTailRec_fn);
    var $elm$core$List$takeFast_fn = function (ctr, n, list) {
        if (n <= 0) {
            return _List_Nil;
        }
        else {
            var _v0 = _Utils_Tuple2(n, list);
            _v0$1: while (true) {
                _v0$5: while (true) {
                    if (!_v0.b.b) {
                        return list;
                    }
                    else {
                        if (_v0.b.b.b) {
                            switch (_v0.a) {
                                case 1:
                                    break _v0$1;
                                case 2:
                                    var _v2 = _v0.b;
                                    var x = _v2.a;
                                    var _v3 = _v2.b;
                                    var y = _v3.a;
                                    return _List_fromArray([x, y]);
                                case 3:
                                    if (_v0.b.b.b.b) {
                                        var _v4 = _v0.b;
                                        var x = _v4.a;
                                        var _v5 = _v4.b;
                                        var y = _v5.a;
                                        var _v6 = _v5.b;
                                        var z = _v6.a;
                                        return _List_fromArray([x, y, z]);
                                    }
                                    else {
                                        break _v0$5;
                                    }
                                default:
                                    if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
                                        var _v7 = _v0.b;
                                        var x = _v7.a;
                                        var _v8 = _v7.b;
                                        var y = _v8.a;
                                        var _v9 = _v8.b;
                                        var z = _v9.a;
                                        var _v10 = _v9.b;
                                        var w = _v10.a;
                                        var tl = _v10.b;
                                        return (ctr > 1000) ? _List_Cons(x, _List_Cons(y, _List_Cons(z, _List_Cons(w, $elm$core$List$takeTailRec_fn(n - 4, tl))))) : _List_Cons(x, _List_Cons(y, _List_Cons(z, _List_Cons(w, $elm$core$List$takeFast_fn(ctr + 1, n - 4, tl)))));
                                    }
                                    else {
                                        break _v0$5;
                                    }
                            }
                        }
                        else {
                            if (_v0.a === 1) {
                                break _v0$1;
                            }
                            else {
                                break _v0$5;
                            }
                        }
                    }
                }
                return list;
            }
            var _v1 = _v0.b;
            var x = _v1.a;
            return _List_fromArray([x]);
        }
    }, $elm$core$List$takeFast = F3($elm$core$List$takeFast_fn);
    var $elm$core$List$take_fn = function (n, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; i < n && xs.b; xs = xs.
            b, i++) {
            var next = _List_Cons(xs.a, _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$take = F2($elm$core$List$take_fn);
    var $MartinSStewart$elm_audio$Audio$removeAt_fn = function (index, l) {
        if (index < 0) {
            return l;
        }
        else {
            var tail = $elm$core$List$tail($elm$core$List$drop_fn(index, l));
            var head = $elm$core$List$take_fn(index, l);
            if (tail.$ === 1) {
                return l;
            }
            else {
                var t = tail.a;
                return $elm$core$List$append_fn(head, t);
            }
        }
    }, $MartinSStewart$elm_audio$Audio$removeAt = F2($MartinSStewart$elm_audio$Audio$removeAt_fn);
    var $MartinSStewart$elm_audio$Audio$updateAudioState_fn = function (_v0, _v1) {
        var nodeGroupId = _v0.a;
        var audioGroup = _v0.b;
        var flattenedAudio = _v1.a;
        var audioState = _v1.b;
        var json = _v1.c;
        var validAudio = $elm$core$List$filter_fn(function (_v7) {
            var a = _v7.b;
            return _Utils_eq(a.bf, audioGroup.bf) && (_Utils_eq($MartinSStewart$elm_audio$Audio$audioStartTime(a), $MartinSStewart$elm_audio$Audio$audioStartTime(audioGroup)) && _Utils_eq(a.aV, audioGroup.aV));
        }, $elm$core$List$indexedMap_fn($elm$core$Tuple$pair, flattenedAudio));
        var _v2 = $MartinSStewart$elm_audio$Audio$find_fn(function (_v3) {
            var a = _v3.b;
            return _Utils_eq(a, audioGroup);
        }, validAudio);
        if (!_v2.$) {
            var _v4 = _v2.a;
            var index = _v4.a;
            return _Utils_Tuple3($MartinSStewart$elm_audio$Audio$removeAt_fn(index, flattenedAudio), audioState, json);
        }
        else {
            if (validAudio.b) {
                var _v6 = validAudio.a;
                var index = _v6.a;
                var a = _v6.b;
                var encodeValue = F2(function (getter, encoder) {
                    return _Utils_eq(getter(audioGroup), getter(a)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(A2(encoder, nodeGroupId, getter(a)));
                });
                var effects = $elm$core$List$filterMap_fn($elm$core$Basics$identity, _List_fromArray([
                    A2(encodeValue, function ($) {
                        return $.bO;
                    }, $MartinSStewart$elm_audio$Audio$encodeSetVolume),
                    A2(encodeValue, function ($) {
                        return $.a7;
                    }, $MartinSStewart$elm_audio$Audio$encodeSetLoopConfig),
                    A2(encodeValue, function ($) {
                        return $.a9;
                    }, $MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate),
                    A2(encodeValue, $MartinSStewart$elm_audio$Audio$volumeTimelines, $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt)
                ]));
                return _Utils_Tuple3($MartinSStewart$elm_audio$Audio$removeAt_fn(index, flattenedAudio), $elm$core$Dict$insert_fn(nodeGroupId, a, audioState), _Utils_ap(effects, json));
            }
            else {
                return _Utils_Tuple3(flattenedAudio, $elm$core$Dict$remove_fn(nodeGroupId, audioState), _List_Cons($MartinSStewart$elm_audio$Audio$encodeStopSound(nodeGroupId), json));
            }
        }
    }, $MartinSStewart$elm_audio$Audio$updateAudioState = F2($MartinSStewart$elm_audio$Audio$updateAudioState_fn);
    var $MartinSStewart$elm_audio$Audio$diffAudioState_fn = function (nodeGroupIdCounter, audioState, newAudio) {
        var _v0 = $elm$core$List$foldl_fn($MartinSStewart$elm_audio$Audio$updateAudioState, _Utils_Tuple3($MartinSStewart$elm_audio$Audio$flattenAudio(newAudio), audioState, _List_Nil), $elm$core$Dict$toList(audioState));
        var newAudioLeft = _v0.a;
        var newAudioState = _v0.b;
        var json2 = _v0.c;
        var _v1 = $elm$core$List$foldl_fn_unwrapped(function (audioLeft, _v2) {
            var counter = _v2.a;
            var audioState_ = _v2.b;
            var json_ = _v2.c;
            return _Utils_Tuple3(counter + 1, $elm$core$Dict$insert_fn(counter, audioLeft, audioState_), _List_Cons($MartinSStewart$elm_audio$Audio$encodeStartSound_fn(counter, audioLeft), json_));
        }, _Utils_Tuple3(nodeGroupIdCounter, newAudioState, json2), newAudioLeft);
        var newNodeGroupIdCounter = _v1.a;
        var newAudioState2 = _v1.b;
        var json3 = _v1.c;
        return _Utils_Tuple3(newAudioState2, newNodeGroupIdCounter, json3);
    }, $MartinSStewart$elm_audio$Audio$diffAudioState = F3($MartinSStewart$elm_audio$Audio$diffAudioState_fn);
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest_fn = function (index, audioLoad) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("audioUrl", $elm$json$Json$Encode$string(audioLoad.bV)),
            _Utils_Tuple2("requestId", $elm$json$Json$Encode$int(index))
        ]));
    }, $MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest = F2($MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest_fn);
    var $MartinSStewart$elm_audio$Audio$flattenAudioCmd = function (audioCmd) {
        if (!audioCmd.$) {
            var data = audioCmd.a;
            return _List_fromArray([data]);
        }
        else {
            var list = audioCmd.a;
            return $elm$core$List$concat($elm$core$List$map_fn($MartinSStewart$elm_audio$Audio$flattenAudioCmd, list));
        }
    };
    var $elm$core$Dict$fromList = function (assocs) {
        return $elm$core$List$foldl_fn_unwrapped(function (_v0, dict) {
            var key = _v0.a;
            var value = _v0.b;
            return $elm$core$Dict$insert_fn(key, value, dict);
        }, $elm$core$Dict$empty, assocs);
    };
    var $elm$core$Dict$foldl_fn = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldl_fn(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl_fn_unwrapped = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = func(key, value, $elm$core$Dict$foldl_fn_unwrapped(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl = F3($elm$core$Dict$foldl_fn);
    var $elm$core$Dict$union_fn = function (t1, t2) {
        return $elm$core$Dict$foldl_fn($elm$core$Dict$insert, t2, t1);
    }, $elm$core$Dict$union = F2($elm$core$Dict$union_fn);
    var $MartinSStewart$elm_audio$Audio$encodeAudioCmd_fn = function (_v0, audioCmd) {
        var model = _v0;
        var flattenedAudioCmd = $MartinSStewart$elm_audio$Audio$flattenAudioCmd(audioCmd);
        var newPendingRequests = $elm$core$List$indexedMap_fn_unwrapped(function (index, request) {
            return _Utils_Tuple2(model.bc + index, request);
        }, flattenedAudioCmd);
        return _Utils_Tuple2(function () {
            var $r = model.$c();
            $r.M = $elm$core$Dict$union_fn(model.M, $elm$core$Dict$fromList(newPendingRequests));
            $r.bc = model.bc + $elm$core$List$length(flattenedAudioCmd);
            return $r;
        }(), $elm$json$Json$Encode$list_fn($elm$core$Basics$identity, $elm$core$List$map_fn(function (_v1) {
            var index = _v1.a;
            var value = _v1.b;
            return $MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest_fn(index, value);
        }, newPendingRequests)));
    }, $MartinSStewart$elm_audio$Audio$encodeAudioCmd = F2($MartinSStewart$elm_audio$Audio$encodeAudioCmd_fn);
    var $elm$core$Platform$Cmd$map = _Platform_map;
    var $MartinSStewart$elm_audio$Audio$initHelper_fn = function (audioPort, audioFunc, _v0) {
        var model = _v0.a;
        var cmds = _v0.b;
        var audioCmds = _v0.c;
        var _v1 = $MartinSStewart$elm_audio$Audio$diffAudioState_fn(0, $elm$core$Dict$empty, A2(audioFunc, (new $$Record2($elm$core$Dict$empty)), model));
        var audioState = _v1.a;
        var newNodeGroupIdCounter = _v1.b;
        var json = _v1.c;
        var initialModel = (new $$Record4(audioState, newNodeGroupIdCounter, $elm$core$Dict$empty, 0, $elm$core$Maybe$Nothing, $elm$core$Dict$empty, model));
        var _v2 = $MartinSStewart$elm_audio$Audio$encodeAudioCmd_fn(initialModel, audioCmds);
        var initialModel2 = _v2.a;
        var audioRequests = _v2.b;
        var portMessage = $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("audio", $elm$json$Json$Encode$list_fn($elm$core$Basics$identity, json)),
            _Utils_Tuple2("audioCmds", audioRequests)
        ]));
        return _Utils_Tuple2(initialModel2, $elm$core$Platform$Cmd$batch(_List_fromArray([
            _Platform_map_fn($MartinSStewart$elm_audio$Audio$UserMsg, cmds),
            audioPort(portMessage)
        ])));
    }, $MartinSStewart$elm_audio$Audio$initHelper_fn_unwrapped = function (audioPort, audioFunc, _v0) {
        var model = _v0.a;
        var cmds = _v0.b;
        var audioCmds = _v0.c;
        var _v1 = $MartinSStewart$elm_audio$Audio$diffAudioState_fn(0, $elm$core$Dict$empty, audioFunc((new $$Record2($elm$core$Dict$empty)), model));
        var audioState = _v1.a;
        var newNodeGroupIdCounter = _v1.b;
        var json = _v1.c;
        var initialModel = (new $$Record4(audioState, newNodeGroupIdCounter, $elm$core$Dict$empty, 0, $elm$core$Maybe$Nothing, $elm$core$Dict$empty, model));
        var _v2 = $MartinSStewart$elm_audio$Audio$encodeAudioCmd_fn(initialModel, audioCmds);
        var initialModel2 = _v2.a;
        var audioRequests = _v2.b;
        var portMessage = $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("audio", $elm$json$Json$Encode$list_fn($elm$core$Basics$identity, json)),
            _Utils_Tuple2("audioCmds", audioRequests)
        ]));
        return _Utils_Tuple2(initialModel2, $elm$core$Platform$Cmd$batch(_List_fromArray([
            _Platform_map_fn($MartinSStewart$elm_audio$Audio$UserMsg, cmds),
            audioPort(portMessage)
        ])));
    }, $MartinSStewart$elm_audio$Audio$initHelper = F3($MartinSStewart$elm_audio$Audio$initHelper_fn);
    var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
    var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
    var $elm$core$Platform$Sub$batch = _Platform_batch;
    var $MartinSStewart$elm_audio$Audio$FromJSMsg = function (a) {
        return { $: 0, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$JsonParseError = function (a) {
        return { $: 3, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$AudioLoadFailed = function (a) {
        return { $: 1, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$AudioLoadSuccess = function (a) {
        return { $: 0, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$InitAudioContext = function (a) {
        return { $: 2, a: a };
    };
    var $elm$json$Json$Decode$andThen = _Json_andThen;
    var $MartinSStewart$elm_audio$Audio$BufferId = $elm$core$Basics$identity;
    var $elm$json$Json$Decode$int = _Json_decodeInt;
    var $MartinSStewart$elm_audio$Audio$decodeBufferId = _Json_map1_fn($elm$core$Basics$identity, $elm$json$Json$Decode$int);
    var $MartinSStewart$elm_audio$Audio$FailedToDecode = 0;
    var $MartinSStewart$elm_audio$Audio$NetworkError = 1;
    var $MartinSStewart$elm_audio$Audio$UnknownError = 2;
    var $elm$json$Json$Decode$string = _Json_decodeString;
    var $MartinSStewart$elm_audio$Audio$decodeLoadError = _Json_andThen_fn(function (value) {
        switch (value) {
            case "NetworkError":
                return $elm$json$Json$Decode$succeed(1);
            case "MediaDecodeAudioDataUnknownContentType":
                return $elm$json$Json$Decode$succeed(0);
            case "DOMException: The buffer passed to decodeAudioData contains an unknown content type.":
                return $elm$json$Json$Decode$succeed(0);
            default:
                return $elm$json$Json$Decode$succeed(2);
        }
    }, $elm$json$Json$Decode$string);
    var $elm$json$Json$Decode$field = _Json_decodeField;
    var $elm$json$Json$Decode$float = _Json_decodeFloat;
    var $elm$json$Json$Decode$map3 = _Json_map3;
    var $MartinSStewart$elm_audio$Audio$decodeFromJSMsg = _Json_andThen_fn(function (value) {
        switch (value) {
            case 0:
                return _Json_map2_fn(F2(function (requestId, error) {
                    return $MartinSStewart$elm_audio$Audio$AudioLoadFailed({ b3: error, cR: requestId });
                }), _Json_decodeField_fn("requestId", $elm$json$Json$Decode$int), _Json_decodeField_fn("error", $MartinSStewart$elm_audio$Audio$decodeLoadError));
            case 1:
                return _Json_map3_fn(F3(function (requestId, bufferId, duration) {
                    return $MartinSStewart$elm_audio$Audio$AudioLoadSuccess({
                        bY: bufferId,
                        z: $ianmackenzie$elm_units$Duration$seconds(duration),
                        cR: requestId
                    });
                }), _Json_decodeField_fn("requestId", $elm$json$Json$Decode$int), _Json_decodeField_fn("bufferId", $MartinSStewart$elm_audio$Audio$decodeBufferId), _Json_decodeField_fn("durationInSeconds", $elm$json$Json$Decode$float));
            case 2:
                return _Json_map1_fn(function (samplesPerSecond) {
                    return $MartinSStewart$elm_audio$Audio$InitAudioContext((new $$Record5(samplesPerSecond)));
                }, _Json_decodeField_fn("samplesPerSecond", $elm$json$Json$Decode$int));
            default:
                return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$JsonParseError({
                    b3: "Type " + ($elm$core$String$fromInt(value) + " not handled.")
                }));
        }
    }, _Json_decodeField_fn("type", $elm$json$Json$Decode$int));
    var $elm$json$Json$Decode$decodeValue = _Json_run;
    var $MartinSStewart$elm_audio$Audio$fromJSPortSub = function (json) {
        var _v0 = _Json_run_fn($MartinSStewart$elm_audio$Audio$decodeFromJSMsg, json);
        if (!_v0.$) {
            var value = _v0.a;
            return $MartinSStewart$elm_audio$Audio$FromJSMsg(value);
        }
        else {
            var error = _v0.a;
            return $MartinSStewart$elm_audio$Audio$FromJSMsg($MartinSStewart$elm_audio$Audio$JsonParseError({
                b3: $elm$json$Json$Decode$errorToString(error)
            }));
        }
    };
    var $elm$core$Platform$Sub$map = _Platform_map;
    var $MartinSStewart$elm_audio$Audio$subscriptions_fn = function (app, _v0) {
        var model = _v0;
        return $elm$core$Platform$Sub$batch(_List_fromArray([
            _Platform_map_fn($MartinSStewart$elm_audio$Audio$UserMsg, A2(app.hC, $MartinSStewart$elm_audio$Audio$audioData(model), model.aW)),
            app.fK.gr($MartinSStewart$elm_audio$Audio$fromJSPortSub)
        ]));
    }, $MartinSStewart$elm_audio$Audio$subscriptions = F2($MartinSStewart$elm_audio$Audio$subscriptions_fn);
    var $MartinSStewart$elm_audio$Audio$File = $elm$core$Basics$identity;
    var $MartinSStewart$elm_audio$Audio$flip_fn = function (func, a, b) {
        return A2(func, b, a);
    }, $MartinSStewart$elm_audio$Audio$flip_fn_unwrapped = function (func, a, b) {
        return func(b, a);
    }, $MartinSStewart$elm_audio$Audio$flip = F3($MartinSStewart$elm_audio$Audio$flip_fn);
    var $mgold$elm_nonempty_list$List$Nonempty$head = function (_v0) {
        var x = _v0.a;
        var xs = _v0.b;
        return x;
    };
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $elm$core$Tuple$second = function (_v0) {
        var y = _v0.b;
        return y;
    };
    var $MartinSStewart$elm_audio$Audio$updateHelper_fn = function (audioPort, audioFunc, userUpdate, _v0) {
        var model = _v0;
        var audioData_ = $MartinSStewart$elm_audio$Audio$audioData(model);
        var _v1 = A2(userUpdate, audioData_, model.aW);
        var newUserModel = _v1.a;
        var userCmd = _v1.b;
        var audioCmds = _v1.c;
        var _v2 = $MartinSStewart$elm_audio$Audio$diffAudioState_fn(model.bD, model.bm, A2(audioFunc, audioData_, newUserModel));
        var audioState = _v2.a;
        var newNodeGroupIdCounter = _v2.b;
        var json = _v2.c;
        var newModel = function () {
            var $r = model.$c();
            $r.aW = newUserModel;
            $r.bD = newNodeGroupIdCounter;
            $r.bm = audioState;
            return $r;
        }();
        var _v3 = $MartinSStewart$elm_audio$Audio$encodeAudioCmd_fn(newModel, audioCmds);
        var newModel2 = _v3.a;
        var audioRequests = _v3.b;
        var portMessage = $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("audio", $elm$json$Json$Encode$list_fn($elm$core$Basics$identity, json)),
            _Utils_Tuple2("audioCmds", audioRequests)
        ]));
        return _Utils_Tuple2(newModel2, $elm$core$Platform$Cmd$batch(_List_fromArray([
            _Platform_map_fn($MartinSStewart$elm_audio$Audio$UserMsg, userCmd),
            audioPort(portMessage)
        ])));
    }, $MartinSStewart$elm_audio$Audio$updateHelper = F4($MartinSStewart$elm_audio$Audio$updateHelper_fn);
    var $MartinSStewart$elm_audio$Audio$update_fn = function (app, msg, _v0) {
        var model = _v0;
        if (msg.$ === 1) {
            var userMsg = msg.a;
            return $MartinSStewart$elm_audio$Audio$updateHelper_fn(app.fK.hU, app.bk, A2($MartinSStewart$elm_audio$Audio$flip, app.h$, userMsg), model);
        }
        else {
            var response = msg.a;
            switch (response.$) {
                case 0:
                    var requestId = response.a.cR;
                    var bufferId = response.a.bY;
                    var duration = response.a.z;
                    var _v3 = $elm$core$Dict$get_fn(requestId, model.M);
                    if (!_v3.$) {
                        var pendingRequest = _v3.a;
                        var sourceData = $elm$core$Dict$insert_fn($MartinSStewart$elm_audio$Audio$rawBufferId(bufferId), { z: duration }, model.ak);
                        var source = $elm$core$Result$Ok({ bY: bufferId });
                        var maybeUserMsg = $MartinSStewart$elm_audio$Audio$find_fn(A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$eq(source)), $mgold$elm_nonempty_list$List$Nonempty$toList(pendingRequest.aX));
                        if (!maybeUserMsg.$) {
                            var _v5 = maybeUserMsg.a;
                            var userMsg = _v5.b;
                            return $MartinSStewart$elm_audio$Audio$updateHelper_fn(app.fK.hU, app.bk, A2($MartinSStewart$elm_audio$Audio$flip, app.h$, userMsg), $$update__M__ak(model, $elm$core$Dict$remove_fn(requestId, model.M), sourceData));
                        }
                        else {
                            return $MartinSStewart$elm_audio$Audio$updateHelper_fn(app.fK.hU, app.bk, A2($MartinSStewart$elm_audio$Audio$flip, app.h$, $mgold$elm_nonempty_list$List$Nonempty$head(pendingRequest.aX).b), $$update__M__ak(model, $elm$core$Dict$remove_fn(requestId, model.M), sourceData));
                        }
                    }
                    else {
                        return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                    }
                case 1:
                    var requestId = response.a.cR;
                    var error = response.a.b3;
                    var _v6 = $elm$core$Dict$get_fn(requestId, model.M);
                    if (!_v6.$) {
                        var pendingRequest = _v6.a;
                        var a = $elm$core$Result$Err(error);
                        var b = $MartinSStewart$elm_audio$Audio$find_fn(A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$eq(a)), $mgold$elm_nonempty_list$List$Nonempty$toList(pendingRequest.aX));
                        if (!b.$) {
                            var _v8 = b.a;
                            var userMsg = _v8.b;
                            return $MartinSStewart$elm_audio$Audio$updateHelper_fn(app.fK.hU, app.bk, A2($MartinSStewart$elm_audio$Audio$flip, app.h$, userMsg), $$update__M(model, $elm$core$Dict$remove_fn(requestId, model.M)));
                        }
                        else {
                            return $MartinSStewart$elm_audio$Audio$updateHelper_fn(app.fK.hU, app.bk, A2($MartinSStewart$elm_audio$Audio$flip, app.h$, $mgold$elm_nonempty_list$List$Nonempty$head(pendingRequest.aX).b), $$update__M(model, $elm$core$Dict$remove_fn(requestId, model.M)));
                        }
                    }
                    else {
                        return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                    }
                case 2:
                    var samplesPerSecond = response.a.bd;
                    return _Utils_Tuple2(function () {
                        var $r = model.$c();
                        $r.bd = $elm$core$Maybe$Just(samplesPerSecond);
                        return $r;
                    }(), $elm$core$Platform$Cmd$none);
                default:
                    var error = response.a.b3;
                    return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
            }
        }
    }, $MartinSStewart$elm_audio$Audio$update = F3($MartinSStewart$elm_audio$Audio$update_fn);
    var $MartinSStewart$elm_audio$Audio$Effect = function (a) {
        return { $: 2, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$Offset = function (a) {
        return { $: 2, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$offsetBy_fn = function (offset_, audio_) {
        return $MartinSStewart$elm_audio$Audio$Effect((new $$Record6(audio_, $MartinSStewart$elm_audio$Audio$Offset(offset_))));
    }, $MartinSStewart$elm_audio$Audio$offsetBy = F2($MartinSStewart$elm_audio$Audio$offsetBy_fn);
    var $MartinSStewart$elm_audio$Audio$withAudioOffset = function (app) {
        return $$update__bk(app, F2(function (audioData_, model) {
            return $MartinSStewart$elm_audio$Audio$offsetBy_fn($ianmackenzie$elm_units$Duration$milliseconds(50), A2(app.bk, audioData_, model));
        }));
    };
    var $MartinSStewart$elm_audio$Audio$documentWithAudio_a0 = $MartinSStewart$elm_audio$Audio$withAudioOffset, $MartinSStewart$elm_audio$Audio$documentWithAudio_a1 = function (app) {
        return $elm$browser$Browser$document({
            gD: A2($elm$core$Basics$composeR, app.gD, A2($MartinSStewart$elm_audio$Audio$initHelper, app.fK.hU, app.bk)),
            hC: $MartinSStewart$elm_audio$Audio$subscriptions(app),
            h$: $MartinSStewart$elm_audio$Audio$update(app),
            h1: function (model) {
                var _v0 = A2(app.h1, $MartinSStewart$elm_audio$Audio$audioData(model), $MartinSStewart$elm_audio$Audio$getUserModel(model));
                var title = _v0.hT;
                var body = _v0.fS;
                return {
                    fS: $elm$core$List$map_fn($elm$html$Html$map($MartinSStewart$elm_audio$Audio$UserMsg), body),
                    hT: title
                };
            }
        });
    }, $MartinSStewart$elm_audio$Audio$documentWithAudio = A2($elm$core$Basics$composeR, $MartinSStewart$elm_audio$Audio$documentWithAudio_a0, $MartinSStewart$elm_audio$Audio$documentWithAudio_a1);
    var $author$project$Main$GameRequestInitialWindowSize = { $: 3 };
    var $author$project$Main$LoadAudio = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Main$RequestInitialRandomSeed = { $: 1 };
    var $author$project$Main$RequestInitialTime = { $: 2 };
    var $author$project$Main$eachAudio = function (perKind) {
        return (new $$Record7(perKind, perKind, perKind));
    };
    var $author$project$Reaction$effects = function ($) {
        return $.b2;
    };
    var $author$project$Reaction$state = function ($) {
        return $.ci;
    };
    var $author$project$Reaction$effectsAdd = function (effectsAdditional) {
        return function (reaction) {
            return {
                b2: _Utils_ap($author$project$Reaction$effects(reaction), effectsAdditional),
                ci: $author$project$Reaction$state(reaction)
            };
        };
    };
    var $elm$random$Random$Seed_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$random$Random$Seed = F2($elm$random$Random$Seed_fn);
    var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
    var $elm$random$Random$next = function (_v0) {
        var state0 = _v0.a;
        var incr = _v0.b;
        return $elm$random$Random$Seed_fn(((state0 * 1664525) + incr) >>> 0, incr);
    };
    var $elm$random$Random$initialSeed = function (x) {
        var _v0 = $elm$random$Random$next($elm$random$Random$Seed_fn(0, 1013904223));
        var state1 = _v0.a;
        var incr = _v0.b;
        var state2 = (state1 + x) >>> 0;
        return $elm$random$Random$next($elm$random$Random$Seed_fn(state2, incr));
    };
    var $elm$core$Basics$negate = function (n) {
        return -n;
    };
    var $author$project$Reaction$to = function (stateAltered) {
        return { b2: _List_Nil, ci: stateAltered };
    };
    var $author$project$Main$init = function (_v0) {
        return A2($author$project$Reaction$effectsAdd, $elm$core$List$map_fn(function (piece) {
            return $author$project$Main$LoadAudio(piece);
        }, $author$project$Main$audioKinds), A2($author$project$Reaction$effectsAdd, _List_fromArray([$author$project$Main$RequestInitialRandomSeed, $author$project$Main$RequestInitialTime, $author$project$Main$GameRequestInitialWindowSize]), $author$project$Reaction$to((new $$Record8($author$project$Main$eachAudio($elm$core$Result$Err(2)), $author$project$Main$eachAudio(_List_Nil), $elm$time$Time$millisToPosix(-1), _List_Nil, $elm$time$Time$millisToPosix(-1), $elm$random$Random$initialSeed(1635127483), { bw: 1080, b: 1920 })))));
    };
    var $author$project$Main$AudioLoaded = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Main$InitialRandomSeedReceived = function (a) {
        return { $: 4, a: a };
    };
    var $author$project$Main$InitialTimeReceived = function (a) {
        return { $: 5, a: a };
    };
    var $author$project$Main$WindowSized = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Reaction$audioCommands = function (audioCommandList) {
        return { bl: audioCommandList, bp: _List_Nil };
    };
    var $author$project$Main$audioPieceToName = function (audioPiece) {
        switch (audioPiece) {
            case 0:
                return "lily-grow";
            case 1:
                return "droplet-splash";
            default:
                return "music";
        }
    };
    var $author$project$Reaction$commands = function (commandList) {
        return { bl: _List_Nil, bp: commandList };
    };
    var $elm$core$String$concat = function (strings) {
        return $elm$core$String$join_fn("", strings);
    };
    var $elm$random$Random$Generate = $elm$core$Basics$identity;
    var $elm$time$Time$Name = function (a) {
        return { $: 0, a: a };
    };
    var $elm$time$Time$Offset = function (a) {
        return { $: 1, a: a };
    };
    var $elm$time$Time$Zone_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$time$Time$Zone = F2($elm$time$Time$Zone_fn);
    var $elm$time$Time$customZone = $elm$time$Time$Zone;
    var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
    var $elm$random$Random$init = _Scheduler_andThen_fn(function (time) {
        return $elm$core$Task$succeed($elm$random$Random$initialSeed($elm$time$Time$posixToMillis(time)));
    }, $elm$time$Time$now);
    var $elm$random$Random$step_fn = function (_v0, seed) {
        var generator = _v0;
        return generator(seed);
    }, $elm$random$Random$step = F2($elm$random$Random$step_fn);
    var $elm$random$Random$onEffects_fn = function (router, commands, seed) {
        if (!commands.b) {
            return $elm$core$Task$succeed(seed);
        }
        else {
            var generator = commands.a;
            var rest = commands.b;
            var _v1 = $elm$random$Random$step_fn(generator, seed);
            var value = _v1.a;
            var newSeed = _v1.b;
            return _Scheduler_andThen_fn(function (_v2) {
                return $elm$random$Random$onEffects_fn(router, rest, newSeed);
            }, _Platform_sendToApp_fn(router, value));
        }
    }, $elm$random$Random$onEffects = F3($elm$random$Random$onEffects_fn);
    var $elm$random$Random$onSelfMsg_fn = function (_v0, _v1, seed) {
        return $elm$core$Task$succeed(seed);
    }, $elm$random$Random$onSelfMsg = F3($elm$random$Random$onSelfMsg_fn);
    var $elm$random$Random$Generator = $elm$core$Basics$identity;
    var $elm$random$Random$map_fn = function (func, _v0) {
        var genA = _v0;
        return function (seed0) {
            var _v1 = genA(seed0);
            var a = _v1.a;
            var seed1 = _v1.b;
            return _Utils_Tuple2(func(a), seed1);
        };
    }, $elm$random$Random$map = F2($elm$random$Random$map_fn);
    var $elm$random$Random$cmdMap_fn = function (func, _v0) {
        var generator = _v0;
        return $elm$random$Random$map_fn(func, generator);
    }, $elm$random$Random$cmdMap = F2($elm$random$Random$cmdMap_fn);
    _Platform_effectManagers["Random"] = _Platform_createManager($elm$random$Random$init, $elm$random$Random$onEffects, $elm$random$Random$onSelfMsg, $elm$random$Random$cmdMap);
    var $elm$random$Random$command = _Platform_leaf("Random");
    var $elm$random$Random$generate_fn = function (tagger, generator) {
        return $elm$random$Random$command($elm$random$Random$map_fn(tagger, generator));
    }, $elm$random$Random$generate = F2($elm$random$Random$generate_fn);
    var $elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$Bitwise$xor = _Bitwise_xor;
    var $elm$random$Random$peel = function (_v0) {
        var state = _v0.a;
        var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
        return ((word >>> 22) ^ word) >>> 0;
    };
    var $elm$random$Random$int_fn = function (a, b) {
        return function (seed0) {
            var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
            var lo = _v0.a;
            var hi = _v0.b;
            var range = (hi - lo) + 1;
            if (!((range - 1) & range)) {
                return _Utils_Tuple2((((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo, $elm$random$Random$next(seed0));
            }
            else {
                var threshhold = (((-range) >>> 0) % range) >>> 0;
                var accountForBias = function (seed) {
                    accountForBias: while (true) {
                        var x = $elm$random$Random$peel(seed);
                        var seedN = $elm$random$Random$next(seed);
                        if (_Utils_cmp(x, threshhold) < 0) {
                            var $temp$seed = seedN;
                            seed = $temp$seed;
                            continue accountForBias;
                        }
                        else {
                            return _Utils_Tuple2((x % range) + lo, seedN);
                        }
                    }
                };
                return accountForBias(seed0);
            }
        };
    }, $elm$random$Random$int = F2($elm$random$Random$int_fn);
    var $elm$random$Random$map3_fn = function (func, _v0, _v1, _v2) {
        var genA = _v0;
        var genB = _v1;
        var genC = _v2;
        return function (seed0) {
            var _v3 = genA(seed0);
            var a = _v3.a;
            var seed1 = _v3.b;
            var _v4 = genB(seed1);
            var b = _v4.a;
            var seed2 = _v4.b;
            var _v5 = genC(seed2);
            var c = _v5.a;
            var seed3 = _v5.b;
            return _Utils_Tuple2(A3(func, a, b, c), seed3);
        };
    }, $elm$random$Random$map3_fn_unwrapped = function (func, _v0, _v1, _v2) {
        var genA = _v0;
        var genB = _v1;
        var genC = _v2;
        return function (seed0) {
            var _v3 = genA(seed0);
            var a = _v3.a;
            var seed1 = _v3.b;
            var _v4 = genB(seed1);
            var b = _v4.a;
            var seed2 = _v4.b;
            var _v5 = genC(seed2);
            var c = _v5.a;
            var seed3 = _v5.b;
            return _Utils_Tuple2(func(a, b, c), seed3);
        };
    }, $elm$random$Random$map3 = F4($elm$random$Random$map3_fn);
    var $elm$core$Bitwise$or = _Bitwise_or;
    var $elm$random$Random$independentSeed = function (seed0) {
        var makeIndependentSeed = F3(function (state, b, c) {
            return $elm$random$Random$next($elm$random$Random$Seed_fn(state, (1 | (b ^ c)) >>> 0));
        });
        var gen = $elm$random$Random$int_fn(0, 4294967295);
        return $elm$random$Random$step_fn($elm$random$Random$map3_fn(makeIndependentSeed, gen, gen, gen), seed0);
    };
    var $MartinSStewart$elm_audio$Audio$AudioLoadRequest = function (a) {
        return { $: 0, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage = 3;
    var $MartinSStewart$elm_audio$Audio$enumeratedResults = $mgold$elm_nonempty_list$List$Nonempty$Nonempty_fn($elm$core$Result$Err(3), _Utils_ap(_List_fromArray([
        $elm$core$Result$Err(0),
        $elm$core$Result$Err(1),
        $elm$core$Result$Err(2)
    ]), $elm$core$List$map_fn(function (bufferId) {
        return $elm$core$Result$Ok({ bY: bufferId });
    }, $elm$core$List$range_fn(0, 1000))));
    var $MartinSStewart$elm_audio$Audio$loadAudio_fn = function (userMsg, url) {
        return $MartinSStewart$elm_audio$Audio$AudioLoadRequest({
            bV: url,
            aX: $mgold$elm_nonempty_list$List$Nonempty$map_fn(function (results) {
                return _Utils_Tuple2(results, userMsg(results));
            }, $MartinSStewart$elm_audio$Audio$enumeratedResults)
        });
    }, $MartinSStewart$elm_audio$Audio$loadAudio = F2($MartinSStewart$elm_audio$Audio$loadAudio_fn);
    var $author$project$Main$interpretEffect = function (effect) {
        switch (effect.$) {
            case 0:
                var piece = effect.a;
                return $author$project$Reaction$audioCommands(_List_fromArray([
                    $MartinSStewart$elm_audio$Audio$loadAudio_fn(function (result) {
                        return $author$project$Main$AudioLoaded({ eP: piece, e_: result });
                    }, $elm$core$String$concat(_List_fromArray([
                        "public/",
                        $author$project$Main$audioPieceToName(piece),
                        ".mp3"
                    ])))
                ]));
            case 1:
                return $author$project$Reaction$commands(_List_fromArray([
                    $elm$random$Random$generate_fn($author$project$Main$InitialRandomSeedReceived, $elm$random$Random$independentSeed)
                ]));
            case 2:
                return $author$project$Reaction$commands(_List_fromArray([
                    $elm$core$Task$perform_fn($author$project$Main$InitialTimeReceived, $elm$time$Time$now)
                ]));
            default:
                return $author$project$Reaction$commands(_List_fromArray([
                    $elm$core$Task$perform_fn(function (viewport) {
                        return $author$project$Main$WindowSized({ bw: viewport.fn.bw, b: viewport.fn.b });
                    }, $elm$browser$Browser$Dom$getViewport)
                ]));
        }
    };
    var $author$project$Main$alterAudioOfKind_fn = function (kind, f) {
        switch (kind) {
            case 0:
                return function (r) {
                    return function () {
                        var $r = r.$c();
                        $r.cb = f(r.cb);
                        return $r;
                    }();
                };
            case 1:
                return function (r) {
                    return $$update__a2(r, f(r.a2));
                };
            default:
                return function (r) {
                    return function () {
                        var $r = r.$c();
                        $r.bA = f(r.bA);
                        return $r;
                    }();
                };
        }
    }, $author$project$Main$alterAudioOfKind = F2($author$project$Main$alterAudioOfKind_fn);
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $author$project$Main$reactTo = function (event) {
        switch (event.$) {
            case 0:
                var audioLoaded = event.a;
                return function (state) {
                    return $author$project$Reaction$to($$update__bk(state, A3($author$project$Main$alterAudioOfKind, audioLoaded.eP, function (_v1) {
                        return audioLoaded.e_;
                    }, state.bk)));
                };
            case 1:
                var newMousePoint = event.a;
                return function (state) {
                    return $author$project$Reaction$to(state);
                };
            case 2:
                return function (state) {
                    return $author$project$Reaction$to(function () {
                        var $r = state.$c();
                        $r.cs = function (r) {
                            return $$update__a2(r, _List_Cons(state.aO, r.a2));
                        }(state.cs);
                        return $r;
                    }());
                };
            case 3:
                var size = event.a;
                return function (state) {
                    return $author$project$Reaction$to(function () {
                        var $r = state.$c();
                        $r.bQ = size;
                        return $r;
                    }());
                };
            case 4:
                var initialRandomSeed = event.a;
                return function (state) {
                    return $author$project$Reaction$to(function () {
                        var $r = state.$c();
                        $r.eV = initialRandomSeed;
                        return $r;
                    }());
                };
            case 5:
                var initialTime = event.a;
                return function (state) {
                    return $author$project$Reaction$to(function () {
                        var $r = state.$c();
                        $r.aO = initialTime;
                        $r.bx = initialTime;
                        return $r;
                    }());
                };
            case 6:
                var newSimulationTime = event.a;
                return function (state) {
                    return $author$project$Reaction$to(function () {
                        var $r = state.$c();
                        $r.aO = newSimulationTime;
                        return $r;
                    }());
                };
            case 7:
                var key = event.a;
                return function (state) {
                    return $author$project$Reaction$to($$update__b8(state, _List_Cons(key, state.b8)));
                };
            default:
                var key = event.a;
                return function (state) {
                    return $author$project$Reaction$to($$update__b8(state, $elm$core$List$filter_fn(function (keyPressed) {
                        return !_Utils_eq(keyPressed, key);
                    }, state.b8)));
                };
        }
    };
    var $author$project$Main$FrameTickPassed = function (a) {
        return { $: 6, a: a };
    };
    var $author$project$Main$KeyPressed = function (a) {
        return { $: 7, a: a };
    };
    var $author$project$Main$KeyReleased = function (a) {
        return { $: 8, a: a };
    };
    var $JohnBugner$elm_keyboard$Key$A = { $: 42 };
    var $JohnBugner$elm_keyboard$Key$Alt = function (a) {
        return { $: 68, a: a };
    };
    var $JohnBugner$elm_keyboard$Key$ArrowDown = { $: 82 };
    var $JohnBugner$elm_keyboard$Key$ArrowLeft = { $: 81 };
    var $JohnBugner$elm_keyboard$Key$ArrowRight = { $: 83 };
    var $JohnBugner$elm_keyboard$Key$ArrowUp = { $: 80 };
    var $JohnBugner$elm_keyboard$Key$B = { $: 60 };
    var $JohnBugner$elm_keyboard$Key$Backquote = { $: 13 };
    var $JohnBugner$elm_keyboard$Key$Backslash = { $: 40 };
    var $JohnBugner$elm_keyboard$Key$Backspace = { $: 26 };
    var $JohnBugner$elm_keyboard$Key$BracketLeft = { $: 38 };
    var $JohnBugner$elm_keyboard$Key$BracketRight = { $: 39 };
    var $JohnBugner$elm_keyboard$Key$C = { $: 58 };
    var $JohnBugner$elm_keyboard$Key$CapsLock = { $: 41 };
    var $JohnBugner$elm_keyboard$Key$Comma = { $: 63 };
    var $JohnBugner$elm_keyboard$Key$ContextMenu = { $: 70 };
    var $JohnBugner$elm_keyboard$Key$Control = function (a) {
        return { $: 66, a: a };
    };
    var $JohnBugner$elm_keyboard$Key$D = { $: 44 };
    var $JohnBugner$elm_keyboard$Key$Delete = { $: 77 };
    var $JohnBugner$elm_keyboard$Key$Digit0 = { $: 23 };
    var $JohnBugner$elm_keyboard$Key$Digit1 = { $: 14 };
    var $JohnBugner$elm_keyboard$Key$Digit2 = { $: 15 };
    var $JohnBugner$elm_keyboard$Key$Digit3 = { $: 16 };
    var $JohnBugner$elm_keyboard$Key$Digit4 = { $: 17 };
    var $JohnBugner$elm_keyboard$Key$Digit5 = { $: 18 };
    var $JohnBugner$elm_keyboard$Key$Digit6 = { $: 19 };
    var $JohnBugner$elm_keyboard$Key$Digit7 = { $: 20 };
    var $JohnBugner$elm_keyboard$Key$Digit8 = { $: 21 };
    var $JohnBugner$elm_keyboard$Key$Digit9 = { $: 22 };
    var $JohnBugner$elm_keyboard$Key$E = { $: 30 };
    var $JohnBugner$elm_keyboard$Key$End = { $: 78 };
    var $JohnBugner$elm_keyboard$Key$Enter = { $: 53 };
    var $JohnBugner$elm_keyboard$Key$Equal = { $: 25 };
    var $JohnBugner$elm_keyboard$Key$Escape = { $: 0 };
    var $JohnBugner$elm_keyboard$Key$F = { $: 45 };
    var $JohnBugner$elm_keyboard$Key$F1 = { $: 1 };
    var $JohnBugner$elm_keyboard$Key$F10 = { $: 10 };
    var $JohnBugner$elm_keyboard$Key$F11 = { $: 11 };
    var $JohnBugner$elm_keyboard$Key$F12 = { $: 12 };
    var $JohnBugner$elm_keyboard$Key$F2 = { $: 2 };
    var $JohnBugner$elm_keyboard$Key$F3 = { $: 3 };
    var $JohnBugner$elm_keyboard$Key$F4 = { $: 4 };
    var $JohnBugner$elm_keyboard$Key$F5 = { $: 5 };
    var $JohnBugner$elm_keyboard$Key$F6 = { $: 6 };
    var $JohnBugner$elm_keyboard$Key$F7 = { $: 7 };
    var $JohnBugner$elm_keyboard$Key$F8 = { $: 8 };
    var $JohnBugner$elm_keyboard$Key$F9 = { $: 9 };
    var $JohnBugner$elm_keyboard$Key$G = { $: 46 };
    var $JohnBugner$elm_keyboard$Key$H = { $: 47 };
    var $JohnBugner$elm_keyboard$Key$Home = { $: 75 };
    var $JohnBugner$elm_keyboard$Key$I = { $: 35 };
    var $JohnBugner$elm_keyboard$Key$Insert = { $: 74 };
    var $JohnBugner$elm_keyboard$Key$IntlBackslash = { $: 55 };
    var $JohnBugner$elm_keyboard$Key$J = { $: 48 };
    var $JohnBugner$elm_keyboard$Key$K = { $: 49 };
    var $JohnBugner$elm_keyboard$Key$L = { $: 50 };
    var $JohnBugner$elm_keyboard$Side$Left = 0;
    var $JohnBugner$elm_keyboard$Key$M = { $: 62 };
    var $JohnBugner$elm_keyboard$Key$Meta = function (a) {
        return { $: 67, a: a };
    };
    var $JohnBugner$elm_keyboard$Key$Minus = { $: 24 };
    var $JohnBugner$elm_keyboard$Key$N = { $: 61 };
    var $JohnBugner$elm_keyboard$Key$NumLock = { $: 84 };
    var $JohnBugner$elm_keyboard$Key$Numpad0 = { $: 99 };
    var $JohnBugner$elm_keyboard$Key$Numpad1 = { $: 95 };
    var $JohnBugner$elm_keyboard$Key$Numpad2 = { $: 96 };
    var $JohnBugner$elm_keyboard$Key$Numpad3 = { $: 97 };
    var $JohnBugner$elm_keyboard$Key$Numpad4 = { $: 92 };
    var $JohnBugner$elm_keyboard$Key$Numpad5 = { $: 93 };
    var $JohnBugner$elm_keyboard$Key$Numpad6 = { $: 94 };
    var $JohnBugner$elm_keyboard$Key$Numpad7 = { $: 88 };
    var $JohnBugner$elm_keyboard$Key$Numpad8 = { $: 89 };
    var $JohnBugner$elm_keyboard$Key$Numpad9 = { $: 90 };
    var $JohnBugner$elm_keyboard$Key$NumpadAdd = { $: 91 };
    var $JohnBugner$elm_keyboard$Key$NumpadDecimal = { $: 100 };
    var $JohnBugner$elm_keyboard$Key$NumpadDivide = { $: 85 };
    var $JohnBugner$elm_keyboard$Key$NumpadEnter = { $: 98 };
    var $JohnBugner$elm_keyboard$Key$NumpadMultiply = { $: 86 };
    var $JohnBugner$elm_keyboard$Key$NumpadSubtract = { $: 87 };
    var $JohnBugner$elm_keyboard$Key$O = { $: 36 };
    var $JohnBugner$elm_keyboard$Key$Other = function (a) {
        return { $: 101, a: a };
    };
    var $JohnBugner$elm_keyboard$Key$P = { $: 37 };
    var $JohnBugner$elm_keyboard$Key$PageDown = { $: 79 };
    var $JohnBugner$elm_keyboard$Key$PageUp = { $: 76 };
    var $JohnBugner$elm_keyboard$Key$Pause = { $: 73 };
    var $JohnBugner$elm_keyboard$Key$Period = { $: 64 };
    var $JohnBugner$elm_keyboard$Key$PrintScreen = { $: 71 };
    var $JohnBugner$elm_keyboard$Key$Q = { $: 28 };
    var $JohnBugner$elm_keyboard$Key$Quote = { $: 52 };
    var $JohnBugner$elm_keyboard$Key$R = { $: 31 };
    var $JohnBugner$elm_keyboard$Side$Right = 1;
    var $JohnBugner$elm_keyboard$Key$S = { $: 43 };
    var $JohnBugner$elm_keyboard$Key$ScrollLock = { $: 72 };
    var $JohnBugner$elm_keyboard$Key$Semicolon = { $: 51 };
    var $JohnBugner$elm_keyboard$Key$Shift = function (a) {
        return { $: 54, a: a };
    };
    var $JohnBugner$elm_keyboard$Key$Slash = { $: 65 };
    var $JohnBugner$elm_keyboard$Key$Space = { $: 69 };
    var $JohnBugner$elm_keyboard$Key$T = { $: 32 };
    var $JohnBugner$elm_keyboard$Key$Tab = { $: 27 };
    var $JohnBugner$elm_keyboard$Key$U = { $: 34 };
    var $JohnBugner$elm_keyboard$Key$V = { $: 59 };
    var $JohnBugner$elm_keyboard$Key$W = { $: 29 };
    var $JohnBugner$elm_keyboard$Key$X = { $: 57 };
    var $JohnBugner$elm_keyboard$Key$Y = { $: 33 };
    var $JohnBugner$elm_keyboard$Key$Z = { $: 56 };
    var $JohnBugner$elm_keyboard$Key$fromString = function (s) {
        switch (s) {
            case "Escape":
                return $JohnBugner$elm_keyboard$Key$Escape;
            case "F1":
                return $JohnBugner$elm_keyboard$Key$F1;
            case "F2":
                return $JohnBugner$elm_keyboard$Key$F2;
            case "F3":
                return $JohnBugner$elm_keyboard$Key$F3;
            case "F4":
                return $JohnBugner$elm_keyboard$Key$F4;
            case "F5":
                return $JohnBugner$elm_keyboard$Key$F5;
            case "F6":
                return $JohnBugner$elm_keyboard$Key$F6;
            case "F7":
                return $JohnBugner$elm_keyboard$Key$F7;
            case "F8":
                return $JohnBugner$elm_keyboard$Key$F8;
            case "F9":
                return $JohnBugner$elm_keyboard$Key$F9;
            case "F10":
                return $JohnBugner$elm_keyboard$Key$F10;
            case "F11":
                return $JohnBugner$elm_keyboard$Key$F11;
            case "F12":
                return $JohnBugner$elm_keyboard$Key$F12;
            case "Backquote":
                return $JohnBugner$elm_keyboard$Key$Backquote;
            case "Digit1":
                return $JohnBugner$elm_keyboard$Key$Digit1;
            case "Digit2":
                return $JohnBugner$elm_keyboard$Key$Digit2;
            case "Digit3":
                return $JohnBugner$elm_keyboard$Key$Digit3;
            case "Digit4":
                return $JohnBugner$elm_keyboard$Key$Digit4;
            case "Digit5":
                return $JohnBugner$elm_keyboard$Key$Digit5;
            case "Digit6":
                return $JohnBugner$elm_keyboard$Key$Digit6;
            case "Digit7":
                return $JohnBugner$elm_keyboard$Key$Digit7;
            case "Digit8":
                return $JohnBugner$elm_keyboard$Key$Digit8;
            case "Digit9":
                return $JohnBugner$elm_keyboard$Key$Digit9;
            case "Digit0":
                return $JohnBugner$elm_keyboard$Key$Digit0;
            case "Minus":
                return $JohnBugner$elm_keyboard$Key$Minus;
            case "Equal":
                return $JohnBugner$elm_keyboard$Key$Equal;
            case "Backspace":
                return $JohnBugner$elm_keyboard$Key$Backspace;
            case "Tab":
                return $JohnBugner$elm_keyboard$Key$Tab;
            case "KeyQ":
                return $JohnBugner$elm_keyboard$Key$Q;
            case "KeyW":
                return $JohnBugner$elm_keyboard$Key$W;
            case "KeyE":
                return $JohnBugner$elm_keyboard$Key$E;
            case "KeyR":
                return $JohnBugner$elm_keyboard$Key$R;
            case "KeyT":
                return $JohnBugner$elm_keyboard$Key$T;
            case "KeyY":
                return $JohnBugner$elm_keyboard$Key$Y;
            case "KeyU":
                return $JohnBugner$elm_keyboard$Key$U;
            case "KeyI":
                return $JohnBugner$elm_keyboard$Key$I;
            case "KeyO":
                return $JohnBugner$elm_keyboard$Key$O;
            case "KeyP":
                return $JohnBugner$elm_keyboard$Key$P;
            case "BracketLeft":
                return $JohnBugner$elm_keyboard$Key$BracketLeft;
            case "BracketRight":
                return $JohnBugner$elm_keyboard$Key$BracketRight;
            case "Backslash":
                return $JohnBugner$elm_keyboard$Key$Backslash;
            case "CapsLock":
                return $JohnBugner$elm_keyboard$Key$CapsLock;
            case "KeyA":
                return $JohnBugner$elm_keyboard$Key$A;
            case "KeyS":
                return $JohnBugner$elm_keyboard$Key$S;
            case "KeyD":
                return $JohnBugner$elm_keyboard$Key$D;
            case "KeyF":
                return $JohnBugner$elm_keyboard$Key$F;
            case "KeyG":
                return $JohnBugner$elm_keyboard$Key$G;
            case "KeyH":
                return $JohnBugner$elm_keyboard$Key$H;
            case "KeyJ":
                return $JohnBugner$elm_keyboard$Key$J;
            case "KeyK":
                return $JohnBugner$elm_keyboard$Key$K;
            case "KeyL":
                return $JohnBugner$elm_keyboard$Key$L;
            case "Semicolon":
                return $JohnBugner$elm_keyboard$Key$Semicolon;
            case "Quote":
                return $JohnBugner$elm_keyboard$Key$Quote;
            case "Enter":
                return $JohnBugner$elm_keyboard$Key$Enter;
            case "ShiftLeft":
                return $JohnBugner$elm_keyboard$Key$Shift(0);
            case "IntlBackslash":
                return $JohnBugner$elm_keyboard$Key$IntlBackslash;
            case "KeyZ":
                return $JohnBugner$elm_keyboard$Key$Z;
            case "KeyX":
                return $JohnBugner$elm_keyboard$Key$X;
            case "KeyC":
                return $JohnBugner$elm_keyboard$Key$C;
            case "KeyV":
                return $JohnBugner$elm_keyboard$Key$V;
            case "KeyB":
                return $JohnBugner$elm_keyboard$Key$B;
            case "KeyN":
                return $JohnBugner$elm_keyboard$Key$N;
            case "KeyM":
                return $JohnBugner$elm_keyboard$Key$M;
            case "Comma":
                return $JohnBugner$elm_keyboard$Key$Comma;
            case "Period":
                return $JohnBugner$elm_keyboard$Key$Period;
            case "Slash":
                return $JohnBugner$elm_keyboard$Key$Slash;
            case "ShiftRight":
                return $JohnBugner$elm_keyboard$Key$Shift(1);
            case "ControlLeft":
                return $JohnBugner$elm_keyboard$Key$Control(0);
            case "MetaLeft":
                return $JohnBugner$elm_keyboard$Key$Meta(0);
            case "AltLeft":
                return $JohnBugner$elm_keyboard$Key$Alt(0);
            case "Space":
                return $JohnBugner$elm_keyboard$Key$Space;
            case "AltRight":
                return $JohnBugner$elm_keyboard$Key$Alt(1);
            case "MetaRight":
                return $JohnBugner$elm_keyboard$Key$Meta(1);
            case "ContextMenu":
                return $JohnBugner$elm_keyboard$Key$ContextMenu;
            case "ControlRight":
                return $JohnBugner$elm_keyboard$Key$Control(1);
            case "PrintScreen":
                return $JohnBugner$elm_keyboard$Key$PrintScreen;
            case "ScrollLock":
                return $JohnBugner$elm_keyboard$Key$ScrollLock;
            case "Pause":
                return $JohnBugner$elm_keyboard$Key$Pause;
            case "Insert":
                return $JohnBugner$elm_keyboard$Key$Insert;
            case "Home":
                return $JohnBugner$elm_keyboard$Key$Home;
            case "PageUp":
                return $JohnBugner$elm_keyboard$Key$PageUp;
            case "Delete":
                return $JohnBugner$elm_keyboard$Key$Delete;
            case "End":
                return $JohnBugner$elm_keyboard$Key$End;
            case "PageDown":
                return $JohnBugner$elm_keyboard$Key$PageDown;
            case "ArrowUp":
                return $JohnBugner$elm_keyboard$Key$ArrowUp;
            case "ArrowLeft":
                return $JohnBugner$elm_keyboard$Key$ArrowLeft;
            case "ArrowDown":
                return $JohnBugner$elm_keyboard$Key$ArrowDown;
            case "ArrowRight":
                return $JohnBugner$elm_keyboard$Key$ArrowRight;
            case "NumLock":
                return $JohnBugner$elm_keyboard$Key$NumLock;
            case "NumpadDivide":
                return $JohnBugner$elm_keyboard$Key$NumpadDivide;
            case "NumpadMultiply":
                return $JohnBugner$elm_keyboard$Key$NumpadMultiply;
            case "NumpadSubtract":
                return $JohnBugner$elm_keyboard$Key$NumpadSubtract;
            case "Numpad7":
                return $JohnBugner$elm_keyboard$Key$Numpad7;
            case "Numpad8":
                return $JohnBugner$elm_keyboard$Key$Numpad8;
            case "Numpad9":
                return $JohnBugner$elm_keyboard$Key$Numpad9;
            case "NumpadAdd":
                return $JohnBugner$elm_keyboard$Key$NumpadAdd;
            case "Numpad4":
                return $JohnBugner$elm_keyboard$Key$Numpad4;
            case "Numpad5":
                return $JohnBugner$elm_keyboard$Key$Numpad5;
            case "Numpad6":
                return $JohnBugner$elm_keyboard$Key$Numpad6;
            case "Numpad1":
                return $JohnBugner$elm_keyboard$Key$Numpad1;
            case "Numpad2":
                return $JohnBugner$elm_keyboard$Key$Numpad2;
            case "Numpad3":
                return $JohnBugner$elm_keyboard$Key$Numpad3;
            case "NumpadEnter":
                return $JohnBugner$elm_keyboard$Key$NumpadEnter;
            case "Numpad0":
                return $JohnBugner$elm_keyboard$Key$Numpad0;
            case "NumpadDecimal":
                return $JohnBugner$elm_keyboard$Key$NumpadDecimal;
            default:
                return $JohnBugner$elm_keyboard$Key$Other(s);
        }
    };
    var $JohnBugner$elm_keyboard$Key$decoder = _Json_map1_fn($JohnBugner$elm_keyboard$Key$fromString, _Json_decodeField_fn("code", $elm$json$Json$Decode$string));
    var $elm$time$Time$Every_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$time$Time$Every = F2($elm$time$Time$Every_fn);
    var $elm$time$Time$State_fn = function (taggers, processes) {
        return { eS: processes, ff: taggers };
    }, $elm$time$Time$State = F2($elm$time$Time$State_fn);
    var $elm$time$Time$init = $elm$core$Task$succeed($elm$time$Time$State_fn($elm$core$Dict$empty, $elm$core$Dict$empty));
    var $elm$time$Time$addMySub_fn = function (_v0, state) {
        var interval = _v0.a;
        var tagger = _v0.b;
        var _v1 = $elm$core$Dict$get_fn(interval, state);
        if (_v1.$ === 1) {
            return $elm$core$Dict$insert_fn(interval, _List_fromArray([tagger]), state);
        }
        else {
            var taggers = _v1.a;
            return $elm$core$Dict$insert_fn(interval, _List_Cons(tagger, taggers), state);
        }
    }, $elm$time$Time$addMySub = F2($elm$time$Time$addMySub_fn);
    var $elm$core$Process$kill = _Scheduler_kill;
    var $elm$core$Dict$merge_fn = function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
        var stepState = F3(function (rKey, rValue, _v0) {
            stepState: while (true) {
                var list = _v0.a;
                var result = _v0.b;
                if (!list.b) {
                    return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
                }
                else {
                    var _v2 = list.a;
                    var lKey = _v2.a;
                    var lValue = _v2.b;
                    var rest = list.b;
                    if (_Utils_cmp(lKey, rKey) < 0) {
                        var $temp$rKey = rKey, $temp$rValue = rValue, $temp$_v0 = _Utils_Tuple2(rest, A3(leftStep, lKey, lValue, result));
                        rKey = $temp$rKey;
                        rValue = $temp$rValue;
                        _v0 = $temp$_v0;
                        continue stepState;
                    }
                    else {
                        if (_Utils_cmp(lKey, rKey) > 0) {
                            return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
                        }
                        else {
                            return _Utils_Tuple2(rest, A4(bothStep, lKey, lValue, rValue, result));
                        }
                    }
                }
            }
        });
        var _v3 = $elm$core$Dict$foldl_fn(stepState, _Utils_Tuple2($elm$core$Dict$toList(leftDict), initialResult), rightDict);
        var leftovers = _v3.a;
        var intermediateResult = _v3.b;
        return $elm$core$List$foldl_fn_unwrapped(function (_v4, result) {
            var k = _v4.a;
            var v = _v4.b;
            return A3(leftStep, k, v, result);
        }, intermediateResult, leftovers);
    }, $elm$core$Dict$merge = F6($elm$core$Dict$merge_fn);
    var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
    var $elm$time$Time$setInterval = _Time_setInterval;
    var $elm$core$Process$spawn = _Scheduler_spawn;
    var $elm$time$Time$spawnHelp_fn = function (router, intervals, processes) {
        if (!intervals.b) {
            return $elm$core$Task$succeed(processes);
        }
        else {
            var interval = intervals.a;
            var rest = intervals.b;
            var spawnTimer = $elm$core$Process$spawn(_Time_setInterval_fn(interval, _Platform_sendToSelf_fn(router, interval)));
            var spawnRest = function (id) {
                return $elm$time$Time$spawnHelp_fn(router, rest, $elm$core$Dict$insert_fn(interval, id, processes));
            };
            return _Scheduler_andThen_fn(spawnRest, spawnTimer);
        }
    }, $elm$time$Time$spawnHelp = F3($elm$time$Time$spawnHelp_fn);
    var $elm$time$Time$onEffects_fn = function (router, subs, _v0) {
        var processes = _v0.eS;
        var rightStep = F3(function (_v6, id, _v7) {
            var spawns = _v7.a;
            var existing = _v7.b;
            var kills = _v7.c;
            return _Utils_Tuple3(spawns, existing, _Scheduler_andThen_fn(function (_v5) {
                return kills;
            }, $elm$core$Process$kill(id)));
        });
        var newTaggers = $elm$core$List$foldl_fn($elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
        var leftStep = F3(function (interval, taggers, _v4) {
            var spawns = _v4.a;
            var existing = _v4.b;
            var kills = _v4.c;
            return _Utils_Tuple3(_List_Cons(interval, spawns), existing, kills);
        });
        var bothStep = F4(function (interval, taggers, id, _v3) {
            var spawns = _v3.a;
            var existing = _v3.b;
            var kills = _v3.c;
            return _Utils_Tuple3(spawns, $elm$core$Dict$insert_fn(interval, id, existing), kills);
        });
        var _v1 = $elm$core$Dict$merge_fn(leftStep, bothStep, rightStep, newTaggers, processes, _Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, $elm$core$Task$succeed(0)));
        var spawnList = _v1.a;
        var existingDict = _v1.b;
        var killTask = _v1.c;
        return _Scheduler_andThen_fn(function (newProcesses) {
            return $elm$core$Task$succeed($elm$time$Time$State_fn(newTaggers, newProcesses));
        }, _Scheduler_andThen_fn(function (_v2) {
            return $elm$time$Time$spawnHelp_fn(router, spawnList, existingDict);
        }, killTask));
    }, $elm$time$Time$onEffects = F3($elm$time$Time$onEffects_fn);
    var $elm$time$Time$onSelfMsg_fn = function (router, interval, state) {
        var _v0 = $elm$core$Dict$get_fn(interval, state.ff);
        if (_v0.$ === 1) {
            return $elm$core$Task$succeed(state);
        }
        else {
            var taggers = _v0.a;
            var tellTaggers = function (time) {
                return $elm$core$Task$sequence($elm$core$List$map_fn(function (tagger) {
                    return _Platform_sendToApp_fn(router, tagger(time));
                }, taggers));
            };
            return _Scheduler_andThen_fn(function (_v1) {
                return $elm$core$Task$succeed(state);
            }, _Scheduler_andThen_fn(tellTaggers, $elm$time$Time$now));
        }
    }, $elm$time$Time$onSelfMsg = F3($elm$time$Time$onSelfMsg_fn);
    var $elm$core$Basics$composeL_fn = function (g, f, x) {
        return g(f(x));
    }, $elm$core$Basics$composeL = F3($elm$core$Basics$composeL_fn);
    var $elm$time$Time$subMap_fn = function (f, _v0) {
        var interval = _v0.a;
        var tagger = _v0.b;
        return $elm$time$Time$Every_fn(interval, A2($elm$core$Basics$composeL, f, tagger));
    }, $elm$time$Time$subMap = F2($elm$time$Time$subMap_fn);
    _Platform_effectManagers["Time"] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
    var $elm$time$Time$subscription = _Platform_leaf("Time");
    var $elm$time$Time$every_fn = function (interval, tagger) {
        return $elm$time$Time$subscription($elm$time$Time$Every_fn(interval, tagger));
    }, $elm$time$Time$every = F2($elm$time$Time$every_fn);
    var $elm$browser$Browser$Events$Document = 0;
    var $elm$browser$Browser$Events$MySub_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $elm$browser$Browser$Events$MySub = F3($elm$browser$Browser$Events$MySub_fn);
    var $elm$browser$Browser$Events$State_fn = function (subs, pids) {
        return { eO: pids, fe: subs };
    }, $elm$browser$Browser$Events$State = F2($elm$browser$Browser$Events$State_fn);
    var $elm$browser$Browser$Events$init = $elm$core$Task$succeed($elm$browser$Browser$Events$State_fn(_List_Nil, $elm$core$Dict$empty));
    var $elm$browser$Browser$Events$nodeToKey = function (node) {
        if (!node) {
            return "d_";
        }
        else {
            return "w_";
        }
    };
    var $elm$browser$Browser$Events$addKey = function (sub) {
        var node = sub.a;
        var name = sub.b;
        return _Utils_Tuple2(_Utils_ap($elm$browser$Browser$Events$nodeToKey(node), name), sub);
    };
    var $elm$browser$Browser$Events$Event_fn = function (key, event) {
        return { ea: event, ep: key };
    }, $elm$browser$Browser$Events$Event = F2($elm$browser$Browser$Events$Event_fn);
    var $elm$browser$Browser$Events$spawn_fn = function (router, key, _v0) {
        var node = _v0.a;
        var name = _v0.b;
        var actualNode = function () {
            if (!node) {
                return _Browser_doc;
            }
            else {
                return _Browser_window;
            }
        }();
        return $elm$core$Task$map_fn(function (value) {
            return _Utils_Tuple2(key, value);
        }, _Browser_on_fn(actualNode, name, function (event) {
            return _Platform_sendToSelf_fn(router, $elm$browser$Browser$Events$Event_fn(key, event));
        }));
    }, $elm$browser$Browser$Events$spawn = F3($elm$browser$Browser$Events$spawn_fn);
    var $elm$browser$Browser$Events$onEffects_fn = function (router, subs, state) {
        var stepRight = F3(function (key, sub, _v6) {
            var deads = _v6.a;
            var lives = _v6.b;
            var news = _v6.c;
            return _Utils_Tuple3(deads, lives, _List_Cons($elm$browser$Browser$Events$spawn_fn(router, key, sub), news));
        });
        var stepLeft = F3(function (_v4, pid, _v5) {
            var deads = _v5.a;
            var lives = _v5.b;
            var news = _v5.c;
            return _Utils_Tuple3(_List_Cons(pid, deads), lives, news);
        });
        var stepBoth = F4(function (key, pid, _v2, _v3) {
            var deads = _v3.a;
            var lives = _v3.b;
            var news = _v3.c;
            return _Utils_Tuple3(deads, $elm$core$Dict$insert_fn(key, pid, lives), news);
        });
        var newSubs = $elm$core$List$map_fn($elm$browser$Browser$Events$addKey, subs);
        var _v0 = $elm$core$Dict$merge_fn(stepLeft, stepBoth, stepRight, state.eO, $elm$core$Dict$fromList(newSubs), _Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
        var deadPids = _v0.a;
        var livePids = _v0.b;
        var makeNewPids = _v0.c;
        return _Scheduler_andThen_fn(function (pids) {
            return $elm$core$Task$succeed($elm$browser$Browser$Events$State_fn(newSubs, $elm$core$Dict$union_fn(livePids, $elm$core$Dict$fromList(pids))));
        }, _Scheduler_andThen_fn(function (_v1) {
            return $elm$core$Task$sequence(makeNewPids);
        }, $elm$core$Task$sequence($elm$core$List$map_fn($elm$core$Process$kill, deadPids))));
    }, $elm$browser$Browser$Events$onEffects = F3($elm$browser$Browser$Events$onEffects_fn);
    var $elm$browser$Browser$Events$onSelfMsg_fn = function (router, _v0, state) {
        var key = _v0.ep;
        var event = _v0.ea;
        var toMessage = function (_v2) {
            var subKey = _v2.a;
            var _v3 = _v2.b;
            var node = _v3.a;
            var name = _v3.b;
            var decoder = _v3.c;
            return _Utils_eq(subKey, key) ? _Browser_decodeEvent_fn(decoder, event) : $elm$core$Maybe$Nothing;
        };
        var messages = $elm$core$List$filterMap_fn(toMessage, state.fe);
        return _Scheduler_andThen_fn(function (_v1) {
            return $elm$core$Task$succeed(state);
        }, $elm$core$Task$sequence($elm$core$List$map_fn($elm$core$Platform$sendToApp(router), messages)));
    }, $elm$browser$Browser$Events$onSelfMsg = F3($elm$browser$Browser$Events$onSelfMsg_fn);
    var $elm$browser$Browser$Events$subMap_fn = function (func, _v0) {
        var node = _v0.a;
        var name = _v0.b;
        var decoder = _v0.c;
        return $elm$browser$Browser$Events$MySub_fn(node, name, _Json_map1_fn(func, decoder));
    }, $elm$browser$Browser$Events$subMap = F2($elm$browser$Browser$Events$subMap_fn);
    _Platform_effectManagers["Browser.Events"] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
    var $elm$browser$Browser$Events$subscription = _Platform_leaf("Browser.Events");
    var $elm$browser$Browser$Events$on_fn = function (node, name, decoder) {
        return $elm$browser$Browser$Events$subscription($elm$browser$Browser$Events$MySub_fn(node, name, decoder));
    }, $elm$browser$Browser$Events$on = F3($elm$browser$Browser$Events$on_fn);
    var $elm$browser$Browser$Events$onKeyDown_a0 = 0, $elm$browser$Browser$Events$onKeyDown_a1 = "keydown", $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$onKeyDown_a0, $elm$browser$Browser$Events$onKeyDown_a1);
    var $elm$browser$Browser$Events$onKeyUp_a0 = 0, $elm$browser$Browser$Events$onKeyUp_a1 = "keyup", $elm$browser$Browser$Events$onKeyUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$onKeyUp_a0, $elm$browser$Browser$Events$onKeyUp_a1);
    var $elm$browser$Browser$Events$Window = 1;
    var $elm$browser$Browser$Events$onResize = function (func) {
        return $elm$browser$Browser$Events$on_fn(1, "resize", _Json_decodeField_fn("target", _Json_map2_fn(func, _Json_decodeField_fn("innerWidth", $elm$json$Json$Decode$int), _Json_decodeField_fn("innerHeight", $elm$json$Json$Decode$int))));
    };
    var $author$project$Main$subscriptions = function (state) {
        return $elm$core$Platform$Sub$batch(_List_fromArray([
            $elm$browser$Browser$Events$onResize(F2(function (width, height) {
                return $author$project$Main$WindowSized({ bw: height, b: width });
            })),
            $elm$time$Time$every_fn(1000 / 30, $author$project$Main$FrameTickPassed),
            $elm$browser$Browser$Events$on_fn($elm$browser$Browser$Events$onKeyDown_a0, $elm$browser$Browser$Events$onKeyDown_a1, _Json_map1_fn($author$project$Main$KeyPressed, $JohnBugner$elm_keyboard$Key$decoder)),
            $elm$browser$Browser$Events$on_fn($elm$browser$Browser$Events$onKeyUp_a0, $elm$browser$Browser$Events$onKeyUp_a1, _Json_map1_fn($author$project$Main$KeyReleased, $JohnBugner$elm_keyboard$Key$decoder))
        ]));
    };
    var $MartinSStewart$elm_audio$Audio$AudioCmdGroup = function (a) {
        return { $: 1, a: a };
    };
    var $MartinSStewart$elm_audio$Audio$cmdBatch = function (audioCmds) {
        return $MartinSStewart$elm_audio$Audio$AudioCmdGroup(audioCmds);
    };
    var $elm$core$List$concatMap_fn = function (f, lists) {
        if (!lists.b) {
            return _List_Nil;
        }
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; lists.b.
            b; lists = lists.b) {
            var xs = f(lists.a);
            for (; xs.b; xs = xs.b) {
                var next = _List_Cons(xs.a, _List_Nil);
                end.b = next;
                end = next;
            }
        }
        end.b = f(lists.a);
        return tmp.b;
    }, $elm$core$List$concatMap = F2($elm$core$List$concatMap_fn);
    var $author$project$Reaction$toTuple3 = function (interpretEffect) {
        return function (step) {
            var commandsList = $elm$core$List$map_fn(interpretEffect, $author$project$Reaction$effects(step));
            return _Utils_Tuple3($author$project$Reaction$state(step), $elm$core$Platform$Cmd$batch($elm$core$List$concatMap_fn(function ($) {
                return $.bp;
            }, commandsList)), $MartinSStewart$elm_audio$Audio$cmdBatch($elm$core$List$concatMap_fn(function ($) {
                return $.bl;
            }, commandsList)));
        };
    };
    var $elm$core$List$singleton = function (value) {
        return _List_fromArray([value]);
    };
    var $timjs$elm_collage$Collage$Core$Circle = function (a) {
        return { $: 3, a: a };
    };
    var $timjs$elm_collage$Collage$circle = $timjs$elm_collage$Collage$Core$Circle;
    var $timjs$elm_collage$Collage$Core$Chunk_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $timjs$elm_collage$Collage$Core$Chunk = F2($timjs$elm_collage$Collage$Core$Chunk_fn);
    var $timjs$elm_collage$Collage$Text$None = 0;
    var $timjs$elm_collage$Collage$Text$Regular = 2;
    var $timjs$elm_collage$Collage$Text$Sansserif = { $: 1 };
    var $timjs$elm_collage$Collage$Text$Upright = 0;
    var $avh4$elm_color$Color$RgbaSpace_fn = function (a, b, c, d) {
        return { $: 0, a: a, b: b, c: c, d: d };
    }, $avh4$elm_color$Color$RgbaSpace = F4($avh4$elm_color$Color$RgbaSpace_fn);
    var $avh4$elm_color$Color$black = $avh4$elm_color$Color$RgbaSpace_fn(0 / 255, 0 / 255, 0 / 255, 1);
    var $timjs$elm_collage$Collage$Text$normal = 16;
    var $timjs$elm_collage$Collage$Text$defaultStyle = { c: $avh4$elm_color$Color$black, cc: 0, e8: 0, be: $timjs$elm_collage$Collage$Text$normal, hZ: $timjs$elm_collage$Collage$Text$Sansserif, bP: 2 };
    var $timjs$elm_collage$Collage$Text$fromString_a0 = $timjs$elm_collage$Collage$Text$defaultStyle, $timjs$elm_collage$Collage$Text$fromString = $timjs$elm_collage$Collage$Core$Chunk($timjs$elm_collage$Collage$Text$fromString_a0);
    var $timjs$elm_collage$Collage$Text$empty = $timjs$elm_collage$Collage$Core$Chunk_fn($timjs$elm_collage$Collage$Text$fromString_a0, "");
    var $timjs$elm_collage$Collage$Flat = 0;
    var $timjs$elm_collage$Collage$Sharp = 1;
    var $timjs$elm_collage$Collage$thin = 2;
    var $timjs$elm_collage$Collage$Core$Uniform = function (a) {
        return { $: 1, a: a };
    };
    var $timjs$elm_collage$Collage$uniform = $timjs$elm_collage$Collage$Core$Uniform;
    var $timjs$elm_collage$Collage$defaultLineStyle = (new $$Record9(0, _List_Nil, 0, $timjs$elm_collage$Collage$uniform($avh4$elm_color$Color$black), 1, $timjs$elm_collage$Collage$thin));
    var $timjs$elm_collage$Collage$broken_fn = function (dashes, thickness, fill) {
        return function () {
            var $r = $timjs$elm_collage$Collage$defaultLineStyle.$c();
            $r.c4 = dashes;
            $r.c6 = fill;
            $r.dH = thickness;
            return $r;
        }();
    }, $timjs$elm_collage$Collage$broken = F3($timjs$elm_collage$Collage$broken_fn);
    var $timjs$elm_collage$Collage$solid_a0 = _List_Nil, $timjs$elm_collage$Collage$solid = $timjs$elm_collage$Collage$broken($timjs$elm_collage$Collage$solid_a0);
    var $timjs$elm_collage$Collage$Core$Transparent = { $: 0 };
    var $timjs$elm_collage$Collage$transparent = $timjs$elm_collage$Collage$Core$Transparent;
    var $timjs$elm_collage$Collage$invisible = $timjs$elm_collage$Collage$broken_fn($timjs$elm_collage$Collage$solid_a0, 0, $timjs$elm_collage$Collage$transparent);
    var $timjs$elm_collage$Collage$Core$Shape_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $timjs$elm_collage$Collage$Core$Shape = F2($timjs$elm_collage$Collage$Core$Shape_fn);
    var $timjs$elm_collage$Collage$Core$collage = function (basic) {
        return (new $$Record10(basic, _List_Nil, $elm$core$Maybe$Nothing, 1, 0, _Utils_Tuple2(1, 1), _Utils_Tuple2(0, 0)));
    };
    var $timjs$elm_collage$Collage$styled = function (style) {
        return A2($elm$core$Basics$composeL, $timjs$elm_collage$Collage$Core$collage, $timjs$elm_collage$Collage$Core$Shape(style));
    };
    var $timjs$elm_collage$Collage$filled = function (fill) {
        return $timjs$elm_collage$Collage$styled(_Utils_Tuple2(fill, $timjs$elm_collage$Collage$invisible));
    };
    var $elm$core$Basics$ge = _Utils_ge;
    var $ianmackenzie$elm_units$Quantity$minus_fn = function (_v0, _v1) {
        var y = _v0;
        var x = _v1;
        return x - y;
    }, $ianmackenzie$elm_units$Quantity$minus = F2($ianmackenzie$elm_units$Quantity$minus_fn);
    var $timjs$elm_collage$Collage$outlined = function (linestyle) {
        return $timjs$elm_collage$Collage$styled(_Utils_Tuple2($timjs$elm_collage$Collage$transparent, linestyle));
    };
    var $timjs$elm_collage$Collage$Core$Polyline = $elm$core$Basics$identity;
    var $timjs$elm_collage$Collage$path = $elm$core$Basics$identity;
    var $elm$core$Basics$pow = _Basics_pow;
    var $timjs$elm_collage$Collage$Core$Rectangle_fn = function (a, b, c) {
        return { $: 1, a: a, b: b, c: c };
    }, $timjs$elm_collage$Collage$Core$Rectangle = F3($timjs$elm_collage$Collage$Core$Rectangle_fn);
    var $timjs$elm_collage$Collage$roundedRectangle = $timjs$elm_collage$Collage$Core$Rectangle;
    var $timjs$elm_collage$Collage$rectangle_fn = function (w, h) {
        return $timjs$elm_collage$Collage$Core$Rectangle_fn(w, h, 0);
    }, $timjs$elm_collage$Collage$rectangle = F2($timjs$elm_collage$Collage$rectangle_fn);
    var $timjs$elm_collage$Collage$Core$Text_fn = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $timjs$elm_collage$Collage$Core$Text = F2($timjs$elm_collage$Collage$Core$Text_fn);
    var $timjs$elm_collage$Collage$Text$height = function (_v0) {
        var sty = _v0.a;
        return sty.be;
    };
    var $timjs$elm_collage$Collage$Text$width = function (text) {
        var sty = text.a;
        var str = text.b;
        return ($timjs$elm_collage$Collage$Text$height(text) / 2) * $elm$core$String$length(str);
    };
    var $timjs$elm_collage$Collage$rendered = function (text) {
        return $timjs$elm_collage$Collage$Core$collage($timjs$elm_collage$Collage$Core$Text_fn(_Utils_Tuple2($timjs$elm_collage$Collage$Text$width(text), $timjs$elm_collage$Collage$Text$height(text)), text));
    };
    var $avh4$elm_color$Color$rgb_fn = function (r, g, b) {
        return $avh4$elm_color$Color$RgbaSpace_fn(r, g, b, 1);
    }, $avh4$elm_color$Color$rgb = F3($avh4$elm_color$Color$rgb_fn);
    var $avh4$elm_color$Color$rgba_fn = function (r, g, b, a) {
        return $avh4$elm_color$Color$RgbaSpace_fn(r, g, b, a);
    }, $avh4$elm_color$Color$rgba = F4($avh4$elm_color$Color$rgba_fn);
    var $timjs$elm_collage$Collage$rotate_fn = function (t, collage) {
        return function () {
            var $r = collage.$c();
            $r.e$ = collage.e$ + t;
            return $r;
        }();
    }, $timjs$elm_collage$Collage$rotate = F2($timjs$elm_collage$Collage$rotate_fn);
    var $timjs$elm_collage$Collage$scaleXY_fn = function (_v0, collage) {
        var sx = _v0.a;
        var sy = _v0.b;
        var _v1 = collage.e2;
        var sx0 = _v1.a;
        var sy0 = _v1.b;
        return function () {
            var $r = collage.$c();
            $r.e2 = _Utils_Tuple2(sx0 * sx, sy0 * sy);
            return $r;
        }();
    }, $timjs$elm_collage$Collage$scaleXY = F2($timjs$elm_collage$Collage$scaleXY_fn);
    var $timjs$elm_collage$Collage$scaleX_fn = function (s, collage) {
        return $timjs$elm_collage$Collage$scaleXY_fn(_Utils_Tuple2(s, 1), collage);
    }, $timjs$elm_collage$Collage$scaleX = F2($timjs$elm_collage$Collage$scaleX_fn);
    var $timjs$elm_collage$Collage$scaleY_fn = function (s, collage) {
        return $timjs$elm_collage$Collage$scaleXY_fn(_Utils_Tuple2(1, s), collage);
    }, $timjs$elm_collage$Collage$scaleY = F2($timjs$elm_collage$Collage$scaleY_fn);
    var $timjs$elm_collage$Collage$shift_fn = function (_v0, collage) {
        var dx = _v0.a;
        var dy = _v0.b;
        var _v1 = collage.bJ;
        var x = _v1.a;
        var y = _v1.b;
        return $$update__bJ(collage, _Utils_Tuple2(x + dx, y + dy));
    }, $timjs$elm_collage$Collage$shift = F2($timjs$elm_collage$Collage$shift_fn);
    var $timjs$elm_collage$Collage$shiftY_fn = function (dy, collage) {
        var _v0 = collage.bJ;
        var x = _v0.a;
        var y = _v0.b;
        return $$update__bJ(collage, _Utils_Tuple2(x, y + dy));
    }, $timjs$elm_collage$Collage$shiftY = F2($timjs$elm_collage$Collage$shiftY_fn);
    var $elm$core$Basics$sin = _Basics_sin;
    var $timjs$elm_collage$Collage$Core$Group = function (a) {
        return { $: 5, a: a };
    };
    var $timjs$elm_collage$Collage$group_a0 = $timjs$elm_collage$Collage$Core$collage, $timjs$elm_collage$Collage$group_a1 = $timjs$elm_collage$Collage$Core$Group, $timjs$elm_collage$Collage$group = A2($elm$core$Basics$composeL, $timjs$elm_collage$Collage$group_a0, $timjs$elm_collage$Collage$group_a1);
    var $timjs$elm_collage$Collage$Layout$stack = $timjs$elm_collage$Collage$group;
    var $elm$html$Html$div = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "div"), $elm$html$Html$div_fn = $elm$html$Html$div.a2;
    var $elm$core$String$fromFloat = _String_fromNumber;
    var $elm$svg$Svg$Attributes$height_a0 = "height", $elm$svg$Svg$Attributes$height = _VirtualDom_attribute($elm$svg$Svg$Attributes$height_a0);
    var $timjs$elm_collage$Collage$Core$Path_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $timjs$elm_collage$Collage$Core$Path = F2($timjs$elm_collage$Collage$Core$Path_fn);
    var $timjs$elm_collage$Collage$Render$decodeCap = function (cap) {
        switch (cap) {
            case 1:
                return "round";
            case 2:
                return "square";
            default:
                return "butt";
        }
    };
    var $timjs$elm_collage$Collage$Render$decodeDashing = function (ds) {
        var decodeOnOff = function (_v0) {
            var x = _v0.a;
            var y = _v0.b;
            return $elm$core$String$join_fn(",", _List_fromArray([
                $elm$core$String$fromInt(x),
                $elm$core$String$fromInt(y)
            ]));
        };
        return $elm$core$String$join_fn(" ", $elm$core$List$map_fn(decodeOnOff, ds));
    };
    var $avh4$elm_color$Color$toCssString = function (_v0) {
        var r = _v0.a;
        var g = _v0.b;
        var b = _v0.c;
        var a = _v0.d;
        var roundTo = function (x) {
            return $elm$core$Basics$round(x * 1000) / 1000;
        };
        var pct = function (x) {
            return $elm$core$Basics$round(x * 10000) / 100;
        };
        return $elm$core$String$concat(_List_fromArray([
            "rgba(",
            $elm$core$String$fromFloat(pct(r)),
            "%,",
            $elm$core$String$fromFloat(pct(g)),
            "%,",
            $elm$core$String$fromFloat(pct(b)),
            "%,",
            $elm$core$String$fromFloat(roundTo(a)),
            ")"
        ]));
    };
    var $avh4$elm_color$Color$toRgba = function (_v0) {
        var r = _v0.a;
        var g = _v0.b;
        var b = _v0.c;
        var a = _v0.d;
        return { fG: a, dV: b, eg: g, eW: r };
    };
    var $timjs$elm_collage$Collage$Render$decodeColor = function (c) {
        var _v0 = $avh4$elm_color$Color$toRgba(c);
        var red = _v0.eW;
        var green = _v0.eg;
        var blue = _v0.dV;
        return $avh4$elm_color$Color$toCssString($avh4$elm_color$Color$rgb_fn(red, green, blue));
    };
    var $timjs$elm_collage$Collage$Render$decodeFill = function (fs) {
        if (fs.$ === 1) {
            var c = fs.a;
            return $timjs$elm_collage$Collage$Render$decodeColor(c);
        }
        else {
            return "none";
        }
    };
    var $timjs$elm_collage$Collage$Render$decodeOpacity = function (c) {
        var _v0 = $avh4$elm_color$Color$toRgba(c);
        var alpha = _v0.fG;
        return $elm$core$String$fromFloat(alpha);
    };
    var $timjs$elm_collage$Collage$Render$decodeFillOpacity = function (fs) {
        if (fs.$ === 1) {
            var c = fs.a;
            return $timjs$elm_collage$Collage$Render$decodeOpacity(c);
        }
        else {
            return "0";
        }
    };
    var $timjs$elm_collage$Collage$Render$decodeJoin = function (join) {
        switch (join) {
            case 0:
                return "round";
            case 1:
                return "miter";
            default:
                return "bevel";
        }
    };
    var $elm$core$Basics$pi = _Basics_pi;
    var $timjs$elm_collage$Collage$Render$decodeTransform = function (collage) {
        var sy = $elm$core$String$fromFloat(collage.e2.b);
        var sx = $elm$core$String$fromFloat(collage.e2.a);
        var r = $elm$core$String$fromFloat((((-collage.e$) / 2) / $elm$core$Basics$pi) * 360);
        var dy = $elm$core$String$fromFloat(-collage.bJ.b);
        var dx = $elm$core$String$fromFloat(collage.bJ.a);
        return $elm$core$String$concat(_List_fromArray(["translate(", dx, ",", dy, ") scale(", sx, ",", sy, ") rotate(", r, ")"]));
    };
    var $elm$svg$Svg$Attributes$dominantBaseline_a0 = "dominant-baseline", $elm$svg$Svg$Attributes$dominantBaseline = _VirtualDom_attribute($elm$svg$Svg$Attributes$dominantBaseline_a0);
    var $elm$svg$Svg$Attributes$fill_a0 = "fill", $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute($elm$svg$Svg$Attributes$fill_a0);
    var $elm$svg$Svg$Attributes$fillOpacity_a0 = "fill-opacity", $elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute($elm$svg$Svg$Attributes$fillOpacity_a0);
    var $elm$svg$Svg$Attributes$fontFamily_a0 = "font-family", $elm$svg$Svg$Attributes$fontFamily = _VirtualDom_attribute($elm$svg$Svg$Attributes$fontFamily_a0);
    var $elm$svg$Svg$Attributes$fontSize_a0 = "font-size", $elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute($elm$svg$Svg$Attributes$fontSize_a0);
    var $elm$svg$Svg$Attributes$fontStyle_a0 = "font-style", $elm$svg$Svg$Attributes$fontStyle = _VirtualDom_attribute($elm$svg$Svg$Attributes$fontStyle_a0);
    var $elm$svg$Svg$Attributes$fontVariant_a0 = "font-variant", $elm$svg$Svg$Attributes$fontVariant = _VirtualDom_attribute($elm$svg$Svg$Attributes$fontVariant_a0);
    var $elm$svg$Svg$Attributes$fontWeight_a0 = "font-weight", $elm$svg$Svg$Attributes$fontWeight = _VirtualDom_attribute($elm$svg$Svg$Attributes$fontWeight_a0);
    var $elm$svg$Svg$Attributes$opacity_a0 = "opacity", $elm$svg$Svg$Attributes$opacity = _VirtualDom_attribute($elm$svg$Svg$Attributes$opacity_a0);
    var $elm$svg$Svg$Attributes$stroke_a0 = "stroke", $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute($elm$svg$Svg$Attributes$stroke_a0);
    var $elm$svg$Svg$Attributes$strokeDasharray_a0 = "stroke-dasharray", $elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute($elm$svg$Svg$Attributes$strokeDasharray_a0);
    var $elm$svg$Svg$Attributes$strokeDashoffset_a0 = "stroke-dashoffset", $elm$svg$Svg$Attributes$strokeDashoffset = _VirtualDom_attribute($elm$svg$Svg$Attributes$strokeDashoffset_a0);
    var $elm$svg$Svg$Attributes$strokeLinecap_a0 = "stroke-linecap", $elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute($elm$svg$Svg$Attributes$strokeLinecap_a0);
    var $elm$svg$Svg$Attributes$strokeLinejoin_a0 = "stroke-linejoin", $elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute($elm$svg$Svg$Attributes$strokeLinejoin_a0);
    var $elm$svg$Svg$Attributes$strokeOpacity_a0 = "stroke-opacity", $elm$svg$Svg$Attributes$strokeOpacity = _VirtualDom_attribute($elm$svg$Svg$Attributes$strokeOpacity_a0);
    var $elm$svg$Svg$Attributes$strokeWidth_a0 = "stroke-width", $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute($elm$svg$Svg$Attributes$strokeWidth_a0);
    var $elm$svg$Svg$Attributes$textAnchor_a0 = "text-anchor", $elm$svg$Svg$Attributes$textAnchor = _VirtualDom_attribute($elm$svg$Svg$Attributes$textAnchor_a0);
    var $elm$svg$Svg$Attributes$textDecoration_a0 = "text-decoration", $elm$svg$Svg$Attributes$textDecoration = _VirtualDom_attribute($elm$svg$Svg$Attributes$textDecoration_a0);
    var $elm$svg$Svg$Attributes$transform_a0 = "transform", $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute($elm$svg$Svg$Attributes$transform_a0);
    var $timjs$elm_collage$Collage$Render$attrs = function (collage) {
        var _v0 = collage.bn;
        switch (_v0.$) {
            case 1:
                var line = _v0.a;
                return _List_fromArray([
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$stroke_a0, $timjs$elm_collage$Collage$Render$decodeFill(line.c6)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeOpacity_a0, $timjs$elm_collage$Collage$Render$decodeFillOpacity(line.c6)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeWidth_a0, $elm$core$String$fromFloat(line.dH)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinecap_a0, $timjs$elm_collage$Collage$Render$decodeCap(line.dX)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinejoin_a0, $timjs$elm_collage$Collage$Render$decodeJoin(line.eo)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "none"),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$opacity_a0, $elm$core$String$fromFloat(collage.g9)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$transform_a0, $timjs$elm_collage$Collage$Render$decodeTransform(collage)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeDashoffset_a0, $elm$core$String$fromInt(line.d3)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeDasharray_a0, $timjs$elm_collage$Collage$Render$decodeDashing(line.c4))
                ]);
            case 0:
                var _v1 = _v0.a;
                var fill = _v1.a;
                var line = _v1.b;
                return _List_fromArray([
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, $timjs$elm_collage$Collage$Render$decodeFill(fill)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fillOpacity_a0, $timjs$elm_collage$Collage$Render$decodeFillOpacity(fill)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$stroke_a0, $timjs$elm_collage$Collage$Render$decodeFill(line.c6)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeOpacity_a0, $timjs$elm_collage$Collage$Render$decodeFillOpacity(line.c6)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeWidth_a0, $elm$core$String$fromFloat(line.dH)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinecap_a0, $timjs$elm_collage$Collage$Render$decodeCap(line.dX)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinejoin_a0, $timjs$elm_collage$Collage$Render$decodeJoin(line.eo)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$opacity_a0, $elm$core$String$fromFloat(collage.g9)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$transform_a0, $timjs$elm_collage$Collage$Render$decodeTransform(collage)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeDashoffset_a0, $elm$core$String$fromInt(line.d3)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeDasharray_a0, $timjs$elm_collage$Collage$Render$decodeDashing(line.c4))
                ]);
            case 2:
                var _v2 = _v0.b;
                var style = _v2.a;
                var str = _v2.b;
                return _List_fromArray([
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, $timjs$elm_collage$Collage$Render$decodeFill($timjs$elm_collage$Collage$Core$Uniform(style.c))),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fontFamily_a0, function () {
                        var _v3 = style.hZ;
                        switch (_v3.$) {
                            case 0:
                                return "serif";
                            case 1:
                                return "sans-serif";
                            case 2:
                                return "monospace";
                            default:
                                var name = _v3.a;
                                return name;
                        }
                    }()),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fontSize_a0, $elm$core$String$fromInt(style.be)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fontWeight_a0, function () {
                        var _v4 = style.bP;
                        switch (_v4) {
                            case 0:
                                return "200";
                            case 1:
                                return "300";
                            case 2:
                                return "normal";
                            case 3:
                                return "500";
                            case 4:
                                return "600";
                            case 5:
                                return "bold";
                            default:
                                return "800";
                        }
                    }()),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fontStyle_a0, function () {
                        var _v5 = style.e8;
                        switch (_v5) {
                            case 0:
                                return "normal";
                            case 1:
                                return "normal";
                            case 2:
                                return "oblique";
                            default:
                                return "italic";
                        }
                    }()),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fontVariant_a0, function () {
                        var _v6 = style.e8;
                        if (_v6 === 1) {
                            return "small-caps";
                        }
                        else {
                            return "normal";
                        }
                    }()),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$textDecoration_a0, function () {
                        var _v7 = style.cc;
                        switch (_v7) {
                            case 0:
                                return "none";
                            case 1:
                                return "underline";
                            case 2:
                                return "overline";
                            default:
                                return "line-through";
                        }
                    }()),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$textAnchor_a0, "middle"),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$dominantBaseline_a0, "middle"),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$opacity_a0, $elm$core$String$fromFloat(collage.g9)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$transform_a0, $timjs$elm_collage$Collage$Render$decodeTransform(collage))
                ]);
            default:
                return _List_fromArray([
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$opacity_a0, $elm$core$String$fromFloat(collage.g9)),
                    _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$transform_a0, $timjs$elm_collage$Collage$Render$decodeTransform(collage))
                ]);
        }
    };
    var $elm$svg$Svg$Attributes$width_a0 = "width", $elm$svg$Svg$Attributes$width = _VirtualDom_attribute($elm$svg$Svg$Attributes$width_a0);
    var $elm$svg$Svg$Attributes$x_a0 = "x", $elm$svg$Svg$Attributes$x = _VirtualDom_attribute($elm$svg$Svg$Attributes$x_a0);
    var $elm$svg$Svg$Attributes$y_a0 = "y", $elm$svg$Svg$Attributes$y = _VirtualDom_attribute($elm$svg$Svg$Attributes$y_a0);
    var $timjs$elm_collage$Collage$Render$box_fn = function (w, h) {
        return _List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$width_a0, $elm$core$String$fromFloat(w)),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$height_a0, $elm$core$String$fromFloat(h)),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$x_a0, $elm$core$String$fromFloat((-w) / 2)),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$y_a0, $elm$core$String$fromFloat((-h) / 2))
        ]);
    }, $timjs$elm_collage$Collage$Render$box = F2($timjs$elm_collage$Collage$Render$box_fn);
    var $elm$svg$Svg$trustedNode_a0 = "http://www.w3.org/2000/svg", $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS($elm$svg$Svg$trustedNode_a0);
    var $elm$svg$Svg$circle = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "circle"), $elm$svg$Svg$circle_fn = $elm$svg$Svg$circle.a2;
    var $timjs$elm_collage$Collage$Render$decodePoints = function (ps) {
        return $elm$core$String$join_fn(" ", $elm$core$List$map_fn(function (_v0) {
            var x = _v0.a;
            var y = _v0.b;
            return $elm$core$String$join_fn(",", _List_fromArray([
                $elm$core$String$fromFloat(x),
                $elm$core$String$fromFloat(-y)
            ]));
        }, ps));
    };
    var $elm$svg$Svg$ellipse = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "ellipse"), $elm$svg$Svg$ellipse_fn = $elm$svg$Svg$ellipse.a2;
    var $elm$virtual_dom$VirtualDom$Normal = function (a) {
        return { $: 0, a: a };
    };
    var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
    var $elm$html$Html$Events$on_fn = function (event, decoder) {
        return _VirtualDom_on_fn(event, $elm$virtual_dom$VirtualDom$Normal(decoder));
    }, $elm$html$Html$Events$on = F2($elm$html$Html$Events$on_fn);
    var $elm$svg$Svg$Events$on = $elm$html$Html$Events$on;
    var $elm_community$basics_extra$Basics$Extra$uncurry_fn = function (f, _v0) {
        var a = _v0.a;
        var b = _v0.b;
        return A2(f, a, b);
    }, $elm_community$basics_extra$Basics$Extra$uncurry_fn_unwrapped = function (f, _v0) {
        var a = _v0.a;
        var b = _v0.b;
        return f(a, b);
    }, $elm_community$basics_extra$Basics$Extra$uncurry = F2($elm_community$basics_extra$Basics$Extra$uncurry_fn);
    var $timjs$elm_collage$Collage$Render$events = function (handlers) {
        return $elm$core$List$map_fn($elm_community$basics_extra$Basics$Extra$uncurry($elm$svg$Svg$Events$on), handlers);
    };
    var $elm$svg$Svg$foreignObject = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "foreignObject"), $elm$svg$Svg$foreignObject_fn = $elm$svg$Svg$foreignObject.a2;
    var $elm$svg$Svg$g = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "g"), $elm$svg$Svg$g_fn = $elm$svg$Svg$g.a2;
    var $elm$svg$Svg$Attributes$id_a0 = "id", $elm$svg$Svg$Attributes$id = _VirtualDom_attribute($elm$svg$Svg$Attributes$id_a0);
    var $elm$svg$Svg$image = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "image"), $elm$svg$Svg$image_fn = $elm$svg$Svg$image.a2;
    var $elm$svg$Svg$Attributes$points_a0 = "points", $elm$svg$Svg$Attributes$points = _VirtualDom_attribute($elm$svg$Svg$Attributes$points_a0);
    var $elm$svg$Svg$polygon = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "polygon"), $elm$svg$Svg$polygon_fn = $elm$svg$Svg$polygon.a2;
    var $elm$svg$Svg$polyline = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "polyline"), $elm$svg$Svg$polyline_fn = $elm$svg$Svg$polyline.a2;
    var $elm$svg$Svg$Attributes$r_a0 = "r", $elm$svg$Svg$Attributes$r = _VirtualDom_attribute($elm$svg$Svg$Attributes$r_a0);
    var $elm$svg$Svg$rect = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "rect"), $elm$svg$Svg$rect_fn = $elm$svg$Svg$rect.a2;
    var $elm$svg$Svg$Attributes$rx_a0 = "rx", $elm$svg$Svg$Attributes$rx = _VirtualDom_attribute($elm$svg$Svg$Attributes$rx_a0);
    var $elm$svg$Svg$Attributes$ry_a0 = "ry", $elm$svg$Svg$Attributes$ry = _VirtualDom_attribute($elm$svg$Svg$Attributes$ry_a0);
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
    var $elm$svg$Svg$text_ = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "text"), $elm$svg$Svg$text__fn = $elm$svg$Svg$text_.a2;
    var $elm$svg$Svg$Attributes$xlinkHref = function (value) {
        return _VirtualDom_attributeNS_fn("http://www.w3.org/1999/xlink", "xlink:href", _VirtualDom_noJavaScriptUri(value));
    };
    var $timjs$elm_collage$Collage$Render$render = function (collage) {
        render: while (true) {
            var name = $elm$core$Maybe$withDefault_fn("_unnamed_", collage.gY);
            var _v0 = collage.bn;
            switch (_v0.$) {
                case 1:
                    var style = _v0.a;
                    var path = _v0.b;
                    var ps = path;
                    return $elm$svg$Svg$polyline_fn(_Utils_ap(_List_fromArray([
                        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$id_a0, name),
                        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$points_a0, $timjs$elm_collage$Collage$Render$decodePoints(ps))
                    ]), _Utils_ap($timjs$elm_collage$Collage$Render$attrs(collage), $timjs$elm_collage$Collage$Render$events(collage.gu))), _List_Nil);
                case 0:
                    var _v2 = _v0.a;
                    var fill = _v2.a;
                    var line = _v2.b;
                    var shape = _v0.b;
                    switch (shape.$) {
                        case 0:
                            var ps = shape.a;
                            return $elm$svg$Svg$polygon_fn(_Utils_ap(_List_fromArray([
                                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$id_a0, name),
                                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$points_a0, $timjs$elm_collage$Collage$Render$decodePoints(ps))
                            ]), _Utils_ap($timjs$elm_collage$Collage$Render$attrs(collage), $timjs$elm_collage$Collage$Render$events(collage.gu))), _List_Nil);
                        case 3:
                            var r = shape.a;
                            return $elm$svg$Svg$circle_fn(_Utils_ap(_List_fromArray([
                                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$id_a0, name),
                                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$r_a0, $elm$core$String$fromFloat(r))
                            ]), _Utils_ap($timjs$elm_collage$Collage$Render$attrs(collage), $timjs$elm_collage$Collage$Render$events(collage.gu))), _List_Nil);
                        case 2:
                            var rx = shape.a;
                            var ry = shape.b;
                            return $elm$svg$Svg$ellipse_fn(_Utils_ap(_List_fromArray([
                                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$id_a0, name),
                                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$rx_a0, $elm$core$String$fromFloat(rx)),
                                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$ry_a0, $elm$core$String$fromFloat(ry))
                            ]), _Utils_ap($timjs$elm_collage$Collage$Render$attrs(collage), $timjs$elm_collage$Collage$Render$events(collage.gu))), _List_Nil);
                        case 1:
                            var w = shape.a;
                            var h = shape.b;
                            var r = shape.c;
                            return $elm$svg$Svg$rect_fn(_Utils_ap(_List_fromArray([
                                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$id_a0, name),
                                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$rx_a0, $elm$core$String$fromFloat(r)),
                                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$ry_a0, $elm$core$String$fromFloat(r))
                            ]), _Utils_ap($timjs$elm_collage$Collage$Render$box_fn(w, h), _Utils_ap($timjs$elm_collage$Collage$Render$attrs(collage), $timjs$elm_collage$Collage$Render$events(collage.gu)))), _List_Nil);
                        default:
                            var path = shape.a;
                            var $temp$collage = $$update__bn(collage, $timjs$elm_collage$Collage$Core$Path_fn(line, path));
                            collage = $temp$collage;
                            continue render;
                    }
                case 2:
                    var _v4 = _v0.b;
                    var style = _v4.a;
                    var str = _v4.b;
                    return $elm$svg$Svg$text__fn(_Utils_ap(_List_fromArray([
                        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$id_a0, name)
                    ]), _Utils_ap($timjs$elm_collage$Collage$Render$attrs(collage), $timjs$elm_collage$Collage$Render$events(collage.gu))), _List_fromArray([
                        $elm$svg$Svg$text(str)
                    ]));
                case 3:
                    var _v5 = _v0.a;
                    var w = _v5.a;
                    var h = _v5.b;
                    var url = _v0.b;
                    return $elm$svg$Svg$image_fn(_Utils_ap(_List_fromArray([
                        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$id_a0, name),
                        $elm$svg$Svg$Attributes$xlinkHref(url)
                    ]), _Utils_ap($timjs$elm_collage$Collage$Render$box_fn(w, h), _Utils_ap($timjs$elm_collage$Collage$Render$attrs(collage), $timjs$elm_collage$Collage$Render$events(collage.gu)))), _List_Nil);
                case 4:
                    var _v6 = _v0.a;
                    var w = _v6.a;
                    var h = _v6.b;
                    var extraAttrs = _v0.b;
                    var html = _v0.c;
                    return $elm$svg$Svg$foreignObject_fn(_Utils_ap(_List_fromArray([
                        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$id_a0, name)
                    ]), _Utils_ap($timjs$elm_collage$Collage$Render$box_fn(w, h), _Utils_ap($timjs$elm_collage$Collage$Render$attrs(collage), _Utils_ap($timjs$elm_collage$Collage$Render$events(collage.gu), extraAttrs)))), _List_fromArray([html]));
                case 5:
                    var collages = _v0.a;
                    return $elm$svg$Svg$g_fn(_List_Cons(_VirtualDom_attribute_fn($elm$svg$Svg$Attributes$id_a0, name), _Utils_ap($timjs$elm_collage$Collage$Render$attrs(collage), $timjs$elm_collage$Collage$Render$events(collage.gu))), $elm$core$List$foldl_fn_unwrapped(function (col, res) {
                        return _List_Cons($timjs$elm_collage$Collage$Render$render(col), res);
                    }, _List_Nil, collages));
                default:
                    var fore = _v0.a;
                    var back = _v0.b;
                    var $temp$collage = $$update__bn(collage, $timjs$elm_collage$Collage$Core$Group(_List_fromArray([fore, back])));
                    collage = $temp$collage;
                    continue render;
            }
        }
    };
    var $elm$svg$Svg$svg = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "svg"), $elm$svg$Svg$svg_fn = $elm$svg$Svg$svg.a2;
    var $elm$svg$Svg$Attributes$version_a0 = "version", $elm$svg$Svg$Attributes$version = _VirtualDom_attribute($elm$svg$Svg$Attributes$version_a0);
    var $timjs$elm_collage$Collage$Render$svgAbsolute_fn = function (_v0, collage) {
        var width = _v0.a;
        var height = _v0.b;
        var w = $elm$core$String$fromFloat(width);
        var h = $elm$core$String$fromFloat(height);
        return $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
            $elm$svg$Svg$svg_fn(_List_fromArray([
                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$width_a0, w),
                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$height_a0, h),
                _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$version_a0, "1.1")
            ]), _List_fromArray([
                $timjs$elm_collage$Collage$Render$render(collage)
            ]))
        ]));
    }, $timjs$elm_collage$Collage$Render$svgAbsolute = F2($timjs$elm_collage$Collage$Render$svgAbsolute_fn);
    var $timjs$elm_collage$Collage$Render$svgBox_fn = function (_v0, collage) {
        var width = _v0.a;
        var height = _v0.b;
        return $timjs$elm_collage$Collage$Render$svgAbsolute_fn(_Utils_Tuple2(width, height), $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(width / 2, (-height) / 2), collage));
    }, $timjs$elm_collage$Collage$Render$svgBox = F2($timjs$elm_collage$Collage$Render$svgBox_fn);
    var $timjs$elm_collage$Collage$traced_fn = function (linestyle, p) {
        return $timjs$elm_collage$Collage$Core$collage($timjs$elm_collage$Collage$Core$Path_fn(linestyle, p));
    }, $timjs$elm_collage$Collage$traced = F2($timjs$elm_collage$Collage$traced_fn);
    var $elm$core$Basics$turns = function (angleInTurns) {
        return (2 * $elm$core$Basics$pi) * angleInTurns;
    };
    var $author$project$Main$ui = function (state) {
        var withSquaredOutProgress = F2(function (collage, progress) {
            return collage(_Basics_pow_fn(progress, 2));
        });
        var withSquaredInProgress = F2(function (collage, progress) {
            return collage(_Basics_pow_fn(progress, 0.5));
        });
        var withInvertedProgress = F2(function (collage, progress) {
            return collage(1 - progress);
        });
        var waveWith = F2(function (config, progress) {
            return $timjs$elm_collage$Collage$traced_fn($timjs$elm_collage$Collage$broken_fn($timjs$elm_collage$Collage$solid_a0, config.b, $timjs$elm_collage$Collage$uniform(config.c)), $timjs$elm_collage$Collage$path($elm$core$List$map_fn(function (x) {
                return _Utils_Tuple2(x * 35, $elm$core$Basics$sin((x / 2) + (progress * 10)) * 35);
            }, $elm$core$List$range_fn(-20, 20))));
        });
        var wave = function (progress) {
            return A2(waveWith, {
                c: $avh4$elm_color$Color$rgba_fn(1, 1, 1, 0.2),
                b: 160
            }, progress);
        };
        var since0 = $ianmackenzie$elm_units$Duration$from_fn(state.bx, state.aO);
        var dropletSplashWide = function (progressOld) {
            var progress = 0.5 + (progressOld / 2);
            return $timjs$elm_collage$Collage$shiftY_fn(-300, $timjs$elm_collage$Collage$scaleY_fn(0.3, $timjs$elm_collage$Collage$Layout$stack($elm$core$List$map_fn(function (index) {
                return A2($timjs$elm_collage$Collage$outlined, $timjs$elm_collage$Collage$broken_fn($timjs$elm_collage$Collage$solid_a0, 25 + (progress * 30), $timjs$elm_collage$Collage$uniform($avh4$elm_color$Color$rgba_fn(0.55, 0.7, 1, (1 - progress) * 0.5))), $timjs$elm_collage$Collage$circle(progress * (50 + (index * 50))));
            }, $elm$core$List$range_fn(0, 20)))));
        };
        var dropletSplash = function (progress) {
            return $timjs$elm_collage$Collage$Layout$stack(((progress > 0.3) ? $elm$core$List$cons(dropletSplashWide(0.2 + (progress * 1.1))) : $elm$core$Basics$identity)($elm$core$List$map_fn(function (index) {
                return $timjs$elm_collage$Collage$shiftY_fn(-300, $timjs$elm_collage$Collage$scaleY_fn(0.3, A2($timjs$elm_collage$Collage$outlined, $timjs$elm_collage$Collage$broken_fn($timjs$elm_collage$Collage$solid_a0, 35 + (progress * 50), $timjs$elm_collage$Collage$uniform($avh4$elm_color$Color$rgba_fn(0.55, 0.7, 1, (1 - progress) * 0.6))), $timjs$elm_collage$Collage$circle(progress * (100 + (index * 40))))));
            }, $elm$core$List$range_fn(0, 10))));
        };
        var animateLoop = F2(function (duration, collage) {
            var progress = $ianmackenzie$elm_units$Duration$inSeconds(since0) / $ianmackenzie$elm_units$Duration$inSeconds(duration);
            return collage($elm$core$Basics$sin(progress));
        });
        var animate = F2(function (config, collage) {
            var progress = $ianmackenzie$elm_units$Duration$inSeconds($ianmackenzie$elm_units$Quantity$minus_fn(config.B, since0)) / $ianmackenzie$elm_units$Duration$inSeconds(config.z);
            return ((progress >= 1) || (progress < 0)) ? $timjs$elm_collage$Collage$rendered($timjs$elm_collage$Collage$Text$empty) : collage(progress);
        });
        return $timjs$elm_collage$Collage$Render$svgBox_fn(_Utils_Tuple2(state.bQ.b, state.bQ.bw), $timjs$elm_collage$Collage$Layout$stack(_List_fromArray([
            $timjs$elm_collage$Collage$scaleX_fn(1.5, $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 540), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(13), wave))),
            $timjs$elm_collage$Collage$scaleX_fn(1.2, $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 500), function (stack) {
                return A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(8), function (progress) {
                    return $timjs$elm_collage$Collage$rotate_fn($elm$core$Basics$turns(0.21 + ($elm$core$Basics$sin(progress * 0.5) * 0.03)), stack);
                });
            }($timjs$elm_collage$Collage$Layout$stack(_List_fromArray([
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-200, 200), $timjs$elm_collage$Collage$Layout$stack(_List_fromArray([
                    A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7), waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0.15, 0.5, 1, 0.6),
                        b: 70
                    })),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(100, -310), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7.6), withInvertedProgress(waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0, 0.55, 1, 0.6),
                        b: 90
                    })))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(50, 330), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(9), waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0.4, 0.85, 1, 0.6),
                        b: 90
                    }))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(60, -140), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6.7), waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0.4, 0.7, 1, 0.6),
                        b: 90
                    }))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 210), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(4.9), waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0.4, 0.75, 1, 0.6),
                        b: 90
                    }))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(20, 440), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(9.8), withInvertedProgress(waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0, 0.55, 1, 0.6),
                        b: 90
                    })))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(20, -500), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(5.5), waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0.15, 0.65, 1, 0.6),
                        b: 90
                    }))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(50, 570), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(10), withInvertedProgress(waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0, 0.55, 1, 0.6),
                        b: 90
                    })))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -780), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(8), withInvertedProgress(waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0, 0.55, 1, 0.6),
                        b: 90
                    })))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(40, 750), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(10), waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0.3, 0.79, 1, 0.6),
                        b: 90
                    }))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -800), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(4.7), waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0.3, 0.8, 1, 0.6),
                        b: 90
                    }))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(80, 870), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7), waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0.35, 0.65, 1, 0.6),
                        b: 90
                    }))),
                    $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(30, -900), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6), waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0.45, 0.7, 1, 0.6),
                        b: 90
                    }))),
                    A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6.5), waveWith({
                        c: $avh4$elm_color$Color$rgba_fn(0.45, 0.8, 1, 0.6),
                        b: 90
                    }))
                ]))),
                A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(10), wave),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-50, -300), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7.6), withInvertedProgress(wave))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-70, 300), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(13), wave)),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-80, -170), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(8.7), wave)),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-20, 190), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(5.9), wave)),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 460), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(12.8), withInvertedProgress(wave))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-10, -460), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6.5), wave)),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 560), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(12), withInvertedProgress(wave))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -700), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(10), withInvertedProgress(wave))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -310), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7.6), withInvertedProgress(waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 1),
                    b: 90
                })))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-100, 330), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(9), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 1),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -140), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6.7), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.2, 0.5, 1),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-120, 210), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(4.9), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.1, 0.4, 1),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 440), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(9.8), withInvertedProgress(waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 1),
                    b: 90
                })))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -500), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(5.5), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.15, 0.45, 1),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-100, 570), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(10), withInvertedProgress(waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 1),
                    b: 90
                })))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -780), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(8), withInvertedProgress(waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 1),
                    b: 90
                })))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 750), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(10), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 1),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -800), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(4.7), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 1),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 870), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.1, 0.5, 1),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-90, -900), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.15, 0.45, 1),
                    b: 90
                }))),
                A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6.5), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.2, 0.5, 1),
                    b: 90
                })),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 700), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(12), wave)),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-80, -800), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(9.7), wave)),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 820), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7), wave)),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -920), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6), wave)),
                A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(10), wave)
            ]))))),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-200, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(6.5),
                B: $ianmackenzie$elm_units$Duration$seconds(0)
            }, withInvertedProgress(withSquaredOutProgress(dropletSplashWide)))),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(200, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(6.5),
                B: $ianmackenzie$elm_units$Duration$seconds(0)
            }, withInvertedProgress(withSquaredOutProgress(dropletSplashWide)))),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-200, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(7),
                B: $ianmackenzie$elm_units$Duration$seconds(6.5)
            }, withSquaredInProgress(dropletSplashWide))),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(200, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(7),
                B: $ianmackenzie$elm_units$Duration$seconds(6.5)
            }, withSquaredInProgress(dropletSplashWide))),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(11),
                B: $ianmackenzie$elm_units$Duration$seconds(7)
            }, dropletSplash)),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(400, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(13),
                B: $ianmackenzie$elm_units$Duration$seconds(7.4)
            }, dropletSplash)),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-400, -130), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(8),
                B: $ianmackenzie$elm_units$Duration$seconds(13)
            }, dropletSplash)),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(5),
                B: $ianmackenzie$elm_units$Duration$seconds(20)
            }, dropletSplash)),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-300, -100), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(5),
                B: $ianmackenzie$elm_units$Duration$seconds(21)
            }, dropletSplash)),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(300, 100), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(5),
                B: $ianmackenzie$elm_units$Duration$seconds(22)
            }, dropletSplash)),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(5),
                B: $ianmackenzie$elm_units$Duration$seconds(23)
            }, dropletSplash)),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-200, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(7),
                B: $ianmackenzie$elm_units$Duration$seconds(23)
            }, withInvertedProgress(dropletSplashWide))),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(200, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(7),
                B: $ianmackenzie$elm_units$Duration$seconds(23)
            }, withInvertedProgress(dropletSplashWide))),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-200, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(7),
                B: $ianmackenzie$elm_units$Duration$seconds(30)
            }, dropletSplashWide)),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(200, 0), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(7),
                B: $ianmackenzie$elm_units$Duration$seconds(30)
            }, dropletSplashWide)),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-250, -200), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(5),
                B: $ianmackenzie$elm_units$Duration$seconds(30.2)
            }, dropletSplash)),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(200, 250), A2(animate, {
                z: $ianmackenzie$elm_units$Duration$seconds(9),
                B: $ianmackenzie$elm_units$Duration$seconds(30.5)
            }, dropletSplash)),
            $timjs$elm_collage$Collage$scaleX_fn(2, $timjs$elm_collage$Collage$scaleY_fn(0.2, $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-240, -300), $timjs$elm_collage$Collage$Layout$stack(_List_fromArray([
                A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.15, 0.5, 0.6),
                    b: 70
                })),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -310), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7.6), withInvertedProgress(waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 0.6),
                    b: 90
                })))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 330), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(9), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.75, 0.6),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -140), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6.7), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.2, 0.65, 0.6),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 210), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(4.9), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.1, 0.7, 0.6),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 440), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(9.8), withInvertedProgress(waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 0.6),
                    b: 90
                })))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -500), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(5.5), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.15, 0.65, 0.6),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 570), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(10), withInvertedProgress(waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 0.6),
                    b: 90
                })))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -780), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(8), withInvertedProgress(waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.55, 0.6),
                    b: 90
                })))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 750), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(10), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.7, 0.6),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -800), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(4.7), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0, 0.65, 0.6),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 870), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.1, 0.65, 0.6),
                    b: 90
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -900), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.15, 0.6, 0.6),
                    b: 90
                }))),
                A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6.5), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.3, 0.6, 0.6),
                    b: 90
                })),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -400), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(6.5), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.4, 0.73, 0.5),
                    b: 900
                }))),
                $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, 400), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(4.5), waveWith({
                    c: $avh4$elm_color$Color$rgb_fn(0.3, 0.9, 0.6),
                    b: 900
                })))
            ]))))),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-40, -800), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7.6), withInvertedProgress(waveWith({
                c: $avh4$elm_color$Color$rgb_fn(0.35, 0.45, 1),
                b: 460
            })))),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(0, -300), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(7.6), withInvertedProgress(waveWith({
                c: $avh4$elm_color$Color$rgb_fn(0.3, 0.5, 1),
                b: 400
            })))),
            $timjs$elm_collage$Collage$shift_fn(_Utils_Tuple2(-20, 50), A2(animateLoop, $ianmackenzie$elm_units$Duration$seconds(12.8), withInvertedProgress(waveWith({
                c: $avh4$elm_color$Color$rgb_fn(0.1, 0.4, 1),
                b: 400
            })))),
            A2($timjs$elm_collage$Collage$filled, $timjs$elm_collage$Collage$uniform($avh4$elm_color$Color$rgb_fn(0.2, 0.4, 0.9)), $timjs$elm_collage$Collage$rectangle_fn(state.bQ.b, state.bQ.bw))
        ])));
    };
    var $author$project$Main$uiDocument = function (state) {
        return {
            fS: $elm$core$List$singleton($author$project$Main$ui(state)),
            hT: "under the rain"
        };
    };
    var $author$project$Main$main = $elm$core$Basics$composeR_fn($MartinSStewart$elm_audio$Audio$documentWithAudio_a0, $MartinSStewart$elm_audio$Audio$documentWithAudio_a1, (new $$Record11($author$project$Main$audio, { gr: $author$project$Main$audioPortFromJS, hU: $author$project$Main$audioPortToJS }, A2($elm$core$Basics$composeR, $author$project$Main$init, $author$project$Reaction$toTuple3($author$project$Main$interpretEffect)), function (_v0) {
        return $author$project$Main$subscriptions;
    }, F2(function (_v1, event) {
        return A2($elm$core$Basics$composeR, $author$project$Main$reactTo(event), $author$project$Reaction$toTuple3($author$project$Main$interpretEffect));
    }), function (_v2) {
        return $author$project$Main$uiDocument;
    })));
    _Platform_export({ "Main": { "init": $author$project$Main$main($elm$json$Json$Decode$succeed(0))(0) } });
}(this));
