import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    title = 'About me';
    name = 'Ronnie';
    hobby = 'Knitting';
    pet = 'cat';
    petName = 'Rigby';
    petHobby = 'chew chords'
    food = 'Potato';


    constructor() { }

    ngOnInit() {
    }

}
