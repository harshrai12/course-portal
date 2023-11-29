// studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
  name: 'student',
  initialState: {
    enrolledCourses: [],
  },
  reducers: {
    enrollCourse: (state, action) => {
      const { course } = action.payload;
      state.enrolledCourses.push(course);
    },
    markComplete: (state, action) => {
        const id = action.payload;
        const course = state.enrolledCourses.find((course) => course.id === id);
        
        if (course) {
          course.progress = 100;
        }
      },
    },
  });

export const { enrollCourse ,markComplete} = studentSlice.actions;

export const selectEnrolledCourses = (state) => state.student.enrolledCourses;

export default studentSlice.reducer;
