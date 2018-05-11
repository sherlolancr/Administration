import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractRequestInformationComponent } from './contract-request-information.component';

describe('ContractRequestInformationComponent', () => {
  let component: ContractRequestInformationComponent;
  let fixture: ComponentFixture<ContractRequestInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractRequestInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractRequestInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
