import { useState } from "react";
import {  MenuBook, Schedule, Star } from "../assets";
import { courses } from "../component/Data";

const Courses = () => {
  const [updatedData, setUpdatedData] = useState(courses);
  const [currentTrack, setCurrentTrack] = useState("All Categories")
  const courseType = ["All Categories", "Design", "Development", "Marketing"];
  const handleCourseFilter = (track) => {
    setCurrentTrack(track)
    const newData = courses.filter((data) => {
      if (data.track == track) {
        return data;
      } else if (track == "All Categories") {
        return courses;
      }
    });
    setUpdatedData(newData);
  };
  return (
    <section className="courses">
      <div className="courses_container">
        <h3 className="courses_header">browse our popular courses</h3>
        <p className="courses_para">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      <div className="courses_filter">
        {courseType.map((course, index) => (
          <span className={`course-type ${currentTrack == course && "activeTrack"}`} key={index}>
            <p onClick={() => handleCourseFilter(course)}>{course}</p>
          </span>
        ))}
      </div>
      <div className="all-courses">
        {updatedData &&
          updatedData.map((course) => (
            <div className="course_container" key={course.id}>
              <img src={course.courseImg} alt="course-img1" className="course-img" />
              <div className="second-layer">
                <span className="course_track">
                  <p>{course.track}</p>
                </span>
                <div className="reviews">
                  <span className="ratings">
                    <p>4.7k</p>
                    <img src={Star} alt="star" />
                  </span>
                  <p>({course.likes})</p>
                </div>
              </div>
              <p className="course_title">{course.title}</p>
              <div className="duration_lesson">
                <span className="duration">
                  <img src={Schedule} alt="schedule" />
                  <p>{course.duration}</p>
                </span>
                <span className="lessons">
                  <img src={MenuBook} alt="book" />
                  <p>{course.lesson}</p>
                </span>
              </div>
              <div className="author_price">
                <div className="author">
                  <img src={course.authorImg} alt="authorImg" />
                  <p>{course.author}</p>
                </div>
                <p className="price">${course.price}.00</p>
              </div>
            </div>
          ))}
      </div>
      <button className="courses_btn">explore all courses</button>
      </div>
    </section>
  );
};

export default Courses;
