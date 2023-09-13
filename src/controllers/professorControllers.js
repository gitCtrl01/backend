import { clgModel } from "../model/colleges.js";
import { ProfModel } from "../model/professor.js";
import { ProjectModel } from "../model/projectSchema.js";
import { UniversityModel } from "../model/universities.js";
import { Decode } from "../util/Jwt.js";
import { HashPassword } from "../util/crypt.js";

export async function createProfessor(req, res) {
  const clgFinder = await clgModel.find({ name: req.body.college });

  req.body.college = clgFinder[0]._id;
  const uniFinder = await UniversityModel.find({ name: req.body.university });
  req.body.university = uniFinder[0]._id;
  req.body.password = await HashPassword(req.body.password);
  console.log(req.body);
  if (req.body.role) {
    const professor = ProfModel.create({ ...req.body })
      .then(() => res.status(200).send("done"))
      .catch((err) => res.status(500).send(err));
  } else {
    req.body.roles = ["65006f3af29e5f14849b4eb3"];
    const professor = ProfModel.create({ ...req.body })
      .then(() => res.status(200).send("done"))
      .catch((err) => res.status(500).send(err));
  }
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

export async function getPendingInvites(req, res) {
  const { email, id } = await Decode(req.headers.authorization);
  // console.log(id, req.headers.authorization, email);
  // console.log(email);
  const getInvites = await ProjectModel.find()
    .populate("askedProf")
    .populate("student")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.send(200).send("internal err"));
}

export async function ApproveGuide(req, res) {
  const z = Decode(req.headers.authorization);

  const projectUpdater = await ProjectModel.findByIdAndUpdate(req.body._id, {
    guide: z.id,
    askedProf: z.id,
  })
    .then((data) => {
      res.status(200).send("approved guide");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
