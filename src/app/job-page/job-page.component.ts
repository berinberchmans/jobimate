import { Component, OnInit, Input } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }), animate('100ms', style({ opacity: 1 }))]
      ),
      transition(':leave',
        [style({ opacity: 1 }), animate('100ms', style({ opacity: 0 }))]
      )
    ])]
})
export class JobPageComponent implements OnInit {

  // @Input() id;

  jobId;

  jobinfo;

  dateset;

  loaded = false;
  constructor(private wpservice: WordpressService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        this.jobId = +params.get('id');
        this.loaded = false;
        this.wpservice.getJob(this.jobId).subscribe(x => {
          this.jobinfo = x;
          this.loaded = true;
          let jdate = new Date(this.jobinfo.date);
          this.dateset = jdate;
        });
      });

  }
}