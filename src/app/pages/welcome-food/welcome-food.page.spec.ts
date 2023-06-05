import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeFoodPage } from './welcome-food.page';

describe('WelcomeFoodPage', () => {
  let component: WelcomeFoodPage;
  let fixture: ComponentFixture<WelcomeFoodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WelcomeFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
