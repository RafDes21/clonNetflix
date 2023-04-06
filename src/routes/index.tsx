import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import { Home, Movies, Series } from "../pages";

const CompRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
      </Route>
    </Routes>
  );
};

export default CompRoutes;
