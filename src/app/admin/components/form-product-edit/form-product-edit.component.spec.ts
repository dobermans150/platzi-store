import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormProductEditComponent } from './form-product-edit.component';

xdescribe('FormProductEditComponent', () => {
  let component: FormProductEditComponent;
  let fixture: ComponentFixture<FormProductEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
