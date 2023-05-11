export interface TableListParams  {
    name: string | undefined
    personId: string | undefined
}

export interface TableListType {
    id: number;
    name: string;
    personId: number;
    pin: boolean;
    organization: string;
    created: number
}

export interface SelectUser {
    id: number
    name: string
    organization: string
    ownerId: number
}