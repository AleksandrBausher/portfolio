import React from "react"
import "./Portfolio.css"
import Card from "./Card"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
               <Card image="" category="Personal Project" totalLike="100" title="The Film Reel" />
               <Card image="" category="Personal Project" totalLike="100" title="Rent My Stuff" />
               <Card image="" category="Personal Project" totalLike="100" title="JATE" />
               <Card image="" category="Personal Project" totalLike="100" title="Work Day Schedule" />
               <Card image="" category="Personal Project" totalLike="100" title="Modern Weather Dashboard" />
               <Card image="" category="Personal Project" totalLike="100" title="Personal Note Taker" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio