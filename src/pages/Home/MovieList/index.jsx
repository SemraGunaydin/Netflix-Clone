import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../utils";
import imageUrl from "../../../constants";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const params = { with_genres: genre.id };
    api.get("/discover/movie", params).then((res) => {
      setMovies(res.data.results);
    });
  }, [genre.id]); // Burada genre.id'yi bağımlılık olarak eklemek önemli!

  return (
    <div className="my-10">
      <h1 className="text-3xl mb-3 font-semibold">{genre.name}</h1>
      <Splide
        options={{
          autoWidth: true,
          gap: "20px",
          pagination: false,
          type: "loop",
        }}
      >
        {movies?.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="max-w-[300px] cursor-pointer rounded transition hover:scale-[1.05]"
                src={imageUrl + movie.poster_path}
                alt={movie.title}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;