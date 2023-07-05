
import { FC, ReactNode} from "react"
import Sidebar from "./components/sidebar"


const Layout:FC<{children:ReactNode}> =({children})=>{

    return (
        <>         
       
  <Sidebar className="bg-white text-black">  
    {children}
  </Sidebar>
        </>
    )
}

export default Layout