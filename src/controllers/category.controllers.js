import categoryModel from "../model/category.model.js";

export function createCategory(req, res) {
  try {
    categoryModel.create({
      ...req.body,
    });
    res.status(200);
    res.send("created catefory");
  } catch (err) {
    res.status(400);
    res.send(err);
    console.log(err);
  }
}

export default async function DeleteCategory(req, res) {
  try {
    await categoryModel.findOneAndRemove({ name: req.body.name });
    res.status(200);
    res.send("deleted category");
  } catch (error) {}
}

export const getCategoryController = async (req, res) => {
  try {
      const categories = await categoryModel.find(); 
      res.status(200).send(categories)
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
