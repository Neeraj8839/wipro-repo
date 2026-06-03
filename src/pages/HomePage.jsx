import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { StatsSection } from "../components/StatsSection";
import { Testimonials } from "../components/Testimonials";
import { ComparisonSection } from "../components/ComparisonSection";
import Footer from "../components/Footer";

import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import api from "../api/client";

export default function HomePage() {

  const [featuredCourses, setFeaturedCourses] =
    useState([]);

  useEffect(() => {

    api.get("/courses/public/all")

      .then((response) => {

        setFeaturedCourses(
          response.data.slice(0, 3)
        );
      })

      .catch(() => {});

  }, []);

  return (

    <div className="min-h-screen bg-black">
    

      {/* Hero Section */}
         <Hero />

      {/* Stats Section */}
        <StatsSection />

        {/*Testimonal */}

        <Testimonials />


        <ComparisonSection />


        <Footer />

    </div>
  );
}