import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent{


  public appPages = [
    {
      title: 'HOME' ,
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Our Modules',
      url: '/modules',
      icon: 'briefcase'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
  ) {
    this.initTranslate();
    this.initializeApp();
  }





  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'tr') {
        this.translate.use('tr');
      }
    } else {
      this.translate.use('en'); // Set your language here
    }
    this.translate.get('HOME').subscribe((text: string) => {
      console.log(text);
      this.appPages[0].title = text;
    });
    this.translate.get('OUR_MODULES').subscribe((text: string) => {
      console.log(text);
      this.appPages[1].title = text;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.setDefaultLang('en');
    });
  }
}
