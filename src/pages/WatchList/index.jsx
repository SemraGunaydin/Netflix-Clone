import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import imageUrl from "../../constants";
import { MdBookmarkRemove } from "react-icons/md";
import { toggleList } from "../../redux/action";
import Error from "../../components/Error";

const WatchList = () => {
  const { isLoading, error, list } = useSelector((store) => store);

  const dispatch = useDispatch();

  const handleDelete = (movie) => {
    //asekron thunk fonk.tetikleyerek hep api' ademde reducer'i guncelle
    dispatch(toggleList(movie, false));
  };

  return (
    <div>
      {error ? (
        <Error />
      ) : list.length === 0 ? (
        <h1>No movie on the watch list</h1>
      ) : (
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Watch List</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-10">
            {list.map((movie, key) => (
              <div className="relative" key={key}>
                <button
                  onClick={() => handleDelete(movie)}
                  className="absolute top-3 end-3 p-3 rounded hover:bg-blue-600 bg-blue-500  cursor-pointer"
                >
                  <MdBookmarkRemove />
                </button>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={imageUrl + movie.poster_path}
                    className="rounded"
                    alt=""
                  />
                </Link>

                <h1 className="text-xl text-center font-semibold mt-3">
                  {movie.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchList;
