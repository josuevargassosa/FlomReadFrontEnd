import { Component, OnInit } from '@angular/core';
import { Comentario } from './model/comentario.model';
import { ComentarioService } from './service/comentario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {

  modalShowComentario: boolean = false;
  comentarios: Comentario[] = [];
  comentario: Comentario;

  constructor(
    private ComentarioService: ComentarioService
  ) { }

  ngOnInit(): void {
    this.ComentarioService.getComentarios().subscribe((response: any) => {
      this.comentarios = response;
    })
  }

  modalComentario(lector?) {
    this.comentario = lector;
    this.modalShowComentario = true;
  }

  modalCerrar() {
    this.modalShowComentario = false;
    this.ngOnInit();
  }

}
