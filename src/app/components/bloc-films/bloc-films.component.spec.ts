import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocFilmsComponent } from './bloc-films.component';

describe('BlocFilmsComponent', () => {
  let component: BlocFilmsComponent;
  let fixture: ComponentFixture<BlocFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
