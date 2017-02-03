export interface BaseModel {
    id?: number;
}

export class Pet implements BaseModel {
    name?: string;
    birthday?: Date;
    breed?: Breed;
    imageUrl?: string;
    image?: any;
    
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

