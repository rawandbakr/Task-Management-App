const { sql } = require('@vercel/postgres');

async function seedUsers() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);
    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedTasks() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await sql`
    CREATE TABLE IF NOT EXISTS tasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title varchar(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    status varchar(255) NOT NULL
  );
`;

    console.log(`Created "tasks" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}
(async () => {
  await seedUsers();
  await seedTasks()})();
