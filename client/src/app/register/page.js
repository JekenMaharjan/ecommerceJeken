'use client'

import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            phoneNumber: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            registerUser(values)
        },
    });

const registerUser = async (values)=>{
    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, values)
    if(data){
        alert("Registered Successfully !!")
    }
}

  return (
    <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col border-2 w-[30%] border-black m-5 p-5 rounded-xl bg-green-400'>
      {/* firstName */}
      <label htmlFor="firstName">First Name</label>
      <input
        className='border-2 border-black rounded-xl'
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {/* lastName */}
      <label htmlFor="lastName">Last Name</label>
      <input
      className='border-2 border-black rounded-xl'
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {/* gender */}
      <label htmlFor="gender">Gender</label>
      <input
      className='border-2 border-black rounded-xl'
        id="gender"
        name="gender"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.gender}
      />
      {/* address */}
      <label htmlFor="address">Address</label>
      <input
      className='border-2 border-black rounded-xl'
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.address}
      />
      {/* phoneNumber */}
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
      className='border-2 border-black rounded-xl'
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      {/* emailAddress */}
      <label htmlFor="email">Email Address</label>
      <input
      className='border-2 border-black rounded-xl'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {/* password */}
      <label htmlFor="password">Password</label>
      <input
      className='border-2 border-black rounded-xl'
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button onClick={()=>{alert('Form Submitted!!')}} className='border-black m-5 ml-19 border-2 rounded-xl bg-blue-400 w-[50%]' type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Register