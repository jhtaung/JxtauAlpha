import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EformUserComponent } from './eform-user.component';

describe('EformUserComponent', () => {
  let component: EformUserComponent;
  let fixture: ComponentFixture<EformUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EformUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EformUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
