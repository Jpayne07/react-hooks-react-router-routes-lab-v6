import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";


function Movie() {

  const [movies, setMovies] = useState([])
  const params = useParams();
  const movieID = params.id
  console.log(movies.genres,1)

  useEffect(()=>{
  fetch(`http://localhost:4000/movies/${movieID}`)
  .then(r=>r.json())
  .then(data=>setMovies(data))
    },[movieID])

    const genres = [movies.genres].map(genre => <span key={movieID}>{genre}</span>)

  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
      <h1>{movies.title}</h1>
      <p>{movies.time}</p>
      {genres}
      </main>
    </>
  );
};

export default Movie;
