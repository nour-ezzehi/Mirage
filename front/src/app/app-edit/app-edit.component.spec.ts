import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEditComponent } from './app-edit.component';

describe('AppEditComponent', () => {
  let component: AppEditComponent;
  let fixture: ComponentFixture<AppEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppEditComponent]
    });
    fixture = TestBed.createComponent(AppEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
