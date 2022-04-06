import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxDocComponent } from './ax-doc.component';

describe('AxDocComponent', () => {
  let component: AxDocComponent;
  let fixture: ComponentFixture<AxDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AxDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
