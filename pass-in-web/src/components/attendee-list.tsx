import { Search, Ellipsis, ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from "lucide-react"
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { ChangeEvent, useState } from "react"
import { attendees } from "../data/attendees"

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList(){

    const [search, setSearch] = useState('')
    const [page, setPage ] = useState(0)

    function onSearchInputChanged(event: ChangeEvent <HTMLInputElement>) {
        setSearch(event.target.value)
    }

    return(
        <div className="flex flex-col gap-4">
            <div className="flex gap-3">
                <h1 className="text-slate-200 text-2xl font-bold">Participantes</h1>

                <div className="flex w-72 py-1 px-1 rounded-lg border border-white/10 items-center gap-3">
                    <Search className="size-4 text-emerald-200"/>
                    <input onChange={onSearchInputChanged} className="bg-transparent outline-none flex-1 border-0 p-0 text-sm" placeholder="Buscar Participante..." />
                </div>

                {search}
            </div>

            <Table>
                <thead>
                    <tr className="border-b border-white/10">
                        <TableHeader style={{width: 48}}>
                            <input type="checkbox" className="size-4 rounded bg-black/20 border border-white/10" />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data de Inscrição</TableHeader>
                        <TableHeader>Data do Check-in</TableHeader>
                        <TableHeader style={{width: 68}}></TableHeader> 
                    </tr>
                </thead>
                <tbody>
                    {attendees.map((page * 10, (page + 1) * 10) => {
                        return(
                            <tr key={attendees.id} className="border-b border-white/10 hover:bg-white/5">
                                <TableCell>
                                    <input type="checkbox" className="size-4 rounded bg-black/20 border border-white/10" />
                                </TableCell>
                                <TableCell>{attendees.id}</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1 ">
                                        <span className="text-white font-semibold">{attendees.name}</span>
                                        <span>{attendees.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{dayjs().to(attendees.createdAt)}</TableCell>
                                <TableCell>{dayjs().to(attendees.checkedInAt)}</TableCell>
                                <TableCell>
                                    <IconButton transparent>
                                        <Ellipsis className="size-4"/>
                                    </IconButton>
                                </TableCell>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="py-3 px-4 text-sm text-left text-zinc-300" colSpan={3}>
                            Mostrando 10 de 228 itens
                        </td>
                        <td className=" py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <span>Página 1 de 23</span>

                                    <div className="flex gap-1.5 ">
                                        <IconButton>
                                            <ChevronsLeft className="size-4"/>
                                        </IconButton>
                                        <IconButton>
                                            <ChevronLeft className="size-4"/>
                                        </IconButton>
                                        <IconButton>
                                            <ChevronRight className="size-4"/>
                                        </IconButton>
                                        <IconButton>
                                            <ChevronsRight className="size-4"/>
                                        </IconButton>
                                    </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}