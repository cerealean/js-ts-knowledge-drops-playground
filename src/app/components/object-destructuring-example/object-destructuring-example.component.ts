import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-destructuring-example',
  templateUrl: './object-destructuring-example.component.html',
  styleUrls: ['./object-destructuring-example.component.scss']
})
export class ObjectDestructuringExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const aboutMe = {
      name: 'Sunshine',
      likes: ['anime', 'cats', 'coding']
    };

    const likesExpanded = ['working out', ...aboutMe.likes]; // Use destructuring to concatenate array

    const [like1, like2, like3, like4] = likesExpanded; // Destructuring assignment

    const additionalAboutMe = {
      dislikes: ['peanuts', 'Rumple Minze'],
      age: undefined,
      itemsOwned: new Map<string, number>([
        ['car', 1],
        ['PS5', 1],
        ['computer', 4]
      ])
    };

    const expandedAboutMe = { ...aboutMe, ...additionalAboutMe }; // Use destructuring to combine objects

    const { name, likes, dislikes, age = 31, itemsOwned } = expandedAboutMe; // Destructuring assignment with default age

    for(let [key, value] of itemsOwned) { // Destructure the map to use in looping
      console.log(`${name}, age ${age}, owns ${value} ${key}'s.`);
    }
  }

}
