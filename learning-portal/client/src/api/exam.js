const { default: axiosInstance } = require('.');

// Get Exams
export const getAllExams = async (payload) => {
  try {
    const response = await axiosInstance.post(
      'http://localhost:5000/api/exams/get-all-exams',
      payload
    );
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

// Get Exam
export const getExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      'http://localhost:5000/api/exams/get-exam-by-id',
      payload
    );
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
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