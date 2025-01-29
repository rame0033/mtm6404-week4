const root = ReactDOM.createRoot(document.getElementById('root'));

const user = {
    firstName: 'John',
    lastName: 'Doe'
}

const name = "Tom"


const formatName = user => `${user.firstName} ${user.lastName}`;


root.render(
    <h1 className ="heading"> 
    Hello, {formatName(user)}!
    </h1>
    );
