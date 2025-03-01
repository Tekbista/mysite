import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/models/section';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  sections: Section[] = [];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getSections().subscribe({
      next: (secs) => { this.sections = secs.portfolio},
      complete: () =>{console.log(this.sections)},
      error: (err) =>{console.log(err)}
    })
  }

}
