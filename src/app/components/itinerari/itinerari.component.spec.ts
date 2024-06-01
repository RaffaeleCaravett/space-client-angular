import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerariComponent } from './itinerari.component';

describe('ItinerariComponent', () => {
  let component: ItinerariComponent;
  let fixture: ComponentFixture<ItinerariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItinerariComponent]
    });
    fixture = TestBed.createComponent(ItinerariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
