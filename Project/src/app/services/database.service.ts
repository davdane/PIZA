import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;

/*
constructor()
{

}
constructor(private sqlite: SQLite)
  {
        this.sqlite.create
      ({
        name: 'database.db',
        location: 'default'
      })
  }


constructor(private db: SQLiteObject)
  {
        this.database.create
      ({
        name: 'database.db',
        location: 'default'
      })
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
      //return this.database.executeSql('SELECT title FROM appointment,profile  WHERE idapp=?, profileId=?', [idapp,profileId]) //da rifare
      let title = [];
    }



}
