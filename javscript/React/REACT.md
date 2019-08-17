# React Notes

## What is `React` and what is it's purpose?

-   React is a JavaScript library
-   React's ultimate purpose is to show content (HTML) to users and handle user interaction.

## What is `Class`?

-   It is a Javascript Class
-   `Class` is creating a React Component - a basic piece of React
-   The ultimate goal of a single component is essentially the goal of the React library itself.
-   Components will be used to create some amount of HTML and then have that display on user screen and somehow **`RE-ACT`** to user input ;)
-   React components are made using either Javascript functions or classes

## What is `JSX`

-   It looks like HTML and can be placed in Javascript code
-   Determines the content of a React app just like HTML

## What is an `event handler`?

-   Purpose is to detect user or any interaction and respond to it

## `React` vs.. `React-DOM..?`

-   `React` knows what a component is and how to make components work together
-   `React-DOM` knows how to take a component and make it show upon the DOM.

## Use double quotes on JSX, while single quotes on non-JSX

## `import` vs `require`

-   `import` - ES2015 module
-   `require` - commonJS module

## What is a component?

-   A component is a function or a class that produces HTML written in JSX to show the user and handles feedback from the user by using event handlers.

## `JSX`

-   Special dialect of Javascript (IT IS NOT HTML)
-   Browsers don't understand JSX code. We write it in JSX then run tools to turn them into normal Javascript
-   Very similar in _form_ and _function_ to HTML with a couple differences

## `JSX` vs `HTML`

-   Adding custom styling to an element uses different syntax
-   Adding a class to an element uses different syntax
-   JSX can reference Javascript variables

Example:

```html
HTML:
<div style="background-color:red">content</div>

JSX: <div style={{backgroundColor="red"}}
```

## Should I use `class` vs `className`?

-   Use `className` to avoid collisions with defining a new Javascript class

## The 3 Tenets of Components

1. **Component Nesting** : A component can be shown _inside_ of another.
1. **Component Re-usability** : We want to make components that can be easily re-used through out the app.
1. **Component Configuration** : We should be able to configure a component when it is created.

## Creating a Re-usable, configurable component

1. identify the JSX that appears to be duplicated
1. What is the purpose of that block of JSX? think of a descriptive name for what it does
1. Create a new file to house this new component. It should have the same name as the component
1. Create a new component in the new file, paste the JSX into it
1. Make the new component configurable by using React's `props` system
1. ???
1. profit
   (teehee)

## What is Component Hierarchy?

-   how different components are displayed in the app and the relations between the components.

## `Props`

-   Props = Property
-   A system for passing data from a **_PARENT_** component to a **CHILD** component
    -   You cannot pass data from a Child to a Parent by props, however you can use callback functions to achieve the same results.
-   **Goal is to customize or configure a child component**

## Benefits of a `class` component

-   Easier code organization
-   Can use `state`
    -   Easier to handle user input
-   Understands lifecycle events

## Rules of class components

1. Must be a Javascript class
1. Must **extend** (subclass) `React.Component`
1. Must define a `render` method that returns some amount of JSX.

## FYI: Javascript inheritance works on prototype-inheritance

## Rules of `state`

1. Only usable with class components
1. `state` is a Javascript object that contains data relevant to a component
1. Updating `state` on a component causes the component to (almost) instantly re-render
1. state must be initialized when a component is created
1. Don't confuse `props` with `state`
1. state can **only** be updated using the function `setState`

## Component Lifecycle

1. [`constructor`]

1. [`render`]

1. _content visible on screen_

1. [`componentDidMount`] //automatically gets called one-time, after finished rendering

1. _sits and wait for updates.._

1. [`componentDidUpdate`]

1. _sit and wait until this component is no longer shown_

1. [`componentWillUnmount`]

### component lifecycle is a chain; end of each cycle, next link is automatically called.

### Before `componentDidUpdate` is run, `render` gets run. Notice the past tense 'DidUpdate', it only runs if the DOM is rendered.

### Same for `componentDidMount`, it only runs once content is visible on the screen.

### Breakdown of the component lifecycle:

**_Note_**: **There are more lifecycle methods, but these are the most common**

-   `constructor` - Good place to do one-time setup
-   `render` - Avoid doing anything besides returning JSX
-   `componentDidMount` - Good place to do data loading
-   `componentDidUpdate` - Good place to do more data loading when the state/props change
-   `componentWillUnmount` - Good place to do cleanup (specially for non-react stuff)

**rarely used lifecycle methods**

-   [`shouldComponentUpdate`]
-   [`getDerivedStateFromProps`]
-   [`getSnapshotBeforeUpdate`]

## Controlled component

1. User types in input
1. Callback gets invoked
1. We call `setState` with the new value
1. Component re-renders
1. Input is told what it's value (coming from state)

### Here is an example you might've seen before:

```jsx
handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};
```
