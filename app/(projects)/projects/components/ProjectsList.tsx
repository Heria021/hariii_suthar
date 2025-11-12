"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { containerAnimation } from "./Animations";
import { Project } from "@/lib/config";

interface ProjectsListProps {
  projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => (
  <motion.div
    variants={containerAnimation}
    initial="hidden"
    animate="show"
    className="space-y-4"
  >
    {projects.map((project, index) => (
      <ProjectCard key={project.id} project={project} index={index} />
    ))}
  </motion.div>
);
