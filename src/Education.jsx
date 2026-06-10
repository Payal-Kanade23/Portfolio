import React from "react";
import EduCart from "./ui/EduCart";

function Education() {
  return (
    <section className="w-full min-h-screen py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center w-full">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 text-center">
          My <span className="text-pink-600">Journey</span>
        </h1>

        <p className="text-gray-500 mb-8 md:mb-12 text-center">
          My Professional Journey So Far
        </p>

        <div className="w-full grid grid-cols-1 gap-4 md:gap-6">
          <EduCart
            heading="Diploma in Computer"
            year="2021-2024"
            desc="Completed Diploma in Computer Engineering with a strong foundation in programming and web development. Learned core subjects like databases, software development, and computer fundamentals through practical projects."
            place="Government Polytechnic for Girls, Surat"
          />

          <EduCart
            heading="Internship in Flutter"
            year="2024"
            desc="Completed Flutter internship as part of GTU syllabus, gaining hands-on experience in mobile app development. Improved problem-solving skills and understanding of cross-platform development using Flutter and Dart"
            place="Leaf Drive Solution"
          />

          <EduCart
            heading="B.E. in Computer Engineering"
            year="2024-2027"
            desc="Currently pursuing Bachelor of Engineering (B.E.) in Computer Engineering under GTU. Strengthening skills in programming, data structures, web development, and software engineering concepts. Actively working on projects and learning modern technologies to build industry-ready skills."
            place="Dr. S. & S.S. Gandhi Goverment Engineering College"
          />
        </div>
      </div>
    </section>
  );
}


export default Education;