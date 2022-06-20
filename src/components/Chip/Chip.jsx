import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, 
      handleClick = () => {} }) {
  // onClick={() => setCategory(Category+1)}
  
  let buttonClassName="chip"
  if (isActive == true) {
    buttonClassName="chip active";
  }
  return (
    <button className={buttonClassName} onClick={handleClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
