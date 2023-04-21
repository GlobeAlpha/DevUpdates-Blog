// import logo from './logo.svg';
import React from 'react';
import './index.css';
import PostList from './components/PostList.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectIntro from './components/Project_Intro.js';
import FirstSprint from "./components/Sprint_Docs/Sprint_Planning_Session_1.js";
 import SecondSprint from "./components/Sprint_Docs/Sprint_Planning_Session_2.js";
// import ThirdSprint from "./components/Sprint_Docs/Sprint_Planning_Session_3.js";
// import FourthSprint from "./components/Sprint_Docs/Sprint_Planning_Session_4.js";
 import Retro_1 from "./components/Sprint_Docs/Retro_1 .js";
// import Retro_2 from "./components/Sprint_Docs/Retro_2.js";


function App() {
  return (
    <div className="App">
  
      <Router>
         <Routes >
      
      {/*Display Posts */}
     <Route path="/" element ={<PostList />} />
               <Route path="/Project_Intro" element ={<ProjectIntro />} />
          
               <Route path="/First_Sprint" element={<FirstSprint />} /> 
             <Route path="/Second_Sprint" element={<SecondSprint />} />
          {/* <Route path="/First_Retro" element={<Retro_1 />} /> */}
          
          {/* <Route path="/Third_Sprint" element ={<ThirdSprint />} /> */}
          {/* <Route path="//Fourth_Sprint" element={<FourthSprint />} /> */}
          {/* <Route path="/Second_Retro" element ={<Retro_2 />} /> */}
          
        </Routes >
      </Router>


    </div>
  );
}

export default App;
