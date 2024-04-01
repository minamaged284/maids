import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideAnimateComponent } from './slide-animate.component';

describe('SlideAnimateComponent', () => {
  let component: SlideAnimateComponent;
  let fixture: ComponentFixture<SlideAnimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideAnimateComponent]
    });
    fixture = TestBed.createComponent(SlideAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
