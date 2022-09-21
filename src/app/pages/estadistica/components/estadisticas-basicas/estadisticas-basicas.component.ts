import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estadisticas-basicas',
  templateUrl: './estadisticas-basicas.component.html',
  styleUrls: ['./estadisticas-basicas.component.scss']
})
export class EstadisticasBasicasComponent implements OnInit {

  @Input() formEstadisticasMenu: FormGroup;
  @Input() formEstadisticasMenuQR: FormGroup;


  skeletonDia: boolean = true;
  skeletonSemana: boolean = true;
  skeletonMes: boolean = true;
  skeletonAnio: boolean = true;
  skeletonEmpresa: boolean = true;
  skeletonVisitasMenu: boolean = true;

  blockedPanel: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {

    // this.primengConfig.ripple = true;
    // if (this.dataEmpresa) {
    //   this.skeletonEmpresa = false;
    // }
    // if (this.formEstadisticasMenu.value.dia || this.formEstadisticasMenuQR.value.dia) {
    //   this.skeletonDia = false;
    //   this.skeletonEmpresa = false;
    //   this.formEstadisticasMenu.controls.dia.setValue( parseInt(this.formEstadisticasMenu.value.dia));
    //   this.formEstadisticasMenuQR.controls.dia.setValue( parseInt(this.formEstadisticasMenuQR.value.dia));
    // }
    // if (this.formEstadisticasMenu.value.semana || this.formEstadisticasMenuQR.value.semana) {
    //   this.skeletonSemana = false;
    //   this.formEstadisticasMenu.controls.semana.setValue( parseInt(this.formEstadisticasMenu.value.semana));
    //   this.formEstadisticasMenuQR.controls.semana.setValue( parseInt(this.formEstadisticasMenuQR.value.semana));
    // }
    // if (this.formEstadisticasMenu.value.mes || this.formEstadisticasMenuQR.value.mes) {
    //   this.skeletonMes = false;
    //   this.formEstadisticasMenu.controls.mes.setValue( parseInt(this.formEstadisticasMenu.value.mes));
    //   this.formEstadisticasMenuQR.controls.mes.setValue( parseInt(this.formEstadisticasMenuQR.value.mes));
    // }
    // if (this.formEstadisticasMenu.value.anio || this.formEstadisticasMenuQR.value.anio) {
    //   this.skeletonAnio = false;
    //   this.formEstadisticasMenu.controls.anio.setValue( parseInt(this.formEstadisticasMenu.value.anio));
    //   this.formEstadisticasMenuQR.controls.anio.setValue( parseInt(this.formEstadisticasMenuQR.value.anio));
    // }
  }

}
