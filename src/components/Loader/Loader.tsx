import React from 'react'

const Loader = ({loading, message}: {loading: boolean, message: string}) => {

  return (
    <div className={`z-50 left-0 right-0 bottom-0 top-0 bg-black opacity-40 absolute mx-auto ${loading ? '' : 'hidden'}`}>
      <div className="flex items-center self-center justify-center h-full">
        <div className="flex items-center justify-center flex-col -translate-y-40">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-tertiary-dark" />
          <p className='text-tertiary-dark font-black text-xl mt-4'>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Loader
