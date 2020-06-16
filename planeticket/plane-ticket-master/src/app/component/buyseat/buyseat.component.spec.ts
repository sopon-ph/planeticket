import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyseatComponent } from './buyseat.component';

describe('BuyseatComponent', () => {
  let component: BuyseatComponent;
  let fixture: ComponentFixture<BuyseatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyseatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
