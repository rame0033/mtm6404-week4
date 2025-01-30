// for components, function name must start with a capital letter
const root = ReactDOM.createRoot(document.getElementById('root'));

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

// const formatName = user => `${user.firstName} ${user.lastName}`;

// // function Welcome(props) {
// //     return <h1>Hello, {formatName(props.user)}</h1>;
// // }

// // root.render(<Welcome user={user} />);

// // conditionals
// function Welcome(props) {
//     //Null checking
//     const name = props.name?? "Friend";
//     // This checks for props.name, if it exists, it will use its value, if not, the value after "??" is used.

//       // Determine the greeting string based on the 'caps' prop
//     const returnString = props.caps ?
//         `Hello ${name}`.toUpperCase() // If 'caps' is true, convert the greeting to uppercase
//         : `Hello ${name}`; // If 'caps' is false, use the normal case greeting

//     // if (props.caps) {
//     //     return <h1>Hello, {formatName(props.user)}</h1>;
//     // }
//     // return <h1>Hello, Stranger</h1>;

//       if (props.caps) {
//         // If 'caps' is true, render the greeting in uppercase
//         return <h1>{"Hello Friend".toUpperCase()}</h1>;
//     }
//     // If 'caps' is false, render the greeting in normal case
//     return <h1>{"Hello " + returnString}</h1>;
// }

// root.render(<Welcome caps={true} name="Tom"/>);
    
//List rendering
// Define an array of names
// const names = ['Tom', 'Jerry', 'Spike'];

// // Define a Welcome component that takes props
// function Welcome(props) {
//     // Extract the names array from props
//     const names = props.names;

//     //

//     // Check if the names array has any elements
//     if (names.length) {
//         // If there are names, map over the array and return an <h1> element for each name
//         return (
//             <>
//                 {
//                     names.map((name) => {
//                         // Use the name as the key for each <h1> element
//                         return <h1 key={name}>Hello, {name}</h1>;
//                     })
//                 }
//             </>
//         );
//     }
//     // If the names array is empty, return a default message
//     return <h1>Hello, Stranger.</h1>;
// }

// // Render the Welcome component and pass the names array as a prop
// root.render(<Welcome names={names} />);

function Welcome(props) {
    const names = props.names;
    // Map over the names array to create an array of objects with id and name properties
    const obj = names.map((name, id) => ({ id, name }));

    // Check if the obj array has any elements
    if (obj.length) {
        // If there are elements, map over the obj array and return an <h1> element for each person
        return obj.map(person => (
            <h1 key={person.id}>Hello, {person.name}.</h1>
        ));
    }

    // If the obj array is empty, return a default message
    return <h1>Hello, Friend.</h1>;
}

// Define an array of names
const names = ['Tom', 'Dick', 'Harry'];

// Render the Welcome component and pass the names array as a prop
root.render(<Welcome names={names} />);

/*
Explanation:
1. **Welcome Component**: The `Welcome` component takes `props` as an argument.
2. **Extract Names**: The `names` array is extracted from `props`.
3. **Map to Objects**: The `names` array is mapped to an array of objects, each with an `id` (index) and `name`.
4. **Conditional Rendering**: If the `obj` array has elements, it maps over the array and returns an `<h1>` element for each person. Each `<h1>` element has a unique `key` prop.
5. **Default Message**: If the `obj` array is empty, it returns a default message "Hello, Friend."
6. **Render Component**: The `Welcome` component is rendered with the `names` array passed as a prop.
*/