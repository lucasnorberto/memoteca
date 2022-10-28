import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
  {
      conteudo: 'Passo Informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3'
  },
  {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente Filho',
      modelo: 'modelo2'
  },
  {
      conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      autoria: 'Lucas Norberto',
      modelo: 'modelo1'
  }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
