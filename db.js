const { Pool } = require('pg');

const pool = new Pool({
  user: 'sergio',
  host: 'localhost',
  database: 'react_express_db',
  password: 'oigres40152@',
  port: 5432,
});



module.exports = pool;