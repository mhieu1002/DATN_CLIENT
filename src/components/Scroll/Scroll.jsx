import React from 'react'
import { useEffect, useState } from 'react'
import "./Scroll.scss";

const Scroll = () => {

  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 580 ? setBackToTopButton(true) : setBackToTopButton(false);
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  
  return (
    <div>
      {backToTopButton && (
        <button className="scroll" onClick={scrollUp}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  )
}

export default Scroll