import React from 'react';

function CourseCard({ id, name, description, onView, onEnroll,course,thumbnail }) {


  console.log(thumbnail)

  return (
    <div className='card'>
    <img src={thumbnail} alt="" />
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="button" onClick={() => onView(id)}>View</button>
      <button className="button" onClick={() => onEnroll(course)}>Enroll</button>
    </div>
  );
}

export default CourseCard;
