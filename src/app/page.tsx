"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const programs = [
    { name: "Software Development (Frontend & Backend)", duration: "12 months (9 months training + 3 months internship)" },
    { name: "Python for Data Analysis", duration: "12 months (9 months training + 3 months internship)" },
    { name: "AI & Machine Learning", duration: "12 months (9 months training + 3 months internship)" },
    { name: "No-code & Low-code Automation", duration: "6 months (3 months teaching + 3 months internship)" },
    { name: "Graphic Design", duration: "6 months (3 months teaching + 3 months internship)" },
    { name: "Productivity Tools & Tech Career Readiness", duration: "12 months (9 months training + 3 months internship)" },
  ];

  const floatButton = {
    whileHover: { scale: 1.05, y: -3, boxShadow: "0px 10px 20px rgba(255,69,0,0.3)" },
    whileTap: { scale: 0.97, y: 0 },
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-br from-[#FF4500] to-[#FF784D] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="text-white/90">Eyrie School</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl opacity-90">
              A student-friendly, one-year tech acceleration program designed
              for Nigerian students in 100 & 200 level. Learn, build, intern,
              and grow — with guidance from the Eyrie ecosystem.
            </p>

            <Link href="/apply" passHref>
              <motion.div {...floatButton}>
                <Button className=" w-full mt-8 px-6 py-6 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-white hover:text-[#FF4500] cursor-pointer">
                  Apply for Internship
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Right */}
          <div className="hidden md:flex justify-center">
            <Image
              src="/eyrie-school.jpg"
              alt="Eyrie School Illustration"
              className="w-80 drop-shadow-xl"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-foreground">About Eyrie School</h2>

        <p className="text-lg leading-relaxed text-foreground/80 max-w-3xl">
          Eyrie School is a practical, student-friendly tech academy built to
          empower undergraduates with high-demand digital skills.
          Through mentorship, structured learning, and internship placements,
          we help students transition into tech with confidence.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-foreground/80 max-w-3xl">
          We are proudly affiliated with{" "}
          <span className="font-semibold">Eyrie</span> — a fast-growing tech
          community providing education, resources, and opportunities for young
          Africans to thrive in the digital economy.
        </p>
      </section>

      {/* ABOUT EYRIE TECHNOLOGIES SECTION */}
      <section className="bg-muted py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            About Eyrie Technologies
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto mb-4">
            Eyrie Technologies is building a digital platform that reimagines renting across Africa — making it simple, transparent, and built on trust. Through verified landlord and tenant identities, smart lease management, and AI-driven property insights, Eyrie helps users rent confidently and avoid fraud.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto mb-4">
            Our platform integrates identity verification (via BVN/NIN APIs), secure rent automation, and predictive tools that alert landlords when units will soon be vacant. This ensures better planning, fewer disputes, and higher housing stability.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            Eyrie’s goal is to make finding, renting, and managing homes as easy as booking a flight — while empowering millions of Africans with safer, smarter housing options.
          </p>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What You’ll Learn at Eyrie School
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-primary">{program.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{program.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className=" flex flex-col justify-center items-center gap-4 py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Begin Your Tech Journey?
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Join other ambitious students, learn practical tech skills, and
          gain real-world internship experience with support from Eyrie.
        </p>

        <Link href="/apply" passHref>
          <motion.div className="rounded-2xl" {...floatButton}>
            <Button className="w-full  px-8 py-2 text-lg  text-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </Link>
      </section>
    </main>
  );
}
