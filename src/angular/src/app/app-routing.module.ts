import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent }      from './test/test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent, data : {name : 'some value passed on route'}},
  { path: 'sniffer', component: TestComponent, data : {name : 'sniffer'}},
  { path: 'dummy', component: TestComponent, data : {name : 'dummy'}},
  { path: 'introspector', component: TestComponent, data : {name : 'introspector'}},
  { path: 'log', component: TestComponent, data : {name : 'log-manager'}}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
