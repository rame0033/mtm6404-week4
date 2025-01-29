const root = ReactDOM.createRoot(document.getElementById('root'));

const user = {
    firstName: 'John',
    lastName: 'Doe'
}

const name = "Tom"


const formatName = user => {
    return `${user.firstName} ${user.lastName}`
}

root.render(
    <h1 className ="heading"> 
    Hello, {name}
    </h1>
    );
