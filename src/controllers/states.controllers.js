import { StatesModel } from "../model/states.js";

export const createStateController = (req, res) => {
  const state = StatesModel.create({
    name: req.body.name,
    country: req.body.country,
  })
    .catch((err) => {
      res.status(500).send(err);
    })
    .then((data) => {
      res.status(201).json({
        message: `State with name ${req.body.name} and country ${req.body.country} created`,
      });
    });
};

export const deleteStateController = (req, res) => {
  const id = req.params.id;

  StatesModel.findByIdAndDelete(id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ message: `State with id ${id} deleted` });
    }
  });
};
