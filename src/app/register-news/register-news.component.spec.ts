import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewsComponent } from './register-news.component';

describe('RegisterNewsComponent', () => {
  let component: RegisterNewsComponent;
  let fixture: ComponentFixture<RegisterNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
