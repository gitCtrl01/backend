import { StudentModel } from "../model/studentschema";

export const getStudentController = async (req, res) => {
    try {
        const students = await StudentModel.find(); 
        res.status(200).send(students)
      } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    };