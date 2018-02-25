import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './index.scss';



let name = "scott";
let flag = false;
let names = ['Timmy', 'John', 'Scott', 'Ivy', 'Judy']
let jsx = <div>Good morning</div>

function Componet() {
    return <h1>I am {name}</h1>
}

class Es6Component extends React.Component {
    constructor(props) {
      super(props);
     } 
    render(){
        return <h1> Hello, I am {this.props.description}</h1>
    }
}
ReactDOM.render(
       <Es6Component description="Scott" />,
    document.getElementById('app')
);
