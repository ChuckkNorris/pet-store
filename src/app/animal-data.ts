// export enum AnimalType {
//     Dog = 0,
//     Cat = 1,
//     Hamster = 2
// }
import { Pet, AnimalType, Breed  } from './models/models';
// export class AnimalType {
//     constructor(public value: string) {}
//     toString() {
//         return this.value;
//     }

//     static dog = new AnimalType("Dog");
//     static cat = new AnimalType("Cat");
// }

// export interface Animal {
//     animalType: AnimalType;
//     breeds: string[];
//     name: string;
//     age: number;

// }

export const ANIMALS: Pet[] = [
    { animalType: AnimalType.Dog, breeds: ['Yellow Labrador', 'Rotweiler'], name: 'Bitey'},
    { animalType: AnimalType.Dog, breeds: ['Husky', 'Wolf'], name: 'Shadow'},
    { animalType: AnimalType.Dog, breeds: ['Dalmation'], name: 'Lucky'},
    { animalType: AnimalType.Cat, breeds: ['Siamese'], name: 'Mittens'},
    { animalType: AnimalType.Cat, breeds: ['Siamese'], name: 'Mittens'},
    { animalType: AnimalType.Cat, breeds: ['Siamese'], name: 'Mittens'},
    { animalType: AnimalType.Cat, breeds: ['Siamese'], name: 'Mittens'},
    { animalType: AnimalType.Cat, breeds: ['Siamese'], name: 'Mittens'},
    { animalType: AnimalType.Cat, breeds: ['Siamese'], name: 'Mittens'},

];