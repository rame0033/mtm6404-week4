const root = ReactDOM.createRoot(document.getElementById('root'))


const heading = React.createElement('h2',
{className:'heading'}, 'Hello, World 2')

// render the element
root.render(heading)