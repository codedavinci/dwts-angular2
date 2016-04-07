import {Component} from 'angular2/core';
import {ArtistService} from '../../services/artist-service';
import {ArtistModel} from '../../services/artist-model';

@Component({
    selector: 'artist-input',
    template: `
    <div class="input-group">
     <input type="text" class="form-control" placeholder="Add an artist.." [(ngModel)]="artistModel.name">
    <span class="input-group-btn">
    <button class ="btn btn-success" type="button"(click)="onClick()">Add</button>
    </span>
    </div>
    `
})

export class ArtistInput {
 artistModel:ArtistModel = new ArtistModel();
 constructor(public artistService: ArtistService){}
    
    onClick(){
    this.artistService.addArtist(this.artistModel);
    console.log(this.artistService.artists);
    this.artistModel = new ArtistModel();
    }
 
}