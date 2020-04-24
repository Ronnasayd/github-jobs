import React, { useEffect } from "react";
import Menu from "./components/Menu";
import { CardList } from "./components/CardList";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "JOBS_FETCH_REQUESTED" });
  }, [dispatch]);
  return (
    <>
      <Menu />
      <CardList />
    </>
  );
};

export default App;
