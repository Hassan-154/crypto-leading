"use client";
import { useEffect } from "react";
import Home from "./pages/home/page";
import AOS from "aos";
import "aos/dist/aos.css";

export default function page() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="scroll-smooth">
      <Home />
    </main>
  );
}
