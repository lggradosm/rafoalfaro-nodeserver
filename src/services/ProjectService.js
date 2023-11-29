import mongoose from "mongoose";
import { Project } from "../models/Project.js";

export const ProjectService = () => {
  const getAllProjects = async () => {
    return await Project.find({}).populate("customer").exec();
  };

  const createProject = async (project) => {
    return await Project.create(project);
  };

  const getProjectById = async (id) => {
    return await Project.findById(id).populate("customer").exec();
  };

  const deleteProject = async (id) => {
    return await Project.findByIdAndDelete(id);
  };
  return { getAllProjects, createProject, getProjectById, deleteProject };
};
