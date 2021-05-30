import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  toggleAddNote(): void {
    this.uiService.toggleAddNote()
  }

}
