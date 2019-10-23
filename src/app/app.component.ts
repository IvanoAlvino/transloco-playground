import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'transloco-playground';

  params = {link: 'ADMIN', pwd: 'BANANA'};

  private result: string;

  constructor(private translocoService: TranslocoService) {
  }

  public ngOnInit(): void {
    this.translocoService.selectTranslate('This comes from the component {value}', {value: 'HELLO WORLD'})
        .subscribe(value => this.result = value);
  }

  public switchToSpanish() {
    this.translocoService.setActiveLang('es');
  }

  public switchToEnglish() {
    this.translocoService.setActiveLang('en');
  }
}
