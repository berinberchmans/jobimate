import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({opacity: 1})),
    transition(':enter', [
      style({ opacity: 0 }), animate('100ms', style({ opacity: 1 }))]
    ),
    transition(':leave',
      [style({ opacity: 1 }), animate('100ms', style({ opacity: 0 }))]
    )
  ])]
})
export class HomepageComponent implements OnInit {
  jobs;
  backup;

  collapse = false;

  constructor(private wpService: WordpressService) { }

  ngOnInit(): void {

    this.wpService.getJobs().subscribe(x => {
      this.backup = x;
      this.jobs = x;
    });

  }
  searchfn(event){

    console.log(event.target.value);
    let a1 = event.target.value.toLowerCase();

    if(a1 && a1.length>2){
       this.jobs = this.jobs.filter(data => data.company.toLowerCase().includes(a1) || data.position.toLowerCase().includes(a1));
    }
     
  }

  opencollapse(){
    this.collapse = !this.collapse;

  }

  fresherFn(event) {
    console.log(event.target.checked);

    if (event.target.checked) {
      this.jobs = this.backup.filter(data => data.fresher == 1);
    } else {
      this.jobs = this.backup;
    }

  }

}
