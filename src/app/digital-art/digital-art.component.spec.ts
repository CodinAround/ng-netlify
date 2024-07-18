import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalARtComponent } from './digital-art.component';

describe('DigitalARtComponent', () => {
  let component: DigitalARtComponent;
  let fixture: ComponentFixture<DigitalARtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalARtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalARtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
