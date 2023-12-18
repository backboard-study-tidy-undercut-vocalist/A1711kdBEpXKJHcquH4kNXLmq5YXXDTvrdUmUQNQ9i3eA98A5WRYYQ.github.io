(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [253],
    {
        1628: function (e, n, t) {
            "use strict";
            t.d(n, {
                Z: function () {
                    return j;
                },
            });
            var r = t(5893),
                i = t(1120),
                o = t(5258),
                a = t(3832),
                l = t(8358),
                c = t(2318),
                s = t(282),
                d = t(7812),
                u = t(2516),
                h = t(5906),
                p = t(6204),
                x = (0, i.Z)(function (e) {
                    return { chip: { backgroundColor: e.palette.gallery.main, color: e.palette.mountainMist.main, borderRadius: ".25rem", padding: "none", marginLeft: 15, marginBottom: 10 } };
                }),
                m = function () {
                    var e = x();
                    return (0, r.jsx)(p.Z, { className: e.chip, label: "v" + h.KZ, size: "small" });
                },
                v = t(9499),
                f = t(2109),
                g = (0, i.Z)(function (e) {
                    return { logo: { flexGrow: 1, marginTop: 10 }, button: { textTransform: "none", color: e.palette.diamondBlack.main } };
                });
            function j() {
                var e = g();
                return (0, r.jsx)("div", {
                    children: (0, r.jsx)(o.Z, {
                        color: "transparent",
                        position: "static",
                        elevation: 0,
                        children: (0, r.jsx)(a.Z, {
                            maxWidth: "lg",
                            children: (0, r.jsxs)(l.Z, {
								
								
                                children: [
                                    (0, r.jsxs)(c.Z, {
                                        variant: "h6",
                                        className: e.logo,
                                        children: [(0, r.jsx)("a", { href: "index.html", children: (0, r.jsx)("img", { src: "assets/images/logo.png", alt: "logo", width: "40" }) }), (0, r.jsx)(m, {})],
                                    }),
                                    (0, r.jsx)(s.Z, { color: "inherit", href: "https://ssss.com/", className: e.button, children: (0, f.F)("home") }),
									(0, r.jsx)(s.Z, { color: "inherit", href: "https://ssss.com/", className: e.button, children: (0, f.F)("home") }),
                                ],
                            }),
                        }),
                    }),
                });
            }
        },
        2160: function (e, n, t) {
            "use strict";
            t.d(n, {
                Z: function () {
                    return s;
                },
            });
            var r = t(5893),
                i = t(1120),
                o = t(3832),
                a = t(2318),
                l = t(2109),
                c = (0, i.Z)(function (e) {
                    return { heroTitle: { color: e.palette.diamondBlack.main, marginTop: 20 }, heroSubTitle: { color: e.palette.diamondBlack.main } };
                });
            function s() {
                var e = c();
                return (0, r.jsxs)(o.Z, {
                    maxWidth: "sm",
                    component: "main",
                    className: e.heroContent,
                    children: [
                        (0, r.jsx)(a.Z, { variant: "h5", align: "center", gutterBottom: !0, className: e.heroTitle, children: "Encrypt Your File" }),
                        (0, r.jsxs)(a.Z, { variant: "subtitle1", align: "center", component: "p", className: e.heroSubTitle, children: [(0, l.F)("sub_title"), (0, r.jsx)("br", {})] }),
                    ],
                });
            }
        },
        8478: function (e, n, t) {
            "use strict";
            t.d(n, {
                Z: function () {
                    return O;
                },
            });
            var r = t(4051),
                i = t.n(r),
                o = t(5893),
                a = t(7294),
                l = t(1120),
                c = t(5046),
                s = t(7155),
                d = t(7812),
                u = t(6037),
                h = t(282),
                p = t(366),
                x = t(2318),
                m = t(9895),
                v = t(1749),
                f = t(7083),
                g = t(5685),
                j = t(3426),
                b = t(3099);
            function y(e, n, t, r, i, o, a) {
                try {
                    var l = e[o](a),
                        c = l.value;
                } catch (s) {
                    return void t(s);
                }
                l.done ? n(c) : Promise.resolve(c).then(r, i);
            }
            var Z = t(6869),
                _ = (function () {
                    var e,
                        n =
                            ((e = i().mark(function e() {
                                var n, t, r;
                                return i().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), Z.ready;
                                            case 2:
                                                return (t = (n = Z).crypto_kx_keypair()), (r = { publicKey: n.to_base64(t.publicKey), privateKey: n.to_base64(t.privateKey) }), e.abrupt("return", r);
                                            case 6:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })),
                            function () {
                                var n = this,
                                    t = arguments;
                                return new Promise(function (r, i) {
                                    var o = e.apply(n, t);
                                    function a(e) {
                                        y(o, r, i, a, l, "next", e);
                                    }
                                    function l(e) {
                                        y(o, r, i, a, l, "throw", e);
                                    }
                                    a(void 0);
                                });
                            });
                    return function () {
                        return n.apply(this, arguments);
                    };
                })(),
                k = t(9985),
                w = t(8270),
                F = t(6642),
                C = t(2109),
                T = t(2663),
                P = t(6856),
                z = t(9525),
                B = t(7212),
                N = t(6083),
                S = t(7239),
                H = t(9361),
                K = (0, l.Z)(function (e) {
                    return {
                        form: { display: "flex", flexDirection: "column", margin: "auto", width: "fit-content", marginBottom: 20 },
                        topScrollPaper: { alignItems: "start", marginTop: "10vh" },
                        topPaperScrollBody: { verticalAlign: "middle" },
                    };
                }),
                M = function (e) {
                    var n = K(),
                        t = (0, a.useState)(!1),
                        r = t[0],
                        i = t[1],
                        l = window.location.origin + "/?tab=encryption&publicKey=" + e.publicKey,
                        c = function () {
                            i(!1);
                        };
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(f.ZP, {
                                title: (0, C.F)("generate_qr_code"),
                                placement: "bottom",
                                children: (0, o.jsx)(d.Z, {
                                    onClick: function () {
                                        i(!0);
                                    },
                                    children: (0, o.jsxs)("svg", {
                                        enableBackground: "new 0 0 24 24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        children: [
                                            (0, o.jsx)("g", { children: (0, o.jsx)("rect", { fill: "none", height: "24", width: "24" }) }),
                                            (0, o.jsx)("g", {
                                                children: (0, o.jsx)("g", {
                                                    children: (0, o.jsx)("path", {
                                                        fill: "#6a6a6a",
                                                        d:
                                                            "M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6 8h1.5v1.5H13V13zm1.5 1.5H16V16h-1.5v-1.5zM16 13h1.5v1.5H16V13zm-3 3h1.5v1.5H13V16zm1.5 1.5H16V19h-1.5v-1.5zM16 16h1.5v1.5H16V16zm1.5-1.5H19V16h-1.5v-1.5zm0 3H19V19h-1.5v-1.5zM22 7h-2V4h-3V2h5v5zm0 15v-5h-2v3h-3v2h5zM2 22h5v-2H4v-3H2v5zM2 2v5h2V4h3V2H2z",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            (0, o.jsxs)(T.Z, {
                                scroll: "body",
                                maxWidth: "sm",
                                fullWidth: !0,
                                open: r,
                                onClose: c,
                                "aria-labelledby": "alert-dialog-title",
                                "aria-describedby": "alert-dialog-description",
                                PaperProps: { elevation: 0 },
                                classes: { scrollPaper: n.topScrollPaper, paperScrollBody: n.topPaperScrollBody },
                                children: [
                                    (0, o.jsx)(N.Z, { id: "alert-dialog-title" }),
                                    (0, o.jsxs)(z.Z, {
                                        children: [
                                            (0, o.jsx)("div", {
                                                className: n.form,
                                                children: (0, o.jsx)(H, {
                                                    style: { borderRadius: 8, marginTop: 15, boxShadow: "0px 0px 35px 2px rgba(0,0,0,0.2)" },
                                                    value: l,
                                                    size: 200,
                                                    bgColor: "#ffffff",
                                                    fgColor: "#000000",
                                                    level: "M",
                                                    includeMargin: !0,
                                                    renderAs: "canvas",
                                                    imageSettings: { src: "/assets/icons/qr-logo.png", x: null, y: null, height: 40, width: 40, excavate: !1 },
                                                }),
                                            }),
                                            (0, o.jsxs)(B.Z, {
                                                children: [
                                                    (0, o.jsxs)("small", { children: ["* ", (0, C.F)("qr_code_note_one")] }),
                                                    (0, o.jsx)("br", {}),
                                                    (0, o.jsxs)("small", { children: ["* ", (0, C.F)("qr_code_note_two")] }),
                                                    (0, o.jsx)("br", {}),
                                                    (0, o.jsxs)("small", { children: ["* ", (0, C.F)("qr_code_note_three")] }),
                                                ],
                                            }),
                                            l &&
                                                (0, o.jsx)(j.Z, {
                                                    style: { marginTop: 15 },
                                                    defaultValue: l,
                                                    InputProps: {
                                                        readOnly: !0,
                                                        classes: { root: n.textFieldRoot, focused: n.textFieldFocused, notchedOutline: n.textFieldNotchedOutline },
                                                        endAdornment: (0, o.jsx)(o.Fragment, {
                                                            children: (0, o.jsx)(f.ZP, {
                                                                title: (0, C.F)("copy_link"),
                                                                placement: "left",
                                                                children: (0, o.jsx)(d.Z, {
                                                                    onClick: function () {
                                                                        navigator.clipboard.writeText(l);
                                                                    },
                                                                    children: (0, o.jsx)(S.Z, {}),
                                                                }),
                                                            }),
                                                        }),
                                                    },
                                                    helperText: (0, C.F)("create_shareable_link_note"),
                                                    variant: "outlined",
                                                    fullWidth: !0,
                                                }),
                                        ],
                                    }),
                                    (0, o.jsx)(P.Z, { children: (0, o.jsx)(h.Z, { onClick: c, color: "primary", autoFocus: !0, children: (0, C.F)("close") }) }),
                                ],
                            }),
                        ],
                    });
                };
            function V(e, n, t, r, i, o, a) {
                try {
                    var l = e[o](a),
                        c = l.value;
                } catch (s) {
                    return void t(s);
                }
                l.done ? n(c) : Promise.resolve(c).then(r, i);
            }
            var R = (0, l.Z)(function (e) {
                    return {
                        root: { marginTop: 50, width: "100%", "& > * + *": { marginTop: e.spacing(2) } },
                        generateNowText: { float: "right", color: e.palette.mountainMist.main, cursor: "pointer", textDecoration: "underline", marginLeft: 4 },
                        caption: { float: "right", color: e.palette.mountainMist.main },
                        keyCaption: { float: "left", color: e.palette.mountainMist.main, marginLeft: 4, "&:hover": { cursor: "pointer", textDecoration: "underline" } },
                        button:
                            ((n = {
                                marginTop: e.spacing(1),
                                marginRight: e.spacing(1),
                                borderRadius: "8px",
                                border: "none",
                                color: e.palette.denim.main,
                                backgroundColor: e.palette.hawkesBlue.light,
                                "&:hover": { backgroundColor: e.palette.hawkesBlue.main },
                                transition: "background-color 0.2s ease-out",
                            }),
                            (t = "transition"),
                            (r = "color .01s"),
                            t in n ? Object.defineProperty(n, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (n[t] = r),
                            n),
                        alertContainer: { padding: e.spacing(3), boxShadow: "rgba(149, 157, 165, 0.4) 0px 8px 24px", borderRadius: "8px" },
                    };
                    var n, t, r;
                }),
                O = function (e) {
                    var n = R(),
                        t = (0, a.useState)(!1),
                        r = t[0],
                        l = t[1],
                        y = (0, a.useState)(),
                        Z = y[0],
                        T = y[1],
                        P = (0, a.useState)(),
                        z = P[0],
                        B = P[1],
                        N = (0, a.useState)((0, C.F)("generate_key_pair_button")),
                        S = N[0],
                        H = N[1],
                        K = (0, a.useState)(!1),
                        O = K[0],
                        W = K[1],
                        L = (function () {
                            var e,
                                n =
                                    ((e = i().mark(function e() {
                                        var n;
                                        return i().wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), _();
                                                    case 2:
                                                        (n = e.sent), T(n.publicKey), B(n.privateKey), H((0, C.F)("generate_another_key_pair_button"));
                                                    case 6:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })),
                                    function () {
                                        var n = this,
                                            t = arguments;
                                        return new Promise(function (r, i) {
                                            var o = e.apply(n, t);
                                            function a(e) {
                                                V(o, r, i, a, l, "next", e);
                                            }
                                            function l(e) {
                                                V(o, r, i, a, l, "throw", e);
                                            }
                                            a(void 0);
                                        });
                                    });
                            return function () {
                                return n.apply(this, arguments);
                            };
                        })(),
                        q = function (e, n) {
                            var t = new Blob([e], { type: "text/plain" }),
                                r = document.createElement("a"),
                                i = URL.createObjectURL(t);
                            (r.href = i),
                                (r.download = n),
                                document.body.appendChild(r),
                                r.click(),
                                setTimeout(function () {
                                    document.body.removeChild(r), window.URL.revokeObjectURL(i);
                                }, 0);
                        };
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            !e.opened &&
                                (0, o.jsxs)("div", {
                                    children: [
                                        (0, o.jsx)(x.Z, {
                                            variant: "caption",
                                            className: n.generateNowText,
                                            onClick: function () {
                                                l(!0);
                                            },
                                            children: (0, C.F)("generate_now_button"),
                                        }),
                                        (0, o.jsx)(x.Z, { variant: "caption", className: n.caption, children: (0, C.F)("key_pair_question") }),
                                        (0, o.jsx)(F.Z, {
                                            xsDown: !0,
                                            children: (0, o.jsx)("a", {
                                                href: "/about/#why-need-private-key",
                                                target: "_blank",
                                                children: (0, o.jsx)(x.Z, { variant: "caption", className: n.keyCaption, children: (0, C.F)("why_need_private_key") }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, o.jsx)("div", {
                                className: n.root,
                                children: (0, o.jsx)(u.Z, {
                                    in: r || e.opened,
                                    children: (0, o.jsxs)(m.Z, {
                                        elevation: 0,
                                        className: n.alertContainer,
                                        children: [
                                            (0, o.jsx)(c.Z, {
                                                variant: "outlined",
                                                severity: "info",
                                                style: { border: "none", marginBottom: "15px" },
                                                action: (0, o.jsx)(d.Z, {
                                                    id: "closeGenBtn",
                                                    "aria-label": "close",
                                                    color: "inherit",
                                                    size: "small",
                                                    onClick: function () {
                                                        l(!1);
                                                    },
                                                    children: (0, o.jsx)(p.Z, { fontSize: "inherit" }),
                                                }),
                                                children: (0, o.jsx)(s.Z, { children: (0, C.F)("key_pair_generation_title") }),
                                            }),
                                            (0, o.jsxs)(v.Z, {
                                                container: !0,
                                                spacing: 1,
                                                justifyContent: "center",
                                                children: [
                                                    (0, o.jsx)(v.Z, {
                                                        item: !0,
                                                        xs: 12,
                                                        children: (0, o.jsx)(j.Z, {
                                                            id: "generatedPublicKey",
                                                            label: (0, C.F)("public_key"),
                                                            value: Z || "",
                                                            placeholder: (0, C.F)("generate_public_key"),
                                                            InputProps: {
                                                                readOnly: !0,
                                                                endAdornment:
                                                                    Z &&
                                                                    (0, o.jsxs)(o.Fragment, {
                                                                        children: [
                                                                            (0, o.jsx)(M, { publicKey: Z }),
                                                                            (0, o.jsx)(f.ZP, {
                                                                                title: (0, C.F)("download_public_key"),
                                                                                placement: "bottom",
                                                                                children: (0, o.jsx)(d.Z, {
                                                                                    onClick: function () {
                                                                                        return q(Z, "key.public");
                                                                                    },
                                                                                    children: (0, o.jsx)(b.Z, {}),
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                            },
                                                            variant: "outlined",
                                                            style: { marginBottom: "15px" },
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                                    (0, o.jsx)(v.Z, {
                                                        item: !0,
                                                        xs: 12,
                                                        children: (0, o.jsx)(j.Z, {
                                                            id: "generatedPrivateKey",
                                                            type: O ? "text" : "password",
                                                            label: (0, C.F)("private_key"),
                                                            value: z || "",
                                                            placeholder: (0, C.F)("generate_private_key"),
                                                            helperText: (0, C.F)("private_key_notice"),
                                                            InputProps: {
                                                                readOnly: !0,
                                                                endAdornment:
                                                                    z &&
                                                                    (0, o.jsxs)(o.Fragment, {
                                                                        children: [
                                                                            (0, o.jsx)(f.ZP, {
                                                                                title: (0, C.F)("show_private_key"),
                                                                                placement: "bottom",
                                                                                children: (0, o.jsx)(d.Z, {
                                                                                    onClick: function () {
                                                                                        return W(!O);
                                                                                    },
                                                                                    children: O ? (0, o.jsx)(k.Z, {}) : (0, o.jsx)(w.Z, {}),
                                                                                }),
                                                                            }),
                                                                            (0, o.jsx)(f.ZP, {
                                                                                title: (0, C.F)("download_private_key"),
                                                                                placement: "bottom",
                                                                                children: (0, o.jsx)(d.Z, {
                                                                                    onClick: function () {
                                                                                        return q(z, "key.private");
                                                                                    },
                                                                                    children: (0, o.jsx)(b.Z, {}),
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                            },
                                                            variant: "outlined",
                                                            style: { marginBottom: "15px" },
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                                    (0, o.jsx)(v.Z, {
                                                        item: !0,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: (0, o.jsx)(h.Z, {
                                                            onClick: L,
                                                            className: "".concat(n.button, " keyPairGenerateBtn"),
                                                            variant: "outlined",
                                                            startIcon: z && (0, o.jsx)(g.Z, {}),
                                                            fullWidth: !0,
                                                            style: { textTransform: "none" },
                                                            children: S,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    });
                };
        },
        5906: function (e, n, t) {
            "use strict";
            t.d(n, {
                G0: function () {
                    return a;
                },
                J8: function () {
                    return s;
                },
                KZ: function () {
                    return r;
                },
                Tb: function () {
                    return i;
                },
                g7: function () {
                    return l;
                },
                kr: function () {
                    return o;
                },
                xv: function () {
                    return c;
                },
            });
            var r = "2.3.6",
                i = 1073741824,
                o = 67108864,
                a = 17,
                l = new TextEncoder(),
                c = new TextDecoder(),
                s = { v1: "Encrypted", v2_symmetric: "zDKO6XYXioc", v2_asymmetric: "hTWKbfoikeg" };
        },
        5992: function () {},
    },
]);
