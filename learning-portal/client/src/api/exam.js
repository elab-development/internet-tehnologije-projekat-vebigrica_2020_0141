const { default: axiosInstance } = require('.');

// Add Exam
export const addExam = async (payload) => {
    try {
      const response = await axiosInstance.post(
        'http://localhost:5000/api/exams/add',
        payload
      );
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  };