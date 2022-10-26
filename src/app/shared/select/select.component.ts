import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Option} from "../../interfaces/options";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() currentOption: Option | undefined;
  @Input() label: string | undefined;
  @Input() options: Option[] = []
  @Output() newOptionEvent = new EventEmitter<Option>();

  constructor() {
  }

  ngOnInit(): void {

  }

  onChange() {
    this.newOptionEvent.emit(this.currentOption);
  }

}
