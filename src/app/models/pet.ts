export interface Pet extends BaseModel {
    name?: string;
    size?: Size;
    birthday?: string;
    animalType?: AnimalType;
    breeds?: string[];
}

export interface Breed extends BaseModel {
    name?: string;
}

export interface BaseModel {
    id?: number;
}

export enum Size {
    Unspecified = 0,
    Small = 1,
    Medium = 2,
    Large = 3
}

export enum AnimalType {
    Unspecified = 0,
    Dog = 1,
    Cat = 2
}