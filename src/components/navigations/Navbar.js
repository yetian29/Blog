import { Popover} from '@headlessui/react'
import MenuIcon from '../Icons/MenuIcon'
import XIcon from '../Icons/XIcon'
import SearchIcon from '../Icons/SearchIcon'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'


const navigation = [
  { name: 'Blog', href: '/blog', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

const [term, setTerm] = useState()


const handleChange = (e) => {
  setTerm(e.target.value)
}
const onSubmit = e => {
  e.preventDefault()
  setTimeout(() => window.location.href=('/search/' + term), 0.2);
  setTerm('')
}



  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-white shadow-sm lg:static lg:overflow-y-visible sticky top-0',
            
          )

        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8 ">
                
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink to="/">
                      <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt="Logo"
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-[350px] md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <form onSubmit={(e) => onSubmit(e)} className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <button type='submit' className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </button>
                        <input
                          id="search"
                          name="search"
                          onChange={(e) => handleChange(e)}
                          required
                          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </form>
                  </div>
                </div>


                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 md:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>


                 <div className="hidden md:flex md:items-center md:justify-end xl:col-span-4">
                    <NavLink to="/" className="text-lg dark:hover:text-white hover:text-gray-900 text-gray-600 dark:text-dark-txt text-md font-semibold">
                        Blog
                    </NavLink>
                    <NavLink to="/about" className="mx-4 text-lg dark:hover:text-white hover:text-gray-900 text-gray-600 dark:text-dark-txt text-md font-semibold">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="text-lg dark:hover:text-white hover:text-gray-900 text-gray-600 dark:text-dark-txt text-md font-semibold">
                        Contact
                    </NavLink>
                </div>
               
              </div>
            </div>
            <Popover.Panel as="nav" className="md:hidden" aria-label="Global">
                  <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                          'block rounded-md py-2 px-3 text-base font-medium'
                        )}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  )
}