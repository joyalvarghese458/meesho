import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className='mt-5'>
           <div style={{ height: '100vh' }} className='d-flex align-items-center flex-column justify-content-center'>
                 <img height={'300px'} src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="" />
                 <h4 className='mt-3'>Your Cart List Is Empty</h4>
                 <Link to={'/'}>Back To Home</Link>
               </div>
               
    </div>
  )
}

export default Cart