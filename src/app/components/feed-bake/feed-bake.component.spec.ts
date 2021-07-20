import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBakeComponent } from './feed-bake.component';

describe('FeedBakeComponent', () => {
  let component: FeedBakeComponent;
  let fixture: ComponentFixture<FeedBakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedBakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
