import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiongenericComponent } from './sectiongeneric.component';

describe('SectiongenericComponent', () => {
  let component: SectiongenericComponent;
  let fixture: ComponentFixture<SectiongenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectiongenericComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectiongenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
