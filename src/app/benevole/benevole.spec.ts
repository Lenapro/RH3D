import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Benevole } from './benevole';

describe('Benevole', () => {
  let component: Benevole;
  let fixture: ComponentFixture<Benevole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Benevole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Benevole);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
