const pool = require('./db'); // Wir importieren den Pool aus db.js

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Fehler bei der DB-Abfrage:', err);
  } else {
    console.log('DB-Antwort:', res.rows);
  }
  pool.end();
});
