import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getUserInfo } from '../api/users';
import { setUser } from '../redux/usersSlice';

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const getUserData = async () => {
        try {
          dispatch(showLoading());
          const response = await getUserInfo();
          dispatch(hideLoading());
          if (response.success) {
            dispatch(setUser(response.data));
            if (response.data.isAdmin) {
              setMenu(adminMenu);
            } else {
              setMenu(userMenu);
            }
          } else {
            message.error(response.message);
          }
        } catch (err) {
          navigate('/login');
          dispatch(hideLoading());
          message.error(err.message);
        }
      };

      useEffect(() => {
        if (localStorage.getItem('token')) {
          getUserData();
        } else {
          navigate('/login');
        }
    }, []);
}

export default ProtectedRoute;