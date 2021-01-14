import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from "@ionic/angular";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-appoint',
  templateUrl: './add-appoint.page.html',
  styleUrls: ['./add-appoint.page.scss'],
})
export class AddAppointPage implements OnInit {


  constructor(private plt: Platform, public toastController: ToastController) 
  {    }
  ngOnInit() {
  }
}



