import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
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
export class HomepageComponent implements OnInit {
  jobs;
  backup;

  loaded=false;

  searchValue ='';
  collapse = false;

  fresher = false;
  locselected = 0;
  iflocselected = false;
  isSearched = false;
  valSearched = '';
 

  constructor(private wpService: WordpressService) { }

  ngOnInit(): void {

    this.wpService.getJobs().subscribe(x => {
      this.backup = x;

      this.jobs = x;
      this.loaded = true;
    });

  }


  filterFn(){
    let xjobs = this.backup;
    if(this.fresher){
        xjobs = this.backup.filter(data => data.fresher == 1);
    };
    if(this.iflocselected){
         xjobs = xjobs.filter(data => data.location == this.locselected);
    }
    if(this.isSearched){
         xjobs = xjobs.filter(data => data.company.toLowerCase().includes(this.valSearched) || data.position.toLowerCase().includes(this.valSearched));
    }
    this.jobs = xjobs;
    

  }

  keyupfn(event){
  this.searchfn(event.target.value);  
  }
  searchfn(event) {

    console.log(event);
    let a1 = event.toLowerCase();

    if (a1 && a1.length > 2) {
      this.isSearched =true;
      this.valSearched = a1;
      this.filterFn();
    }

    if(a1 ==''){
      this.isSearched =false;
      this.filterFn();
    }

    // if (event.code == 'Enter') {    }
  }

  clearfn(){
    console.log('13');
    this.isSearched = false;
    this.valSearched ='';
    this.searchValue =null;
    // this.jobs = this.backup;
    this.filterFn();
  }



  locSelect(event) {
    let val = event.target.value;
    console.log(val);
    if(val ==0){
      this.iflocselected = false;
      this.filterFn();
    }else{

      this.iflocselected = true;
      this.locselected = val;
      this.filterFn();
    }
      // res = this.backup.filter(data => data.location == val);
  }



  fresherFn(event) {
    console.log(event.target.checked);

    if (event.target.checked) {
      // this.jobs = this.backup.filter(data => data.fresher == 1);
      this.fresher = true;
      this.filterFn();
    } else {
      // this.jobs = this.backup;
      this.fresher = false;
      this.filterFn();
    }

  }

}
