import { ProjectService } from "../services/ProjectService.js";

export const ProjectController = () => {
  const { createProject, deleteProject, getAllProjects, getProjectById } =
    ProjectService();
  const create = async (req, res) => {
    const project = req.body;
    try {
      await createProject(project);
      res.json(`Project ${project._id} created`);
    } catch (err) {
      res.json({ error: err.message });
    }
  };

  const getAll = async (req, res) => {
    try {
      const projects = await getAllProjects();
      res.json(projects);
    } catch (err) {
      res.json({ error: err.message });
    }
  };

  const getById = async (req, res) => {
    const id = req.params.id;
    try {
      const project = getProjectById(id);
      res.json(project);
    } catch (err) {
      res.json({ error: err.message });
    }
  };

  const deleteById = async (req, res) => {
    const id = req.query.id;
    try {
      await deleteById(id);
      res.json(`Project ${id} deleted`);
    } catch (err) {
      res.json({ error: err.message });
    }
  };
  return { create, getAll, getById, deleteById };
};
