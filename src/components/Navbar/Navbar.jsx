import { useEffect } from "react"
import "./Navbar.css";
import useOnScreen from "hooks/useOnScreen";

function Navbar({refs}){
  const links = ["Home", "Projects", "Blog"];
  const isOnScreen = refs.map((ref)=>useOnScreen(ref));

  // scroll to page on nav item click
  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behaviour:'smooth'  })
  }

  /*
  useEffect(()=>{
    console.log(isOnScreen);
  }, [isOnScreen])
  */

  return( 
    <nav className="bg-transparent p-3">
      <ul className="mx-auto flex justify-end items-center">
        {
          links.map((link, index)=>( 
            <li
              className={`${isOnScreen[index] ? 'text-accent' : 'text-secondary'}`}
              key={index}
              onClick={()=>{handleClick(refs[index])}}
            >
              {link} 
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;

