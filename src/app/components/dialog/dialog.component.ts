import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'vs-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit, OnDestroy {
  @Input() titulo: string = 'Título';
  @Input() confirmarLabel: string = 'Confirmar';
  @Input() cancelarLabel: string = 'Cancelar';
  @Input() usaConfirmar: boolean = true;
  @Input() usaCancelar: boolean = true;
  @Input() carregando!: boolean;

  @Output() confirmar: EventEmitter<boolean> = new EventEmitter();
  @Output() cancelar: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.confirmar.unsubscribe();
    this.cancelar.unsubscribe();
  }

  onConfirmar(): void {
    this.confirmar.emit();
  }

  onCancelar(): void {
    this.cancelar.emit();
  }
}
