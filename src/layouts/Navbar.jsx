import React from 'react'
import SideBar from "../component/Sidebar"

const Navbar = () => {
  return (
    <nav>
        <div className="nav_container">
            <div className="nav_header">
                <h3>TechTime</h3>
            </div>
            <div className="nav_link">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/">Courses</a>
                    </li>
                    <li>
                        <a href="/">Testimonial</a>
                    </li>
                    <li>
                        <a href="/">Community</a>
                    </li>
                    <li>
                        <button className="nav_enroll">Enroll now</button>
                    </li>
                </ul>
                <div className='sidebar'>
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} right />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar