import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCrewComponent } from './space-crew.component';

describe('SpaceCrewComponent', () => {
  let component: SpaceCrewComponent;
  let fixture: ComponentFixture<SpaceCrewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceCrewComponent]
    });
    fixture = TestBed.createComponent(SpaceCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
