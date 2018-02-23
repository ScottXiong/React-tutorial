# React-tutorial
### import 
```
import React from 'react';
import ReactDom from 'react-dom';
```
### two ways to define the component
```
function Componet(){
  return <h1>I am Scott</h1>
}

class Es6Component extends React.Component{
   render(){
      return <h1>Scott, how are you?</h1>
   }
}
ReactDom.render(
  <div>
     <Component/>
     <Es6Component/>
  </div>,
  document.getElementById('app')
);
```
