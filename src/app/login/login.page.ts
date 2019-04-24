import { Component, OnInit } from '@angular/core';
import { ToastController,NavController } from '@ionic/angular';
import { AngularFireAuth } from "angularfire2/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  user = {} as User;
  userid: string;
  constructor(public navCtrl: NavController,
     private toast: ToastController,
     private aFauth: AngularFireAuth,) { }

  async  showtoast(msg: string){
    const toast = await this.toast.create({
     message: msg,
      duration:3000,                 
   });
   toast.present();
 }
 async Login(user:User){
 // try{
    console.clear()
     const result= this.aFauth.auth.signInWithEmailAndPassword(user.username,user.password)
     .then((result) => {
      console.log(result.user.email)
      this.navCtrl.navigateRoot("home")       
    }).catch((error) => {
      this.showtoast("Kullanıcı girişi başarısız")
    }) 
  /*   if(result){     
      this.aFauth.authState.subscribe(data => {  
        if(data && data.email && data.uid){
          console.log(data.email +"   "+ data.uid);
          this.showtoast("Welcome");
          this.navCtrl.navigateRoot("home"); 
        }else{
          this.showtoast("Kullanıcı Adı veya Şifreyi kontrol et");
        }      
            
      });
     }
  }catch(e){
     console.dir(e);
     if(e.code=="auth/invalid-email"){
      this.showtoast("Böyle Bir kullanıcı yok");
     }
     
  }*/
}
RegisterGo(){      
this.navCtrl.navigateRoot("sign-up")    
}
}

export interface User{
  username: string
  password: string
} 
