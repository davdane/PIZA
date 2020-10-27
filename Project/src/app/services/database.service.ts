import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;

constructor()
{

}
/*
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient)
  {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'database.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }
*/
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
      //return this.database.executeSql('SELECT title FROM appointment,profile  WHERE idapp=?, profileId=?', [idapp,profileId])
      let title = [];
    }



}
