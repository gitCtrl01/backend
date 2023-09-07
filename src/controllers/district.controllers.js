import { DistrictModel } from "../model/districts.js";
import { StatesModel } from "../model/states.js";

export async function createDistrictController(req, res) {
  const districtChecker = await DistrictModel.find({ name: req.body.name });
  if (districtChecker.length !== 0) {
    res.status(409).send("district  exits");
  } else {
    const statefinder = await StatesModel.find({ name: req.body.state });
    if (statefinder.length === 0) {
      res.status(405).send("state does not exits");
    } else {
      req.body.state = statefinder[0]._id;
      DistrictModel.create({ ...req.body })
        .catch((err) => {
          res.status(500).send("server error");
        })
        .then((data) => res.status(200).send("district created"));
    }
  }
}
