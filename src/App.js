//App.js
import React, { useState } from "react";
import { MainContainer } from "./components/StyledComponents";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [user, setUser] = useState(null);

  return (
    <MainContainer>
      {currentPage === "login" ? (
        <Login setCurrentPage={setCurrentPage} setUser={setUser} />
      ) : null}
      {currentPage === "sign-up" ? (
        <SignUp setCurrentPage={setCurrentPage} setUser={setUser} />
      ) : null}
      {currentPage === "profile" ? (
        <Profile
          setCurrentPage={setCurrentPage}
          user={user}
          setUser={setUser}
        />
      ) : null}
    </MainContainer>
  );
}

export default App;
