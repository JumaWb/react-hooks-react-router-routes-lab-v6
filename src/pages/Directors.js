import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((data) => {
        setDirectors(data);
      })
      .catch((error) => {
        console.error("Error fetching directors:", error);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies &&
                director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;