import { ProjectModel } from "../model/projectSchema.js";
import Jwt from "jsonwebtoken";
import { StudentModel } from "../model/studentschema.js";
import { Decode } from "../util/Jwt.js";
import { ProfModel } from "../model/professor.js";

export async function CreateProject(req, res) {
  const { authorization } = req.headers;
  const { email, id } = await Decode(authorization);

  const studentFinder = await StudentModel.findById(id);
  req.body.student = studentFinder._id;
  const profFinder = await ProfModel.find({ emailId: req.body.prof });
  req.body.askedProf = profFinder[0]._id;
  console.log(studentFinder);
  ProjectModel.create({ ...req.body })
    .catch((err) => {
      res.status(500).send("erro in creating project");
    })
    .then((data) => {
      res.status(200).send("created project");
    });
}


