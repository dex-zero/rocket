import { Search, Ellipsis, ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"


export function AttendeeList(){

    function onSearchInputChanged(event) {
        console.log(event?.target.value)
    }

    return(
        <div className="flex flex-col gap-4">
            <div className="flex gap-3">
                <h1 className="text-slate-200 text-2xl font-bold">Participantes</h1>

                <div className="flex w-72 py-1 px-1 rounded-lg border border-white/10 items-center gap-3">
                    <Search className="size-4 text-emerald-200"/>
                    <input onChange={onSearchInputChanged} className="bg-transparent outline-none flex-1 border-0 p-0 text-sm" placeholder="Buscar Participante..." />
                </div>
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
                    {Array.from({ length: 10 }).map((_, i) => {
                        return(
                            <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                                <TableCell>
                                    <input type="checkbox" className="size-4 rounded bg-black/20 border border-white/10" />
                                </TableCell>
                                <TableCell>12383</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1 ">
                                        <span className="text-white font-semibold">Diego Schell Fernandes</span>
                                        <span>diego@rocketseat.com.br</span>
                                    </div>
                                </TableCell>
                                <TableCell>7 dias atrás</TableCell>
                                <TableCell>3 dias atrás</TableCell>
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