import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnvbarComponent } from './anvbar.component';

describe('AnvbarComponent', () => {
  let component: AnvbarComponent;
  let fixture: ComponentFixture<AnvbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnvbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
