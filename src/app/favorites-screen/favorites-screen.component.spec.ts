import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesScreenComponent } from './favorites-screen.component';

describe('FavoritesScreenComponent', () => {
  let component: FavoritesScreenComponent;
  let fixture: ComponentFixture<FavoritesScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesScreenComponent]
    });
    fixture = TestBed.createComponent(FavoritesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
