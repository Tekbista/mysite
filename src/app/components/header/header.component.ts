import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  intro = "";
  about = "";
  headerImage = "";
  ngOnInit(): void {
    this.intro = "Hi, I'm Tek. A Software Engineer.";
    this.about = "In the symphony of innovation, code is the melody that orchestrates the future, and software developers are the virtuosos crafting a harmonious tomorrow from the notes of today's possibilities.";

    this.headerImage = "../../../assets/images/programming.png";
  }
}
