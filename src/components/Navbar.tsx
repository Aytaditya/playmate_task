

interface NavbarItemProps {
    title: string;
    classProps?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps} hover:text-[#818080]`}>
            {title}
        </li>
    );
}



const Navbar = () => {

    const arr = ["Market", "Exchange", "Tutorials", "Wallets"]
    

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-3">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <h1 className="font-bold text-3xl font-serif cursor-pointer" >Playmate</h1>
            </div>

            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-intial">
                {arr.map((item, index) => {
                    return <NavbarItem title={item} key={index} />
                })}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>




        </nav>
    )
}

export default Navbar