import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCompComponent } from './section-comp.component';

describe('SectionCompComponent', () => {
  let component: SectionCompComponent;
  let fixture: ComponentFixture<SectionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
