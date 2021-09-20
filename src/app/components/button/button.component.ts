import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick: EventEmitter<void>;
  
  constructor() {
    this.text = 'textDefault';
    this.color = 'colorDefault';  
    this.btnClick = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }
  
  onClick() {
    this.btnClick.emit();
  }

}
