import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Mainhodblock from "./hod/Mainhodblock";
// import Mainteacherblock from "./teacherblock/Mainteacherblock";
// import Mainstudentblock from "./Student/Mainstudentblock";
import FacultyLogin from "./Login/FacultyLogin";
import Signup from "./Login/Signup";
import Newstate from "./context/Newstate";
import FacultyState from "./context/FacultyState";
import Landing from "./components/Landing";
import Mainlanding from "./Student/Mainlanding";
import MainteacherLanding from "./teacherblock/MainteacherLanding";
import { ModalState } from "./context/Modalcontext";
import Layout from "./components/Layout";
import Auth1, { Auth2 } from "./components/Auth";
import Error from "./Error/Error";

// import { useLocation, Navigate } from "react-router-dom";
function App() {
  const location = useLocation();

  return (
    <>
      <Error>
        <ModalState>
          <FacultyState>
            <Newstate>
              <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="/" element={<Layout />}>
                  <Route path="mnm/" element={<Signup />} />
                  <Route path="mnm/faculty" element={<FacultyLogin />} />

                  <Route element={<Auth1 />}>
                    <Route path="mnm/student" element={<Mainlanding />} />
                  </Route>

                  <Route element={<Auth2 />}>
                    <Route
                      path="mnm/teacher"
                      element={<MainteacherLanding />}
                    />
                    <Route path="mnm/HOD" element={<Mainhodblock />} />
                  </Route>
                </Route>
              </Routes>
            </Newstate>
          </FacultyState>
        </ModalState>
      </Error>
    </>
  );
}

export default App;
