import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowplaneComponent } from './showplane.component';

describe('ShowplaneComponent', () => {
  let component: ShowplaneComponent;
  let fixture: ComponentFixture<ShowplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
  });
});
