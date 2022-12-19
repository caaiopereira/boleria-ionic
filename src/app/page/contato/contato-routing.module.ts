import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContatoPage } from "./contato.page";

//Variavel que contem o caminho para o componente( page ) que será carragado nessa rota filha
const routes: Routes = [
    //Rotas Simples
    {path: '', component: ContatoPage}
];

@NgModule({

    //RouterModule popssui as ferramentas para criação de rotas
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContatoPageRoutingModule{}