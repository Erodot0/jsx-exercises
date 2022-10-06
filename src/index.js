import ReactDOM from 'react-dom/client';

function sayHello(name){
    return <h1>hello, {name}!</h1>
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(sayHello("Jaman"))