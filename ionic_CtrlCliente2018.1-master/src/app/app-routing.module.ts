import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  /*
  { path: 'add', loadChildren: './cliente/add/add.module#AddPageModule' },
  { path: 'edit', loadChildren: './cliente/edit/edit.module#EditPageModule' },
  { path: 'list', loadChildren: './cliente/list/list.module#ListPageModule' }
  */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
