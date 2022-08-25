import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import './card.css'
import Card from "./components/Card"

function App() {

  const [courses, updateCourses] = useState([])

  const api_Url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories"

  function getCouersesApi (){
    return new Promise ((resolve,reject)=> {
    fetch (api_Url)
    .then ((Response) => Response.json())
    .then ((data) => {
      resolve(data.communityCategories)
    })
    })
  }
  async function getCourses(){
    const courses = await getCouersesApi ();
    console.log(courses);
    updateCourses (courses);
  }

  useEffect(()=>{
    console.log("acceder a una api")
    getCourses();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        {
          courses.map (course => {
            return <Card 
            name={course.name}
            icon={course.icon}
            background={course.background}
            totalQuizzes={course.totalQuizzes}
            users={course.users}
            id={course.id}
            level={course.level}
            companyCode= {course.companyCode}
            bootcamp= {course.bootcamp}
            />
          })
        }
      </header>
    </div>
  );
}

export default App;
