import React, { useState } from "react";
import Card from "./Card";


const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    //we have our data in key value pair and we need it in a single array to apply map function here so 
    //from key value pair to single array conversion is below
    function getCourses() {
        if(category === "All"){
            //pass all categories data
        let allCourses = []; //empty array to store data in a single array
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    else{
        //pass specific category data
        return courses[category];
    }
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {
            getCourses().map( (course) => (
                <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            ))
          }
        </div>
    )
}
export default Cards;