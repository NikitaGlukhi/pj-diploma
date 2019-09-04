module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'post_office',
  entities: ['apps/server/modules/**/**/*.entity.ts'],
  migrationsTableName: 'migration_table',
  migrations: ['apps/server/migration/**/*.ts'],
  migrationsRun: false,
  synchronize: true,
  logging: true,
  cli: {
    migrationsDir: 'migration'
  }
};
