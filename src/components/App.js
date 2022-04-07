import { Route, Routes, Switch } from "react-router-dom";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home/Home";
import Movies from "./Movies";
import Search from "./Search";
import MovieDetails from "./MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/Movies">
        <Movies />
      </Route>
      <Route path="/search">
        <Search />
      </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
