import React from 'react'

function Signup() {
    return (
        <>
            <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center bg-primary vh-100'></div>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>

                <form>
                    <div className='mb-3'>
                        <lable htmlFor="name"><strong>Name</strong></lable>
                        <input type='text' placeholder='Enter Name' name='name'
                            className='form-control rounded-0' />
                    </div>

                    <div className='mb-3'>
                        <lable htmlFor="name"><strong>Email</strong></lable>
                        <input type='email' placeholder='Enter email' name='email'
                            className='form-control rounded-0' />
                    </div>

                    <div className='mb-3'>
                        <lable htmlFor="name"><strong>Address</strong></lable>
                        <input type='text' placeholder='Enter Address' name='address'
                            className='form-control rounded-0' />
                    </div>

                    <div className='mb-3'>
                        <lable htmlFor="name"><strong>Phone</strong></lable>
                        <input type='number' placeholder='Enter phone' name='phone'
                            className='form-control rounded-0' />
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0'>submit</button>


                </form>
            </div>
        </>
    )
}

export default Signup