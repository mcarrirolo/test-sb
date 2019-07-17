import { async, ComponentFixture, toolsBed } from '@angular/core/testing';

import { SecurityDialogComponent } from './security-dialog.component';

describe('SecurityDialogComponent', () => {
  let component: SecurityDialogComponent;
  let fixture: ComponentFixture<SecurityDialogComponent>;

  beforeEach(async(() => {
    toolsBed.configuretestingModule({
      declarations: [ SecurityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = toolsBed.createComponent(SecurityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
