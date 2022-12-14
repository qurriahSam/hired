import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import Dashboard from "./components/employerDashboard/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

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

  useEffect(() => {
    const getLoggedUser = localStorage.getItem("user");
    console.log();
    if (typeof getLoggedUser === "string") {
      const loggedUser = JSON.parse(getLoggedUser);
      setUser(() => loggedUser);
      if (loggedUser?.id) {
        setUser(loggedUser);
        if (loggedUser.role === "jobseeker") {
          navigate("/jobseekerprofile");
        } else if (loggedUser.role === "employer") {
          navigate("/employeemanagement");
        } else if (loggedUser.role === "admin") {
          navigate("/approveFiles");
        } else {
          console.log(loggedUser);
        }
      }
    }
  }, []);

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
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
