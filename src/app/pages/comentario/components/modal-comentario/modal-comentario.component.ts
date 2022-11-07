import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comentario } from '../../model/comentario.model';

@Component({
  selector: 'app-modal-comentario',
  templateUrl: './modal-comentario.component.html',
  styleUrls: ['./modal-comentario.component.scss']
})
export class ModalComentarioComponent implements OnInit {

  @Input() modalShowLector;
  @Input() comentario: Comentario;
  @Output() modalCerrar = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  cerrar() {
    this.modalCerrar.emit(false);
  }

}
