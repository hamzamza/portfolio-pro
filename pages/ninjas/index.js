import axios from "axios";
import Link from "next/link";
export const getStaticProps = async () => {
  let res;
  try {
    res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("first fitch");
  } catch (error) {
    console.log(error);
  }
  return {
    props: { ninjas: res.data },
  };
};
const Ninjas = ({ ninjas }) => {
  return (
    <div className="text-gray-200 my-5 container m-auto bg-gray-100 p-3 rounded shadow-white shadow-md">
      <ul>
        {ninjas.map((ninja) => (
          <Link href={'/ninjas/'+ ninja.id} key={ninja.id}>
           <div
              className=" rounded bg-white p-3 m-3 shadow-sm hover:border-l-yellow-200 hover:border-l-4 cursor-pointer hover:shadow-md text-gray-600 font-bold ">
              {ninja.name}
          </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Ninjas;
