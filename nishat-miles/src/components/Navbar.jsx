import React from 'react'



const nevItems = [
  {
    name: "NEW IN ",
    path: "#Newin",
  },
  {
    name: "WOMEN",
    path: "#Women",
  },
  {
    name: "LUXURY",
    path: "#Luxury",
  },
  {
    name: "MEN",
    path: "#men",
  },
  {
    name: "HOME",
    path: "#home",
  },
  {
    name: "ACCESSORIES",
    path: "#accessories",
  },
];

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full my-2 font-mont'>
        <div>
          <ul className="hidden md:flex list-none gap-5 py-1">
            {nevItems.map((item) => (
              <li
                className="hover:text-[#D9D9D9] cursor-pointer text-sm font-medium px-3"
                key={item.path}
              >
                <a to={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
