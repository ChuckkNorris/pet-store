// export enum AnimalType {
//     Dog = 0,
//     Cat = 1,
//     Hamster = 2
// }

export class AnimalType {
    constructor(public value: string) {}
    toString() {
        return this.value;
    }

    static dog = new AnimalType("Dog");
    static cat = new AnimalType("Cat");
}

export interface Animal {
    animalType: AnimalType;
    breeds: string[];
    name: string;
    age: number;

}

export const ANIMALS: Animal[] = [
    { animalType: AnimalType.dog, breeds: ['Yellow Labrador', 'Rotweiler'], name: 'Bitey', age: 4},
    { animalType: AnimalType.dog, breeds: ['Husky', 'Wolf'], name: 'Shadow', age: 1},
    { animalType: AnimalType.dog, breeds: ['Dalmation'], name: 'Lucky', age: 2},
    { animalType: AnimalType.cat, breeds: ['Siamese'], name: 'Mittens', age: 3},
];