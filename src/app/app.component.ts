import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nameText = "chandra"

  findName() {
    if (this.nameText == "sitar") {
      this.nameText = "poojita"
    }
  }
  object = [{
    "name": "Alfreds Futterkiste",
    "contact": "Maria Anders",
    "Country": "Germany"
  }, {
    "name": "sitar",
    "contact": "Maria Anders",
    "Country": "India"
  }, {
    "name": "chandra",
    "contact": "Maria Anders",
    "Country": "Germany"
  }, {
    "name": "poojitha",
    "contact": "Maria Anders",
    "Country": "Germany"
  }
  ]

}
