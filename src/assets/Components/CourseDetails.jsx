// CourseDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/courses/${courseId}`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchData();
  }, [courseId]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div className="course-details"> 
      <center><h1>Course Details</h1></center>
      <p>Name: {course.name}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>

      <h2>Prerequisites:</h2>
      <ul>
        {course.prerequisites.map((prerequisite, index) => (
          <li key={index}><span>{prerequisite}</span></li>
        ))}
      </ul>

      <h2>Syllabus:</h2>
      <ul>
        {course.syllabus.map((item) => (
          <li key={item.week}>
            <span className="topic">{item.topic}</span>: <span className="content">{item.content}</span>
          </li>
        ))}
      </ul>

      <h2>Students:</h2>
      <ul>
        {course.students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span> - <span className="email">{student.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;



