import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/produto.model';

import { DatabaseService } from 'src/app/servico/database.service';
import { UtilityService } from 'src/app/servico/utility.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {


  image = "https://receitinhas.com.br/wp-content/uploads/2022/09/bolo-de-cenoura-vegano.jpg";
  routeId = null;
  produto: any = {};

  constructor(
    //Essa ferramnete server para captura a rota (caminho) que estiver ativo
    private activatedRoute: ActivatedRoute,
    private banco: DatabaseService,
    private router: Router,
    private util: UtilityService
  ) { }

  ngOnInit() {
    this.routeId = this.activatedRoute.snapshot.params['id'];
   
    if(this.routeId){
      //Tras o item do banco de dados
      this.banco.getOneItem(this.routeId).subscribe(caixa => {this.produto = caixa});
    }
  }

  //Método que chama o serviço de atualização
  update(form: any){
    this.banco.updateItem(form.value, this.routeId);
    this.router.navigate(['']);
    this.util.toastando("Item Atualizado com sucesso", "middle", 900, "medium");
  }

}
