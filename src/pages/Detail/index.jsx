import { useEffect, useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri"
import { Link, useParams } from "react-router-dom"
import api from "../../utils";
import Banner from "./Banner";
import Loader from "../../componenets/Loader";



const Detail = () => {
  //Url' deki parametreye eris
  const {id} = useParams();

  // State olustur
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    const params ={
      append_to_response: "videos,credits",
      language:"en",
    }
    api.get(`/movie/${id}`,params)
    .then((res) => {
      setMovie(res.data);
    })
    .catch((err) => setError(err.message));
  }, []);

  console.log(movie);

  return (
<>
{error ?( <Error/> ): !movie ? ( <Loader />
): (
<div>
      {/* Top */}
      <div className="flex justify-between mb-5">
        <Link to={".."}
        className="flex gap-2 items-center py-2 px-4 bg-gray-600 rounded hover:bg-gray-500 transition">
        <RiArrowLeftSLine className="text-xl"/>
        <span>Back</span>
        </Link>
        <button>Add to List</button>
      </div>

      {/* Banner */}
     <Banner movie={movie}/>

      {/* Content */}

      {/* Actor List */}

      {/* Video List */}
    </div>
     )}



</>







    
  )
}

export default Detail