import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './comp1/comp_1';
import Comp2 from './comp2/comp_2';

import './index.css'



let names1 = {

  id:1,
  name:"john"
}

let names2 = {

  id :2,
  name:"doe"
}

let time = [{

  h:3,
  m:8
},{
  h:5,
  m:10
}]

function Greeting(){


  return (<div className='bb' >
          <h1>Props In Action --</h1>
          <Comp id= {names1.id} name = {names1.name}/>
          <Comp id= {names2.id} name = {names2.name}/>
          <Comp />
          <Comp2 /> 
          <Comp2 ti = {time}/>        
          </div>);
}

ReactDOM.render(<Greeting />,document.getElementById('root'));

