import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";


function Actors() {
  const [actors, setActors]=useState([])
  useEffect(()=>{ 
  fetch("http://localhost:4000/actors")
  .then(response=>response.json())
  .then(actors=>{
    setActors(actors)
    
  })}, [])
console.log(actors);
  return (
    <>
      <header>
       < NavBar />
      </header>
      <main>
        {actors.map(actor=>(
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            
            <ul>
              {
                actor.movies.map((movie, index)=>(
                  <li key={index}>{movie}</li>
                  ))
              }
            </ul>
            
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
