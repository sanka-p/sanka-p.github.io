import { useRef } from 'react';
import "./App.css";

import Navbar from "components/Navbar";
import Home from "pages/Home";
import Projects from "pages/Projects";
import Blog from "pages/Blog";

function App() {

  const pages = [Home, Projects, Blog];
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const refs = [homeRef, projectsRef, blogRef];

  return (
  <>
    <Navbar refs={refs}/>
    <div className="fullpage-container">
    {  
      pages.map((Page, index)=>(
      <div
        className="fullpage" 
        key={index}
        ref={refs[index]}
      >
        <Page />
      </div>
      ))
    }
    </div>
  </>
  )
}

export default App
