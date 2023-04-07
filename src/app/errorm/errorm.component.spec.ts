import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrormComponent } from './errorm.component';

describe('ErrormComponent', () => {
  let component: ErrormComponent;
  let fixture: ComponentFixture<ErrormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
