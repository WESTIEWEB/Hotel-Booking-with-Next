import React, { FC, PropsWithChildren } from 'react'

type SearchProps = PropsWithChildren<{
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;

const Search: FC<SearchProps> = ({ searchTerm, handleSearchChange}) => {

  return (
    <div className='w-full md:w-1/3 lg:w-auto mb-4 md:mb-0'>
      <label className='block mb-2 text-black text-sm font-medium'>
        Search
      </label>
      <input 
        type='search' 
        id='search'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleSearchChange}
        className='w-full dark:bg-black rounded leading-tight py-3 px-4 capitalize focus:outline-none placeholder:dark:text-white placeholder:text-black'
      />
    </div>
  )
}

export default Search
