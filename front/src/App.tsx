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
