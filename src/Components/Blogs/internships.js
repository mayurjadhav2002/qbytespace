import React from 'react'
import './internship.css'
import { Link } from 'react-router-dom'

function internships() {
  const data=[    {
        "id":1,

    },
    
    {
        "id":2,
   
    },
    
    {
        "id":3,
 
    },
    
    {
        "id":4,
    
    },
    
    {
        "id":5,
   
    },
    
    {
        "id":6,

    },
    {
        "id":7,
 
    },
    
    {
        "id":8,
     
    },
    
    {
        "id":9,
       
    }
  ]
  return (
    <div>
      <div className="grid grid-cols-5 gap-3 py-4 w-4/5 justify-center mx-auto">
        {
          // Column 1 Blogs
        }
        <div className="col-span-3 p-5 ">

        {data.map((data, index) => (
          <div className='w-cover p-5 rounded-xl internship-blog m-2 ' key={index}>

          <div className='flex justify-between'>
            <div className="flex items-center space-x-1">
              <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
              <div className="font-medium dark:text-white">
                <div><strong>Jese Leos</strong> | <span className='text-xs text-gray-600'>10 days ago</span></div>
              </div>
            </div>
           
          </div>
          <div className='grid grid-cols-6 gap-3 '>
            <div className='col-span-5 '>
              <h4 className='headline-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quidem molestias commodi, </h4>
              <div className='h-8 p overflow-clip text-ellipsis'>
                <p className='text-[14px] leading-4  line-clamp-3 text-gray-700 mt-[-4px] text-ellipsis'>

                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, aliquam. Aliquam dicta voluptates illum voluptas quia reprehenderit doloribus et amet sed corrupti quas rerum minima, voluptatum fugit vero accusantium assumenda?
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis libero aliquam, delectus amet fugiat atque, odit, earum architecto iusto dolore veniam provident sed! Nemo molestias odio magnam nobis? Eos, ullam!</p>
              </div>
            </div>
            <div className=' col-span-1 w-full' >
              <img src="https://eternitymarketing.com/assets/image-cache/blog/hello.ca1de651.jpg"
                className="object-cover" alt="" />
            </div>
            <div className='flex justify-start'>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-3 py-1 rounded-full dark:bg-blue-700 dark:text-blue-300">
                Machine Learning
              </span>
        
            </div>
          </div>
        </div>





    
        ))}










      
        </div>

        {
          // recommended articles
        }
        <div className=" col-span-2 border-l-2 align-center justify-center ">
        <div className='h-24 mx-auto bg-slate-50 w-11/12 my-2'>
        </div>


        <div className='h-auto mx-auto bg-slate-50 w-11/12 rounded-lg'>
        <h3 className='px-5 py-2'>Recommended for you: </h3>

        <div className='-mt-5'>
        <div className='px-5 py-1 '>
        
        <div className="font-medium mt-2 dark:text-white text-xs text-gray-600">
          <div><strong>Jese Leos</strong> | <span className=''>10 days ago</span></div>

        </div>
     

      <h5 className='headline-text-1 text-gray-950  leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quidem molestias commodi, </h5>


        </div>

<hr/>

        <div className='px-5 py-1 '>
        <div className="font-medium mt-2 dark:text-white text-xs text-gray-600">
          <div><strong>Jese Leos</strong> | <span className=''>10 days ago</span></div>

        </div>
     

      <h5 className='headline-text-1 text-gray-950  leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quidem molestias commodi, </h5>


        </div>

        <hr/>

        <div className='px-5 py-1 '>
        <div className="font-medium mt-2 dark:text-white text-xs text-gray-600">
          <div><strong>Jese Leos</strong> | <span className=''>10 days ago</span></div>

        </div>
     

      <h5 className='headline-text-1 text-gray-950  leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quidem molestias commodi, </h5>


        </div>
        </div>

        </div>
        </div>
      </div>

    </div>
  )
}

export default internships
