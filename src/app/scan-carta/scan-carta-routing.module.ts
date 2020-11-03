import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanCartaPage } from './scan-carta.page';

const routes: Routes = [
  {
    path: '',
    component: ScanCartaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanCartaPageRoutingModule {}
