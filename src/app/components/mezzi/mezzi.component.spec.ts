import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MezziComponent } from './mezzi.component';

describe('MezziComponent', () => {
  let component: MezziComponent;
  let fixture: ComponentFixture<MezziComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MezziComponent]
    });
    fixture = TestBed.createComponent(MezziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
