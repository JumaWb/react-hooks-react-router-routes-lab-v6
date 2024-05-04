




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <body>
      <div>
        <header>
          <NavBar />
          <h1>{movie.title}</h1>
        </header>
        <main>
          <p>Time: {movie.time}</p>
          <div>
            Genres:
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </div>
        </main>
      </div>
    </body>
  );
}

export default Movie;
