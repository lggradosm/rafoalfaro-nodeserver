import { IncidentType } from "../models/IncidentType.js";
export const IncidentTypeService = () => {
  const getAllIncidentTypes = async () => {
    return await IncidentType.find({});
  };

  const createIncidentType = async (incidentType) => {
    return await IncidentType.create(incidentType);
  };

  const getIncidentTypeById = async (id) => {
    return await IncidentType.findById(id);
  };

  return { getAllIncidentTypes, createIncidentType, getIncidentTypeById };
};
