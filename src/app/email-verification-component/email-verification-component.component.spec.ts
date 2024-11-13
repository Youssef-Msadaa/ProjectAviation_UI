import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationComponentComponent } from './email-verification-component.component';

describe('EmailVerificationComponentComponent', () => {
  let component: EmailVerificationComponentComponent;
  let fixture: ComponentFixture<EmailVerificationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailVerificationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerificationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
