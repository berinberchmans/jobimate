import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-header-set',
  templateUrl: './header-set.component.html',
  styleUrls: ['./header-set.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ transform: 'translateY(0%)' })),
      transition(':enter', [
        style({ transform: 'translateY(-10%)' }), animate('100ms', style({ transform: 'translateY(0%)' }))]
      ),
      transition(':leave',
        [style({ transform: 'translateY(0%)' }), animate('100ms', style({ transform: 'translateY(-10%)'}))]
      )
    ])]
})
export class HeaderSetComponent implements OnInit {

  
  collapse = false;
  constructor() { }

  ngOnInit(): void {
  }

  opencollapse() {
    this.collapse = !this.collapse;

  }

}
