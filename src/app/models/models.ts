export interface Breed {
    id?: string;
    animalType?: AnimalType;
    name?: string;
}

export enum AnimalType {
    Unspecified = 0,
    Dog = 1,
    Cat = 2
}