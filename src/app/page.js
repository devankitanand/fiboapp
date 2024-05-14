'use client'
import {useState} from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import marketing from "/public/assets/marketing.png";
import heartbeat from "/public/assets/heartbeat.gif";
import fire from "/public/assets/fire.png";
import drop from "/public/assets/drop.png";
import weightlift from "/public/assets/weightlifting.png";
import night from "/public/assets/night.png";
import footstep from "/public/assets/footstep.png";
import arrows from  "/public/assets/arrows.png";
import gym from "/public/assets/gym.png";
import fastfood from "/public/assets/fastfood.png";
import stats from "/public/assets/stats.png";
import List from "@/component/List";

export default function Home() {
  const router = useRouter()
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
          <div className="percentage mt-1 ">{percentage}%</div>
        </div>
      </div>
      {/* progress ends */}

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
        {/* todays goal ends */}

        <div className='swipee mt-4 '>
          <div className='track'>Track</div>
          <div className='text-sm font-medium text-white'>Swipe to track all</div>
          <div className='mr-3'><Image src={arrows} width={20} height={20} alt="swipe"/></div>
        </div>

        {/* swipe to track all ends */}

        <div className='graph mt-4 p-4'>
          <div className='percentlist'>
              <div className='pb-4'>100%</div>
              <div className='pb-4'>80%</div>
              <div className='pb-4'>60%</div>
              <div className='pb-4'>40%</div>
              <div className='pb-4'>20%</div>
          </div>
          <div className='graphcontainer ml-2'>
            <div className='graphmain'>

              <div className='graphbar mx-2' style={{height: '80%'}}></div>
              <div className='graphbar mx-2' style={{height: '60%'}}></div>
              <div className='graphbar mx-2' style={{height: '100%'}}></div>
              <div className='graphbar mx-2' style={{height: '20%'}}></div>
              <div className='graphbar mx-2' style={{height: '40%'}}></div>
              <div className='graphbar mx-2' style={{height: '100%'}}></div>
              <div className='graphbar mx-2' style={{height: '20%'}}></div>
              <div className='graphbar mx-2' style={{height: '40%'}}></div>
              <div className='graphbar mx-2' style={{height: '60%'}}></div>
            </div>
            <div className='date flex mt-2 '>
              <div className='ml-2'>28/4</div>
              <div className='ml-2'>30/4</div>
              <div className='ml-2'>02/5</div>
              <div className='ml-2'>11/5</div>
              <div className='ml-3'>15/5</div>
              <div className='ml-3'>30/4</div>
              <div className='ml-2'>02/5</div>
              <div className='ml-2'>11/5</div>
              <div className='ml-3'>15/5</div>
            </div>
          </div>
        </div>
        {/* end of graph section */}

    </div>
    <div className='bottomnav'>
      <div onClick={() => router.push('/')}>
        <div className='ml-1'><Image src={fire} width={20} height={20} alt='logo'/></div>
        <div className='textb active'>Page1</div>
      </div>
      <div onClick={() => router.push('/page2')}>
        <div className='ml-1'><Image src={gym} width={20} height={20} alt='logo'/></div>
        <div className='textb text-white'>Page2</div></div>
      <div onClick={() => router.push('/page3')}>
        <div className='ml-1'><Image src={fastfood} width={20} height={20} alt='logo'/></div>
        <div className='textb text-white'>Page3</div></div>
      <div onClick={() => router.push('/page4')}>
        <div className='ml-1'><Image src={stats} width={20} height={20} alt='logo'/></div>
        <div className='textb text-white'>Page4</div></div>
    </div>
    </>
  );
}
