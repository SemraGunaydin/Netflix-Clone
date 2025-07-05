import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import WatchList from "./pages/WatchList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getWatchList } from "./redux/action";


const App = () => {
  //Dsipatch kurulumu
  const dispatch = useDispatch ();
  //Bilesen ekrana geldiginde easekron thunk fonk.tetikle
  useEffect(() => {
    dispatch(getWatchList());
  },[]);

  return (
    <BrowserRouter>
    <div className="p-5 md:p-10 lg:px-15 xl:px-20 flex flex-col min-h-screen">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>

      <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
