import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightstatusResultsComponent } from './flightstatus-results.component';

describe('FlightstatusResultsComponent', () => {
  let component: FlightstatusResultsComponent;
  let fixture: ComponentFixture<FlightstatusResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightstatusResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightstatusResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
