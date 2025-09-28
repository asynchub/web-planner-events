import { Ticket } from 'lucide-react'

export function CardListEvent() {
  return (
    <div className='bg-zinc-800 flex items-center justify-between p-3 rounded-md border border-zinc-600/30'>
      <div className='flex items-center gap-2'>
        <Ticket className='size-10 text-orange-500' />
        <span className='text-zinc-200'>Titulo do evento</span>
      </div>

      <button className='text-orange-400'>Ver convidados</button>
    </div>
  )
}
