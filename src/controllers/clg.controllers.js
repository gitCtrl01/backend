import { clgModel } from "../model/colleges.js";
import { UniversityModel } from "../model/universities.js";

export async function CreateCollegeController(req, res) {
  const { name, university, state, district } = req.body;
  const universityfinder = await UniversityModel.find({ name: university });
  if (universityfinder.length === 0) {
    res.status(404).send("univerisity not found");
  } else {
    const clgChecker = await clgModel.find({ name: name });
    req.body.university = universityfinder[0].id;
    if (clgChecker) {
      clgModel.create({ ...req.body }).catch((err) => {
        res.status(500).send("error in creating clg");
      });
    } else {
      res.status(409).send("clg already exits");
    }
  }
}

export async function DeleteCollegeController(req, res) {
  const { name, university, state, district } = req.body;
  // const universityfinder = await UniversityModel.find({ name: university });
  // if (universityfinder.length === 0) {
  //   res.status(404).send("univerisity not found");
  // } else {
  //   const clgChecker = await clgModel.find({ name: name });
  //   req.body.university = universityfinder[0].id;
  //   if (clgChecker) {
  //     clgModel.create({ ...req.body }).catch(err=>{res.status(500).send('error in creating clg')});
  //   } else {
  //     res.status(409).send("clg already exits");
  //   }
  // }

  clgModel
    .findOneAndDelete({ name: name })
    .catch((err) => {
      res.status(400).send("error in deleting");
    })
    .then((data) => {
      res.status(200).send("deleted data");
    });
}

export const getCollegeController = async (req, res) => {
  try {
      const colleges = await clgModel.find(); 
      res.status(200).send(colleges)
    } catch (error) {
      console.error('Error fetching colleges:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
