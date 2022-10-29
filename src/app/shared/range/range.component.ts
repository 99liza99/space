import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExpeditionService} from "../../services/expedition.service";
import {Option} from "../../interfaces/options";


@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {
 @Input() currentSol: number | undefined;
  @Output() newSolEvent = new EventEmitter<number>();
  constructor(private service: ExpeditionService) { }

  ngOnInit(): void {
  }
  changeSol() {
    this.newSolEvent.emit(this.currentSol);
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
