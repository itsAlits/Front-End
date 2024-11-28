"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

// Data constants
const techStacks = {
  frontend: [
    { name: "Next.js & React", desc: "Modern Web Framework" },
    { name: "Tailwind CSS", desc: "Utility-First CSS" },
    { name: "DaisyUI", desc: "Component Library" },
    { name: "Framer Motion", desc: "Animation Library" },
  ],
  backend: [
    { name: "Express.js", desc: "Node.js Framework" },
    { name: "Node.js", desc: "Runtime Environment" },
    { name: "RESTful API", desc: "API Architecture" },
    { name: "Server Management", desc: "Deployment & Config" },
  ],
  semantic: [
    { name: "Ontology", desc: "Knowledge Representation" },
    { name: "Apache Jena Fuseki", desc: "Triple Store Server" },
    { name: "SPARQL", desc: "Query Language" },
    { name: "RDF/OWL", desc: "Semantic Web Standards" },
  ],
  tools: [
    { name: "Git & GitHub", desc: "Version Control" },
    { name: "VS Code", desc: "Code Editor" },
    { name: "Protégé", desc: "Ontology Editor" },
    { name: "Development Tools", desc: "Testing & Debugging" },
  ],
};

const skills = ["Next.js", "React", "Tailwind CSS", "Framer Motion"];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Reusable components
const TechStackCard = ({ title, technologies }) => (
  <motion.div
    variants={itemVariants}
    className="card bg-[#151515] hover:bg-[#191919] transition-all duration-300"
  >
    <div className="card-body p-6">
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <div className="grid gap-3">
        {technologies.map((tech, i) => (
          <div
            key={i}
            className="flex items-center p-3 cursor-pointer bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
          >
            <div className="h-2 w-2 bg-primary rounded-full mr-3" />
            <div>
              <p className="font-semibold">{tech.name}</p>
              <p className="text-sm text-gray-400">{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const StatCard = ({ value, title, subtitle }) => (
  <motion.div
    variants={itemVariants}
    className="card bg-gradient-to-br from-primary/20 to-[#151515] transition-all duration-300 hover:scale-[1.02]"
  >
    <div className="card-body">
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-2">{value}</div>
        <div className="text-lg font-semibold">{title}</div>
        <p className="text-sm text-gray-400 mt-2">{subtitle}</p>
      </div>
    </div>
  </motion.div>
);

const SectionCard = ({ children, delay = 0 }) => (
  <motion.div
    variants={itemVariants}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.8, delay }}
    className="card bg-[#191919] shadow-xl mb-8"
  >
    <div className="card-body p-6 sm:p-8">{children}</div>
  </motion.div>
);

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-[#151515] text-white pt-32 pb-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
          {/* Profile Section */}
          <SectionCard>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left w-full">
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl font-bold mb-2"
                >
                  Ngakan Made Alit Wiradhanta
                </motion.h1>
                <p className="text-lg sm:text-xl text-gray-400 mb-4">
                  Informatika - Universitas Udayana
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {skills.map((skill, index) => (
                    <div key={index} className="badge badge-primary">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Project Overview */}
          <SectionCard delay={0.2}>
            <h2 className="card-title text-2xl mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              IBLIX - Final Project
            </h2>
            <div className="text-gray-400 space-y-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Project Overview
                  </h3>
                  <p className="text-lg leading-relaxed">
                    IBLIX adalah sistem rekomendasi film menggunakan algoritma
                    Simple Additive Weighting (SAW) dan ontologi yang
                    dikembangkan sebagai tugas akhir di Universitas Udayana.
                    Sistem ini dapat memberikan rekomendasi film yang sesuai
                    dengan preferensi pengguna, dengan menggunakan data film
                    yang telah dikategorikan berdasarkan genre, tahun rilis, dan
                    rating.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-primary text-sm">
                      Proyek Selesai
                    </span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-primary text-sm">
                      Platform Animasi
                    </span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-primary text-sm">
                      Teknologi Web Modern
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card bg-[#191919] transition-all duration-300">
                  <div className="card-body">
                    <h3 className="card-title text-primary flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Prestasi Kunci
                    </h3>
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-6 w-6 text-green-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Implementasi Desain Responsif Lengkap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-6 w-6 text-green-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Integrasi Animasi yang Baik</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-6 w-6 text-green-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Meningkatkan Metrik Kinerja</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-6 w-6 text-green-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Implementasi UI/UX Modern</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-[#191919] transition-all duration-300">
                  <div className="card-body">
                    <h3 className="card-title text-primary flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                      Keunggulan Teknis
                    </h3>
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">01</span>
                        </div>
                        <span>Penggunaan Next.js untuk Kinerja Optimal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">02</span>
                        </div>
                        <span>Integrasi Tailwind & DaisyUI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">03</span>
                        </div>
                        <span>Animasi Framer Motion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">04</span>
                        </div>
                        <span>Struktur Komponen React</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                  value="100%"
                  title="Penyelesaian Proyek"
                  subtitle="Tercapai dengan Sukses"
                />
                <StatCard
                  value="4.9/5"
                  title="Skor Kinerja"
                  subtitle="Metrik Lighthouse"
                />
                <StatCard
                  value="2024"
                  title="Tahun Penyelesaian"
                  subtitle="Rilis Final"
                />
              </div>

              <div className="card bg-[#191919] hover:bg-[#191919] transition-all duration-300">
                <div className="card-body">
                  <h3 className="card-title text-primary mb-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                    Sorotan Implementasi Teknis
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Kekuatan Frontend
                      </h4>
                      <p className="text-sm text-gray-400">
                        Implementasi Next.js yang dioptimalkan dengan SSR dan
                        routing dinamis untuk kinerja yang lebih baik.
                      </p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Inovasi Desain
                      </h4>
                      <p className="text-sm text-gray-400">
                        Desain UI/UX modern dengan Tailwind CSS dan DaisyUI,
                        dilengkapi dengan tata letak yang responsif dan animasi
                        yang halus.
                      </p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Fokus Kinerja
                      </h4>
                      <p className="text-sm text-gray-400">
                        Waktu muat yang dioptimalkan, proses gambar yang lebih
                        baik, dan implementasi SEO untuk efisiensi maksimal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Technology Stack */}
          <SectionCard delay={0.4}>
            <h2 className="card-title text-2xl mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TechStackCard
                title="Frontend Development"
                technologies={techStacks.frontend}
              />
              <TechStackCard
                title="Backend & Server"
                technologies={techStacks.backend}
              />
              <TechStackCard
                title="Semantic Web Technologies"
                technologies={techStacks.semantic}
              />
              <TechStackCard
                title="Development Tools"
                technologies={techStacks.tools}
              />
            </div>
          </SectionCard>

          {/* Contact Section */}
          <SectionCard delay={0.6}>
            <h2 className="card-title text-2xl mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              Contact Information
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:alitwiradhanta@gmail.com"
                className="btn btn-primary gap-2 w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                Email Me
              </a>
            </div>
          </SectionCard>
        </div>
      </motion.div>
    </>
  );
}
