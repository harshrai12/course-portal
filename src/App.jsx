import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';

import CoursesList from './assets/Components/Courseslist';
import CourseDetails from './assets/Components/CourseDetails';
import Navbar from './assets/Components/Navbar';
import Dashboard from './assets/Components/Dashboard';

function App() {
  const [search,setSearch]= useState("");
  return (
    <Router>
      <div>
        <nav>
          <Navbar search={search} setSearch={setSearch}/>
        </nav>
        <Routes>
          <Route path="/" exact element={<CoursesList search={search}/>} />
          <Route path="/mydashboard" exact element={<Dashboard/>} />
          <Route path="/courses/:courseId" element={<CourseDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


