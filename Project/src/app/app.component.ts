import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { StorageService, Profile, Appointment } from '../app/servic/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  appointments: Appointment[]=[];
  newAppointment: Appointment=<Appointment>{};
  profiles: Profile[]=[];
  newProfiles: Profile=<Profile>{};

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
      this.loadAppointments();
});
   }
   loadAppointments(){
     this.storageService.getAppointments().then(items => {
       this.appointments=items;
     });
   }

   loadProfiles(){
     this.storageService.getProfiles().then(items => {
       this.profiles=items;
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
       this.doRefresh();
     });
   }

   deleteAppointment(item: Appointment) {
     this.storageService.deleteAppointment(item.id).then(items => {
       this.loadAppointments();
     });
   }

   doRefresh() {
     this.loadProfiles();

     console.log('Reloading...');

     setTimeout(() => {
       console.log('Reloading complete!');
     }, 1000);

   }
 }
