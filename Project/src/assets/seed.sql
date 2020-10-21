CREATE TABLE IF NOT EXISTS profile(profileId INTEGER PRIMARY KEY AUTOINCREMENT ,name TEXT NOT NULL,surname TEXT,age INTEGER,height FLOAT,weight FLOAT);
INSERT or IGNORE INTO profile VALUES (1, 'Simon', 'Who', 23 , 1.70 , 90);
INSERT or IGNORE INTO profile VALUES (2, 'Max', 'Verstappen' , 21, 1.75, 70);
INSERT or IGNORE INTO profile VALUES (3, 'Ben', 'Cock', 98, 1.33, 90);

CREATE TABLE IF NOT EXISTS appointment(idapp INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL,description TEXT,place TEXT, timeapp datetime NOT NULL , profileId INTEGER NOT NULL );
INSERT or IGNORE INTO appointment(idapp, title, description, place, timeapp, profileId) VALUES (1, 'Vaccino', 'covid-19', 'Teramo', 2020-05-26 11:12:13 , 1);
INSERT or IGNORE INTO appointment(idapp, title, description, place, timeapp, profileId) VALUES (2, 'Visita medica','visita gamba','Teramo', 2020-05-26 11:12:13 , 2);
INSERT or IGNORE INTO appointment(idapp, title, description, place, timeapp, profileId) VALUES (3, 'Test sierologico','covid-19 ','Teramo', 2020-05-26 11:12:13 , 3);
