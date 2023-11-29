import { IncidentTypeService } from "../services/IncidentTypeService.js";
export const IncidentTypeController = () => {
  const { createIncidentType, getAllIncidentTypes, getIncidentTypeById } =
    IncidentTypeService();
  const getAll = async (req, res) => {
    try {
      const incidentTypes = await getAllIncidentTypes();
      res.json(incidentTypes);
    } catch (err) {
      res.json({ error: err.message });
    }
  };

  const getById = async (req, res) => {
    try {
      const id = req.params.id;
      const incidentType = await getById(id);
      res.json(incidentType);
    } catch (err) {
      res.json({ error: err.message });
    }
  };

  const create = async (req, res) => {
    try {
      const incidentType = req.body;
      await createIncidentType(incidentType);
      res.json(`Incident Type ${incidentType._id} created`);
    } catch (err) {
      res.json({ error: err.message });
    }
  };
  return { getAll, getById, create };
};
