import { ArrowLeft, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { CardListEvent } from '../components/card-list-event'
import { useQuery } from '@tanstack/react-query'
import { getEventsUsers } from '../api/get-events-users'

export function ListEvents() {
  const navigate = useNavigate()

  function nextPageHome() {
    navigate(-1)
  }

  const { data: result } = useQuery({
    queryKey: ['events'],
    queryFn: () =>
      getEventsUsers({
        usersId: 'cmfvpgqg40000gfqzcyiyqn2m',
      }),
  })

  console.log(result)

  return (
    <div className='max-w-5xl mx-auto px-4 py-8'>
      <header className='bg-zinc-800 flex items-center justify-between p-4 rounded-2xl'>
        <h2 className='text-zinc-200 text-xl'>Lista de Eventos</h2>

        <button className='cursor-pointer' onClick={nextPageHome}>
          <ArrowLeft className='text-zinc-200' />
        </button>
      </header>

      <section className='flex items-start gap-10'>
        <div className='mt-10 space-y-3 flex-1'>
          <CardListEvent />
          <CardListEvent />
          <CardListEvent />
          <CardListEvent />
          <CardListEvent />
          <CardListEvent />
          <CardListEvent />
          <CardListEvent />
        </div>

        <div className='w-96 mt-10 space-y-8'>
          <div>
            <h2 className='text-zinc-200 font-bold text-xl'>
              Lista de Convidados
            </h2>
            <p className='text-zinc-300'>
              Envie o convite para seus convidados, clique no botão Enviar
              convites.
            </p>
          </div>

          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <h3 className='text-zinc-200'>Título do Evento</h3>
              <time className='text-sm text-zinc-300'>12 Fev 2026</time>
            </div>

            <div className='flex flex-wrap gap-3'>
              {Array.from({ length: 6 }).map((_, index) => {
                return (
                  <div
                    className='bg-zinc-700 w-fit px-1 flex items-center gap-2 rounded-md'
                    key={index}
                  >
                    <span className='text-base text-zinc-200'>
                      jessica@outlook.com
                    </span>
                    <button>
                      <X className='text-zinc-200 size-4' />
                    </button>
                  </div>
                )
              })}
            </div>

            <button className='bg-orange-500 w-full py-3 uppercase rounded-xl font-bold cursor-pointer'>
              Enviar Convites
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
