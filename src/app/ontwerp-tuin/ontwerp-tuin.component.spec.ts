import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OntwerpTuinComponent } from './ontwerp-tuin.component';

describe('OntwerpTuinComponent', () => {
  let component: OntwerpTuinComponent;
  let fixture: ComponentFixture<OntwerpTuinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntwerpTuinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntwerpTuinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
