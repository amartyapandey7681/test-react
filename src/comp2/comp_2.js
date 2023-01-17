import React from 'react'


let time = [{

    h : 1,
    m : 20
},
{
    h:5,
    m:30
}]


let t = time.map((g)=>{

    return<h1> {g.h} : {g.m} </h1>;

})

function Timen (time1){


    return (<>{time1.t.map((t1)=>{

        return <Comp3 time = {t1} /> 
    })}</>)
}


function Comp3 (prop){

    

    return<h1>{prop.time.h} : {prop.time.m}</h1>;
}

function Timer(props){


    return (<>{props.ti.map((o)=>{
        return <h1>{o.h} : {o.m}</h1>
    })}</>)
}

const Comp2 = (prop) => {



    let { ti } = prop;


    if(ti === undefined)
        return <></>;

  return (
    <div>
      {t}
      <Timen t = {time}/>
      <Timer ti = {ti} />
    </div>
  )
}


export default Comp2
