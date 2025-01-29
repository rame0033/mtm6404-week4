// for components, function name must start with a capital letter

function Welcome (props) {
    return <h1>Hello, {props.name}.</h1>
    }
    const root = ReactDOM.createRoot(
    document.getElementById('root'))
    root.render(<Welcome name="Tom" />)
    