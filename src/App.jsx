import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Layout from "./components/Layout";

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {/* Default page */}
          <Route path="/" element={<Dashboard />} />

          {/* Other pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
