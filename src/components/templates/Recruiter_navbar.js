import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


export default class Recruiter_navbar extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>                
                <nav className="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <div className="collapse navbar-collapse">
                    <h3 className="navbar">HoneyBee</h3> </div> 
                        <ul className="navbar-nav mr-auto">
                         
                            <li className="navbar-item">
                                <Link to="/profileedit_recruiter" className="nav-link">Profile</Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/addjob" className="nav-link">Add job</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/job-listings" className="nav-link">Job listings</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/my-employees" className="nav-link">My Employees</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/login" className="nav-link" onClick={() => {localStorage.clear();
                                window.location.href="/login";}}>Logout</Link>
                            </li>

                        </ul>
                   </div> 
                </nav>
            </div>
        )
    }
}