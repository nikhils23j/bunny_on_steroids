import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
  expandedInfo: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-bold text-navy-800 pr-8">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          <div className="w-full h-64 overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-navy-800 mb-3">
              Overview
            </h3>
            <p className="text-navy-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold text-navy-800 mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Information */}
          <div>
            <h3 className="text-lg font-semibold text-navy-800 mb-3">
              Key Features & Implementation
            </h3>
            <div className="text-navy-600 leading-relaxed whitespace-pre-line">
              {project.expandedInfo}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <Button
              onClick={() => window.open(project.github, "_blank")}
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
            {project.demo && project.demo !== "https://demo-link.com" && (
              <Button
                variant="outline"
                onClick={() => window.open(project.demo, "_blank")}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;