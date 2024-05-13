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
import {InvoicesDtoCreate} from "../types/invoices.dto";
import {formatDate} from "../utils/dateFormater";
import { Input } from "./Form/Input"
import {CurrencyFormatter} from "../utils/currenciFomatter";
import { RiDeleteBinFill, RiPencilFill, RiTimeFill, RiCheckDoubleFill } from "@remixicon/react"

export function InvoiceTable({data}:{data:InvoicesDtoCreate[]}) {

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
                            placeholder="Search invoices"
                            id="search"
                            name="search"
                            type="search"
                        />
                    </div>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                        Add new Invoice
                    </button>
                </div>

                <TableRoot
                    className="mt-8 w-full mx-auto border-t-2 border-indigo-600 bg-blue-600/10 rounded-xl">
                    <Table>
                        <TableHead>
                            <TableRow className={''}>
                                <TableHeaderCell>ID</TableHeaderCell>
                                <TableHeaderCell>Client</TableHeaderCell>
                                <TableHeaderCell>Email</TableHeaderCell>
                                <TableHeaderCell>Date</TableHeaderCell>
                                <TableHeaderCell>Amount</TableHeaderCell>
                                <TableHeaderCell className="text-right">Estate</TableHeaderCell>
                                <TableHeaderCell className="text-right">
                                    Emmited at
                                </TableHeaderCell>
                                <TableHeaderCell className="text-center">
                                    Action
                                </TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="">{item.id}</TableCell>
                                    <TableCell>{item.name} { item.last_name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{formatDate(item.date)}</TableCell>
                                    <TableCell>{CurrencyFormatter(item.amount)}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={item.status === "pending" ? "error" : "success"}
                                            className={"flex justify-evenly items-center"}
                                        >
                                            {item.status === "pending" && <RiTimeFill className="size-4 shrink-0" />}
                                            <span>{item.status}</span>
                                            {item.status === "paid" && <RiCheckDoubleFill className="size-4 shrink-0" />}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-center">{formatDate(item.created_at)}</TableCell>
                                    <TableCell className="flex justify-center items-center gap-2 ">
                                        <button className="rounded border-2 border-yellow-600 text-base dark:bg-yellow-600/10 dark:text-yellow-500 dark:ring-yellow-400/20 p-1">
                                            <RiPencilFill className="size-7 shrink-0" />
                                        </button>

                                        <button className="rounded border-2 border-red-500 text-base dark:bg-red-500/10 dark:text-red-500 dark:ring-red-500/20 p-1">
                                            <RiDeleteBinFill className="size-7 shrink-0" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableRoot>
            </div>
        </>
    )
}
