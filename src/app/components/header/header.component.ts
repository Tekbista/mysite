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
    this.intro = "Hi, I'm Tek. A Software Developer.";
    this.about = "Welcome to a realm where innovation meets functionality! I am Tek Bista, " +
                 "a passionate software developer dedicated to crafting seamless digital solutions " +
                  " that transcend expectations. With a blend of technical expertise and a creative mindset, " +
                  "I specialize in turning complex concepts into elegant, user-centric software. Join me on a journey" +
                  " where cutting-edge technology converges with intuitive design, delivering transformative " +
                  "experiences that redefine the way we interact with the digital world.";

    this.headerImage = "../../../assets/images/programming.png";
  }
}
