import { useEffect } from "react";
import { useAppDispatch } from "../../store/hook/hook";
import { getChildren, getComedy, getPopular, getTheatres, getTop } from "../../store/thunks/moviesBrowseThunk";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getTheatres());
    dispatch(getChildren());
    dispatch(getComedy())
    dispatch(getTop())
  }, []);

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
