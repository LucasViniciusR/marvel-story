import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelStoryService {

  base_url = 'https://gateway.marvel.com/';
  key = '?apikey=1b465efc825444dbb323c070e34333c3';
  idCharacter = 1009368; // Iron man's ID

  constructor(private http: HttpClient) { }

  getStories(): Observable<any> {
    const url = `${this.base_url}/v1/public/characters/${this.idCharacter}/stories${this.key}&limit=1`;
    return this.http.get(url);
  }
  getStory(offset): Observable<any> {
    const url = `${this.base_url}/v1/public/characters/${this.idCharacter}/stories${this.key}&offset=${offset}&limit=1`;
    return this.http.get(url);
  }

  getCharacters(storyId): Observable<any> {
    const url = `${this.base_url}/v1/public/stories/${storyId}/characters${this.key}`;
    return this.http.get(url);
  }
}