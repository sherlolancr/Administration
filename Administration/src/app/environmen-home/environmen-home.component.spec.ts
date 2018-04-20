import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmenHomeComponent } from './environmen-home.component';

describe('EnvironmenHomeComponent', () => {
  let component: EnvironmenHomeComponent;
  let fixture: ComponentFixture<EnvironmenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
