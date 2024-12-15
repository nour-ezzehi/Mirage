import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProgressComponent } from './child-progress.component';

describe('ChildProgressComponent', () => {
  let component: ChildProgressComponent;
  let fixture: ComponentFixture<ChildProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildProgressComponent]
    });
    fixture = TestBed.createComponent(ChildProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
