// export enum AnimalType {
//     Dog = 0,
//     Cat = 1,
//     Hamster = 2
// }
import { Pet, Animal, Breed  } from './models/models';
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
    { breeds: [{name:'Yellow Labrador', animal: {name: 'dog'}}, {name:'Rotweiler', animal: {name: 'dog'}}], name: 'Bitey'},
    { breeds: [{name:'Yellow Labrador', animal: {name: 'dog'}}, {name:'Rotweiler', animal: {name: 'dog'}}], name: 'Bitey'},
    { breeds: [{name:'Yellow Labrador', animal: {name: 'dog'}}, {name:'Rotweiler', animal: {name: 'dog'}}], name: 'Bitey'},
    { breeds: [{name:'Yellow Labrador', animal: {name: 'dog'}}, {name:'Rotweiler', animal: {name: 'dog'}}], name: 'Bitey'},
    { breeds: [{name:'Yellow Labrador', animal: {name: 'dog'}}, {name:'Rotweiler', animal: {name: 'dog'}}], name: 'Bitey'}

];