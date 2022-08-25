import React from "react";

//import Account from "./components/approveFiles/Jobseekers";
import LandingPage from "./components/landingpage/LandingPage";
import TopNav from "./components/Navbar";
import JobSeekerVarification from "./components/profiles/JobSeekerVarification";
import AcceptDecline from "./components/profiles/AcceptDecline";
import SignUpOrIn from "./components/signup/SignUpOrIn";
import Account from "./components/manageAccounts/Account"

function App() {
  return (
    <div>
      <TopNav />
      <SignUpOrIn />  
      <AcceptDecline/>
      <JobSeekerVarification/>
      <Account />
    </div>
  );
}

export default App;
