import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = []

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes)
  }

  onDeleteNote(note: Note): void {
    this.noteService.deleteNote(note)
      .subscribe(() => this.notes = this.notes.filter(n => n.id !== note.id))
  }

  toggleNote(note: Note): void {
    note.priority = !note.priority
    this.noteService.updateNote(note).subscribe()
  }

  addNote(note: Note): void {
    this.noteService.postNote(note)
      .subscribe(note => this.notes.push(note))
  }

}
