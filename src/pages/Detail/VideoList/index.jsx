import { useEffect, useState } from "react";
import api from "../../../utils";
import ReactPlayer from "react-player";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";

const VideoList = ({ id }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    api
      .get(`/movie/${id}/videos`)
      .then((res) => {
        setVideos(res.data.results.slice(0, 5));
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  console.log(videos);

  return (
    <div className="my-10">
      {error ? (
        <Error info={error} />
      ) : videos.length === 0 ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-xl font-semibold my-5 md:text-lg">
            Fragmanlar
          </h1>
          <Splide
            extensions={{ Video }}
            options={{ pagination: false, autoWidth: true }}
          >
            {videos.map((video) => (
              <SplideSlide key={video.id}>
                <div className="w-full h-[30vh] md:h-[50vh]">
                  <ReactPlayer
                    controls
                    width="100%"
                    height="100%"
                    url={`https://www.youtube.com/watch?v=${video.key}`}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </div>
  );
};

export default VideoList;