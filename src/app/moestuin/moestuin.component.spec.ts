import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoestuinComponent } from './moestuin.component';

describe('MoestuinComponent', () => {
  let component: MoestuinComponent;
  let fixture: ComponentFixture<MoestuinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoestuinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoestuinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
