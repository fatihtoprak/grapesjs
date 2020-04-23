(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{405:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"replace-the-built-in-rich-text-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-the-built-in-rich-text-editor"}},[t._v("#")]),t._v(" Replace the built-in Rich Text Editor")]),t._v(" "),a("p",[t._v("As you might have noticed the default Rich Text Editor (RTE) is really tiny and so doesn't seem like a complete solution as a text editor. Instead of showing how to add new commands inside the default one we'll show how to completely replace it with another one.")]),t._v(" "),a("p",[t._v("In the following guide we'll integrate the CKEditor and to accomplish this task we just need to provide few functions to the GrapesJS API method "),a("code",[t._v("setCustomRte")]),t._v(" as an interface.")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#interface"}},[t._v("Interface")]),a("ul",[a("li",[a("a",{attrs:{href:"#enable"}},[t._v("Enable")])]),a("li",[a("a",{attrs:{href:"#disable"}},[t._v("Disable")])]),a("li",[a("a",{attrs:{href:"#focus"}},[t._v("Focus")])])])]),a("li",[a("a",{attrs:{href:"#toolbar-position"}},[t._v("Toolbar position")])]),a("li",[a("a",{attrs:{href:"#the-built-in-vs-third-party"}},[t._v("The built-in vs third-party")])]),a("li",[a("a",{attrs:{href:"#plugins"}},[t._v("Plugins")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface"}},[t._v("#")]),t._v(" Interface")]),t._v(" "),a("h3",{attrs:{id:"enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[t._v("#")]),t._v(" Enable")]),t._v(" "),a("p",[t._v("The first step is to indicate how to enable the third-party library and so for we gonna start with the "),a("code",[t._v("enable()")]),t._v(" function. This method should take care of the first initialization of our custom RTE but also for the next time is called on the same element, this is why there is the "),a("code",[t._v("rte")]),t._v(" argument.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" editor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\neditor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCustomRte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Enabling the custom RTE\n   * @param  {HTMLElement} el This is the HTML node which was selected to be edited\n   * @param  {Object} rte It's the instance you'd return from the first call of enable().\n   *                      At the first call it'd be undefined. This is useful when you need\n   *                      to check if the RTE is already enabled on the component\n   * @return {Object} The return should be the RTE initialized instance\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If already exists just focus")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// implemented later")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CKEditor initialization")]),t._v("\n    rte "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CKEDITOR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your configurations...")]),t._v("\n      toolbar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IMPORTANT")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Generally, inline editors are attached exactly at the same position of")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the selected element but in this case it'd work until you start to scroll")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the canvas. For this reason you have to move the RTE's toolbar inside the")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// one from GrapesJS. For this purpose we used a plugin which simplify")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this process and move all next CKEditor's toolbars inside our indicated")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element")]),t._v("\n      sharedSpaces"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        top"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RichTextEditor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getToolbarEl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// implemented later")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"disable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable"}},[t._v("#")]),t._v(" Disable")]),t._v(" "),a("p",[t._v("Once we know how to enable the RTE let's implement the method which disable it, so let's create the "),a("code",[t._v("disable()")]),t._v(" function.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCustomRte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * The signature of the function is the same of the enable\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("disable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentEditable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rte "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("blur")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"focus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#focus"}},[t._v("#")]),t._v(" Focus")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("focus()")]),t._v(" method is just a helper used inside "),a("code",[t._v("enable()")]),t._v(" and not required by the interface")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCustomRte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do nothing if already focused")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rte "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasFocus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentEditable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rte "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"toolbar-position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toolbar-position"}},[t._v("#")]),t._v(" Toolbar position")]),t._v(" "),a("p",[t._v("Sometimes the default top-left position of the toolbar is not always what you need. For example, when you scroll the canvas and the toolbar reaches the top,  you'd like to move it down. For this purpose, you can add a listener which applies your logic in this way:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rteToolbarPosUpdate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvasTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"the-built-in-vs-third-party"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-built-in-vs-third-party"}},[t._v("#")]),t._v(" The built-in vs third-party")]),t._v(" "),a("p",[t._v("The only one thing you have to keep in mind when using a custom RTE is that all the content and its behavior are handled by the library itself, the GrapesJS's component will just store the content as it is.\nFor example, when you create a link using the built-in RTE then you'll be able to select it and edit its "),a("code",[t._v("href")]),t._v(" via Component Settings. With a custom RTE, it will be its own task to show the proper modal for the link editing.\nObviously, each third-party library has its own APIs and can present some limitations and drawbacks, so, a minimal knowledge of the library is a plus.")]),t._v(" "),a("h2",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),a("p",[t._v("For the CKEditor, you can find a complete plugin here "),a("a",{attrs:{href:"https://github.com/artf/grapesjs-plugin-ckeditor",target:"_blank",rel:"noopener noreferrer"}},[t._v("grapesjs-plugin-ckeditor"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=e.exports}}]);