import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

//import Account from "./components/approveFiles/Jobseekers";
import LandingPage from "./components/landingpage/LandingPage";
import TopNav from "./components/Navbar";
import JobSeekerVarification from "./components/profiles/JobSeekerVarification";
import AcceptDecline from "./components/profiles/AcceptDecline";
import SignUp from "./components/signup/SignUp";
import Account from "./components/manageAccounts/Account";
import Termination from "./components/termination/termination";
import ApproveFiles from "./components/approveFiles/ApproveFiles";
import { UserContext } from "./userContext/userContext";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <UserContext.Provider value={value}>
        <TopNav />
        <div className="mt-5 pt-3">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/approveFiles" element={<ApproveFiles />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
