import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Modules } from '../mock-module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.page.html',
  styleUrls: ['./module-detail.page.scss'],
})
export class ModuleDetailPage implements OnInit {

  selectedID = null;
  modules = Modules;

  constructor(private activatedRoute: ActivatedRoute, translate: TranslateService) {
    translate.setDefaultLang('en');
}

  ngOnInit() {
    this.selectedID = this.activatedRoute.snapshot.paramMap.get('selectedID');
    this.selectedID--;
  }

}
