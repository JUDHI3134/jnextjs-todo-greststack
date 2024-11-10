import React from 'react'

const Navabr = () => {
  return (
    <div className='flex py-3 justify-around flex-wrap'>
      <h1 className='text-lg font-semibold'>Todo App</h1>
      <ul className='gap-[40px] font-medium hidden sm:flex'>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navabr
