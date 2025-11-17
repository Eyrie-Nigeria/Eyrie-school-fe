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
  ];

  const floatButton = {
    whileHover: { scale: 1.05, y: -3, boxShadow: "0px 10px 20px rgba(255,69,0,0.3)" },
    whileTap: { scale: 0.97, y: 0 },
  };

  // Staggered animation variants for programs
  const programsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const programCard = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">


      {/* HERO SECTION */}
      <motion.section
        className="w-full h-screen bg-gradient-to-br from-[#FF4500] to-[#FF784D] text-white flex items-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
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
                <Button className="w-full mt-8 px-6 py-6 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-white hover:text-[#FF4500] cursor-pointer">
                  Apply for Internship
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </div>

          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/eyrie-Scholarship.png"
              alt="Eyrie School Illustration"
              className="w-80 max-w-full drop-shadow-xl"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section
        className="w-full h-screen flex flex-col justify-center items-center px-6 text-center"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-foreground">About Eyrie School</h2>
        <p className="text-lg leading-relaxed text-foreground/80 mb-4 max-w-3xl">
          Eyrie School is a practical, student-friendly tech academy built to
          empower undergraduates with high-demand digital skills.
          Through mentorship, structured learning, and internship placements,
          we help students transition into tech with confidence.
        </p>
        <p className="text-lg leading-relaxed text-foreground/80 max-w-3xl">
          We are proudly affiliated with{" "}
          <a
            href="https://eyrie.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 font-semibold"
          >
            Eyrie Technologies
          </a>
          — a fast-growing tech company building a digital platform to simplify renting across Africa, providing smart lease management, identity verification, and AI-driven property insights.
        </p>
      </motion.section>

      {/* PROGRAMS SECTION */}
      <motion.section
        className="w-full h-screen bg-gradient-to-br from-[#FF4500] to-[#FF784D] text-white flex flex-col justify-center px-6"
        variants={programsContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What You’ll Learn at Eyrie School
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition"
                variants={programCard}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-primary">{program.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{program.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        className="w-full h-screen flex flex-col justify-center items-center px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Begin Your Tech Journey?
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Join other ambitious students, learn practical tech skills, and
          gain real-world internship experience with support from Eyrie.
        </p>
        <Link href="/apply" passHref>
          <motion.div className="rounded-2xl w-full md:w-auto" {...floatButton}>
            <Button className="w-full md:w-auto px-8 py-2 text-lg text-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </Link>
      </motion.section>
    </main>
  );
}
