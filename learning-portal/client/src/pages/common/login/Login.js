import React from 'react';
import { Form } from 'antd';

const Login = () =>{
    return (
        <div className='flex justify-center items-center h-screen w-screen bg-primary'>
          <div className='card w-400 p-3 bg-light radius-10'>
            <div className='flex flex-col'>
              <h1 className='text-2xl'>Start Learning</h1>
              <div className='divider'></div>
              <Form layout='vertical' className='mt-1' onFinish={onFinish}>
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
                  LOGIN
                </button>
              </Form>
            </div>
          </div>
        </div>
      );
};

export default Login;