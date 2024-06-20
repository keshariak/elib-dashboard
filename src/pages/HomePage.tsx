import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
const homepage = () => {
  return (
    <div className='p-4'>
        <h1 className='text-xl font-bold'>Home Page </h1>
       <Button variant={"link"} >  <Link to={"/login"} >login page</Link></Button>
       
    </div>
  )
}

export default homepage