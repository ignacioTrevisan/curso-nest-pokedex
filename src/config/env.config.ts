export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3002,
  mongo: process.env.MONGO,
  default_limit: process.env.DEFAULT_LIMIT ? +process.env.DEFAULT_LIMIT : 7,
});
