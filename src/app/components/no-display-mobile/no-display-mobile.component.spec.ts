import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDisplayMobileComponent } from './no-display-mobile.component';

describe('NoDisplayMobileComponent', () => {
  let component: NoDisplayMobileComponent;
  let fixture: ComponentFixture<NoDisplayMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDisplayMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDisplayMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
