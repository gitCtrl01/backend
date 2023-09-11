import { clgModel } from "../model/colleges.js";
import { ProfModel } from "../model/professor.js";
import { UniversityModel } from "../model/universities.js";
import { HashPassword } from "../util/crypt.js";

export async function createProfessor(req, res) {

  const clgFinder = await clgModel.find({ name: req.body.college });
  console.log(clgFinder,'hellow');
  req.body.college = clgFinder[0]._id;
  const uniFinder = await UniversityModel.find({ name: req.body.university });
  req.body.university = uniFinder[0]._id;
  req.body.password = await HashPassword(req.body.password);
  console.log(req.body);
  const professor = ProfModel.create({ ...req.body })
    .then(() => res.status(200).send("done"))
    .catch((err) => res.status(500).send(err));
}

export async function getAllProfessors(req, res) {
  try {
    const professors = await ProfModel.find()
      .catch((err) => res.status(300).send(err))
      .then((data) => res.status(200).send(data));
  } catch (error) {
    throw error;
  }
}
