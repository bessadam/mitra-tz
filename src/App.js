import React from "react";
// components
import Header from "./components/Header";
// pages
import { Main, About, User } from "./pages";
// router
import { Routes, Route } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { getPostComments } from "./redux/actions/comments";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostComments());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;

