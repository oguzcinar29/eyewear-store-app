import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import WomenAndMen from "./pages/WomenAndMen";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderOkayPage from "./pages/OrderOkayPage";
import SignleProductPage from "./pages/SignleProductPage";

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
      <Route
        path="/product/:id"
        element={
          <Layout page="gender">
            <SignleProductPage />
          </Layout>
        }
      />
      <Route
        path="/product-category/women"
        element={
          <Layout page="gender">
            <WomenAndMen category="women" />
          </Layout>
        }
      />
      <Route
        path="/product-category/men"
        element={
          <Layout page="gender">
            <WomenAndMen category="men" />
          </Layout>
        }
      />
      <Route
        path="/about-us"
        element={
          <Layout page="info">
            <AboutUsPage />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout page="gender">
            <CartPage />
          </Layout>
        }
      />
      <Route
        path="/checkout"
        element={
          <Layout page="gender">
            <CheckoutPage />
          </Layout>
        }
      />
      <Route
        path="/order-status"
        element={
          <Layout page="gender">
            <OrderOkayPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout page="info2">
            <ContactPage />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
