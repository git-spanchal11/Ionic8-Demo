import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApploadPage } from './appload.page';

describe('ApploadPage', () => {
  let component: ApploadPage;
  let fixture: ComponentFixture<ApploadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
