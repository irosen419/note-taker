import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/note';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  @Output() formSubmit: EventEmitter<Note> = new EventEmitter()
  subscription: Subscription;
  showAddNote: boolean = false;

  title: string = ''
  content: string = ''
  priority: boolean = false

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddNote = value)
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //TODO: add form validations
    let newNote: Note = {
      title: this.title,
      content: this.content,
      priority: this.priority
    }

    this.formSubmit.emit(newNote)

    this.title = ''
    this.content = ''
    this.priority = false
  }

}
