"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [697],
    {
        3011: function (e, n, t) {
            t.d(n, {
                Z: function () {
                    return T;
                },
            });
            var r = t(5893),
                o = t(7294),
                a = t(2318),
                l = t(1120),
                i = t(3832),
                c = t(7821),
                s = t(1423),
                d = t(106),
                u = t(7239),
                h = t(9659),
                p = t(6204),
                f = t(7265),
                g = t(6642),
                m = t(282),
                x = t(2663),
                b = t(6856),
                j = t(9525),
                y = t(7212),
                v = t(6083),
                Z = t(3426),
                C = t(7083),
                S = t(7812),
                w = t(5046),
                k = t(3950),
                O = t(2109);
            function P(e, n, t) {
                return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
            }
            function B(e, n) {
                if (null == e) return {};
                var t,
                    r,
                    o = (function (e, n) {
                        if (null == e) return {};
                        var t,
                            r,
                            o = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                        return o;
                    })(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
                }
                return o;
            }
            var F = t(9361),
                A = (0, l.Z)(function (e) {
                    return {
                        root: { marginTop: "auto" },
                        footer: { textAlign: "center", color: e.palette.diamondBlack.main, padding: e.spacing(3, 2) },
                        topScrollPaper: { alignItems: "start", marginTop: "10vh" },
                        topPaperScrollBody: { verticalAlign: "middle" },
                        chip: P(
                            {
                                marginTop: 5,
                                border: "none",
                                borderRadius: 8,
                                textTransform: "none",
                                boxShadow: "none",
                                color: e.palette.diamondBlack.main,
                                backgroundColor: e.palette.alto.light,
                                "&:hover": { backgroundColor: e.palette.alto.main },
                                "&:focus": { backgroundColor: e.palette.alto.main, boxShadow: "none" },
                                transition: "background-color 0.2s ease-out",
                            },
                            "transition",
                            "color .01s"
                        ),
                        monIcon: { color: e.palette.mountainMist.main },
                        qr: { display: "flex", flexDirection: "column", margin: "auto", width: "fit-content", marginBottom: 20 },
                    };
                }),
                I = function (e) {
                    var n = e.children,
                        t = e.value,
                        o = e.index,
                        a = B(e, ["children", "value", "index"]);
                    return (0, r.jsx)(
                        "div",
                        (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                "function" === typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (n) {
                                        P(e, n, t[n]);
                                    });
                            }
                            return e;
                        })({ component: "div", role: "tabpanel", hidden: t !== o, id: "donation-tabpanel-".concat(o), "aria-labelledby": "donation-tab-".concat(o) }, a, { children: n })
                    );
                };
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
            function T() {
                var e = A(),
                    n = (0, o.useState)(0),
                    t = n[0],
                    l = n[1],
                    P = (0, o.useState)("xmr"),
                    B = P[0],
                    T = P[1],
                    D = (0, o.useState)(!1),
                    N = D[0],
                    _ = D[1],
                    W = (0, o.useState)(!1),
                    z = W[0],
                    M = W[1],
                    E = function () {
                        setTimeout(function () {
                            M(!0);
                        }, 6e4);
                    },
                    R = function () {
                        _(!0);
                    },
                    Q = function () {
                        _(!1);
                    };
                return (
                    (0, o.useEffect)(function () {
                        E(),
                            setInterval(function () {
                                T(q[Math.floor(Math.random() * q.length)].alt);
                            }, 1e4);
                    }, []),
                    (0, r.jsxs)("div", {
                        className: e.root,
                        children: [
                            (0, r.jsx)("footer", {
                                className: e.footer,
                                children: (0, r.jsxs)(i.Z, {
                                    maxWidth: "sm",

                                
								}),
                            }),
                            (0, r.jsx)(g.Z, {
                                xsDown: !0,
                                children: (0, r.jsx)(k.Z, {
                                    style: { zIndex: 1 },
                                    anchorOrigin: { vertical: "bottom", horizontal: "right" },
                                    open: z,
                                    autoHideDuration: 1e4,
                                    onClose: function (e, n) {
                                        "clickaway" !== n && (M(!1), E());
                                    },
                                }),
                            }),
                        ],
                    })
                );
            }
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
        },
        9499: function (e, n, t) {
            t.d(n, {
                Z: function () {
                    return P;
                },
            });
            var r = t(5893),
                o = t(7294),
                a = t(1120),
                l = t(2663),
                i = t(6856),
                c = t(9525),
                s = t(7212),
                d = t(6083),
                u = t(282),
                h = t(7812),
                p = t(9969),
                f = t(5161),
                g = t(5639),
                m = t(4436),
                x = t(4951),
                b = t(6642),
                j = t(5046),
                y = t(2109),
                v = t(16);
            function Z(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function C(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var t = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != t) {
                            var r,
                                o,
                                a = [],
                                l = !0,
                                i = !1;
                            try {
                                for (t = t.call(e); !(l = (r = t.next()).done) && (a.push(r.value), !n || a.length !== n); l = !0);
                            } catch (c) {
                                (i = !0), (o = c);
                            } finally {
                                try {
                                    l || null == t.return || t.return();
                                } finally {
                                    if (i) throw o;
                                }
                            }
                            return a;
                        }
                    })(e, n) ||
                    (function (e, n) {
                        if (!e) return;
                        if ("string" === typeof e) return Z(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Z(e, n);
                    })(e, n) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            var S = (0, a.Z)(function (e) {
                    return { formControl: { margin: e.spacing(1), minWidth: 120 } };
                }),
                w = function () {
                    var e = S(),
                        n = (0, o.useState)((0, y.d)()),
                        t = n[0],
                        a = n[1];
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(m.Z, {
                                variant: "outlined",
                                className: e.formControl,
                            }),
                            (0, r.jsx)(b.Z, {
                                xsDown: !0,
                            }),
                        ],
                    });
                },
                k = t(7693),
                O = (0, a.Z)(function (e) {
                    return { topScrollPaper: { alignItems: "start", marginTop: "20vh" }, topPaperScrollBody: { verticalAlign: "middle" } };
                }),
                P = function () {
                    var e = O(),
                        n = (0, o.useState)(!1),
                        t = n[0],
                        a = n[1],
                        f = function () {
                            a(!1);
                        };
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(h.Z, {
                                onClick: function () {
                                    a(!0);
                                },
                                children: (0, r.jsx)(p.Z, {}),
                            }),
                            (0, r.jsxs)(l.Z, {
                                maxWidth: "sm",
                                fullWidth: !0,
                                open: t,
                                onClose: f,
                                "aria-labelledby": "alert-dialog-title",
                                "aria-describedby": "alert-dialog-description",
                                PaperProps: { elevation: 0 },
                                classes: { scrollPaper: e.topScrollPaper, paperScrollBody: e.topPaperScrollBody },
                                children: [
                                    (0, r.jsx)(d.Z, { id: "alert-dialog-title", children: (0, y.F)("settings") }),
                                    (0, r.jsxs)(c.Z, {
                                        children: [
                                            (0, r.jsxs)(s.Z, { id: "alert-dialog-description", children: [(0, y.F)("change_language"), " :"] }),
                                            (0, r.jsx)(w, {}),
                                            (0, r.jsxs)(s.Z, { id: "alert-dialog-description", style: { marginTop: 15 }, children: [(0, y.F)("change_appearance"), " :"] }),
                                            (0, r.jsx)(k.t7, {}),
                                        ],
                                    }),
                                    (0, r.jsx)(i.Z, { children: (0, r.jsx)(u.Z, { onClick: f, color: "primary", autoFocus: !0, children: (0, y.F)("close") }) }),
                                ],
                            }),
                        ],
                    });
                };
        },
    },
]);
