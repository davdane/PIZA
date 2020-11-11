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
}
