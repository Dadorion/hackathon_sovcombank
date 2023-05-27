import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import { RequireAuth, useAuth } from "./auth/AuthProvider";
import { LoginPage } from "./auth/LoginPage";
import Layout from "./components/Layout/Layout";
import "./index.css";
import Recruiter from "./features/recruiter/Recruiter";

const NotFound = () => {
  return <h1>empty</h1>;
};

function App() {
  return (
    <div className="h-screen">
      {/* <h3 className="text-4xl mb-12">Basic example of react router dom</h3> */}
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="about"
            element={
              <RequireAuth>
                <NotFound />
              </RequireAuth>
            }
          />
          <Route path="test" element={<Recruiter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
