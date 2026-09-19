import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Proyek <span className="gradient-text">Terbaru</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Beberapa proyek yang pernah saya kerjakan. Klik "Lihat Detail" untuk info lengkap.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {projectsData.map((project, index) => (
            <div key={project.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ProjectCard
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
