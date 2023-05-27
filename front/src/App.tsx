import { Routes, Route } from "react-router-dom";
import "./App.css";
import { RequireAuth } from "./auth/AuthProvider";
import { LoginPage } from "./auth/LoginPage";
import Layout from "./components/Layout/Layout";
import "./index.css";
import Recruiter from "./features/recruiter/Recruiter";

const NotFound = () => {
  return (
    <div className="flex h-full items-center justify-center bg-[#1B378C] ">
      <div className="flex w-[500px] flex-col items-center justify-center gap-4 rounded-xl bg-white px-12 py-9">
        <h1 className="text-xl font-bold uppercase">404 Такая страница не существует</h1>
      </div>
    </div>
  );
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
