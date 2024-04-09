import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


export default class NavBar extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            
    <nav className="navbar navbar-expand-lg navbar-light bg-absolte">
        <div class="container">
            <h3 className="navbar">HoneyBee</h3> </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Home</Link>
                            
                            </li>
                            <li className="navbar-item">
                                <Link to="/search_job" className="nav-link">Jobs</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>

                        </ul>
        </div>
        
    </nav>
        
    </>
            
        )
    }
}