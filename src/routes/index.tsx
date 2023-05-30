import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import { Home, Filter, Movies, Series } from "../pages";


const CompRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="search" element={<Filter/>}/>
      </Route>
    </Routes>
  );
};

export default CompRoutes;
