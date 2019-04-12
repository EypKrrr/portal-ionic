import { Component, OnInit } from '@angular/core';
import { User } from '../login/login.page';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from "angularfire2/auth";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage  {
  user = {} as User;
  constructor( public navCtrl: NavController,
    private toast: ToastController,
    private aFauth: AngularFireAuth,) { }


    async  showtoast(msg: string){
      const toast = await this.toast.create({
       message: msg,
      duration:3000,         
     });
     toast.present();
   }
   
   async Register(user:User){  
    //try{    
    const result = this.aFauth.auth.createUserWithEmailAndPassword(user.username,user.password)
    .then((result) => {
      console.log(result.user.uid)
      this.navCtrl.navigateRoot("login")       
    }).catch((error) => {
      this.showtoast("Kullanıcı kaydı başarısız")
    })            
    /* if(result){ 
      console.log(result);          
      this.aFauth.authState.subscribe(data => {
        if(data && data.email && data.uid){
          if(data.uid != null) console.log("selam");
        }        
    })
     }    
    } catch(e){      
      if(e.code == "auth/network-request-failed"){
        this.showtoast("Bağlantı Yok");
      }
    }*/

  }

}
