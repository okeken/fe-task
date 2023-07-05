"use client"
import { FaHome, FaUsers, FaCog } from 'react-icons/fa';
import { FC, ReactNode, useState } from "react"
import { usePathname, } from 'next/navigation'
import './sidebar.css'
import MainStackLogo from '../icons/logo';


const menuItems =[
    {
    id:0,
    title:"Dashboard",
    children:[
        {
            id:0,
            title:"Item 1"
        },
        {
            id:1,
            title:"Item 2"
        },
        {
            id:3,
            title:"Item 3"
        },
    ]
    },
    {
        id:1,
        title:"About"
        },
]
const Sidebar:FC<{children:ReactNode, className?:string}> =({children, className})=>{
    const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const pat = usePathname() ?? "/"

  
    return (
        <>  
        <div className={`  flex ${className}`}>
                <div className='border w-72 mt-0 block '>
                  <div className='ml-14 mt-6'> 
                  <MainStackLogo />
                  </div>
        <nav>       

       <ul className=''>
        {
            menuItems.map(menu=>(<li className=''  key={menu.id}>
              
                    <div className='border-l-2 mb-3 pl-14  border-blue-900 '>
                {menu.title}
                        </div>                   
                {menu.children ? <ul className='pl-14'>
                 {   menu.children.map(subMenu=>(<li className='' key={menu.id+subMenu.id}>
                        {subMenu.title}
                 </li>))}
                </ul>:null}
               
            </li>))
        }
       </ul>
        
            </nav>   
            </div> 
            <div className='border w-full p-3 px-10'>
                <div className='capitalize text-primary-black text-[1.25rem] leading-[1.5rem] mb-12'>
                    {pat.split("/")?.[1]}
                </div>
               {children}
                </div>     
        </div>

  
        </>
    )
}

export default Sidebar