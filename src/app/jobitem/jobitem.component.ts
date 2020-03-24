import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jobitem',
  templateUrl: './jobitem.component.html',
  styleUrls: ['./jobitem.component.css']
})
export class JobitemComponent implements OnInit {

  @Input() job;

  constructor() { }

  ngOnInit(): void {
    console.log(this.job);
    
  }

}
