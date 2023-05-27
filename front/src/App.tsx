import { Routes, Route } from "react-router-dom";
import "./App.css";
import { RequireAuth } from "./auth/AuthProvider";
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
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/recruiter" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Recruiter />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
