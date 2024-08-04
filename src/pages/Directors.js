import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/directors')
    .then(r=>r.json())
    .then(data=> setDirectors(data))
  },[])
  console.log(directors)

  const directorRoot = directors.map((director) => {
    const movie = director.movies.map(m => {
      return <li key={m}>{m}</li>
    });
    return(
    <article key = {director.id}>
      <h2>{director.name}</h2>
      <ul>{movie}</ul>
      </article>
)  })
  
  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorRoot}
      </main>
    </>
  );
};

export default Directors;
