CREATE TABLE IF NOT EXISTS profile(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,surname TEXT,age INTEGER,height FLOAT,weight FLOAT);
INSERT or IGNORE INTO user VALUES (1, 'Simon', 'Who', 23 , 1.70 , 90);
INSERT or IGNORE INTO user VALUES (2, 'Max', 'Verstappen' , 21, 1.75, 70);
INSERT or IGNORE INTO user VALUES (3, 'Ben', 'Cock', 98, 1.33, 90);

CREATE TABLE IF NOT EXISTS appointment(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,description TEXT,place TEXT, timeapp datetime , profileId INTEGER);
INSERT or IGNORE INTO appointment(id, title, description, place, timeapp, profileId) VALUES (1, 'Vaccino', 'covid-19', 'Teramo', 2020-05-26 11:12:13 , 1);
INSERT or IGNORE INTO appointment(id, title, description, place, timeapp, profileId) VALUES (2, 'Visita medica','visita gamba','Teramo', 2020-05-26 11:12:13 , 2);
INSERT or IGNORE INTO appointment(id, title, description, place, timeapp, profileId) VALUES (3, 'Test sierologico','covid-19 ','Teramo', 2020-05-26 11:12:13 , 3);
