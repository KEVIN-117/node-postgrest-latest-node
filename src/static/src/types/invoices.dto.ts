interface InvoicesDto {
    id: string;
    amount: number;
    date: string;
    status: string;
    client_id: string;
    created_at: string;
    updated_at: string;
    name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    profile: string | null;
}

export type InvoicesDtoCreate = InvoicesDto;

