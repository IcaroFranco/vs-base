import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';

export interface Chip {
  id: number | string;
  indice: string;
  valor: string;
}

@Component({
  selector: 'vs-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit, OnDestroy {
  @Input() item!: Chip;
  @Input() color: string = 'bg-item';
  @Output() cancelar: EventEmitter<Chip> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.cancelar.unsubscribe();
  }

  onCancelar() {
    this.cancelar.emit(this.item);
  }
}
