import React from 'react'
import './Comp_1.css';


let obj = {

    borderRadius: '20px',
    backgroundColor : 'yellow',
    textAlign :'center'
};



const Comp_1 = (props) => {

    let {id , name } = props;

  return (
    <div style = {obj} >
      
      <h1 className='dd'>Hello {id} !! Nice to meet you {name}!!</h1>

    </div>
  )
}

export default Comp_1
