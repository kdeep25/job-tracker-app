import {
  User,
  Code,
  GraduationCap,
  Folder,
  Award,
} from "lucide-react";

export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex justify-between items-start">

        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-primary">
            Deepika Seran
          </h1>

          <p className="text-gray-500 mt-2">
            Bengaluru, India • deepikaseran04@gmail.com • 9606-1737-48
          </p>

          <p className="text-secondary text-sm mt-1">
            linkedin.com/in/deepika-seran
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Final-year Computer Science Engineering student with practical
            experience in web development and backend technologies. Skilled in
            programming, problem-solving, and building functional full-stack and
            secure systems. Interested in applying technical knowledge to
            real-world projects and contributing effectively to development
            initiatives.
          </p>
        </div>

        {/* Right Image */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-2xl object-cover shadow-lg border-4 border-accent"
        />

      </div>
      {/* ================= END HEADER ================= */}



      {/* ================= SKILLS ================= */}
      <Section icon={<Code size={18} />} title="Technical Skills">
        <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
          <li>Programming: C, C++, Java, Python</li>
          <li>Web: HTML5, CSS3, JavaScript, React, Node.js</li>
          <li>Databases: MySQL, MongoDB, PostgreSQL</li>
          <li>Tools: VS Code, GitHub, Figma, Canva</li>
          <li>Core: OOP, DBMS, DSA, OS, Networks</li>
          <li>Other: REST APIs, JWT/Auth, Linux CLI</li>
        </ul>
      </Section>



      {/* ================= EDUCATION ================= */}
      <Section icon={<GraduationCap size={18} />} title="Education">
        <div className="space-y-3 text-gray-700">
          <div>
            <p className="font-semibold">MVJ College of Engineering</p>
            <p>B.E. Computer Science (2022–Present) — CGPA: 7.8</p>
          </div>

          <div>
            <p className="font-semibold">Geethanjali Vidyalaya (CBSE)</p>
            <p>10th: 87% | 12th: 71.5%</p>
          </div>
        </div>
      </Section>



      {/* ================= PROJECTS ================= */}
      <Section icon={<Folder size={18} />} title="Projects">
        <ul className="space-y-4 text-gray-700">

          <li>
            <p className="font-semibold">
              DevDesk – Secure Online Project Management System
            </p>
            <p className="text-gray-600 text-sm">
              Built using Java Spring Boot with role-based authentication,
              team management, asset tracking, and secure collaboration.
            </p>
          </li>

          <li>
            <p className="font-semibold">
              Secure Journalism Platform – Image Steganography + Blockchain
            </p>
            <p className="text-gray-600 text-sm">
              Cybersecurity-focused system embedding digital signatures in
              images and logging ownership using blockchain for tamper-proof
              verification.
            </p>
          </li>

        </ul>
      </Section>



      {/* ================= CERTIFICATIONS ================= */}
      <Section icon={<Award size={18} />} title="Certifications">
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li>Full Stack Web Development – Udemy</li>
          <li>Android Development Workshop – Google Developer Group</li>
        </ul>
      </Section>



      {/* ================= ACHIEVEMENTS ================= */}
      <Section icon={<User size={18} />} title="Achievements">
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li>Member – Aakriti Art Club</li>
          <li>Designer – VertechX</li>
          <li>PBCTF Cybersecurity Competition Participant</li>
        </ul>
      </Section>

    </div>
  );
}



/* ================= REUSABLE SECTION CARD ================= */
function Section({ title, children, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
        {icon}
        {title}
      </div>
      {children}
    </div>
  );
}
