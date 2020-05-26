module.exports = {
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ["src/models/**/*.{ts,js}"],
  migrations: ["src/migrations/**/*.{ts,js}"],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/migrations",
  },
};
