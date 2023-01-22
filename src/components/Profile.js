import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';
import "./Profile.css";


export default function Profile(){
    return(
      <Router>
        <div id="container">

<header>
    <div className="quoteoftheday">Profile</div>
    <div className="name">Wali Muhammad.</div>
</header>

<article>

    <div className="quote">
        <h1>A Coders Life: Problematic but Charismatic.</h1>
    </div>

    <div className="quoteby">
        <h4>Wali Muhammad</h4>
    </div>

</article>

<footer>

    <div className="skills">
        <h6>Menu</h6>
        <ul>
            <li><Link to='/'>Education</Link></li>
            <li><Link to='/professional'>Professional Experience</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </div>

   <Routes>
    <Route exact path="/" element={<Pageone/>}></Route>
    <Route exact path="/professional" element={<Pagetwo/>}>
    </Route>
    <Route exact path="/contact" element={<Pagethree/>}>
    </Route>
   </Routes>

</footer>
</div>
      </Router>
    )
}