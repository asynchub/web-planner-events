import { Calendar1, Ticket } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CreateEventModal } from '../components/create-event-modal'
import { useState } from 'react'

export function Home() {
  const [openCloseModal, setOpenCloseModal] = useState(false)

  const handleOpenCloseModal = () => {
    setOpenCloseModal(!openCloseModal)
  }

  return (
    <div className='min-h-screen flex items-center justify-center relative'>
      <div className='max-w-3xl w-full mx-auto px-4'>
        <div className='flex items-center gap-2'>
          <Ticket className='size-10 text-gray-300' />
          <h1 className='text-gray-300 text-3xl font-medium'>Event Planner</h1>
        </div>

        <p className='text-gray-300'>
          Convide seus amigos, e deixe seu evento mais organizado
        </p>

        <form className='mt-5 space-y-5'>
          <div className='flex items-center gap-2'>
            <input
              className='bg-zinc-800 flex-1 h-16 rounded-xl px-4 outline-0 border border-zinc-600 text-gray-200'
              type='text'
              placeholder='Título do Evento'
            />

            <div className='flex items-center gap-2 bg-zinc-800 w-60 h-16 rounded-xl px-2 outline-0 border border-zinc-600 text-gray-200'>
              <Calendar1 className='size-6 text-gray-300' />
              <input
                className=''
                type='datetime-local'
                placeholder='Data é Hora do Evento'
              />
            </div>
          </div>

          <textarea
            className='bg-zinc-800 w-full h-32 rounded-xl p-4 outline-0 border border-zinc-600 text-gray-200'
            placeholder='Uma descrição do Evento...'
          ></textarea>

          <button
            type='button'
            onClick={handleOpenCloseModal}
            className='block bg-orange-500 w-full h-16 rounded-xl font-bold cursor-pointer'
          >
            CONTINUAR
          </button>

          <Link className='block text-center text-gray-200' to='/list-events'>
            Lista de Eventos
          </Link>
        </form>
      </div>

      {openCloseModal && (
        <CreateEventModal onHandleOpenCloseModal={handleOpenCloseModal} />
      )}
    </div>
  )
}
