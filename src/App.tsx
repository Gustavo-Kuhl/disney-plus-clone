import React, { useState, useEffect } from "react";
import { LoginContext } from "./context/LoginContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { ErrorPage } from "./pages/Error/Error";
import { Movies } from "./pages/Movies/Movies";
import { Series } from "./pages/Series/Series";
import { Header } from "./components/Header/Header";

const App: React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [blueHeader, setBlueHeader] = useState<boolean>(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlueHeader(true);
      } else {
        setBlueHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
  }, []);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      <BrowserRouter>
        {isLogged && <Header blueHeader={blueHeader} />}
        <Routes>
          <Route path="/" element={<Login />} />
          {isLogged && <Route path="/home" element={<Home />} />}
          {isLogged && <Route path="/movies" element={<Movies />} />}
          {isLogged && <Route path="/series" element={<Series />} />}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
};

export default App;
