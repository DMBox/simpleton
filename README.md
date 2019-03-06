# Intro

This is an experiment that is still in progress.

# Goals:

- Simple usage
- No HTML markup/JSX inside JS code
- Compatible with native dom API

# API

## tagFunction

e.g.: `div(<arg>)`
args:

- String : used as a style class name
- Array : append the element from the array as children. Can have text (textnode), nodeelement (created with or without a tagFunction)
  To do: accept arrays inside arrays
- Object : HTML Attributes (or nodeelement properties)
- Function: custom update. Given the element, so that you can process it. e.g.:
  `el=>{//..dosomething with the element }`

## modify

`modify(<arg>, nodeelement)`
args: same args than for tagFunction. Performs the node improvments in a compact way

## Counter

```
const build = function ({counter}) {
    return div("fcol", {style: "background:red;"}, [
        div([counter])
        button({onclick: ()=>app.update("Inc") })
    ]);
};
```
