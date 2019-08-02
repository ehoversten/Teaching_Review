# React Redux

### Redux is NOT syntactically complicated. Instead, the complicated stuff comes from having to understand each and different parts of Redux cycle, to understand it's terminology and their different purposes.

### **What is Redux?**

-   State management library <-- Class based components
-   Makes creating complex applications easier
-   **NOT** required to create a React app!
-   **NOT** explicitly designed to work with React

### **Redux Cycle**

-   Action Creator - Function that is going to create or return a plain Js object.
-   Action - Plain Js object; has '**_type_**' and '**_payload_**' property.
-   Dispatch - Make copies of the **ACTION** and pass it off to different places in the app.
-   Reducers - Function that takes **ACTION** _**+ DATA**_
-   State - A central repository of all information created by reducers.

### **Notes**

-   **action.type** - describes some change that we might want to make on the data
-   **action.payload** - Some context around the change we want to make
-   The **_purpose_** of an _action_ is to describe some changes that we want to make to the data inside of the app.
-   The **_ONLY_** purpose of the _Action Creator_ is to **_create the action_**.
-   **_Reducer_** is a _function_ that is responsible for **_taking in an action + existing data_**, then _process that action_, then _make some changes to the data_ and _return_ the data so that it can be _centralized_ in some other location.

*   All the information gets consolidated inside the state object, so that React can easily reach into redux side and access all of the data.

### **Notes deux**

-   By convention, whenever we assign _type_, we usually use **_ALL_** uppercase and underscores instead of spaces.

-   Every Reducer we put together is always going tob e a function.
    -   Has two arguments that are always passed in exact order
        -   First args.. whatever existing data from state, which matches with reducer.
        -   second args.. the new info we want to push into the existing data.

## **_! IMPORTANT_**

### Anytime that we want to change a record or change something inside a reducer, we 100% always want to return a new array or a new object as opposed to modifying an existing one.

### Overall goal of Reducer is to take _SOME_ existing data and _SOME_ action, and then modify and return that existing data based on the content of an action.

# REDUX STORE

### Store - Single object, the assembly of a collection of different reducers and action creators. The Store represents the entire redux app. It contains references to all of the different reducers and to all of the state produced by those reducers.

### Defaults

-   dispatch - Will make a copy of the action and pass it down to different reducers.
-   getState - a function that essentially going to get the full assembled repository of data.
-   replaceReducer - replaces the reducer currently used by the store to calculate the state.
-   subscribe (listener) - will be called any time an action is dispatched (observable).

### Defaults Deux

-   combineReducers - Reducers are simple functions, all the reducers need to be wired up together

-   You can only modify the state object through the use of dispatch function and the action creators. No way to manually modify store value.

# Is Redux Magic?

-   REDUX Is NOT MAGIC.
    -   Does not auto detect action creators being called.
    -   Does not auto detect a function returning an object, that is an 'action'
-   Anytime you want to call an action creator from a component, you are always going to pass into the 'connect'
-   mapStateToProps basically asks provider to notify when state changes and provider will notify.
    -   connect will then pass down the state change into the component as a prop.

# Redux THUNK

-   What is redux?

    -   state management library

-   What is React-Redux?

    -   integration layer between react and redux

-   What is Redux-Thunk?
    -   middleware to help us make requests in a redux application.

### Middleware are essentially functions that are going to change the behavior of the redux store. Will add in new capabilities or new features.

### Thunk will basically help with network requests on the redux side.

# How to fetch data in a Redux app

### General data loading

1. Component gets rendered onto the screen <-- **MUST BE CLASS BASED**
1. Component's 'componentDidMount' life cycle method gets called
1. action creator from 'componentDidMount' gets automatically called
1. action creator runs code to make an API request <--- **Axios**
1. API responds with data...
1. action creator return an 'acton' with the fetched data on the _payload_ property **_SOLE PURPOSE OF ACTION CREATORS_**
1. Some reducer sees the 'action', returns the data off the payload
1. redux/react-redux re-renders because new object is created

# Rules of Reducers

-   Must return any value besides 'undefined'
-   produces 'state' or data to be used inside, using only previous state, and the action (Reducers are **PURE**)
-   Must not return reach 'out of itself' to decide what value to return

*   **_MUST NOT MUTATE_** it's input 'state' argument
*   If you return the same state value, wether it's mutated or not, **IF ITS THE SAME VALUE, NO UPDATE WILL BE MADE**

# Example File Structure

### Example of MERN stack.

```bash
├── client
|   ├── public
|       ├── index.html
|       ├── logo.png
|       └── manifest.json
|   ├── src
|       ├── actions
|           ├── index.js
|           └── types.js
|       ├── components
|           └── App.js
|       ├── reducers
|           ├── randomReducer.js
|           └── index.js
|       └── index.js
|   ├── .gitignore
|   ├── README.md
|   ├── package-lock.json
|   └── package.json
├── controllers
|   ├── PAC
|       └── index.js
|   └── index.js
├── models
|   ├── user
|       └── index.js
|   └── index.js
├── routes
|   ├── api
|       └── index.js
|   └── index.js
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── index.js
```
