import { CatalogueService } from './catalogue.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfrontend';
  constructor(private catalogue: CatalogueService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    console.log('init');
  }
}
