import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypemasterComponent } from './typemaster.component';

describe('TypemasterComponent', () => {
  let component: TypemasterComponent;
  let fixture: ComponentFixture<TypemasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypemasterComponent]
    });
    fixture = TestBed.createComponent(TypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
