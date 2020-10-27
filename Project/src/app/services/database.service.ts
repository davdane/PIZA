import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;

constructor( private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient)
  {

      this.sqlite.create({
        name: 'mydb.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });

  }

  seedDatabase()
 {
    this.http.get('assets/seed.sql', { responseType: 'text'})
    .subscribe(sql =>
    {
      this.sqlitePorter.importSqlToDb(this.database, sql)
    });
  }


  addAppoint(idapp, title, description, place, timeapp, profileId )
    {
     let data = [idapp, title, description, place, timeapp, profileId ];
     return this.database.executeSql('INSERT INTO appointment (idapp, title, description, place, timeapp, profileId ) VALUES (?, ?, ?, ?, ?, ?)', data)
    }

  addProfile(profileId, name, surname, age, height, weight)
    {
      let data = [profileId, name, surname, age, height, weight];
      return this.database.executeSql('INSERT INTO profile (profileId, name, surname, age, height, weight) VALUES (?, ?, ?, ?, ?, ?)', data)
    }

  selectAppoint(id,profileId)
    {
      return this.database.executeSql('SELECT title FROM appointment profileId=?', [profileId])
      //return this.database.executeSql('SELECT title FROM appointment,profile  WHERE idapp=?, profileId=?', [idapp,profileId]) //da rifare
      let title = [];
    }



}
