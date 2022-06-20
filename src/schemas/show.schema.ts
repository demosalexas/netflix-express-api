import Joi from "joi";

const CreateShowSchema = Joi.object({
  title: Joi.string().required(),
  overview: Joi.string().required(),
  poster_url: Joi.string().uri(),
  runtime: Joi.number(),
  genres: Joi.array(),
  category: Joi.string().required(),
  seasons: Joi.array()
});

export {
  CreateShowSchema
};
