import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMockComponent } from './forms-mock.component';

describe('FormsMockComponent', () => {
  let component: FormsMockComponent;
  let fixture: ComponentFixture<FormsMockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsMockComponent]
    });
    fixture = TestBed.createComponent(FormsMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
