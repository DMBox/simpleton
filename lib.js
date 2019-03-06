const isString = s => typeof s === "string" || s instanceof String;
const isArray = Array.isArray;
const isObject = o => typeof o === "object" && o !== null;
const isFunction = f => typeof f === "function";

const appendChildren = function(nodeElement, children) {
  children.forEach(child => nodeElement.append(child));
};

const processAttribute = function(el, attributes) {
  Object.keys(attributes).forEach(key => {
    if (key === "style") {
      el.style.cssText = attributes[key];
    } else {
      el[key] = attributes[key];
    }
  });
};

const processArgument = function(el, argument) {
  if (isString(argument)) {
    el.className = argument;
  } else if (isArray(argument)) {
    appendChildren(el, argument);
  } else if (isObject(argument)) {
    processAttribute(el, argument);
  } else if (isFunction(argument)) {
    argument(el);
  } else {
    console.warn("Argument is unknown");
  }
};

const modify = function(el, ...args) {
  args.forEach(arg => processArgument(el, arg));
  return el;
};

const creator = tagName => (...args) =>
  modify(document.createElement(tagName), ...args);

const div = creator("div");
const span = creator("span");

window.modify = modify;
window.div = div;
window.div = div;
