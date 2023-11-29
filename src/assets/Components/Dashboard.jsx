import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markComplete } from '../../Redux/StudentSlice';

function Dashboard() {
    const enrolledCourses = useSelector((state) => state.student.enrolledCourses);
    const dispatch = useDispatch(); // Move the useDispatch hook declaration here

    const markCompleted = (courseId) => {
      // Implement logic to update the course status in your Redux store
      console.log(`Mark course ${courseId} as completed`);
      dispatch(markComplete(courseId)); // Dispatch the action creator with the payload
    };

    return (
      <div className='Dashboard'>
        <h2>Dashboard</h2>
        <p>Enrolled Courses:</p>
        <ul>
          {enrolledCourses.map((course) => (
            <li key={course.id}>
              <div>
                <img src={course.thumbnail} alt={course.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              </div>
              <div>
                <h3>{course.name}</h3>
                <p>Instructor: {course.instructor}</p>
                <p>Due Date: {course.dueDate}</p>
                <p>Progress: {course.progress}%</p>
                <progress value={course.progress} max="100"></progress>
                <button onClick={() => markCompleted(course.id)}>Mark as Completed</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Dashboard;

