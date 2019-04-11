import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Modules } from '../mock-module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.page.html',
  styleUrls: ['./module-detail.page.scss'],
})
export class ModuleDetailPage {

  selectedID = null;
  modules = Modules;
  detail;

  constructor(private activatedRoute: ActivatedRoute, translate: TranslateService) {
    translate.setDefaultLang('en');
    this.selectedID = this.activatedRoute.snapshot.paramMap.get('selectedID');
    translate.get('MODULE' + this.selectedID).subscribe((text: string) => {
      console.log(text);
      this.detail = text;
    });
}


}
