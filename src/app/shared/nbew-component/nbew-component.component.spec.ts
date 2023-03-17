import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbewComponentComponent } from './nbew-component.component';

describe('NbewComponentComponent', () => {
  let component: NbewComponentComponent;
  let fixture: ComponentFixture<NbewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
