import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageRatingsListComponent } from './average-ratings-list.component';

describe('AverageRatingsListComponent', () => {
  let component: AverageRatingsListComponent;
  let fixture: ComponentFixture<AverageRatingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AverageRatingsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageRatingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
