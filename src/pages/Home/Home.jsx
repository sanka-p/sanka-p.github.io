import { useRef } from 'react';
import Profile from "assets/profile.jpeg"
import GithubIcon from "assets/github.png"
import LinkedInIcon from "assets/linkedin.png"
import useOnScreen from "hooks/useOnScreen"

function Home(){
  const pageRef = useRef();
  const isPageOnScreen = useOnScreen(pageRef);

  return(
    <div ref={pageRef} className="min-h-screen flex items-center justify-center">
      <div className={`container mx-auto flex items-center transition-opacity duration-200
        ${isPageOnScreen ? "opacity-100" : "opacity-0"}`}>
        {/* Left Section - Image */}
        <div className="w-1/4">
          <img
            src={Profile}
            alt="Your Name"
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Right Section - Greeting, Description, Social Links */}
        <div className="w-3/4 ml-8">
          <h1 className="text-4xl font-bold text-secondary">Hi, I'm Sanka</h1>
          <p className="text-lg text-accent mt-2">I'm currently a Third Year Computer Engineering Undergraduate at the University of Peradeniya</p>
          {/* Social Links */}
          <div className="flex mt-4">
            <a href="www.linkedin.com/in/sanka-peeris" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className="h-8 w-8 mr-4 hover:opacity-80" />
            </a>
            <a href="https://github.com/sanka-p" target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} alt="GitHub" className="h-8 w-8 hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
