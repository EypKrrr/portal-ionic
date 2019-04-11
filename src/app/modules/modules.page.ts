import { Component, OnInit } from '@angular/core';
import { Modules } from '../mock-module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
})
export class ModulesPage implements OnInit {
  private selectedItem: any;
  modules = Modules;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
}

  ngOnInit() {
  }

}
