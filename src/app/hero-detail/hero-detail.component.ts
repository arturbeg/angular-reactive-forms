import { Component, OnInit } from '@angular/core';

import {Validators, FormGroup, FormBuilder} from '@angular/forms';

import {states} from '../data-model';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent {
	heroForm: FormGroup;
	states = states

	constructor(private fb: FormBuilder) {

		this.createForm();
	}


	createForm(){
		this.heroForm = this.fb.group({ // <-- the parent FormGroup
			name: ['', Validators.required], // <--- the FormControl called 'name',
			address: this.fb.group({ // <-- the child form group
				street: '',
				city: '',
				state: '',
				zip: '',
			}),

			power: '',
			sidekick: '',


		});
	}
}



/*
	FormBuilder.group is a factory method that creates a FormGroup, it takes an object whose keys and values are FormControl names and their definitions 

*/

/*
	Reactive validators are simple functions

*/