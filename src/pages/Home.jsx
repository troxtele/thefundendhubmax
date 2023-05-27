import React from "react";
import Prices from "../components/Prices";
import Navbar from "../components/Navbar";
import Evaluation from "../components/Evaluation";
import Dashboard from "../components/Dashboard";
import Discord from "../components/Discord";
import Footer from "../components/Footer";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Evaluation />
      <Benefits />
      <Dashboard />
      <Prices />
      <Discord />
      <FAQ />
      <Footer />

      <div className="hidden h-0 w-0 opacity-0 left-0 visible invisible"></div>

      <script src="./js/script.js"></script>
    </>
  );
}
