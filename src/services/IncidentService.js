import { Incident } from "../models/Incident.js";
export const IncidentService = () => {
  const getAllIncidents = async () => {
    await Incident.find({});
  };

  const createIncident = async (incident) => {
    await Incident.create(incident);
  };

  const getIncidentById = async (id) => {
    await Incident.findById(id);
  };

  const updateIncident = async (incident) => {
    await Incident.findByIdAndUpdate(incident._id, incident);
  };
  return { getAllIncidents, createIncident, getIncidentById, updateIncident };
};
