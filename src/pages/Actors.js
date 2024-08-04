import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/actors')
    .then(r=>r.json())
    .then(data=> setActors(data))
  },[])
  const actorsRoot = actors.map((actor) => {
    // const directorMovies = [director.movies].map(movie => <li>{movie}</li>)
      const movie = actor.movies.map(m => {
        return <li key={m}>{m}</li>
      });
      return(
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>{movie}</ul>
        </article>
  )  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
       <h1>Actors Page</h1>
       {actorsRoot}

      </main>
    </>
  );
};

export default Actors;
