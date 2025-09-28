import { AtSign, User, X } from 'lucide-react'

interface CreateEventModalProps {
  onHandleOpenCloseModal: () => void
}

export function CreateEventModal({
  onHandleOpenCloseModal,
}: CreateEventModalProps) {
  return (
    <div className='bg-black/80 fixed inset-0 flex items-center justify-center'>
      <div className='bg-zinc-800 space-y-10 max-w-[640px] h-fit mx-auto w-full rounded-xl border border-zinc-600/30 p-5'>
        <header className='flex items-center justify-between'>
          <h2 className='text-xl text-zinc-200'>Selecionar convidados</h2>

          <button className='cursor-pointer' onClick={onHandleOpenCloseModal}>
            <X className='text-zinc-200' />
          </button>
        </header>

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

        <div className='w-full h-[1px] bg-zinc-600/30' />

        <form className='space-y-6'>
          <div className='bg-black flex items-center gap-2 h-14 rounded-xl px-4'>
            <User className='text-zinc-200' />
            <input
              className='outline-0 w-full bg-transparent text-gray-200'
              type='text'
              placeholder='Nome'
            />
          </div>

          <div className='bg-black flex items-center gap-2 h-14 rounded-xl px-4'>
            <AtSign className='text-zinc-200' />
            <input
              className='outline-0 w-full bg-transparent text-gray-200'
              type='text'
              placeholder='E-mail'
            />
          </div>

          <button className='bg-orange-500 w-fit px-5 py-6 rounded-xl font-bold cursor-pointer'>
            Convidado
          </button>
        </form>
      </div>
    </div>
  )
}
