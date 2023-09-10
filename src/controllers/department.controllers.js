import { DepartmentModel } from "../model/department.js";

export const createDepartmentController = async (req, res) => {
    const { name } = req.body;
  
    const createdepartment = await DepartmentModel.create({ name: name })
      .catch((err) => {
        res.status(500).send("Internal Error");
      })
      .then((data) => {
        res.status(200).send("Department Created");
      });
  };
  export const deleteDepartmentController = (req, res) => {
    const name = req.params.name;
    console.log(name);
    DepartmentModel.findOneAndDelete({ name: name })
      .catch((err) => {
        res.status(500).send("error in deleting");
      })
      .then((data) => {
        res.status(200).send("department deleted");
      });
  };
  export const getDepartmentController = async (req, res) => {
    try {
        const departments = await DepartmentModel.find(); 
        res.status(200).send(departments)
      } catch (error) {
        console.error('Error fetching departments:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    };