import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminflightsComponent } from './adminflights.component';

describe('AdminflightsComponent', () => {
  let component: AdminflightsComponent;
  let fixture: ComponentFixture<AdminflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminflightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
