import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Navbar({search,setSearch}) {
  const enrolledCourses = useSelector((state) => state.student.enrolledCourses);
  return (
    <div>
      <nav >
        <ul>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mydashboard">My Dashboard {enrolledCourses.length}</Link>
          </li>
         <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

