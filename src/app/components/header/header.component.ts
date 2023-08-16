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
    this.about = "Highly experienced, solution-oriented professional with experience in full-stack software development using java, " +   
                  "Spring boot, Angular, and Bootstrap. Proficient in utilizing a wide variety of programs and tools to provide " +
                  "high-quality and cost-effective applications / systems to boost organizational productivity.";
    this.headerImage = "../../../assets/images/programming.png";
  }
}
