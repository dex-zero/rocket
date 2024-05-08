import { Search, Ellipsis, ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from "lucide-react"


export function AttendeeList(){
    return(
        <div className="flex flex-col gap-4">
            <div className="flex gap-3">
                <h1 className="text-slate-200 text-2xl font-bold">Participantes</h1>

                <div className="flex w-72 py-1 px-1 rounded-lg border border-white/10 items-center gap-3">
                    <Search className="size-4 text-emerald-200"/>
                    <input className="bg-transparent outline-none flex-1 border-0 p-0 text-sm" placeholder="Buscar Participante..." />
                </div>
            </div>

            <div className="border border-white/10 rounded">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th style={{width: 48}}className="py-3 px-4 text-sm font-semibold text-left">
                                <input type="checkbox" className="size-4 rounded bg-black/20 border border-white/10" />
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data do Check-In</th>
                            <th style={{width: 68}} className="py-3 px-4 text-sm font-semibold text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 10 }).map((_, i) => {
                            return(
                                <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                        <input type="checkbox" className="size-4 rounded bg-black/20 border border-white/10" />
                                    </td>
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">12383</td>
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                        <div className="flex flex-col gap-1 ">
                                            <span className="text-white font-semibold">Diego Schell Fernandes</span>
                                            <span>diego@rocketseat.com.br</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">7 dias atrás</td>
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">3 dias atrás</td>
                                    <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                        <button className="rounded-md border border-white/10 bg-black/20 p-1.5">
                                            <Ellipsis className="size-4"/>
                                        </button>
                                    </td>
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
                                            <button className="rounded-md border border-white/10 bg-white/10 p-1.5">
                                                <ChevronsLeft className="size-4"/>
                                            </button>
                                            <button className="rounded-md border border-white/10 bg-white/10 p-1.5">
                                                <ChevronLeft className="size-4"/>
                                            </button>
                                            <button className="rounded-md border border-white/10 bg-white/10 p-1.5">
                                                <ChevronRight className="size-4"/>
                                            </button>
                                            <button className="rounded-md border border-white/10 bg-white/10 p-1.5">
                                                <ChevronsRight className="size-4"/>
                                            </button>
                                        </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}