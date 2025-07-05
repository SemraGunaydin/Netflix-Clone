import api from "../../utils";
import ActionTypes from "../actionTypes";

// İZLEME LİSTESİNİ GETİR
const getWatchList = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LIST_LOADING });

    api
      .get(`/account/22112939/watchlist/movies`, {
        params: {
          session_id: import.meta.env.VITE_SESSION_ID,
        },
      })
      .then((res) => {
        dispatch({
          type: ActionTypes.LIST_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.LIST_ERROR,
          payload: err.message,
        });
      });
  };
};

// FİLMİ İZLEME LİSTESİNE EKLE / ÇIKAR
const toggleList = (movie, isAdd) => {
  return (dispatch) => {
    const body = {
      media_type: "movie",
      media_id: movie.id, // DİKKAT: sadece id gönder
      watchlist: isAdd,
    };

    api
      .post(`/account/22112939/watchlist`, body, {
        params: {
          session_id: import.meta.env.VITE_SESSION_ID,
        },
      })
      .then(() => {
        if (isAdd) {
          dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie });
        } else {
          dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie });
        }
      })
      .catch((err) => {
        console.error("Toggle Watchlist Error:", err);
      });
  };
};

export { getWatchList, toggleList };
