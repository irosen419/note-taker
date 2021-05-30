import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  apiUrl: string = 'http://localhost:5000/notes'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl)
  }

  deleteNote(note: Note): Observable<Note> {
    return this.http.delete<Note>(`${this.apiUrl}/${note.id}`)
  }

  updateNote(note: Note): Observable<Note> {
    return this.http.patch<Note>(`${this.apiUrl}/${note.id}`, note, this.httpOptions)
  }

  postNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note, this.httpOptions)
  }
}
