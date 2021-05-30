import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs'
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  showAddNote: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddNote = value)
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.btnClick.emit()
  }

}
