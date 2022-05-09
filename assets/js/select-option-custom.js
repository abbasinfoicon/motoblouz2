$(document).ready(function () {

    /* custom select */
    $(function () {
        jcf.setOptions('Select', {
            wrapNative: false,
            wrapNativeOnMobile: true,
            fakeDropInBody: false
        });

        jcf.replaceAll();
    });
    /* end custom select */


});

/*!
 * JavaScript Custom Forms
 *
 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.2.3
 */
!function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.jcf = t(jQuery)
}(this, function (e) {
    "use strict";
    var t = [], n = {
            optionsKey: "jcf",
            dataKey: "jcf-instance",
            rtlClass: "jcf-rtl",
            focusClass: "jcf-focus",
            pressedClass: "jcf-pressed",
            disabledClass: "jcf-disabled",
            hiddenClass: "jcf-hidden",
            resetAppearanceClass: "jcf-reset-appearance",
            unselectableClass: "jcf-unselectable"
        }, o = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        a = /Windows Phone/.test(navigator.userAgent);
    n.isMobileDevice = !(!o && !a);
    var i = function () {
        var t = e("<style>").appendTo("head"), o = t.prop("sheet") || t.prop("styleSheet"), a = function (e, t, n) {
            n = n || 0, o.insertRule ? o.insertRule(e + "{" + t + "}", n) : o.addRule(e, t, n)
        };
        a("." + n.hiddenClass, "position:absolute !important;left:-9999px !important;height:1px !important;width:1px !important;margin:0 !important;border-width:0 !important;-webkit-appearance:none;-moz-appearance:none;appearance:none"), a("." + n.rtlClass + " ." + n.hiddenClass, "right:-9999px !important; left: auto !important"), a("." + n.unselectableClass, "-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0);"), a("." + n.resetAppearanceClass, "background: none; border: none; -webkit-appearance: none; appearance: none; opacity: 0; filter: alpha(opacity=0);");
        var i = e("html"), r = e("body");
        "rtl" !== i.css("direction") && "rtl" !== r.css("direction") || i.addClass(n.rtlClass), i.on("reset", function () {
            setTimeout(function () {
                s.refreshAll()
            }, 0)
        }), n.styleSheetCreated = !0
    };
    !function () {
        var t, n = navigator.pointerEnabled || navigator.msPointerEnabled,
            o = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, a = {};
        t = n ? {
            pointerover: navigator.pointerEnabled ? "pointerover" : "MSPointerOver",
            pointerdown: navigator.pointerEnabled ? "pointerdown" : "MSPointerDown",
            pointermove: navigator.pointerEnabled ? "pointermove" : "MSPointerMove",
            pointerup: navigator.pointerEnabled ? "pointerup" : "MSPointerUp"
        } : {
            pointerover: "mouseover",
            pointerdown: "mousedown" + (o ? " touchstart" : ""),
            pointermove: "mousemove" + (o ? " touchmove" : ""),
            pointerup: "mouseup" + (o ? " touchend" : "")
        }, e.each(t, function (t, n) {
            e.each(n.split(" "), function (e, n) {
                a[n] = t
            })
        }), e.each(t, function (t, n) {
            n = n.split(" "), e.event.special["jcf-" + t] = {
                setup: function () {
                    var t = this;
                    e.each(n, function (e, n) {
                        t.addEventListener ? t.addEventListener(n, s, !1) : t["on" + n] = s
                    })
                }, teardown: function () {
                    var t = this;
                    e.each(n, function (e, n) {
                        t.addEventListener ? t.removeEventListener(n, s, !1) : t["on" + n] = null
                    })
                }
            }
        });
        var i = null, r = function (e) {
            var t = Math.abs(e.pageX - i.x), n = Math.abs(e.pageY - i.y);
            if (t <= 25 && n <= 25) return !0
        }, s = function (t) {
            var n = t || window.event, o = null, s = a[n.type];
            if (t = e.event.fix(n), t.type = "jcf-" + s, n.pointerType) switch (n.pointerType) {
                case 2:
                    t.pointerType = "touch";
                    break;
                case 3:
                    t.pointerType = "pen";
                    break;
                case 4:
                    t.pointerType = "mouse";
                    break;
                default:
                    t.pointerType = n.pointerType
            } else t.pointerType = n.type.substr(0, 5);
            return t.pageX || t.pageY || (o = n.changedTouches ? n.changedTouches[0] : n, t.pageX = o.pageX, t.pageY = o.pageY), "touchend" === n.type && (i = {
                x: t.pageX,
                y: t.pageY
            }), "mouse" === t.pointerType && i && r(t) ? void 0 : (e.event.dispatch || e.event.handle).call(this, t)
        }
    }(), function () {
        var t = ("onwheel" in document || document.documentMode >= 9 ? "wheel" : "mousewheel DOMMouseScroll").split(" ");
        e.event.special["jcf-mousewheel"] = {
            setup: function () {
                var o = this;
                e.each(t, function (e, t) {
                    o.addEventListener ? o.addEventListener(t, n, !1) : o["on" + t] = n
                })
            }, teardown: function () {
                var o = this;
                e.each(t, function (e, t) {
                    o.addEventListener ? o.removeEventListener(t, n, !1) : o["on" + t] = null
                })
            }
        };
        var n = function (t) {
            var n = t || window.event;
            if (t = e.event.fix(n), t.type = "jcf-mousewheel", "detail" in n && (t.deltaY = -n.detail), "wheelDelta" in n && (t.deltaY = -n.wheelDelta), "wheelDeltaY" in n && (t.deltaY = -n.wheelDeltaY), "wheelDeltaX" in n && (t.deltaX = -n.wheelDeltaX), "deltaY" in n && (t.deltaY = n.deltaY), "deltaX" in n && (t.deltaX = n.deltaX), t.delta = t.deltaY || t.deltaX, 1 === n.deltaMode) {
                t.delta *= 16, t.deltaY *= 16, t.deltaX *= 16
            }
            return (e.event.dispatch || e.event.handle).call(this, t)
        }
    }();
    var r = {
        fireNativeEvent: function (t, n) {
            e(t).each(function () {
                var e, t = this;
                t.dispatchEvent ? ((e = document.createEvent("HTMLEvents")).initEvent(n, !0, !0), t.dispatchEvent(e)) : document.createEventObject && ((e = document.createEventObject()).target = t, t.fireEvent("on" + n, e))
            })
        }, bindHandlers: function () {
            var t = this;
            e.each(t, function (n, o) {
                0 === n.indexOf("on") && e.isFunction(o) && (t[n] = function () {
                    return o.apply(t, arguments)
                })
            })
        }
    }, s = {
        version: "1.2.3", modules: {}, getOptions: function () {
            return e.extend({}, n)
        }, setOptions: function (t, o) {
            arguments.length > 1 ? this.modules[t] && e.extend(this.modules[t].prototype.options, o) : e.extend(n, t)
        }, addModule: function (o) {
            e.isFunction(o) && (o = o(e, window));
            var a = function (o) {
                o.element.data(n.dataKey) || o.element.data(n.dataKey, this), t.push(this), this.options = e.extend({}, n, this.options, i(o.element), o), this.bindHandlers(), this.init.apply(this, arguments)
            }, i = function (t) {
                var o = t.data(n.optionsKey), a = t.attr(n.optionsKey);
                if (o) return o;
                if (a) try {
                    return e.parseJSON(a)
                } catch (e) {
                }
            };
            a.prototype = o, e.extend(o, r), o.plugins && e.each(o.plugins, function (t, n) {
                e.extend(n.prototype, r)
            });
            var s = a.prototype.destroy;
            a.prototype.destroy = function () {
                this.options.element.removeData(this.options.dataKey);
                for (var e = t.length - 1; e >= 0; e--) if (t[e] === this) {
                    t.splice(e, 1);
                    break
                }
                s && s.apply(this, arguments)
            }, this.modules[o.name] = a
        }, getInstance: function (t) {
            return e(t).data(n.dataKey)
        }, replace: function (t, o, a) {
            var r, s = this;
            return n.styleSheetCreated || i(), e(t).each(function () {
                var t, i = e(this);
                (r = i.data(n.dataKey)) ? r.refresh() : (o || e.each(s.modules, function (e, t) {
                    if (t.prototype.matchElement.call(t.prototype, i)) return o = e, !1
                }), o && (t = e.extend({element: i}, a), r = new s.modules[o](t)))
            }), r
        }, refresh: function (t) {
            e(t).each(function () {
                var t = e(this).data(n.dataKey);
                t && t.refresh()
            })
        }, destroy: function (t) {
            e(t).each(function () {
                var t = e(this).data(n.dataKey);
                t && t.destroy()
            })
        }, replaceAll: function (t) {
            var n = this;
            e.each(this.modules, function (o, a) {
                e(a.prototype.selector, t).each(function () {
                    this.className.indexOf("jcf-ignore") < 0 && n.replace(this, o)
                })
            })
        }, refreshAll: function (o) {
            if (o) e.each(this.modules, function (t, a) {
                e(a.prototype.selector, o).each(function () {
                    var t = e(this).data(n.dataKey);
                    t && t.refresh()
                })
            }); else for (var a = t.length - 1; a >= 0; a--) t[a].refresh()
        }, destroyAll: function (o) {
            if (o) e.each(this.modules, function (t, a) {
                e(a.prototype.selector, o).each(function (t, o) {
                    var a = e(o).data(n.dataKey);
                    a && a.destroy()
                })
            }); else for (; t.length;) t[0].destroy()
        }
    };
    return "function" == typeof define && define.amd && (window.jcf = s), s
});


