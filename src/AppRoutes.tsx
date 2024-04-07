import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout page="home">
            <HomePage />
          </Layout>
        }
      />
      <Route path="/product/:id" element={<span>hey</span>} />

      <Route path="/admin" element={<span>admin panel</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
