import ReactDOM from 'react-dom/client';

function mySum(a,b){
    return <h2>{a + b}</h2>
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(mySum(2,5))