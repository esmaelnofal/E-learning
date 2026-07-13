import React from "react";
import "./featuredCourses.css";
import { Clock, BarChart2, Star, ArrowRight } from "lucide-react";

const featuredCourse = {
  badge: "Bestseller",
  image:
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
  weeks: "12 Weeks",
  level: "Advanced",
  title: "Mastering AI & Machine Learning",
  description:
    "Dive deep into neural networks, deep learning, and generative AI. Build real-world projects with Python and TensorFlow guided by industry experts.",
  instructor: "Dr. Sarah Chen",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  price: "$199",
};

const sideCourse = {
  image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  weeks: "8 Weeks",
  title: "Full-Stack Web Development",
  description:
    "From React to Node.js. Build scalable modern web applications from scratch.",
  rating: "4.9",
  price: "$149",
};

const bottomCourse = {
  badge: "New",
  image:
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
  weeks: "6 Weeks",
  title: "UI/UX Design Systems",
  description:
    "Master Figma and learn to build cohesive, accessible enterprise design systems.",
  rating: "4.8",
  price: "$129",
};

export default function FeaturedCourses() {
  return (
    <section className="featuredSection">

      <div className="featuredContainer">

        <div className="featuredHeader">

          <div>
            <h2 className="featuredTitle">Featured Courses</h2>

            <p className="featuredSubTitle">
              Hand-picked by experts to accelerate your career.
            </p>

          </div>

          <a href="/" className="viewAll">
            View All Courses
            <ArrowRight size={18}/>
          </a>

        </div>

        <div className="coursesGrid">

          <div className="leftCourses">

            <div className="featuredCard">

              <div className="featuredImage">

                <img src={featuredCourse.image} alt="" />

                <span className="badge">
                  {featuredCourse.badge}
                </span>

              </div>

              <div className="featuredContent">

                <div>

                  <div className="courseInfo">

                    <span>
                      <Clock size={15}/>
                      {featuredCourse.weeks}
                    </span>

                    <span>
                      <BarChart2 size={15}/>
                      {featuredCourse.level}
                    </span>

                  </div>

                  <h3>{featuredCourse.title}</h3>

                  <p>{featuredCourse.description}</p>

                </div>

                <div className="cardFooter">

                  <div className="teacher">

                    <img src={featuredCourse.avatar} alt="" />

                    <span>{featuredCourse.instructor}</span>

                  </div>

                  <h4>{featuredCourse.price}</h4>

                </div>

              </div>

            </div>

            <div className="smallCard">

              <div className="smallImage">

                <img src={bottomCourse.image} alt="" />

                <span className="newBadge">
                  {bottomCourse.badge}
                </span>

              </div>

              <div className="smallContent">

                <span className="weeks">
                  <Clock size={15}/>
                  {bottomCourse.weeks}
                </span>

                <h3>{bottomCourse.title}</h3>

                <p>{bottomCourse.description}</p>

                <div className="bottomInfo">

                  <span>
                    <Star fill="#fbbf24" color="#fbbf24" size={15}/>
                    {bottomCourse.rating}
                  </span>

                  <h4>{bottomCourse.price}</h4>

                </div>

              </div>

            </div>

          </div>

          <div className="rightCard">

            <img src={sideCourse.image} alt="" />

            <div className="rightContent">

              <span className="weeks">
                <Clock size={15}/>
                {sideCourse.weeks}
              </span>

              <h3>{sideCourse.title}</h3>

              <p>{sideCourse.description}</p>

              <div className="bottomInfo">

                <span>
                  <Star fill="#fbbf24" color="#fbbf24" size={15}/>
                  {sideCourse.rating}
                </span>

                <h4>{sideCourse.price}</h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}