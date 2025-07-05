import { useEffect, useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import api from "../../utils";
import Banner from "./Banner";
import Loader from "../../components/Loader";
import Content from "./Content";
import ActorList from "./ActorList";
import VideoList from "./VideoList";
import AddButton from "../../components/AddButton";
import Error from "../../components/Error";

const Detail = () => {
  // URL'deki parametreyi al
  const { id } = useParams();

  // State'ler
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const params = {
      append_to_response: "videos,credits",
      language: "en",
    };

    api
      .get(`/movie/${id}`, { params }) // 🔑 DİKKAT: Axios parametreleri böyle verilir!
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => setError(err.message));
  }, [id]); // 🔑 DİKKAT: id bağımlılığı olmalı!

  return (
    <>
      {error ? (
        <Error info={error} />
      ) : !movie ? (
        <Loader />
      ) : (
        <div>
          {/* Üst kısım */}
          <div className="flex justify-between mb-5">
            <Link
              to={-1} // 🔑 DİKKAT: navigate(-1) mantığında çalışır
              className="flex gap-2 items-center py-2 px-4 bg-gray-600 rounded hover:bg-gray-500 transition"
            >
              <RiArrowLeftSLine className="text-xl" />
              <span>Geri</span>
            </Link>

            <AddButton movie={movie} />
          </div>

          {/* Banner */}
          <Banner movie={movie} />

          {/* İçerik */}
          <Content movie={movie} />

          {/* Oyuncular */}
          <ActorList id={id} />

          {/* Fragmanlar */}
          <VideoList id={id} />
        </div>
      )}
    </>
  );
};

export default Detail;