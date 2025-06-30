import * as Joi from 'joi';
export const JoiValidationSchema = Joi.object({
  MONGO: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6),
});
