import React, { useEffect, useMemo, useState } from "react";
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
import Login from "./components/login/Login";
import EmployeeProfile from "./components/profiles/employee/EmployeeProfile";
import EmployerProfile from "./components/profiles/EmployerProfile";
import { UserContext } from "./userContext/userContext";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  //  useEffect(() => {
  //    fetch("http://localhost:3000/auth").then((r) => {
  //      if (r.ok) {
  //        r.json().then((user) => {
  //          setUser(() => user);
  //          console.log("logged", user);
  //          /*if (user) {
  //            navigate("/dashboard");
  //          } */
  //        });
  //      } else {
  //        console.log(r);
  //      }
  //    });
  //    // eslint-disable-next-line react-hooks/exhaustive-deps
  //  }, []);

  return (
    <>
      <UserContext.Provider value={value}>
        <TopNav />
        <div className="mt-5 pt-3">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/approveFiles" element={<ApproveFiles />} />
            <Route path="/jobseekerprofile" element={<EmployeeProfile />} />
            <Route path="/employerprofile" element={<EmployerProfile />} />
            <Route path="/joboffers" element={<AcceptDecline />} />
            <Route path="/employeemanagement" element={<Termination />} />
            <Route path="/manageaccounts" element={<Account />} />
            <Route path="/offers" element={<JobSeekerVarification />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
