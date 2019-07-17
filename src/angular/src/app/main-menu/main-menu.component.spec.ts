import { async, ComponentFixture, toolsBed } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async(() => {
    toolsBed.configuretestingModule({
      declarations: [ MainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = toolsBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
