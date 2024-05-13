import { Badge } from "./Badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRoot,
    TableRow,
} from "./Table/TableRoot"
import {ClientDtoCreate} from "../types/client.dto";
import {formatDate} from "../utils/dateFormater";
import { Input } from "./Form/Input"

export function BuildTable({data}:{data:ClientDtoCreate[]}) {

    return (
        <>
            <div className={'text-center'}>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                    List of clients
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    List of clients with their details information and status
                </p>
            </div>
            <div className={'md:w-[90%] w-full mx-auto'}>
                <div className={'flex justify-between items-center w-full mx-auto gap-5'}>
                    <div className="flex-1 space-y-2">
                        <Input
                            inputClassName={"w-full"}
                            placeholder="Search clients"
                            id="search"
                            name="search"
                            type="search"
                        />
                    </div>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                        Add new client
                    </button>
                </div>

                <TableRoot
                    className="mt-8 w-full mx-auto border-t-2 border-indigo-600 bg-blue-600/10 rounded-xl">
                    <Table>
                        <TableHead>
                            <TableRow className={''}>
                                <TableHeaderCell>Name</TableHeaderCell>
                                <TableHeaderCell>LastName</TableHeaderCell>
                                <TableHeaderCell>Status</TableHeaderCell>
                                <TableHeaderCell>City</TableHeaderCell>
                                <TableHeaderCell>Phone</TableHeaderCell>
                                <TableHeaderCell className="text-right">Address</TableHeaderCell>
                                <TableHeaderCell className="text-right">
                                    Joined at
                                </TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="">{item.name}</TableCell>
                                    <TableCell>{item.lastName}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={item.state === "inactive" ? "warning" : "success"}
                                        >
                                            {item.state}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell className="text-right">{item.address}</TableCell>
                                    <TableCell className="text-right">{formatDate(item.createdAt)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableRoot>
            </div>
        </>
    )
}
