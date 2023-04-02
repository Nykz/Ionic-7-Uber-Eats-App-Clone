import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthScreenPage } from './auth-screen.page';

describe('AuthScreenPage', () => {
  let component: AuthScreenPage;
  let fixture: ComponentFixture<AuthScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
