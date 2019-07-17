import { async, ComponentFixture, toolsBed } from '@angular/core/testing';

import { CloneDialogComponent } from './clone-dialog.component';

describe('CloneDialogComponent', () => {
  let component: CloneDialogComponent;
  let fixture: ComponentFixture<CloneDialogComponent>;

  beforeEach(async(() => {
    toolsBed.configuretestingModule({
      declarations: [ CloneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = toolsBed.createComponent(CloneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
