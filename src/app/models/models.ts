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

export interface Pet extends BaseModel {
    name?: string;
    size?: Size;
    birthday?: Date;
    animalType?: AnimalType;
    breeds?: string[];
    image?: string;
}

export interface Breed extends BaseModel {
    name?: string;
    animal?: Animal;
}

export interface Animal extends BaseModel {
    name?: string;
}

export interface ImgurImage {
    id: string;
    title;
    description;
    datetime;
    type;
    animated;
    width;
    height;
    size;
    views;
    bandwidth;
    vote;
    favorite;
    nsfw;
    section;
    account_url;
    account_id;
    is_ad;
    in_gallery;
    deletehash;
    name;
    link;
}

