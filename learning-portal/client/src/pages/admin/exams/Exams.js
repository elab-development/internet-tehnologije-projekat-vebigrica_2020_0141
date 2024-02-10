import React from 'react';
import { useNavigate } from 'react-router-dom';

import PageTitle from '../../../components/PageTitle';

const Exams = () => {
    const navigate = useNavigate();
return(
    <div>
    <div className='flex justify-between items-center pt-2'>
      <PageTitle title='Exams' />
      <button
        className='primary-outlined-btn flex items-center pointer mr-2'
        onClick={() => navigate('/admin/exams/add')}
      >
        <i className='ri-add-line'></i>
        Add Exam
      </button>
    </div>
    </div>
);

};