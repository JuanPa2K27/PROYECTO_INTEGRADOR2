import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRucComponent } from './BuscarRucComponent';

describe('BuscarRucComponent', () => {
  let component: BuscarRucComponent;
  let fixture: ComponentFixture<BuscarRucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarRucComponent]
    });
    fixture = TestBed.createComponent(BuscarRucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
