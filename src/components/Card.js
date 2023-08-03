import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if(likedCourses.includes(course.id)){
            //pehle se like h
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Liked removed");
        }
        else{
            //pehle se like nhi h
            //insert this course into liked array
            if(likedCourses.length === 0){
                //empty array
                setLikedCourses([course.id]);
            }
            else{
                //non empty array
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked added");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden">
            <div className="relative ">
                <img src={course.image.url} alt="Img"></img>         
                <div className="rounded-full absolute w-[40px] h-[40px]  bg-white right-2 -bottom-2 grid place-items-center">
                        <button onClick={clickHandler}>
                           {//if liked then show like else show unlike
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                           }
                        </button> 
                </div>
            </div>
               
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                {
                    course.description.length > 100 ? 
                    (course.description.substr(0,100)) + "..." :
                    (course.description)
                }
                </p>
            </div>
        </div>
    )
}

export default Card;