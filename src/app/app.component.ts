import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'fr', 'tr']);
    translate.setDefaultLang('en');
    const broserLang = translate.getBrowserLang();
    translate.use(broserLang?.match(/en|fr|tr/) ? broserLang: 'en');

    this.translate.get('home.title').subscribe((text:string) => {
      console.log(text)
    });
  }

}
