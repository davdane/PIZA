import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
<<<<<<< HEAD
export class AppComponent {

    profiles : Array <string> = []

=======
export class AppComponent
{
>>>>>>> e0b7f047aced88530fbedd91548580c15acf29ce
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sqlite: SQLite,
  ) {
    this.initializeApp();
    this.profiles=[]
  }

  initializeApp()
  {
    this.platform.ready().then(() =>
    {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
/*
      this.sqlite.create           //funzione default ionic Framework
      ({
           name: 'data.db',
           location: 'default'
      }).then((db: SQLiteObject) => {


       db.executeSql('create table danceMoves(name VARCHAR(32))', [])
           .then(() => console.log('Executed SQL'))
           .catch(e => console.log(e));
     }).catch(e => console.log(e));
  */
})/*.catch(e => console.log(e))*/;
   }
 }
/*
      let db = new SQLite();
            db.create({
                name: "data.db",
                location: "default"
            }).then(() => {
                db.executeSql("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)", {}).then((data) => {
                    console.log("TABLE CREATED: ", data);
                }, (error) => {
                    console.error("Unable to execute sql", error);
                })
            }, (error) => {
                console.error("Unable to open database", error);
                });


/*
      this.sqlite.create({
        name: 'prova.db',
        location: 'default'
      })
        .then((db) => {
         this.db = db;
         var createTablePeople = "CREATE TABLE IF NOT EXISTS 'People' (  'id' INTEGER,   'firstname'    TEXT NOT NULL,  'lastname'   TEXT,  PRIMARY KEY('id')   );"

          this.db.transaction(function(tx) {
          tx.executeSql(createTablePeople);
          }).then(() => {

            console.log("query eseguita con successo")

          }).catch(e => console.log(e));;
      });


      this.storage = new Storage ();
      this.storage.query ("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, )");.then((data) =>{
        console.log("TABLE CREATED: ", data);
      }, (error) => {
        console.error("Unable to execute sql", error);
      })*/
