import {InvoiceTable} from "../components/InvoiceTable";
import { useState, useEffect } from 'react'
import {InvoicesDtoCreate} from "../types/invoices.dto";
export function Invoice() {
    const [data, setData] = useState<InvoicesDtoCreate[]>([])

    useEffect(() => {
        fetch('/api/invoices/client')
        .then(response => response.json())
        .then(data => setData(data)).catch((err) => {
            console.log(err)
            setData([
                {
                    "id": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
                    "amount": 15795,
                    "date": "2022-12-06T04:00:00.000Z",
                    "status": "pending",
                    "client_id": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
                    "created_at": "2024-05-13T00:07:49.989Z",
                    "updated_at": "2024-05-13T00:07:49.989Z",
                    "name": "Jeremiah Rallinshaw",
                    "last_name": "Rallinshaw",
                    "email": "jrallinshaw0@naver.com",
                    "phone": "+57 721 917 2990",
                    "address": "187 Morrow Place",
                    "city": "Puerto Colombia",
                    "state": "active",
                    "profile": null
                },
                {
                    "id": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
                    "amount": 20348,
                    "date": "2022-11-14T04:00:00.000Z",
                    "status": "pending",
                    "client_id": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
                    "created_at": "2024-05-13T00:07:50.042Z",
                    "updated_at": "2024-05-13T00:07:50.042Z",
                    "name": "Jessica Gildersleaves",
                    "last_name": "Gildersleaves",
                    "email": "jgildersleaves1@uol.com.br",
                    "phone": "+7 691 818 0766",
                    "address": "205 Reindahl Center",
                    "city": "Bogorodsk",
                    "state": "active",
                    "profile": null
                },
                {
                    "id": "3958dc9e-787f-4377-85e9-fec4b6a6442a",
                    "amount": 3040,
                    "date": "2022-10-29T04:00:00.000Z",
                    "status": "paid",
                    "client_id": "3958dc9e-787f-4377-85e9-fec4b6a6442a",
                    "created_at": "2024-05-13T00:07:50.195Z",
                    "updated_at": "2024-05-13T00:07:50.195Z",
                    "name": "Ramonda Cuttin",
                    "last_name": "Cuttin",
                    "email": "rcuttin4@latimes.com",
                    "phone": "+86 684 140 8857",
                    "address": "34 Mosinee Junction",
                    "city": "Bilian",
                    "state": "active",
                    "profile": null
                },
                {
                    "id": "50ca3e18-62cd-11ee-8c99-0242ac120002",
                    "amount": 44800,
                    "date": "2023-09-10T04:00:00.000Z",
                    "status": "paid",
                    "client_id": "50ca3e18-62cd-11ee-8c99-0242ac120002",
                    "created_at": "2024-05-13T00:07:50.145Z",
                    "updated_at": "2024-05-13T00:07:50.145Z",
                    "name": "Darcee Lampart",
                    "last_name": "Lampart",
                    "email": "dlampart3@cbslocal.com",
                    "phone": "+351 678 762 2111",
                    "address": "9069 Shasta Circle",
                    "city": "Valejas",
                    "state": "active",
                    "profile": null
                },
                {
                    "id": "76d65c26-f784-44a2-ac19-586678f7c2f2",
                    "amount": 34577,
                    "date": "2023-08-05T04:00:00.000Z",
                    "status": "pending",
                    "client_id": "76d65c26-f784-44a2-ac19-586678f7c2f2",
                    "created_at": "2024-05-13T00:07:50.245Z",
                    "updated_at": "2024-05-13T00:07:50.245Z",
                    "name": "Eldin Shenton",
                    "last_name": "Shenton",
                    "email": "eshenton5@icq.com",
                    "phone": "+62 196 609 6662",
                    "address": "384 Graceland Crossing",
                    "city": "Labuhanjambu",
                    "state": "active",
                    "profile": null
                },
            ])
        })
    }, [])
    return(
        <div>
            <InvoiceTable data={data} />
        </div>
    )
}
