import React from 'react'

function Roadmap({val, index, setcontent}) {
    
  return (
    <>
    <div className='classes'>
    <button onClick={()=>setcontent(`${val.topic}`)} className='btn'>{index+1}</button>
    </div>
    </>
  )
}

export default Roadmap