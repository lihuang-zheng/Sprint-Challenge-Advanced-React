- [ ] Why would you use class component over function components (removing hooks from the question)?
Class components provide more control over the component life cycle. If you need to specify what to do in niche cases where you do not want React to update automatically, class components allow you to control what is updated and when.

- [ ] Name three lifecycle methods and their purposes.
The constructor method sets up any class properties and state properties so that a component can mount. 

The ComponentDidMount method is run the first time the component is mounted to the DOM. Any actions that must be run as soon as the component is available goes here: axios calls for retrieving data to be displayed to the data as soon as the page is rendered, methods that the user will need, and any supplementary code will go here.

The ComponentShouldUpdate method is used to determine whether a component should be re-rendered. It takes in two parameters, nextState and nextProps. These two values are used to compare with the current state of the component.

- [ ] What is the purpose of a custom hook?
A custom hook allows methods to be abstracted for re-use either within a component or among components. Form input handlers, where the logic is very similar from input to input, can rewritten as a general method that creates both individual states and state setters for the inputs.

- [ ] Why is it important to test our apps?
Testing our apps allows us to be more efficient when we write code. It is easier to write code than to debug or maintain it, and if we test our apps as we go along, it will allow us to test our apps while it is small and while changes are incremental.