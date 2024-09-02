import Link from "next/link"

const navItems=[
  {title:"Home",
    url:"/",
  },
  {title:"About us",
    url:"/about",
  },
  {
    title:"Restourants",
    url:"/restaurants",
    
  },
  {
    title:"Popular Foods",
    url:"/foods",
  },
  {
    title:"Contact us",
    url:"/contact",
  }
]

const NavItems = ({activeItem}:{activeItem:number}) => {
  return (
    <div>
      {navItems.map((item,index)=>(
        <Link 
        href={item.url}
        key={item.url}
       className={`px-5 text-[18px] font-Poppins  text-white
        ${activeItem === index && "text-[#37b686]"}`}
        >
        {item.title}
        
        
        </Link>
      ))}
      
    </div>
  )
}

export default NavItems
