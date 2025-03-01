import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faP } from '@fortawesome/free-solid-svg-icons';
import { ContentService } from 'src/app/services/content.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  curYear = new Date().getFullYear();
  email = "";
  phone = ""
  services: string[] = [];

  
  constructor(private service: ContentService) { }

  ngOnInit(): void {
    this.email = "tekbista375@gmail.com"
    this.phone = "(513)-250-0423"
    this.service.getSections().subscribe({
      next: (data) =>{this.services = data.services},
      complete: () => {console.log(this.services)},
      error: (err) => {console.log(err)}
    })
  }

  findMe(social:string){
    if(social === 'linkedin'){
      window.open('https://www.linkedin.com/in/tek-bista-3496171a5/', '_blank');
    } else if (social === 'facebook') {
      window.open('https://www.facebook.com/profile.php?id=100009128484875', '_blank');
    } else if(social === 'youtube'){
      window.open('https://www.youtube.com/channel/UCne2j1XHtBDTWmqgTcH2l5Q', "_blank");
    }
  }
}
