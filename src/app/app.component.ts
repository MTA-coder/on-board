import { Component } from '@angular/core';
import { RouteHelper } from './services/route-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onboard';

  constructor(private _routeHelper: RouteHelper) {
    this._routeHelper.setupRouting();
  }
}
