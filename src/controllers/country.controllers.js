import { CountryModel } from "../model/countries.js";

export const createCountryController = async (req, res) => {
  const { name } = req.body;

  const createcountry = await CountryModel.create({ name: name })
    .catch((err) => {
      res.status(500).send("internal error");
    })
    .then((data) => {
      res.status(200).send("Country created ");
    });
};
export const deleteCountryController = (req, res) => {
  const name = req.params.name;
  console.log(name);
  CountryModel.findOneAndDelete({ name: name })
    .catch((err) => {
      res.status(500).send("error in deleting");
    })
    .then((data) => {
      res.status(200).send("country deleted");
    });
};
export const getCountryController = async (req, res) => {
  try {
      const countries = await CountryModel.find(); 
      res.status(200).send(countries)
    } catch (error) {
      console.error('Error fetching countries', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };