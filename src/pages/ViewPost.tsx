import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import Image from "../components/imageprev";

export default function ViewPost() {
  return (
    <>
      <Navbar />
      <h2>View Post page</h2>
      <li><Link to="../MakePost">MakePost</Link></li>
      <li><Link to="../ViewPost">ViewPost</Link></li>
      <Image />
    </>
  )
}