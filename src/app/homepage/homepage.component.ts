import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  jobs;

  constructor(private wpService : WordpressService) { }

  ngOnInit(): void {

    this.wpService.getJobs().subscribe(x=>{
      this.jobs = x;
    });

  
    




  }

}
