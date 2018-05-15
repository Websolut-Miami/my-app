import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCookbookComponent } from './header-cookbook.component';

describe('HeaderCookbookComponent', () => {
  let component: HeaderCookbookComponent;
  let fixture: ComponentFixture<HeaderCookbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCookbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
