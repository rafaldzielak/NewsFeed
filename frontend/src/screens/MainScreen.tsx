import React, { useEffect } from "react";
import { getNews } from "../state/actions/newsActions";
import { useDispatch } from "react-redux";
import ImportantNews from "../components/ImportantNews";

const MainScreen = () => {
  return (
    <main>
      <ImportantNews />
    </main>
  );
};

export default MainScreen;
