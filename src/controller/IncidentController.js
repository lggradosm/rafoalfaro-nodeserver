import { IncidentService } from "../services/IncidentService.js";

export const IncidentController = () => {
  const create = async (req, res) => {
    const { createIncident, getAllIncidents, getIncidentById, updateIncident } =
      IncidentService();
    try {
      const incident = req.body;
      await createIncident(incident);
      res.json(`Incident ${incident._id} created`);
    } catch (err) {
      res.json({ error: err.message });
    }
  };
  const getAll = async (req, res) => {
    try {
      const incidents = await getAllIncidents();
      res.json(incidents);
    } catch (err) {
      res.json({ error: err.message });
    }
  };

  const getById = async (req, res) => {
    try {
      const id = req.params.id;
      const incident = await getIncidentById(id);
      res.json(incident);
    } catch (err) {
      res.json({ error: err.message });
    }
  };

  const updateById = async (req, res) => {
    try {
      const incident = req.body;
      await updateIncident(incident);
      res.json(`Incident ${incident._id} updated`);
    } catch (err) {
      res.json({ error: err.message });
    }
  };
  return { create, getAll, getById, updateById };
};
