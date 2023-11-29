import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { enrollCourse } from '../../Redux/StudentSlice';


function CoursesList({ search, setSearch }) {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleView = (course) => {
    console.log(`View course:`, course);
    if (course) {
      navigate(`/courses/${course}`);
    } else {
      console.error('Course ID is undefined or missing.');
    }
  };

  const handleEnroll = (course) => {
    alert("Course added")
    dispatch(enrollCourse({ course }));
    console.log(course);
  };

  return (
    <div className="course-list-container">
      <h1>Course List</h1>
      <div className='courselist'>
        {courses
          .filter((item) => item.name.includes(search))
          .map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              name={course.name}
              description={course.description}
              onView={handleView}
              onEnroll={handleEnroll}
              thumbnail={course.thumbnail}
              course={course}
            />
          ))}
      </div>
    </div>
  );
}

export default CoursesList;



