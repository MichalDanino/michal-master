import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRevoationComponent } from './details-revoation.component';

describe('DetailsRevoationComponent', () => {
  let component: DetailsRevoationComponent;
  let fixture: ComponentFixture<DetailsRevoationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRevoationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRevoationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
