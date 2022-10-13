import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
export const getStaticProps = async ()=>{
      return {
          props : { name : "hamza"}
      }
  }
// here we noticed that we use .module.css to avoid the conflict between css classes
function Home({name}) {
 console.log(name);
    return (
      <> 
      <Head>
        <title> home</title>
        <meta name="keywords" content="hamza"/>
      </Head>
 <div className="  min-h-screen container m-auto mb-10">
    <div className="w-6/12 m-auto p-5 bg-gray-100 rounded-md  text-gray-600 mt-20">

    <h2  className=" font-bold text-center  text-xl uppercase from-neutral-900 mb-8  " > Home</h2>
<div className="p-4"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum maxime est incidunt sapiente omnis dolorem rerum unde possimus quasi voluptate voluptatem autem placeat ipsam quos aliquam, cupiditate excepturi iusto beatae.</p>
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum maxime est incidunt sapiente omnis dolorem rerum unde possimus quasi voluptate voluptatem autem placeat ipsam quos aliquam, cupiditate excepturi iusto beatae.</p>
</div>

<div className="flex justify-center my-5">
<button  className="p-2 border-2 border-blue-300 bg-blue-200 rounded-md uppercase text-blue-600"> <Link href="/ninjas"> get people</Link></button>

</div>
</div>


  </div> 
  </>
   );
}

export default Home;