import {useEffect, useState} from "react";
import {ClientDtoCreate} from "../types/client.dto";
import {BuildTable} from "../components/Table";

export function Client() {
    const [data, setData] = useState<ClientDtoCreate[]>([]);

    useEffect(() => {
        fetch("/api/client").then((res)=> res.json()).then((data)=>{setData(data)}).catch((err)=>{
            console.error(err);
            setData([
                {
                    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
                    name: "Jeremiah Rallinshaw",
                    lastName: "Rallinshaw",
                    email: "jrallinshaw0@naver.com",
                    phone: "+57 721 917 2990",
                    address: "187 Morrow Place",
                    city: "Puerto Colombia",
                    state: "active",
                    profile: null,
                    createdAt: "2024-05-13T00:07:49.989Z",
                    updatedAt: "2024-05-13T00:07:49.989Z"
                },
                {
                    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
                    name: "Jessica Gildersleaves",
                    lastName: "Gildersleaves",
                    email: "jgildersleaves1@uol.com.br",
                    phone: "+7 691 818 0766",
                    address: "205 Reindahl Center",
                    city: "Bogorodsk",
                    state: "inactive",
                    profile: null,
                    createdAt: "2024-05-13T00:07:50.042Z",
                    updatedAt: "2024-05-13T00:07:50.042Z"
                },
                {
                    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
                    name: "Joshua Lambart",
                    lastName: "Lambart",
                    email: "jlambart2@google.co.jp",
                    phone: "+82 748 218 5493",
                    address: "16738 Express Circle",
                    city: "Anseong",
                    state: "active",
                    profile: null,
                    createdAt: "2024-05-13T00:07:50.096Z",
                    updatedAt: "2024-05-13T00:07:50.096Z"
                },
                {
                    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
                    name: "Darcee Lampart",
                    lastName: "Lampart",
                    email: "dlampart3@cbslocal.com",
                    phone: "+351 678 762 2111",
                    address: "9069 Shasta Circle",
                    city: "Valejas",
                    state: "inactive",
                    profile: null,
                    createdAt: "2024-05-13T00:07:50.145Z",
                    updatedAt: "2024-05-13T00:07:50.145Z"
                },
            ])
        });
    }, []);
  return (
    <div>
        <BuildTable data={data} />
    </div>
  );
}
