import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Note } from '../../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter()
  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.deleteNote.emit()
  }

}