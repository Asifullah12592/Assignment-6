import Image from "next/image";
import Header from './Header/page';
import {Content , Blog , Blog2 , Blog3 , Blog4} from "./content/page";




export default function Home() {
  return (
    <>
<Header/>
<Content/>
<Blog/>
<Blog2/>
<Blog3/>
<Blog4/>

   
 </>
  );
}
