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
   UniversityModel.find({name:'ram'}).populate("")
  await UniversityModel.findOneAndDelete({ name: req.query.name })
    .catch((err) => {
      res.status(404).send(err);
    })
    .then((data) => {
      res.status(200).send("university deleted");
    });
};

export const getUniversityController = async (req, res) => {
  try {
      const universities = await UniversityModel.find(); 
      res.status(200).send(universities)
    } catch (error) {
      console.error('Error fetching universities:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
