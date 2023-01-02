import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalisteComponent } from './maliste.component';

describe('MalisteComponent', () => {
  let component: MalisteComponent;
  let fixture: ComponentFixture<MalisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
