import React, { useEffect, useState } from 'react'
import api from "../../../utils";
import { Link } from 'react-router-dom';
import imageUrl from '../../../constants';
import AddButton from '../../../components/AddButton';

const Hero = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        api.get("/movie/popular?language=en-US")
        .then((res) => {
            // api den gelen populer filmlere eris
            const movies = res.data.results;

            //rastgele bir sayi olusturma
            const i = Math.floor(Math.random() * movies.length);
            //filmler icerisinden rastgele bir tanesine eris
            setMovie(movies[i]);
        })
        .catch((err) => setError(err.message));

    },[])

  return (
    <div>
    { error ? (
        <h1>Error</h1>
    ) : ! movie ? (
        <h1>Loading</h1>
    ): (
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
            {/* Text */}
            <div className="flex flex-col gap-6 items-center justify-center">
                <h1 className="text-3xl font-bold">{movie.title}</h1>
                <p className="text-start text-gray-300">{movie.overview}</p>
                <p>
                    <span>IMDB:</span>
                    <span className="text-yellow-400 ms-2 font-semibold">{movie.vote_average.toFixed(2)}</span>
                </p>


                <div className="flex gap-5">
                    <Link className="p-2 px-4 bg-red-500 rounded-md transition hover:bg-red-700" to={`/movie/${movie.id}`}>Watch Movie</Link>

                    <AddButton movie={movie}/>
                   
                </div>
            </div>


            {/* Image */}
            <div>
                <img 
                className="my-4  object-cover rounded max-h-[300px] min-w-[500px] max-md:w-full object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.4)]"
                src={imageUrl + movie.poster_path} 
                alt="her0-image" />
            </div>
        </div>
    )}
    </div>
    
  );
};

export default Hero;