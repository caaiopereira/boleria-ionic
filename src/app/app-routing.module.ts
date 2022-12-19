import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //Rotas filhas
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'contato', 
    loadChildren: () => import('./page/contato/contato.module').then(m => m.ContatoPageModule)
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sobre',
    loadChildren: () => import('./page/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'form/:id',
    loadChildren: () => import('./page/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'info/:id',
    loadChildren: () => import('./page/info/info.module').then( m => m.InfoPageModule)
  },

  //Rotas simples
  /* {path 'inicio', component: iniciocomponete} */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
