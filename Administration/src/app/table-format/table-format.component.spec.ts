import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFormatComponent } from './table-format.component';

describe('TableFormatComponent', () => {
  let component: TableFormatComponent;
  let fixture: ComponentFixture<TableFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
