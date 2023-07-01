import React from 'react'
import ErrorImg from '../../Assets/SVG/error.svg'
import './Errors.css'
function Errors() {
  return (
    <div className='w-3/4 mx-auto  p-10 justify-center items-center'>
      <img src={ErrorImg} alt="" className='mx-auto'/>
      <div className='w-4/5 mx-auto my-10 font-mono p-10  page-error text-gray-400'>
            
      <h1 className='text-center '>Hey you! I've Stole this Page. </h1>
      <h2 className='text-end '>~ Arnim Zola</h2>
      </div>

    </div>
  )
}

export default Errors
