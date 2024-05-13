'use client'
import {useState} from 'react'
import Image from "next/image"
import check from "/public/assets/check.png"

const List = (props) => {
    const [isChecked, setIsChecked]=useState(false)
    const checked=()=>{
        setIsChecked(!isChecked);
        props.onCheck(!isChecked);
    }
  return (
    <div className="list ">
        <div className="flex">
        <div className="iconbg">
            <Image src={props.icon} width={20} height={20} alt="logo"/>
        </div>
        <div className="listtitle flex items-center  ">{props.title}</div>
        </div>
        
        <div className={`checkbox ${isChecked && props.color}`} onClick={checked}>
            {isChecked && <Image src={check} width={20} height={20} alt="check"/>}
            </div>
       
    </div>
  )
}

export default List