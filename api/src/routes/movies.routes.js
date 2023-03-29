const { Router } = require("express");

const MovieController = require("../controllers/MoviesController");

const moviesRoutes = Router();

const moviesController = new MovieController();

moviesRoutes.get("/", moviesController.index);
moviesRoutes.post("/:user_id", moviesController.create);
moviesRoutes.get("/:id", moviesController.show);
moviesRoutes.delete("/:id", moviesController.delete);


module.exports = moviesRoutes;