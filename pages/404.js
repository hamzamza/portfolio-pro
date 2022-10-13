import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NOt404() {
    const navigate = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
          navigate.push('/')
          
        }, 3000)
    }, [])
  return (
    <div className="text-2xl text-white container m-auto   min-h-screen ">
      <div className="m-10 ">
        <div className="flex gap-10 items-center">
          <h1> Oooops ...</h1>
          <span className="text-red-400 text-6xl">404 Error </span>
        </div>
        <h2>that page cannot be found . </h2>
        <p>
          Go back to the{" "}
          <span className=" text-blue-500 decoration-solid decoration-blue-500">
            {" "}
            <Link href={"/home"}> home </Link>
          </span>
        </p>
      </div>{" "}
    </div>
  );
}

export default NOt404;
