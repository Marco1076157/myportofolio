import { motion } from "framer-motion";
import skillsData from "../data/skills.js";

function SkillCard({ skill }) {
  const Icon = skill.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass rounded-2xl p-5 flex flex-col items-center gap-3 transition-shadow duration-200 hover:shadow-lg hover:shadow-sky-950/25"
    >
      <Icon className="text-4xl text-blue-400" />
      <span className="font-medium text-white text-sm text-center">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          Keahlian & <span className="gradient-text">Stack</span>
        </motion.h2>

        <div className="space-y-12">
          {skillsData.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold text-slate-300 mb-4">{group.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.items.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}