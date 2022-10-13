import axios from "axios";
export const getStaticPaths = async () =>{
    let res ; 
    const idspaths = [
        {params:  {id:"1"}},
        {params: {id:"2"}},
        {params: {id:"3"}},
        {params: {id:"4"}},
        {params: {id:"5"}},
        {params: {id:"6"}}
    ] 
       res =  await axios.get('https://jsonplaceholder.typicode.com/users')
    const paths = idspaths
    //res.data.map(ninja=>{  return ({params: {id:ninja.id.toString()}})})
    return {paths : idspaths, fallback: true} 
}





export const getStaticProps = async (context)=>{
    const id = context.params.id;
    console.log(id);
    const {data} =  await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    return {props: {ninja : data}}
}





function details({ninja}) {
  if(!ninja){
    return "... loading"
  }
    return (
         <div className="container m-auto" > 
       <div className="container m-auto rounded-md bg-gray-100 my-10 p-5 ">
      <h1 className=" text-3xl text-gray-500 ">{ninja.name}</h1>
      <p className="text-lg text-gray-400" > {ninja.email}</p>
    </div>
    </div> );
}

export default details;