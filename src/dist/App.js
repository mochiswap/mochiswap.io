"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
require("./App.css");
function App(_a) {
    // Create the count state.
    var _b = react_1.useState(0), count = _b[0], setCount = _b[1];
    // Create the counter (+1 every second).
    react_1.useEffect(function () {
        var timer = setTimeout(function () { return setCount(count + 1); }, 1000);
        return function () { return clearTimeout(timer); };
    }, [count, setCount]);
    // Return the App component.
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            react_1["default"].createElement("p", null,
                "Edit ",
                react_1["default"].createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            react_1["default"].createElement("p", null,
                "Page has been open for ",
                react_1["default"].createElement("code", null, count),
                " seconds."),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("button", { className: "btn btn-primary" }, "DaisyUI Button")))));
}
exports["default"] = App;
