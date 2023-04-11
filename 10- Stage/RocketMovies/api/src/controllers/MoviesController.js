const knex = require("../database/knex");

class MoviesController {
  async create(request, response) {
    const { title, description, tags, rating } = request.body;
    const user_id = request.user.id;

    const [movies_id] = await knex("movies").insert({
      title,
      description,
      rating,
      user_id
    });

    const tagsInsert = tags.map(name => {
      return {
        name,
        movies_id,
        user_id
      }
    });

    await knex("tags").insert(tagsInsert);

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const movies = await knex("movies").where({ id }).first().groupBy("title");
    const tags = await knex("tags").where({ movies_id: id }).orderBy("name");

    return response.json({
      ...movies,
      tags
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("movies").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { title, tags } = request.query;
    
    const user_id = request.user.id;

    let movies;

    if (tags) {
      const filterTags = tags.split(",").map(tag => tag.trim());

      movies = await knex("tags")
        .select([
          "movies.id",
          "movies.title",
          "movies.user_id",
        ])
        .where("movies.user_id", user_id)
        .whereLike("movies.title", `%${title}%`)
        .whereIn("name", filterTags)
        .innerJoin("movies", "movies.id", "tags.movies_id")
        .groupBy("movies.id")
        .orderBy("movies.title")

    } else {
      movies = await knex("movies")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const userTags = await knex("tags").where({ user_id });
    const moviesWithTags = movies.map(movies => {
      const moviesTags = userTags.filter(tags => tags.movies_id === movies.id);

      return {
        ...movies,
        tags: moviesTags
      }
    })

    return response.json(moviesWithTags);
  }
}

module.exports = MoviesController;