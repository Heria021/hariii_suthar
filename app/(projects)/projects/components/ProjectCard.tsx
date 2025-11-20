"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { itemAnimation } from "./Animations";
import { Project } from "@/lib/config";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % project.images.length),
      3000
    );
    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ y: -4 }} // smooth lift
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col sm:flex-row items-stretch gap-6 bg-secondary/5 rounded-xl 
      hover:bg-secondary/10 hover:shadow-lg hover:shadow-primary/10 
      border border-primary/10 transition-all duration-300"
    >
      <div className="sm:w-1/3 flex-shrink-0">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-primary/10">
          <motion.div
            className="flex h-full w-full"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={project.title}
                className="block w-full h-full object-contain flex-shrink-0 pointer-events-none"
              />
            ))}
          </motion.div>

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="sm:w-2/3 flex flex-col justify-between p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary">
              {project.title}
            </h3>
            <span className="text-xs text-muted-foreground">
              #{String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4">
          <Button
            size="sm"
            className="rounded-full h-8 px-4 text-xs"
            asChild
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Live Demo
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </Button>
          <Button
            size="sm"
            className="rounded-full h-8 px-4 text-xs"
            asChild
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              GitHub
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