/*!
 * JavaScript Custom Forms : Select Module
 *
 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.2.3
 */
!function (e) {
    e.addModule(function (t, s) {
        "use strict";

        function i(e) {
            this.options = t.extend({
                wrapNative: !0,
                wrapNativeOnMobile: !0,
                fakeDropInBody: !0,
                useCustomScroll: !0,
                flipDropToFit: !0,
                maxVisibleItems: 10,
                fakeAreaStructure: '<span class="jcf-select"><span class="jcf-select-text"></span><span class="jcf-select-opener"></span></span>',
                fakeDropStructure: '<div class="jcf-select-drop"><div class="jcf-select-drop-content"></div></div>',
                optionClassPrefix: "jcf-option-",
                selectClassPrefix: "jcf-select-",
                dropContentSelector: ".jcf-select-drop-content",
                selectTextSelector: ".jcf-select-text",
                dropActiveClass: "jcf-drop-active",
                flipDropClass: "jcf-drop-flipped"
            }, e), this.init()
        }

        function o(e) {
            this.options = t.extend({
                wrapNative: !0,
                useCustomScroll: !0,
                fakeStructure: '<span class="jcf-list-box"><span class="jcf-list-wrapper"></span></span>',
                selectClassPrefix: "jcf-select-",
                listHolder: ".jcf-list-wrapper"
            }, e), this.init()
        }

        function n(e) {
            this.options = t.extend({
                holder: null,
                maxVisibleItems: 10,
                selectOnClick: !0,
                useHoverClass: !1,
                useCustomScroll: !1,
                handleResize: !0,
                multipleSelectWithoutKey: !1,
                alwaysPreventMouseWheel: !1,
                indexAttribute: "data-index",
                cloneClassPrefix: "jcf-option-",
                containerStructure: '<span class="jcf-list"><span class="jcf-list-content"></span></span>',
                containerSelector: ".jcf-list-content",
                captionClass: "jcf-optgroup-caption",
                disabledClass: "jcf-disabled",
                optionClass: "jcf-option",
                groupClass: "jcf-optgroup",
                hoverClass: "jcf-hover",
                selectedClass: "jcf-selected",
                scrollClass: "jcf-scroll-active"
            }, e), this.init()
        }

        var l = {
            name: "Select",
            selector: "select",
            options: {element: null, multipleCompactStyle: !1},
            plugins: {ListBox: o, ComboBox: i, SelectList: n},
            matchElement: function (e) {
                return e.is("select")
            },
            init: function () {
                this.element = t(this.options.element), this.createInstance()
            },
            isListBox: function () {
                return this.element.is("[size]:not([jcf-size]), [multiple]")
            },
            createInstance: function () {
                this.instance && this.instance.destroy(), this.isListBox() && !this.options.multipleCompactStyle ? this.instance = new o(this.options) : this.instance = new i(this.options)
            },
            refresh: function () {
                this.isListBox() && this.instance instanceof i || !this.isListBox() && this.instance instanceof o ? this.createInstance() : this.instance.refresh()
            },
            destroy: function () {
                this.instance.destroy()
            }
        };
        t.extend(i.prototype, {
            init: function () {
                this.initStructure(), this.bindHandlers(), this.attachEvents(), this.refresh()
            }, initStructure: function () {
                this.win = t(s), this.doc = t(document), this.realElement = t(this.options.element), this.fakeElement = t(this.options.fakeAreaStructure).insertAfter(this.realElement), this.selectTextContainer = this.fakeElement.find(this.options.selectTextSelector), this.selectText = t("<span></span>").appendTo(this.selectTextContainer), h(this.fakeElement), this.fakeElement.addClass(r(this.realElement.prop("className"), this.options.selectClassPrefix)), this.realElement.prop("multiple") && this.fakeElement.addClass("jcf-compact-multiple"), this.options.isMobileDevice && this.options.wrapNativeOnMobile && !this.options.wrapNative && (this.options.wrapNative = !0), this.options.wrapNative ? this.realElement.prependTo(this.fakeElement).css({
                    position: "absolute",
                    height: "100%",
                    width: "100%"
                }).addClass(this.options.resetAppearanceClass) : (this.realElement.addClass(this.options.hiddenClass), this.fakeElement.attr("title", this.realElement.attr("title")), this.fakeDropTarget = this.options.fakeDropInBody ? t("body") : this.fakeElement)
            }, attachEvents: function () {
                var e = this;
                this.delayedRefresh = function () {
                    setTimeout(function () {
                        e.refresh(), e.list && (e.list.refresh(), e.list.scrollToActiveOption())
                    }, 1)
                }, this.options.wrapNative ? this.realElement.on({
                    focus: this.onFocus,
                    change: this.onChange,
                    click: this.onChange,
                    keydown: this.delayedRefresh
                }) : (this.realElement.on({
                    focus: this.onFocus,
                    change: this.onChange,
                    keydown: this.onKeyDown
                }), this.fakeElement.on({"jcf-pointerdown": this.onSelectAreaPress}))
            }, onKeyDown: function (e) {
                13 === e.which ? this.toggleDropdown() : this.dropActive && this.delayedRefresh()
            }, onChange: function () {
                this.refresh()
            }, onFocus: function () {
                this.pressedFlag && this.focusedFlag || (this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur), this.toggleListMode(!0), this.focusedFlag = !0)
            }, onBlur: function () {
                this.pressedFlag || (this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur), this.toggleListMode(!1), this.focusedFlag = !1)
            }, onResize: function () {
                this.dropActive && this.hideDropdown()
            }, onSelectDropPress: function () {
                this.pressedFlag = !0
            }, onSelectDropRelease: function (e, t) {
                this.pressedFlag = !1, "mouse" === t.pointerType && this.realElement.focus()
            }, onSelectAreaPress: function (e) {
                !this.options.fakeDropInBody && t(e.target).closest(this.dropdown).length || e.button > 1 || this.realElement.is(":disabled") || (this.selectOpenedByEvent = e.pointerType, this.toggleDropdown(), this.focusedFlag || ("mouse" === e.pointerType ? this.realElement.focus() : this.onFocus(e)), this.pressedFlag = !0, this.fakeElement.addClass(this.options.pressedClass), this.doc.on("jcf-pointerup", this.onSelectAreaRelease))
            }, onSelectAreaRelease: function (e) {
                this.focusedFlag && "mouse" === e.pointerType && this.realElement.focus(), this.pressedFlag = !1, this.fakeElement.removeClass(this.options.pressedClass), this.doc.off("jcf-pointerup", this.onSelectAreaRelease)
            }, onOutsideClick: function (e) {
                var s = t(e.target);
                s.closest(this.fakeElement).length || s.closest(this.dropdown).length || this.hideDropdown()
            }, onSelect: function () {
                this.refresh(), this.realElement.prop("multiple") ? this.repositionDropdown() : this.hideDropdown(), this.fireNativeEvent(this.realElement, "change")
            }, toggleListMode: function (e) {
                this.options.wrapNative || (e ? this.realElement.attr({
                    size: 4,
                    "jcf-size": ""
                }) : this.options.wrapNative || this.realElement.removeAttr("size jcf-size"))
            }, createDropdown: function () {
                this.dropdown && (this.list.destroy(), this.dropdown.remove()), this.dropdown = t(this.options.fakeDropStructure).appendTo(this.fakeDropTarget), this.dropdown.addClass(r(this.realElement.prop("className"), this.options.selectClassPrefix)), h(this.dropdown), this.realElement.prop("multiple") && this.dropdown.addClass("jcf-compact-multiple"), this.options.fakeDropInBody && this.dropdown.css({
                    position: "absolute",
                    top: -9999
                }), this.list = new n({
                    useHoverClass: !0,
                    handleResize: !1,
                    alwaysPreventMouseWheel: !0,
                    maxVisibleItems: this.options.maxVisibleItems,
                    useCustomScroll: this.options.useCustomScroll,
                    holder: this.dropdown.find(this.options.dropContentSelector),
                    multipleSelectWithoutKey: this.realElement.prop("multiple"),
                    element: this.realElement
                }), t(this.list).on({
                    select: this.onSelect,
                    press: this.onSelectDropPress,
                    release: this.onSelectDropRelease
                })
            }, repositionDropdown: function () {
                var e, t, s, i = this.fakeElement.offset(), o = this.fakeElement[0].getBoundingClientRect(),
                    n = o.width || o.right - o.left, l = this.fakeElement.outerHeight(),
                    r = this.dropdown.css("width", n).outerHeight(), h = this.win.scrollTop(), a = this.win.height(),
                    c = !1;
                i.top + l + r > h + a && i.top - r > h && (c = !0), this.options.fakeDropInBody && (s = "static" !== this.fakeDropTarget.css("position") ? this.fakeDropTarget.offset().top : 0, this.options.flipDropToFit && c ? (t = i.left, e = i.top - r - s) : (t = i.left, e = i.top + l - s), this.dropdown.css({
                    width: n,
                    left: t,
                    top: e
                })), this.dropdown.add(this.fakeElement).toggleClass(this.options.flipDropClass, this.options.flipDropToFit && c)
            }, showDropdown: function () {
                this.realElement.prop("options").length && (this.dropdown || this.createDropdown(), this.dropActive = !0, this.dropdown.appendTo(this.fakeDropTarget), this.fakeElement.addClass(this.options.dropActiveClass), this.refreshSelectedText(), this.repositionDropdown(), this.list.setScrollTop(this.savedScrollTop), this.list.refresh(), this.win.on("resize", this.onResize), this.doc.on("jcf-pointerdown", this.onOutsideClick))
            }, hideDropdown: function () {
                this.dropdown && (this.savedScrollTop = this.list.getScrollTop(), this.fakeElement.removeClass(this.options.dropActiveClass + " " + this.options.flipDropClass), this.dropdown.removeClass(this.options.flipDropClass).detach(), this.doc.off("jcf-pointerdown", this.onOutsideClick), this.win.off("resize", this.onResize), this.dropActive = !1, "touch" === this.selectOpenedByEvent && this.onBlur())
            }, toggleDropdown: function () {
                this.dropActive ? this.hideDropdown() : this.showDropdown()
            }, refreshSelectedText: function () {
                var e, s = this.realElement.prop("selectedIndex"), i = this.realElement.prop("options")[s],
                    o = i ? i.getAttribute("data-image") : null, n = "", l = this;
                this.realElement.prop("multiple") ? (t.each(this.realElement.prop("options"), function (e, t) {
                    t.selected && (n += (n ? ", " : "") + t.innerHTML)
                }), n || (n = l.realElement.attr("placeholder") || ""), this.selectText.removeAttr("class").html(n)) : i ? this.currentSelectedText === i.innerHTML && this.currentSelectedImage === o || (e = r(i.className, this.options.optionClassPrefix), this.selectText.attr("class", e).html(i.innerHTML), o ? (this.selectImage || (this.selectImage = t("<img>").prependTo(this.selectTextContainer).hide()), this.selectImage.attr("src", o).show()) : this.selectImage && this.selectImage.hide(), this.currentSelectedText = i.innerHTML, this.currentSelectedImage = o) : (this.selectImage && this.selectImage.hide(), this.selectText.removeAttr("class").empty())
            }, refresh: function () {
                "none" === this.realElement.prop("style").display ? this.fakeElement.hide() : this.fakeElement.show(), this.refreshSelectedText(), this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled"))
            }, destroy: function () {
                this.options.wrapNative ? this.realElement.insertBefore(this.fakeElement).css({
                    position: "",
                    height: "",
                    width: ""
                }).removeClass(this.options.resetAppearanceClass) : (this.realElement.removeClass(this.options.hiddenClass), this.realElement.is("[jcf-size]") && this.realElement.removeAttr("size jcf-size")), this.fakeElement.remove(), this.doc.off("jcf-pointerup", this.onSelectAreaRelease), this.realElement.off({focus: this.onFocus})
            }
        }), t.extend(o.prototype, {
            init: function () {
                this.bindHandlers(), this.initStructure(), this.attachEvents()
            }, initStructure: function () {
                this.realElement = t(this.options.element), this.fakeElement = t(this.options.fakeStructure).insertAfter(this.realElement), this.listHolder = this.fakeElement.find(this.options.listHolder), h(this.fakeElement), this.fakeElement.addClass(r(this.realElement.prop("className"), this.options.selectClassPrefix)), this.realElement.addClass(this.options.hiddenClass), this.list = new n({
                    useCustomScroll: this.options.useCustomScroll,
                    holder: this.listHolder,
                    selectOnClick: !1,
                    element: this.realElement
                })
            }, attachEvents: function () {
                var e = this;
                this.delayedRefresh = function (t) {
                    t && (16 === t.which || t.ctrlKey || t.metaKey || t.altKey) || (clearTimeout(e.refreshTimer), e.refreshTimer = setTimeout(function () {
                        e.refresh(), e.list.scrollToActiveOption()
                    }, 1))
                }, this.realElement.on({
                    focus: this.onFocus,
                    click: this.delayedRefresh,
                    keydown: this.delayedRefresh
                }), t(this.list).on({
                    select: this.onSelect,
                    press: this.onFakeOptionsPress,
                    release: this.onFakeOptionsRelease
                })
            }, onFakeOptionsPress: function (e, t) {
                this.pressedFlag = !0, "mouse" === t.pointerType && this.realElement.focus()
            }, onFakeOptionsRelease: function (e, t) {
                this.pressedFlag = !1, "mouse" === t.pointerType && this.realElement.focus()
            }, onSelect: function () {
                this.fireNativeEvent(this.realElement, "change"), this.fireNativeEvent(this.realElement, "click")
            }, onFocus: function () {
                this.pressedFlag && this.focusedFlag || (this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur), this.focusedFlag = !0)
            }, onBlur: function () {
                this.pressedFlag || (this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur), this.focusedFlag = !1)
            }, refresh: function () {
                this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled")), this.list.refresh()
            }, destroy: function () {
                this.list.destroy(), this.realElement.insertBefore(this.fakeElement).removeClass(this.options.hiddenClass), this.fakeElement.remove()
            }
        }), t.extend(n.prototype, {
            init: function () {
                this.initStructure(), this.refreshSelectedClass(), this.attachEvents()
            }, initStructure: function () {
                this.element = t(this.options.element), this.indexSelector = "[" + this.options.indexAttribute + "]", this.container = t(this.options.containerStructure).appendTo(this.options.holder), this.listHolder = this.container.find(this.options.containerSelector), this.lastClickedIndex = this.element.prop("selectedIndex"), this.rebuildList(), this.element.prop("multiple") && (this.previousSelection = this.getSelectedOptionsIndexes())
            }, attachEvents: function () {
                this.bindHandlers(), this.listHolder.on("jcf-pointerdown", this.indexSelector, this.onItemPress), this.listHolder.on("jcf-pointerdown", this.onPress), this.options.useHoverClass && this.listHolder.on("jcf-pointerover", this.indexSelector, this.onHoverItem)
            }, onPress: function (e) {
                t(this).trigger("press", e), this.listHolder.on("jcf-pointerup", this.onRelease)
            }, onRelease: function (e) {
                t(this).trigger("release", e), this.listHolder.off("jcf-pointerup", this.onRelease)
            }, onHoverItem: function (e) {
                var t = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute));
                this.fakeOptions.removeClass(this.options.hoverClass).eq(t).addClass(this.options.hoverClass)
            }, onItemPress: function (e) {
                "touch" === e.pointerType || this.options.selectOnClick ? (this.tmpListOffsetTop = this.list.offset().top, this.listHolder.on("jcf-pointerup", this.indexSelector, this.onItemRelease)) : this.onSelectItem(e)
            }, onItemRelease: function (e) {
                this.listHolder.off("jcf-pointerup", this.indexSelector, this.onItemRelease), this.tmpListOffsetTop === this.list.offset().top && this.listHolder.on("click", this.indexSelector, {savedPointerType: e.pointerType}, this.onSelectItem), delete this.tmpListOffsetTop
            }, onSelectItem: function (e) {
                var s, i = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute)),
                    o = e.data && e.data.savedPointerType || e.pointerType || "mouse";
                this.listHolder.off("click", this.indexSelector, this.onSelectItem), e.button > 1 || this.realOptions[i].disabled || (this.element.prop("multiple") ? e.metaKey || e.ctrlKey || "touch" === o || this.options.multipleSelectWithoutKey ? this.realOptions[i].selected = !this.realOptions[i].selected : e.shiftKey ? (s = [this.lastClickedIndex, i].sort(function (e, t) {
                    return e - t
                }), this.realOptions.each(function (e, t) {
                    t.selected = e >= s[0] && e <= s[1]
                })) : this.element.prop("selectedIndex", i) : this.element.prop("selectedIndex", i), e.shiftKey || (this.lastClickedIndex = i), this.refreshSelectedClass(), "mouse" === o && this.scrollToActiveOption(), t(this).trigger("select"))
            }, rebuildList: function () {
                var s = this, i = this.element[0];
                this.storedSelectHTML = i.innerHTML, this.optionIndex = 0, this.list = t(this.createOptionsList(i)), this.listHolder.empty().append(this.list), this.realOptions = this.element.find("option"), this.fakeOptions = this.list.find(this.indexSelector), this.fakeListItems = this.list.find("." + this.options.captionClass + "," + this.indexSelector), delete this.optionIndex;
                var o = this.options.maxVisibleItems, n = this.element.prop("size");
                n > 1 && !this.element.is("[jcf-size]") && (o = n);
                var l = this.fakeOptions.length > o;
                this.container.toggleClass(this.options.scrollClass, l), l && (this.listHolder.css({
                    maxHeight: this.getOverflowHeight(o),
                    overflow: "auto"
                }), this.options.useCustomScroll && e.modules.Scrollable) ? e.replace(this.listHolder, "Scrollable", {
                    handleResize: this.options.handleResize,
                    alwaysPreventMouseWheel: this.options.alwaysPreventMouseWheel
                }) : this.options.alwaysPreventMouseWheel && (this.preventWheelHandler = function (e) {
                    var t = s.listHolder.scrollTop(),
                        i = s.listHolder.prop("scrollHeight") - s.listHolder.innerHeight();
                    (t <= 0 && e.deltaY < 0 || t >= i && e.deltaY > 0) && e.preventDefault()
                }, this.listHolder.on("jcf-mousewheel", this.preventWheelHandler))
            }, refreshSelectedClass: function () {
                var e, t = this, s = this.element.prop("multiple"), i = this.element.prop("selectedIndex");
                s ? this.realOptions.each(function (e, s) {
                    t.fakeOptions.eq(e).toggleClass(t.options.selectedClass, !!s.selected)
                }) : (this.fakeOptions.removeClass(this.options.selectedClass + " " + this.options.hoverClass), e = this.fakeOptions.eq(i).addClass(this.options.selectedClass), this.options.useHoverClass && e.addClass(this.options.hoverClass))
            }, scrollToActiveOption: function () {
                var e = this.getActiveOptionOffset();
                "number" == typeof e && this.listHolder.prop("scrollTop", e)
            }, getSelectedOptionsIndexes: function () {
                var e = [];
                return this.realOptions.each(function (t, s) {
                    s.selected && e.push(t)
                }), e
            }, getChangedSelectedIndex: function () {
                var e = this.element.prop("selectedIndex"), s = this, i = !1, o = null;
                return this.element.prop("multiple") ? (this.currentSelection = this.getSelectedOptionsIndexes(), t.each(this.currentSelection, function (e, t) {
                    !i && s.previousSelection.indexOf(t) < 0 && (0 === e && (i = !0), o = t)
                }), this.previousSelection = this.currentSelection, o) : e
            }, getActiveOptionOffset: function () {
                var e = this.getChangedSelectedIndex();
                if (null !== e) {
                    var t = this.listHolder.height(), s = this.listHolder.prop("scrollTop"), i = this.fakeOptions.eq(e),
                        o = i.offset().top - this.list.offset().top, n = i.innerHeight();
                    return o + n >= s + t ? o - t + n : o < s ? o : void 0
                }
            }, getOverflowHeight: function (e) {
                var t = this.fakeListItems.eq(e - 1), s = this.list.offset().top;
                return t.offset().top + t.innerHeight() - s
            }, getScrollTop: function () {
                return this.listHolder.scrollTop()
            }, setScrollTop: function (e) {
                this.listHolder.scrollTop(e)
            }, createOption: function (e) {
                var t = document.createElement("span");
                t.className = this.options.optionClass, t.innerHTML = e.innerHTML, t.setAttribute(this.options.indexAttribute, this.optionIndex++);
                var s, i = e.getAttribute("data-image");
                return i && ((s = document.createElement("img")).src = i, t.insertBefore(s, t.childNodes[0])), e.disabled && (t.className += " " + this.options.disabledClass), e.className && (t.className += " " + r(e.className, this.options.cloneClassPrefix)), t
            }, createOptGroup: function (e) {
                var t, s, i = document.createElement("span"), o = e.getAttribute("label");
                return t = document.createElement("span"), t.className = this.options.captionClass, t.innerHTML = o, i.appendChild(t), e.children.length && (s = this.createOptionsList(e), i.appendChild(s)), i.className = this.options.groupClass, i
            }, createOptionContainer: function () {
                return document.createElement("li")
            }, createOptionsList: function (e) {
                var s = this, i = document.createElement("ul");
                return t.each(e.children, function (e, t) {
                    var o, n = s.createOptionContainer(t);
                    switch (t.tagName.toLowerCase()) {
                        case"option":
                            o = s.createOption(t);
                            break;
                        case"optgroup":
                            o = s.createOptGroup(t)
                    }
                    i.appendChild(n).appendChild(o)
                }), i
            }, refresh: function () {
                this.storedSelectHTML !== this.element.prop("innerHTML") && this.rebuildList();
                var t = e.getInstance(this.listHolder);
                t && t.refresh(), this.refreshSelectedClass()
            }, destroy: function () {
                this.listHolder.off("jcf-mousewheel", this.preventWheelHandler), this.listHolder.off("jcf-pointerdown", this.indexSelector, this.onSelectItem), this.listHolder.off("jcf-pointerover", this.indexSelector, this.onHoverItem), this.listHolder.off("jcf-pointerdown", this.onPress)
            }
        });
        var r = function (e, t) {
            return e ? e.replace(/[\s]*([\S]+)+[\s]*/gi, t + "$1 ") : ""
        }, h = function () {
            function t(e) {
                e.preventDefault()
            }

            var s = e.getOptions().unselectableClass;
            return function (e) {
                e.addClass(s).on("selectstart", t)
            }
        }();
        return l
    })
}(jcf);


