

export default function NavBar() {


    return(
        <div className="w-full bg-white border-2 h-13">
            <nav className="flex justify-evenly items-center w-full h-13">
                <ul className="flex flex-row w-1/2  items-center gap-10 justify-center">
                    <div className="">
                        <a href="" className="text-2xl text-indigo-600">Blog</a>
                    </div>
                    <div className="flex h-10">
                        <input type="search" className=" border-2 border-black rounded-md w-96 border-zinc-950 hover:" placeholder="Search..." style={{ textAlign:'center'}} />
                    </div>
                </ul>
                <ul className="grid grid-rows-1 grid-cols-3 w-1/4 items-center ">
                    <div className=" transition flex w-25 bg-white text-black rounded-md h-13 justify-center hover:bg-indigo-600 duration-300 hover:text-white hover:underline underline-offset-2">
                        <li className="text-xl"><a href="">Meus Posts</a></li>
                    </div>
                    <div className="transition flex w-25 bg-white text-black rounded-md h-13 justify-center hover:bg-indigo-600 duration-300 hover:text-white hover:underline underline-offset-2 mr-4">
                        <li className="text-xl"><a href="">Criar Post</a></li>
                    </div>
                    <li className="w-10 h-10 rounded-full bg-zinc-950"></li>
                </ul>
            </nav>
        </div>
    )
}