import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Ministries from "../pages/Ministries";
import Sermons from "../pages/Sermons";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import Prayer from "../pages/Prayer";
import Give from "../pages/Give";
import Contact from "../pages/Contact";
import BuiltByTeeTechs from "../pages/BuiltByTeeTechs";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route
        path="/ministries"
        element={
          <Layout>
            <Ministries />
          </Layout>
        }
      />

      <Route
        path="/sermons"
        element={
          <Layout>
            <Sermons />
          </Layout>
        }
      />

      <Route
        path="/events"
        element={
          <Layout>
            <Events />
          </Layout>
        }
      />

      <Route
        path="/gallery"
        element={
          <Layout>
            <Gallery />
          </Layout>
        }
      />

      <Route
        path="/prayer"
        element={
          <Layout>
            <Prayer />
          </Layout>
        }
      />

      <Route
        path="/give"
        element={
          <Layout>
            <Give />
          </Layout>
        }
      />

      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
path="/teetechs"
element={<BuiltByTeeTechs />}
/>
    </Routes>
  );
}

export default AppRoutes;