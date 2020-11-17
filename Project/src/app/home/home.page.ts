import { Component } from '@angular/core';
import { StorageService, Profile, Appointment } from '../servic/storage.service';
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

profiles: Profile[]=[];
newProfiles: Profile=<Profile>{};

appointments: Appointment[]=[];
newAppointment: Appointment=<Appointment>{};

  constructor(private storageService: StorageService, private plt: Platform) {
    this.plt.ready().then(() => {
      this.loadProfiles();
      this.loadAppointments();
    });
  }
  //READ
  loadProfiles(){
    this.storageService.getProfiles().then(items => {
      this.profiles=items;
    });
  }

  loadAppointments(){
    this.storageService.getAppointments().then(items => {
      this.appointments=items;
    });
  }

  deleteAppointment(item: Appointment) {
    this.storageService.deleteAppointment(item.id).then(items => {
      this.loadAppointments();
      alert("Appointment deleted!");
    });
  }

  doRefresh(event) {
    this.loadAppointments();
    this.loadProfiles();

    console.log('Reloading...');

    setTimeout(() => {
      console.log('Reloading complete!');
      event.target.complete();
    }, 1000);

  }

}
