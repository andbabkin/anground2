import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbuttonsComponent } from './mbuttons.component';

describe('MbuttonsComponent', () => {
  let component: MbuttonsComponent;
  let fixture: ComponentFixture<MbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
