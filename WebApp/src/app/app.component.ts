import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebApp';

  openNav() {
    document.getElementById('mySidenav').style.width = '50%';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

}

