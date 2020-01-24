import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'bm-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome to Buy More!'

  constructor() { }

  ngOnInit() {
  }

}
