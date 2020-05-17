import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSetComponent } from './header-set.component';

describe('HeaderSetComponent', () => {
  let component: HeaderSetComponent;
  let fixture: ComponentFixture<HeaderSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
