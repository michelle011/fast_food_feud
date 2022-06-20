import * as React from "react"
import "./Instructions.css"

export function Instructions({Instructions}) {
  return (
    <aside className="instructions">
      <p>{Instructions}</p>
    </aside>
  )
}

export default Instructions
