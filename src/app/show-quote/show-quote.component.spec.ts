import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuoteComponent } from './show-quote.component';

describe('ShowQuoteComponent', () => {
  let component: ShowQuoteComponent;
  let fixture: ComponentFixture<ShowQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
