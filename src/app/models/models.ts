export interface BaseModel {
    id?: number;
}

export interface Pet extends BaseModel {
    name?: string;
    birthday?: Date;
    breeds?: Breed[];
    imageUrl?: string;
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

