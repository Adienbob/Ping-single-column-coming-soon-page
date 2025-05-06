import Image from "next/image";
import myLogo from "../images/logo.svg";


export default function Logo() {
   return <Image src={myLogo} alt="Logo Image" className="logo"/>;
}