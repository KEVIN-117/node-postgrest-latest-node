import {UUID} from "node:crypto";

interface ClientDto {
    id: UUID;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    profile: string | null;
    createdAt: string;
    updatedAt: string;
}

export type ClientDtoCreate = ClientDto;
