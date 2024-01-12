import React, { useState, useEffect } from 'react';
import PeraSwarmLogo from "assets/pera-swarm.png";
import Academetrix from "assets/academetrix.png";
import AiesecLogo from "assets/aiesec.png";

const projects = [
  {
    id: 1,
    title: 'Academetrix',
    description: 'A student result management system',
    image: Academetrix,
    link: 'https://github.com/cepdnaclk/e19-co225-student-results-management-system-webapp',
  },
  {
    id: 2,
    title: 'AIESEC Local Committee Management Systems',
    description: 'Local management system for AIESEC in Kandy',
    image: AiesecLogo,
    link: 'https://github.com/cepdnaclk/e19-co227-aiesec-local-committee-manangement-system',
  },
  {
    id: 3,
    title: 'Pera Swarm Modular Robots',
    description: 'A modular solution to swarm robotics',
    image: PeraSwarmLogo,
    link: 'https://github.com/cepdnaclk/e19-3yp-Pera-Swarm-Modular-Robots',
  },
];

/*
const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current project index, and loop back to the first project when reaching the end
      setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
    }, 5000); // Change the duration (in milliseconds) between slides as needed

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto relative overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute w-full h-full project-card transition-transform transform ${index === currentProject ? 'translate-x-0' : 'translate-x-full'}`}
            >
              <div className="flex">
                <div className="w-1/2">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                </div>
              </div>
              <div className="w-1/2 p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
                  <a href={project.link} className="text-blue-500 hover:underline">GitHub Repository</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
*/

const Projects = () => {
return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="p-6 rounded-lg shadow-md border-2 border-accent">
              <img src={project.image} alt={project.title} className="w-full h-64 object-contain rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold text-secondary mb-2">{project.title}</h2>
              <p className="text-secondary">{project.description}</p>
              <a href={project.link} className="text-accent hover:underline">
                GitHub Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
