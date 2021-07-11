import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRepairsComponent } from './details-repairs.component';

describe('DetailsRepairsComponent', () => {
  let component: DetailsRepairsComponent;
  let fixture: ComponentFixture<DetailsRepairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRepairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
