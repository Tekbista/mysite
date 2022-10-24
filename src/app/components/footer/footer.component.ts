import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faP } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  curYear = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

  findMe(social:string){
    if(social === 'linkedin'){
      window.open('https://www.linkedin.com/in/tek-bista-3496171a5/', '_blank');
    } else if (social === 'facebook') {
      window.open('https://www.facebook.com/profile.php?id=100009128484875', '_blank');
    } 
  }
}
