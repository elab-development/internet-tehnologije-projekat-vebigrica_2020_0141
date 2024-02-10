import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';

const Register = () =>{
    const onFinish=(values) =>{
        console.log(values);
}
};

return (
    <div className='flex justify-center items-center h-screen w-screen bg-primary'>
      <div className='card w-420 p-3 bg-light radius-10'>
        <div className='flex flex-col'>
          <h1 className='text-2xl'>Begin your Learning Journey</h1>
          <div className='divider'></div>
          <Form layout='vertical' className='mt-1' onFinish={onFinish}>
            <Form.Item name='name' label='Name'>
              <input type='text' />
            </Form.Item>
            <Form.Item name='email' label='Email'>
              <input type='text' />
            </Form.Item>
            <Form.Item name='password' label='Password'>
              <input type='password' />
            </Form.Item>
            <button
              type='submit'
              className='primary-contained-btn mt-2 w-100 pointer'
            >
              REGISTER
            </button>
            <div className='mt-2 mb-m15 text-center text-color-primary'>
              <Link to='/login' className='text-color-primary'>
                Already have an account? Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );

export default Register;