import 'preact';
import '../../src/components/hello.js';
import preact from ' preact?commonjs-proxy';
import Hello from ' /Users/myleslinder/Documents/Development/messing-around/form-builder/preact-app/src/components/hello.js?commonjs-external';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bundle = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });




function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}

var Hello__default = /*#__PURE__*/ _interopDefaultLegacy(Hello);

function App() {
  return preact.h(Hello__default["default"]);
}

const fallbackValue = 10;
const props = [
  "recordId",
  "objectApiName",
  ["somethingInMyXML", `${fallbackValue}`]
];

function renderApp(renderElement, props) {
  preact.render(preact.h(App, props), renderElement);
}

exports.default = renderApp;
exports.props = props;
});

var bundle$1 = unwrapExports(bundle);
var bundle_1 = bundle.props;

export default bundle$1;
export { bundle_1 as props };
