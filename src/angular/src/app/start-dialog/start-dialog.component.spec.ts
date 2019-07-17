import { async, ComponentFixture, toolsBed } from '@angular/core/testing';

import { StartDialogComponent } from './start-dialog.component';

describe('StartDialogComponent', () => {
  let component: StartDialogComponent;
  let fixture: ComponentFixture<StartDialogComponent>;

  beforeEach(async(() => {
    toolsBed.configuretestingModule({
      declarations: [ StartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = toolsBed.createComponent(StartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
