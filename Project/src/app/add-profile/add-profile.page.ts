import { Component, OnInit, ViewChild } from '@angular/core';;
import { Platform } from "@ionic/angular";
import { ToastController, NavController, ModalController, LoadingController } from '@ionic/angular';
import { Profiles } from '../profiles.model';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';

imports: [
  FormsModule,
  ReactiveFormsModule
]

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.page.html',
  styleUrls: ['./add-profile.page.scss'],
})
export class AddProfilePage implements OnInit {
  profiles: Profiles;

  constructor(
    private authService: AuthService,
    private plt: Platform,
    public toastController: ToastController,
    public navCtrl: NavController,
    public ModalCtrl: ModalController,
    public loadingCtrl: LoadingController
    ) {
    
  }

  form = new FormGroup({

    name: new FormControl('', Validators.required)

  });
  //CREATE
  addProfile() {
    this.ModalCtrl.create({
      component: AddProfilePage
    }).then(modal=>modal.present());
  }
  //READ
  loadProfiles(){

    };
  
  //UPDATE
  updateProfile() {
    
    };
  
  //DELETE
  deleteProfile(id_profiles: string) {
    
    };
  
  async onSubmit(){
    const loading = await this.loadingCtrl.create({ message: 'Adding profile...' });
    await loading.present();

    this.authService.createProfile(this.form.value).subscribe(
      async () => {
        const toast = await this.toastController.create({ message: 'Profile created!', duration: 2000, color: 'dark' });
        await toast.present();
        loading.dismiss();
        this.form.reset();
        this.navCtrl.navigateRoot("/home");
      },
      async () => {
        const alert = await this.toastController.create({ message: 'There is an error', buttons: ['OK'] });
        loading.dismiss();
        await alert.present();
      }
    )
  }

  ngOnInit() {

    }
  

}
