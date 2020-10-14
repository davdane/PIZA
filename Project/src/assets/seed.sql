CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,various TEXT);
INSERT or IGNORE INTO user VALUES (1, 'Simon', '');
INSERT or IGNORE INTO user VALUES (2, 'Max', '');
INSERT or IGNORE INTO user VALUES (3, 'Ben', '');

CREATE TABLE IF NOT EXISTS appointment(id INTEGER PRIMARY KEY AUTOINCREMENT,description TEXT, userId INTEGER);
INSERT or IGNORE INTO appointment(id, description, userId) VALUES (1, 'Vaccino', 1);
INSERT or IGNORE INTO appointment(id, description, userId) VALUES (2, 'Visita medica', 1);
INSERT or IGNORE INTO appointment(id, description, userId) VALUES (3, 'Test sierologico', 2);
INSERT or IGNORE INTO appointment(id, description, userId) VALUES (4, 'Tampone', 2);
INSERT or IGNORE INTO appointment(id, description, userId) VALUES (5, 'Visita cardiologica', 3);
INSERT or IGNORE INTO appointment(id, description, userId) VALUES (6, 'Visita urologica', 3);
