React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
It lets you compose complex UIs from small and isolated pieces of code called “components”.
returns a hierarchy of views to display via the render method.The render method returns a description of what you want to see on the screen.
Elements are the smallest building blocks of React apps[reusable component].
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
Function never modify its own props. Consider this sum function:Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.
State is similar to props, but it is private and fully controlled by the component.
We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React

