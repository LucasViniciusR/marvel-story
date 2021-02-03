import { Component, OnInit } from '@angular/core';
import { MarvelStoryService } from 'src/app/services/marvel-story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  story: any = {};
  description: String;
  characters: any = [];

  constructor(
    private marvelStoryService: MarvelStoryService
  ) { }

  ngOnInit() {
    this.getStory();
  }

  getStory() {
    this.marvelStoryService.getStories().toPromise().then(
      stories => {
        let max = stories.data.total;
        this.marvelStoryService.getStory(Math.floor((Math.random()*max)+1)).toPromise().then(
          story => {
            this.story = story.data.results[0];
            this.description = story.data.results[0].description;
            this.getCharacters(story.data.results[0].id);
          }
        );
      }
    );
  }

  getCharacters(storyId) {
    this.marvelStoryService.getCharacters(storyId).toPromise().then(
      characters => {
        this.characters = characters.data.results;
      }
    );
  }
}