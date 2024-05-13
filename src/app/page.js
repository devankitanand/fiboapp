'use client'
import {useState} from 'react'
import Image from "next/image";
import marketing from "/public/assets/marketing.png";
import heartbeat from "/public/assets/heartbeat.gif";
import fire from "/public/assets/fire.png";
import drop from "/public/assets/drop.png";
import weightlift from "/public/assets/weightlifting.png";
import night from "/public/assets/night.png";
import footstep from "/public/assets/footstep.png";
import List from "@/component/List";

export default function Home() {
  const [totalItems, setTotalItems] = useState(5); 
  const [itemsChecked, setItemsChecked] = useState(0);

  const handleCheck = (isChecked) => {
    setItemsChecked((prev) => isChecked ? prev + 1 : prev - 1);
  };

  const percentage = ((itemsChecked / totalItems) * 100).toFixed(0);
  return (
    <>
    <div className="container">
      <div className="Statusbox px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600">
        <div className="goalicon">
          <Image src={marketing} width={60} height={60} alt="Goal" />
          </div>
        <div className="progressinfo">
          <div>
          <span className="texthead">Your Daily Goal Almost Done</span>
          <div className="subtext pb-2">{itemsChecked} of {totalItems} Completed</div>
          
          </div>
          <div className="progressbarfull">
              <div className="progressbar" style={{ width: `${percentage}%` }}></div>
          </div>
          <div className="percentage mt-1 ">{percentage}</div>
        </div>
      </div>
      {/* statusbox ends */}

      <div className="Todaysgoal mt-5">
        <div className="flex justify-between items-center">
        <div className="texthead">Today&apos;s Goal</div>
        <div><Image src={heartbeat} width={35} height={35} alt="logo"/></div>
        </div>
        <div>
          <List onCheck={handleCheck} icon={weightlift} title="Workout for 20 mins" color="purple"/>
          <List onCheck={handleCheck} icon={fire} title="Read book for 15 mins" color="orange"/>
          <List onCheck={handleCheck} icon={footstep} title="30 mins walk" color="green"/>
          <List onCheck={handleCheck} icon={night} title="Sleep at 11 sharp" color="lime"/>
          <List onCheck={handleCheck} icon={drop} title="Drink 3L water" color="blue"/>
          
        </div>
        
      </div>

    </div>
    </>
  );
}
