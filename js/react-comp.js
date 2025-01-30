// for components, function name must start with a capital letter
const root = ReactDOM.createRoot(document.getElementById('root'));

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

const formatName = user => `${user.firstName} ${user.lastName}`;

// function Welcome(props) {
//     return <h1>Hello, {formatName(props.user)}</h1>;
// }

// root.render(<Welcome user={user} />);

// conditionals
function Welcome(props) {
    //Null checking
    const name = props.name?? "Friend";
    // This checks for props.name, if it exists, it will use its value, if not, the value after "??" is used.

      // Determine the greeting string based on the 'caps' prop
    const returnString = props.caps ?
        `Hello ${name}`.toUpperCase() // If 'caps' is true, convert the greeting to uppercase
        : `Hello ${name}`; // If 'caps' is false, use the normal case greeting

    // if (props.caps) {
    //     return <h1>Hello, {formatName(props.user)}</h1>;
    // }
    // return <h1>Hello, Stranger</h1>;

      if (props.caps) {
        // If 'caps' is true, render the greeting in uppercase
        return <h1>{"Hello Friend".toUpperCase()}</h1>;
    }
    // If 'caps' is false, render the greeting in normal case
    return <h1>{"Hello " + returnString}</h1>;
}

root.render(<Welcome caps={true} name="Tom"/>);
    