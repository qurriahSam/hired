import React from "react";

//import Account from "./components/approveFiles/Jobseekers";
import LandingPage from "./components/landingpage/LandingPage";
import TopNav from "./components/Navbar";
import AcceptDecline from "./components/profiles/AcceptDecline";
import SignUpOrIn from "./components/signup/SignUpOrIn";

function App() {
  return (
    <div>
      <TopNav />
      <SignUpOrIn />  
      <AcceptDecline/>
    </div>
  );
}

export default App;
