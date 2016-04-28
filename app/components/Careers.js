import React, { PropTypes } from 'react'

function CareerItem ({c, desc, key}) {
  return <li>{key}</li>
}

export default function Careers ({careers}) {
  return (
    <div>
      <h1 className="text-center">Explore Careers!</h1>
      <h2 className="text-center">Choose from one of the following awesome choices</h2>
      <ul>
       { [{"c": "c0", "desc0": "this is desc", "logoURL": "www", key_: 0}, 
               {"c": "c1", "desc1": "this is desc", "logoURL": "www", key_: 1}, 
               {"c": "c2", "desc2": "this is desc", "logoURL": "www", key_: 2}].map((career, index) => {return <li key={career.key_}>{career.c}</li> /* <CareerItem c={career.c} desc={career.desc} key={career.key_} /> */ })
       }
     
      </ul>
    </div>
  )
}
