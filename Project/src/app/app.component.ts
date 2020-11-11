import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { StorageService, Profile } from '../app/servic/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  items: Profile[]=[];
  newItem: Profile=<Profile>{};

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sqlite: SQLite,
    private storageService: StorageService
  ) {
    this.initializeApp();

  }

  initializeApp()
  {
    this.platform.ready().then(() =>
    {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.loadProfiles();
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
   loadProfiles(){
     this.storageService.getProfiles().then(items => {
       this.items=items;
     });
   }
   //UPDATE
   updateProfile(item: Profile) {
     item.name='${item.name}';

     this.storageService.updateProfile(item).then(items => {
       this.loadProfiles();
     });
   }
   //DELETE
   deleteProfile(item: Profile) {
     this.storageService.deleteProfile(item.id).then(items => {
       this.loadProfiles();
       alert("Profile deleted!")
     });
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
