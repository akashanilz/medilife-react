import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link , useHistory} from 'react-router-dom'
import axios from '../../axios'
import './Header.css'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
function Header() {
  const [auth, setAuth] = useState('')
  const [hide, setHide] = useState(false)
  useEffect(() => {
    if(!localStorage.getItem("token")){
      history.push('/login')
    }else{
     
      getData()
       
       
    }
    
  }, [])
  function getData(){
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
      headers: { Authorization: `Bearer ${token.token} `}
  };
    axios.get("dashboard", config).then((response)=>{
      setAuth(response.data)
      setHide(true)
      console.log(response.data)
      })
  }
  console.log(auth.role)

  const history = useHistory()
    const navigation = [ 
      { name: 'Dashboard', to: '/dashboard', current: true },
      { name: 'Employees', to: '/dashboard/viewEmployees', current: false },
      // { name: 'Clients', to: '/dashboard/viewClients', current: false },
      
    ] 
    const navigation1 = [ 
      { name: 'Dashboard', to: '/dashboard', current: true },
      
    ]
  

 
    return (
        <div>
           <div class=" sticky top-0 z-50">
        <Disclosure as="nav" className="bg-gray-800 ">
   {({ open }) => (
     <>
       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
         <div className="relative flex items-center justify-between h-16">
           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
             {/* Mobile menu button*/}
             <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
               <span className="sr-only">Open main menu</span>
               {open ? (
                 <XIcon className="block h-6 w-6" aria-hidden="true" />
               ) : (
                 <MenuIcon className="block h-6 w-6" aria-hidden="true" />
               )}
             </Disclosure.Button>
           </div>
           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
             <div className="flex-shrink-0 flex items-center">
               <img
                 className="block lg:hidden h-8 w-auto"
                 src="https://covidpcrtestathome.com/images/1.png"
                 alt="Workflow"
               />
               <img
                 className="hidden lg:block h-8 w-auto"
                 src="https://covidpcrtestathome.com/images/1.png"
                 alt="Workflow"
               />
             </div>
             <div className="hidden sm:block sm:ml-6">
               {auth.role===1 && hide &&<div className="flex space-x-4">
                 {navigation.map((item) => (
                   <Link
                     key={item.name}
                     to={item.to}
                     className={classNames(
                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                       'px-3 py-2 rounded-md text-sm font-medium no-underline'
                     )}
                     aria-current={item.current ? 'page' : undefined}
                   >
                     {item.name}
                   </Link>
                 ))}
               </div>}
               {auth.role===2 &&<div className="flex space-x-4">
                 
                 {navigation1.map((item) => (
                   <Link
                     key={item.name}
                     to={item.to}
                     className={classNames(
                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                       'px-3 py-2 rounded-md text-sm font-medium no-underline'
                     )}
                     aria-current={item.current ? 'page' : undefined}
                   >
                     {item.name}
                   </Link>
                 ))}
               </div>}
               {auth.role===3 &&<div className="flex space-x-4">
                 
                 {navigation1.map((item) => (
                   <Link
                     key={item.name}
                     to={item.to}
                     className={classNames(
                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                       'px-3 py-2 rounded-md text-sm font-medium no-underline'
                     )}
                     aria-current={item.current ? 'page' : undefined}
                   >
                     {item.name}
                   </Link>
                 ))}
               </div>}
             </div>
           </div>
           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         

             {/* Profile dropdown */}
             <Menu as="div" className="ml-3 relative">
               <div>
                 <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                   <span className="sr-only">Open user menu</span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fffffc" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
                 </Menu.Button>
               </div>
               <Transition
                 as={Fragment}
                 enter="transition ease-out duration-100"
                 enterFrom="transform opacity-0 scale-95"
                 enterTo="transform opacity-100 scale-100"
                 leave="transition ease-in duration-75"
                 leaveFrom="transform opacity-100 scale-100"
                 leaveTo="transform opacity-0 scale-95"
               >
                 <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                   {/* <Menu.Item>
                     {({ active }) => (
                       <p
                         className={classNames(active ? 'bg-gray-100 no-underline cursor-pointer' : '', 'cursor-pointerblock px-4 py-2 text-sm text-gray-700 no-underline')}
                       >
                         Your Profile
                       </p>
                     )}
                   </Menu.Item> */}
                   <Menu.Item>
                 
                     {({ active }) => (
               <div>
                          <p className="profile">{auth.user.name}</p> 
                          <p
                         onClick={()=>{
                           setHide(false)
                           localStorage.clear()
                           history.push("/")
                         }}
                         className={classNames(active ? 'bg-gray-100 no-underline cursor-pointer text-center'  : '', 'cursor-pointer block no-underline px-4 py-2 text-center text-sm text-gray-700')}
                       >
                         Sign out
                       </p>
               </div>

                     )}
                   </Menu.Item>
                 </Menu.Items>
               </Transition>
             </Menu>
           </div>
         </div>
       </div>

       <Disclosure.Panel className="sm:hidden">
         <div className="px-2 pt-2 pb-3 space-y-1">
            
           {navigation.map((item) => (
             <Link
               key={item.name}
               to={item.to}
               className={classNames(
                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                 'block px-3 py-2 rounded-md text-base font-medium no-underline'
               )}
               aria-current={item.current ? 'page' : undefined}
             >
               {item.name}
             </Link>
           ))}
         </div>
       </Disclosure.Panel>

     </>
   )}
 </Disclosure>
 </div>
     </div>
    )
}

export default Header
