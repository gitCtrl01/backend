import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//routes imports
import authroute from "./src/routes/auth.routes.js";
import roleRoute from "./src/routes/roles.routes.js";
import permissionRoute from "./src/routes/permission.routes.js";
import eventsRoute from "./src/routes/event.routes.js";
import categoryRoute from "./src/routes/category.routes.js";
import ticketRoute from "./src/routes/tickets.routes.js";
import CountryRoute from "./src/routes/countries.routes.js";
import StateRoute from "./src/routes/states.routes.js";
import UniversityRoute from "./src/routes/universities.routes.js";
import CollegeRoute from "./src/routes/clg.routes.js";
import DistrictRoutes from "./src/routes/district.routes.js";
import DepartmentRoute from "./src/routes/departmentRoutes.js";
import ProfRoute from "./src/routes/professor.routes.js";
import MlRoute from "./src/routes/mlRoutes.js";
import ProjectRoute from "./src/routes/projectRoutes.js";

//middleware functions
import { AuthCheck } from "./src/middleware/authCheck.js";

//util functions
import { corsOptions } from "./src/config/corsConfig.js";
import { DbConnect } from "./src/config/DbConfig.js";
import cookieParser from "cookie-parser";

dotenv.config();

//app declaration
var app = express();

//global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());
// routes declaration

app.use("/auth", authroute);
app.use("/roles", AuthCheck(), roleRoute);
app.use("/permissions", AuthCheck(), permissionRoute);
app.use("/events", AuthCheck(), eventsRoute);
app.use("/category", AuthCheck(), categoryRoute);
app.use("/tickets", AuthCheck(), ticketRoute);
app.use("/country", CountryRoute);
app.use("/state", StateRoute);
app.use("/district", DistrictRoutes);
app.use("/university", UniversityRoute);
app.use("/college", CollegeRoute);
app.use("/department", DepartmentRoute);
app.use("/prof", ProfRoute);
app.use("/MLApi", MlRoute);
app.use("/project", ProjectRoute);

//dbConnection
app.listen(4000, () => {
  DbConnect(`${process.env.Mongo_Url}`);
});
