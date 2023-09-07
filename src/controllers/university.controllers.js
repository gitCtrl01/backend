import { UniversityModel } from "../model/universities.js";

export const createUniversityController = async (req, res) => {
  // const { name, state, id, district, approved } = req.body;

  // await UniversityModel.create({
  //   ...req.body,
  // })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   })
  //   .then((data) => {
  //     res.status(201).json({
  //       message: `University with name ${university.name} created`,
  //     });
  //   });

  await UniversityModel.create({
    ...req.body,
  })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
    .then((data) => {
      res.status(201).send(`University with name ${req.body.name} created`);
    });
};

export const deleteUniversityController = async (req, res) => {
  
  await UniversityModel.findOneAndDelete({ name: req.query.name })
    .catch((err) => {
      res.status(404).send(err);
    })
    .then((data) => {
      res.status(200).send("uni deleted");
    });
};
