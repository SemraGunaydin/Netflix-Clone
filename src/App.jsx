import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import WatchList from "./pages/WatchList";
import Header from "./componenets/Header";

const App = () => {
  return (
    <BrowserRouter>
    <div className="p-5 md:p-10 lg:px-15 xl:px-20 flex flex-col min-h-screen">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
