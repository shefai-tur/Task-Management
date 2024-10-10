import React from 'react'
import Sidbar from '../Components/Home/sidbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='flex h-[98vh] gap-4 ' >
        <div className=" border-gray-500 w-1/6 p-4 border rounded-xl flex flex-col justify-between"> 
        <Sidbar/>
        </div>
        <div className=" overflow-y-auto  no-scrollbar border-gray-500 w-5/6 p-4 border rounded-xl">
        <Outlet/>
        </div>
      </div>
      
    </>
  
  )
}

export default Home