/*!
 * JavaScript Custom Forms : Scrollbar Module
 *
 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.2.3
 */
jcf.addModule(function (t, e) {
    "use strict";

    function i(e) {
        this.options = t.extend({
            holder: null,
            vertical: !0,
            inactiveClass: "jcf-inactive",
            verticalClass: "jcf-scrollbar-vertical",
            horizontalClass: "jcf-scrollbar-horizontal",
            scrollbarStructure: '<div class="jcf-scrollbar"><div class="jcf-scrollbar-dec"></div><div class="jcf-scrollbar-slider"><div class="jcf-scrollbar-handle"></div></div><div class="jcf-scrollbar-inc"></div></div>',
            btnDecSelector: ".jcf-scrollbar-dec",
            btnIncSelector: ".jcf-scrollbar-inc",
            sliderSelector: ".jcf-scrollbar-slider",
            handleSelector: ".jcf-scrollbar-handle",
            scrollInterval: 300,
            scrollStep: 400
        }, e), this.init()
    }

    var s = {
        name: "Scrollable",
        selector: ".jcf-scrollable",
        plugins: {ScrollBar: i},
        options: {
            mouseWheelStep: 150,
            handleResize: !0,
            alwaysShowScrollbars: !1,
            alwaysPreventMouseWheel: !1,
            scrollAreaStructure: '<div class="jcf-scrollable-wrapper"></div>'
        },
        matchElement: function (t) {
            return t.is(".jcf-scrollable")
        },
        init: function () {
            this.initStructure(), this.attachEvents(), this.rebuildScrollbars()
        },
        initStructure: function () {
            this.doc = t(document), this.win = t(e), this.realElement = t(this.options.element), this.scrollWrapper = t(this.options.scrollAreaStructure).insertAfter(this.realElement), this.scrollWrapper.css("position", "relative"), this.realElement.css("overflow", "hidden"), this.vBarEdge = 0
        },
        attachEvents: function () {
            var t = this;
            this.vBar = new i({
                holder: this.scrollWrapper, vertical: !0, onScroll: function (e) {
                    t.realElement.scrollTop(e)
                }
            }), this.hBar = new i({
                holder: this.scrollWrapper, vertical: !1, onScroll: function (e) {
                    t.realElement.scrollLeft(e)
                }
            }), this.realElement.on("scroll", this.onScroll), this.options.handleResize && this.win.on("resize orientationchange load", this.onResize), this.realElement.on("jcf-mousewheel", this.onMouseWheel), this.realElement.on("jcf-pointerdown", this.onTouchBody)
        },
        onScroll: function () {
            this.redrawScrollbars()
        },
        onResize: function () {
            t(document.activeElement).is(":input") || this.rebuildScrollbars()
        },
        onTouchBody: function (t) {
            "touch" === t.pointerType && (this.touchData = {
                scrollTop: this.realElement.scrollTop(),
                scrollLeft: this.realElement.scrollLeft(),
                left: t.pageX,
                top: t.pageY
            }, this.doc.on({"jcf-pointermove": this.onMoveBody, "jcf-pointerup": this.onReleaseBody}))
        },
        onMoveBody: function (t) {
            var e, i, s = this.verticalScrollActive, o = this.horizontalScrollActive;
            "touch" === t.pointerType && (e = this.touchData.scrollTop - t.pageY + this.touchData.top, i = this.touchData.scrollLeft - t.pageX + this.touchData.left, this.verticalScrollActive && (e < 0 || e > this.vBar.maxValue) && (s = !1), this.horizontalScrollActive && (i < 0 || i > this.hBar.maxValue) && (o = !1), this.realElement.scrollTop(e), this.realElement.scrollLeft(i), s || o ? t.preventDefault() : this.onReleaseBody(t))
        },
        onReleaseBody: function (t) {
            "touch" === t.pointerType && (delete this.touchData, this.doc.off({
                "jcf-pointermove": this.onMoveBody,
                "jcf-pointerup": this.onReleaseBody
            }))
        },
        onMouseWheel: function (t) {
            var e, i, s, o = this.realElement.scrollTop(), l = this.realElement.scrollLeft(),
                r = this.realElement.prop("scrollHeight") - this.embeddedDimensions.innerHeight,
                n = this.realElement.prop("scrollWidth") - this.embeddedDimensions.innerWidth;
            (this.options.alwaysPreventMouseWheel || (this.verticalScrollActive && t.deltaY && (o <= 0 && t.deltaY < 0 || o >= r && t.deltaY > 0 || (s = !0)), this.horizontalScrollActive && t.deltaX && (l <= 0 && t.deltaX < 0 || l >= n && t.deltaX > 0 || (s = !0)), this.verticalScrollActive || this.horizontalScrollActive)) && (s || this.options.alwaysPreventMouseWheel) && (t.preventDefault(), e = t.deltaX / 100 * this.options.mouseWheelStep, i = t.deltaY / 100 * this.options.mouseWheelStep, this.realElement.scrollTop(o + i), this.realElement.scrollLeft(l + e))
        },
        setScrollBarEdge: function (t) {
            this.vBarEdge = t || 0, this.redrawScrollbars()
        },
        saveElementDimensions: function () {
            return this.savedDimensions = {top: this.realElement.width(), left: this.realElement.height()}, this
        },
        restoreElementDimensions: function () {
            return this.savedDimensions && this.realElement.css({
                width: this.savedDimensions.width,
                height: this.savedDimensions.height
            }), this
        },
        saveScrollOffsets: function () {
            return this.savedOffsets = {top: this.realElement.scrollTop(), left: this.realElement.scrollLeft()}, this
        },
        restoreScrollOffsets: function () {
            return this.savedOffsets && (this.realElement.scrollTop(this.savedOffsets.top), this.realElement.scrollLeft(this.savedOffsets.left)), this
        },
        getContainerDimensions: function () {
            var t, e, i, s;
            return this.isModifiedStyles ? t = {
                width: this.realElement.innerWidth() + this.vBar.getThickness(),
                height: this.realElement.innerHeight() + this.hBar.getThickness()
            } : (this.saveElementDimensions().saveScrollOffsets(), this.realElement.insertAfter(this.scrollWrapper), this.scrollWrapper.detach(), e = this.realElement.prop("style"), s = parseFloat(e.width), i = parseFloat(e.height), this.embeddedDimensions && s && i && (this.isModifiedStyles |= s !== this.embeddedDimensions.width || i !== this.embeddedDimensions.height, this.realElement.css({
                overflow: "",
                width: "",
                height: ""
            })), t = {
                width: this.realElement.outerWidth(),
                height: this.realElement.outerHeight()
            }, this.scrollWrapper.insertAfter(this.realElement), this.realElement.css("overflow", "hidden").prependTo(this.scrollWrapper), this.restoreElementDimensions().restoreScrollOffsets()), t
        },
        getEmbeddedDimensions: function (e) {
            var i, s = this.vBar.getThickness(), o = this.hBar.getThickness(),
                l = this.realElement.outerWidth() - this.realElement.width(),
                r = this.realElement.outerHeight() - this.realElement.height();
            return this.options.alwaysShowScrollbars ? (this.verticalScrollActive = !0, this.horizontalScrollActive = !0, i = {
                innerWidth: e.width - s,
                innerHeight: e.height - o
            }) : (this.saveElementDimensions(), this.verticalScrollActive = !1, this.horizontalScrollActive = !1, this.realElement.css({
                width: e.width - l,
                height: e.height - r
            }), this.horizontalScrollActive = this.realElement.prop("scrollWidth") > this.containerDimensions.width, this.verticalScrollActive = this.realElement.prop("scrollHeight") > this.containerDimensions.height, this.restoreElementDimensions(), i = {
                innerWidth: e.width - (this.verticalScrollActive ? s : 0),
                innerHeight: e.height - (this.horizontalScrollActive ? o : 0)
            }), t.extend(i, {width: i.innerWidth - l, height: i.innerHeight - r}), i
        },
        rebuildScrollbars: function () {
            this.containerDimensions = this.getContainerDimensions(), this.embeddedDimensions = this.getEmbeddedDimensions(this.containerDimensions), this.scrollWrapper.css({
                width: this.containerDimensions.width,
                height: this.containerDimensions.height
            }), this.realElement.css({
                overflow: "hidden",
                width: this.embeddedDimensions.width,
                height: this.embeddedDimensions.height
            }), this.redrawScrollbars()
        },
        redrawScrollbars: function () {
            var t, e;
            this.verticalScrollActive ? (t = this.vBarEdge ? this.containerDimensions.height - this.vBarEdge : this.embeddedDimensions.innerHeight, e = Math.max(this.realElement.prop("offsetHeight"), this.realElement.prop("scrollHeight")) - this.vBarEdge, this.vBar.show().setMaxValue(e - t).setRatio(t / e).setSize(t), this.vBar.setValue(this.realElement.scrollTop())) : this.vBar.hide(), this.horizontalScrollActive ? (t = this.embeddedDimensions.innerWidth, (e = this.realElement.prop("scrollWidth")) === t && (this.horizontalScrollActive = !1), this.hBar.show().setMaxValue(e - t).setRatio(t / e).setSize(t), this.hBar.setValue(this.realElement.scrollLeft())) : this.hBar.hide();
            var i = "";
            this.verticalScrollActive && this.horizontalScrollActive ? i = "none" : this.verticalScrollActive ? i = "pan-x" : this.horizontalScrollActive && (i = "pan-y"), this.realElement.css("touchAction", i)
        },
        refresh: function () {
            this.rebuildScrollbars()
        },
        destroy: function () {
            this.win.off("resize orientationchange load", this.onResize), this.realElement.off({
                "jcf-mousewheel": this.onMouseWheel,
                "jcf-pointerdown": this.onTouchBody
            }), this.doc.off({
                "jcf-pointermove": this.onMoveBody,
                "jcf-pointerup": this.onReleaseBody
            }), this.saveScrollOffsets(), this.vBar.destroy(), this.hBar.destroy(), this.realElement.insertAfter(this.scrollWrapper).css({
                touchAction: "",
                overflow: "",
                width: "",
                height: ""
            }), this.scrollWrapper.remove(), this.restoreScrollOffsets()
        }
    };
    return t.extend(i.prototype, {
        init: function () {
            this.initStructure(), this.attachEvents()
        }, initStructure: function () {
            this.doc = t(document), this.isVertical = !!this.options.vertical, this.sizeProperty = this.isVertical ? "height" : "width", this.fullSizeProperty = this.isVertical ? "outerHeight" : "outerWidth", this.invertedSizeProperty = this.isVertical ? "width" : "height", this.thicknessMeasureMethod = "outer" + this.invertedSizeProperty.charAt(0).toUpperCase() + this.invertedSizeProperty.substr(1), this.offsetProperty = this.isVertical ? "top" : "left", this.offsetEventProperty = this.isVertical ? "pageY" : "pageX", this.value = this.options.value || 0, this.maxValue = this.options.maxValue || 0, this.currentSliderSize = 0, this.handleSize = 0, this.holder = t(this.options.holder), this.scrollbar = t(this.options.scrollbarStructure).appendTo(this.holder), this.btnDec = this.scrollbar.find(this.options.btnDecSelector), this.btnInc = this.scrollbar.find(this.options.btnIncSelector), this.slider = this.scrollbar.find(this.options.sliderSelector), this.handle = this.slider.find(this.options.handleSelector), this.scrollbar.addClass(this.isVertical ? this.options.verticalClass : this.options.horizontalClass).css({
                touchAction: this.isVertical ? "pan-x" : "pan-y",
                position: "absolute"
            }), this.slider.css({position: "relative"}), this.handle.css({touchAction: "none", position: "absolute"})
        }, attachEvents: function () {
            this.bindHandlers(), this.handle.on("jcf-pointerdown", this.onHandlePress), this.slider.add(this.btnDec).add(this.btnInc).on("jcf-pointerdown", this.onButtonPress)
        }, onHandlePress: function (t) {
            "mouse" === t.pointerType && t.button > 1 || (t.preventDefault(), this.handleDragActive = !0, this.sliderOffset = this.slider.offset()[this.offsetProperty], this.innerHandleOffset = t[this.offsetEventProperty] - this.handle.offset()[this.offsetProperty], this.doc.on("jcf-pointermove", this.onHandleDrag), this.doc.on("jcf-pointerup", this.onHandleRelease))
        }, onHandleDrag: function (t) {
            t.preventDefault(), this.calcOffset = t[this.offsetEventProperty] - this.sliderOffset - this.innerHandleOffset, this.setValue(this.calcOffset / (this.currentSliderSize - this.handleSize) * this.maxValue), this.triggerScrollEvent(this.value)
        }, onHandleRelease: function () {
            this.handleDragActive = !1, this.doc.off("jcf-pointermove", this.onHandleDrag), this.doc.off("jcf-pointerup", this.onHandleRelease)
        }, onButtonPress: function (t) {
            var e, i;
            "mouse" === t.pointerType && t.button > 1 || (t.preventDefault(), this.handleDragActive || (this.slider.is(t.currentTarget) ? (e = this.handle.offset()[this.offsetProperty] > t[this.offsetEventProperty] ? -1 : 1, i = t[this.offsetEventProperty] - this.slider.offset()[this.offsetProperty], this.startPageScrolling(e, i)) : (e = this.btnDec.is(t.currentTarget) ? -1 : 1, this.startSmoothScrolling(e)), this.doc.on("jcf-pointerup", this.onButtonRelease)))
        }, onButtonRelease: function () {
            this.stopPageScrolling(), this.stopSmoothScrolling(), this.doc.off("jcf-pointerup", this.onButtonRelease)
        }, startPageScrolling: function (t, e) {
            var i = this, s = t * i.currentSize, o = function () {
                var s = i.value / i.maxValue * (i.currentSliderSize - i.handleSize);
                return t > 0 ? s + i.handleSize >= e : s <= e
            }, l = function () {
                i.value += s, i.setValue(i.value), i.triggerScrollEvent(i.value), o() && clearInterval(i.pageScrollTimer)
            };
            this.pageScrollTimer = setInterval(l, this.options.scrollInterval), l()
        }, stopPageScrolling: function () {
            clearInterval(this.pageScrollTimer)
        }, startSmoothScrolling: function (t) {
            var i, s = this;
            this.stopSmoothScrolling();
            var o = e.requestAnimationFrame || function (t) {
                setTimeout(t, 16)
            }, l = function () {
                return Date.now ? Date.now() : (new Date).getTime()
            }, r = function () {
                return t > 0 ? s.value >= s.maxValue : s.value <= 0
            }, n = function () {
                var e = (l() - i) / 1e3 * s.options.scrollStep;
                s.smoothScrollActive && (s.value += e * t, s.setValue(s.value), s.triggerScrollEvent(s.value), r() || (i = l(), o(n)))
            };
            s.smoothScrollActive = !0, i = l(), o(n)
        }, stopSmoothScrolling: function () {
            this.smoothScrollActive = !1
        }, triggerScrollEvent: function (t) {
            this.options.onScroll && this.options.onScroll(t)
        }, getThickness: function () {
            return this.scrollbar[this.thicknessMeasureMethod]()
        }, setSize: function (t) {
            var e = this.btnDec[this.fullSizeProperty](), i = this.btnInc[this.fullSizeProperty]();
            return this.currentSize = t, this.currentSliderSize = t - e - i, this.scrollbar.css(this.sizeProperty, t), this.slider.css(this.sizeProperty, this.currentSliderSize), this.currentSliderSize = this.slider[this.sizeProperty](), this.handleSize = Math.round(this.currentSliderSize * this.ratio), this.handle.css(this.sizeProperty, this.handleSize), this.handleSize = this.handle[this.fullSizeProperty](), this
        }, setRatio: function (t) {
            return this.ratio = t, this
        }, setMaxValue: function (t) {
            return this.maxValue = t, this.setValue(Math.min(this.value, this.maxValue)), this
        }, setValue: function (t) {
            this.value = t, this.value < 0 ? this.value = 0 : this.value > this.maxValue && (this.value = this.maxValue), this.refresh()
        }, setPosition: function (t) {
            return this.scrollbar.css(t), this
        }, hide: function () {
            return this.scrollbar.detach(), this
        }, show: function () {
            return this.scrollbar.appendTo(this.holder), this
        }, refresh: function () {
            0 === this.value || 0 === this.maxValue ? this.calcOffset = 0 : this.calcOffset = this.value / this.maxValue * (this.currentSliderSize - this.handleSize), this.handle.css(this.offsetProperty, this.calcOffset), this.btnDec.toggleClass(this.options.inactiveClass, 0 === this.value), this.btnInc.toggleClass(this.options.inactiveClass, this.value === this.maxValue), this.scrollbar.toggleClass(this.options.inactiveClass, 0 === this.maxValue)
        }, destroy: function () {
            this.btnDec.add(this.btnInc).off("jcf-pointerdown", this.onButtonPress), this.handle.off("jcf-pointerdown", this.onHandlePress), this.doc.off("jcf-pointermove", this.onHandleDrag), this.doc.off("jcf-pointerup", this.onHandleRelease), this.doc.off("jcf-pointerup", this.onButtonRelease), this.stopSmoothScrolling(), this.stopPageScrolling(), this.scrollbar.remove()
        }
    }), s
});
