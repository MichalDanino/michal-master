import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousChoicesComponent } from './previous-choices.component';

describe('PreviousChoicesComponent', () => {
  let component: PreviousChoicesComponent;
  let fixture: ComponentFixture<PreviousChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
