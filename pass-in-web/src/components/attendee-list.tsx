import lupa from '../assets/lupa-icon.svg'

export function AttendeeList(){
    return(
        <div className="flex gap-3">
            <h1 className="text-slate-200 text-2xl font-bold">Participantes</h1>

            <div className="flex w-72 py-1 px-1 rounded-lg border border-white/10 items-center gap-3">
                <img src={lupa} className='size-6'/>
                <input className="bg-transparent outline-none flex-1" placeholder="Buscar Participante..." />
            </div>
        </div>
    )
}