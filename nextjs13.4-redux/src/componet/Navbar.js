"use client";
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const item = useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", marginBlock:"30px"}}>
         <Link className='navLink' style={{fontWeight:"bolder", fontSize:"30px", marginTop:"22px"}} href={"/"}>Samarth Store</Link>
         <div>
            <Link className='navLink' style={{fontWeight:"bolder", fontSize:"22px"}} href={"/"}>Home </Link>
            <Link className='navLink' style={{fontWeight:"bolder",marginRight:"20px", fontSize:"22px"}} href={"/cart"}>Cart </Link>
            <span style={{fontWeight:"bolder", fontSize:"20px"}}>items:{item.length}</span>
         </div>
    </div>
  )
}

export default Navbar