function Footer() {
    return ( <div className="container m-auto grid gap-2 grid-cols-3 text-gray-200 "> 
        <ul className=" col-span-1">
            <li>home</li>
            <li>email</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        <div className="col-span-1 flex flex-col items-center">
        <ul className="">
            <li>home</li>
            <li>email</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        </div>
        <div className=" col-span-1 flex flex-col items-end">
        <ul >
            <li>home</li>
            <li>email</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        </div>
       
      
<div className=" col-span-3  text-xs text-center">copy right 2022 developped by hamza</div>
    </div> );
}

export default Footer;