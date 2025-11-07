import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creatacc } from './creatacc';

describe('Creatacc', () => {
  let component: Creatacc;
  let fixture: ComponentFixture<Creatacc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Creatacc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creatacc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
