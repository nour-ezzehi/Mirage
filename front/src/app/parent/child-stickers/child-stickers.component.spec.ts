import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStickersComponent } from './child-stickers.component';

describe('ChildStickersComponent', () => {
  let component: ChildStickersComponent;
  let fixture: ComponentFixture<ChildStickersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildStickersComponent]
    });
    fixture = TestBed.createComponent(ChildStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
