import Image from "next/image";
import Link from "next/link";
function Navbar() {
    return ( 
        <div className="container m-auto">
           <h1  className=" text-gray-100 text-5xl font-bold p-4 pb-1">
           <Link href={'/'} >
            <div className="flex items-center">
        <div className="w30">
        <Image  src={"/logo.png"} width="100%" height={'100%'}  className=" bg-gray-400 rounded-md h-full w-full"/>
            
        </div>
             <span className="text-gray-400 ml-3">NEXT<span className="text-yellow-200">.app</span></span>
             </div></Link>
            
            </h1> 
           <div
           
           className="flex justify-end gap-5 mx-5 mb-2 text-gray-200"> 
           <Link href={"/home"} > home</Link>
            <Link href={"/About"} > about</Link>
            <Link href={"/Contact"} > contact</Link></div>
            <hr />
        </div>
    
     );
}

export default Navbar;