import { HashRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Layout from "./components/Layout";

export default function App() {
  return (
    <HashRouter>
      <Routes>

        {/* Login page (no sidebar) */}
        <Route path="/" element={<Login />} />

        {/* Pages WITH sidebar layout */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/stats"
          element={
            <Layout>
              <Stats />
            </Layout>
          }
        />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        <Route
          path="/skills"
          element={
            <Layout>
              <Skills />
            </Layout>
          }
        />

      </Routes>
    </HashRouter>
  );
}
