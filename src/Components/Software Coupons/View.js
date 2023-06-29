import React from 'react'
import { useParams } from 'react-router-dom'

function View(props) {
    const {id, slug} = useParams();

  return (
    <div className='container px-10 mx-auto bg-slate-50 text-center justify-center'>
    {id}
    <div className='flex flex-row justify-center'>

<div className="flex items-center space-x-4 text-start">
<img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
<div className="font-medium dark:text-white">
    <div>Jese Leos</div>
    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
</div>
</div>

    </div>
    <h1 className='text-4xl text-wrap break-words text-justify'> {slug} hellow</h1>
       
      
    </div>
  )
}

export default View
