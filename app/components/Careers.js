import React, { PropTypes } from 'react'

// function CareerItem ({c, desc, key}) {
//   return <li key={career.key_}>{career.c} -- {career.desc}</li>
// }
// try to refactor to utilize CareerItem: 
//{careers.map((career) => <CareerItem c={career.c} desc={career.desc} key={career.key} />)}}

export default function Careers ({careers}) {
  return (
    <div>
      <h1 className="text-center">Explore!</h1>
      <h2 className="text-center">Choose from one of the following awesome choices</h2>
      <ul>
       { careers.map((career) => {
          return <li key={career.key_}>{career.c} -- {career.desc}</li>
        })
       }
      </ul>
    </div>
  )
}
