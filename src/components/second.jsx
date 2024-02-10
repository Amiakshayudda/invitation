import React from "react";
import { GiSelfLove, GiHeadbandKnot } from 'react-icons/gi'
import { Link } from "react-router-dom";
import second_img from '../images/057A2871.jpg'


const Second = () => {
    return (<>
        <div className="second-fullscreen-image flex justify-center">
            {/* <img src="https://antphotography.in/wp-content/uploads/2019/08/DSC1755-Edit.jpg"></img> */}
            <div className="second-page-div text-black flex flex-col items-center">
                <div className="w-full flex flex-col items-center justify-center pt-8">
                    <span style={{fontSize:'14px', textAlign:'center'}} className="heading mb-6 text-black">
                        We invite you to celebrate our wedding..
                    </span>
                    <span style={{fontSize:'36px', textAlign:'center'}} className="heading flex items-center justify-center mb-6">
                        <span className="mr-4">Shruti</span><span className="mr-4"><GiSelfLove /></span><span className="">Sampann</span>
                    </span>
                    {/* <span style={{fontSize:'18px', textAlign:'center'}} className="heading">
                        December 7, 2023
                    </span> */}
                </div>
                <div className="flex flex-row w-full items-center justify-center">
                    <div className="w-3/5 p-2 pt-0 flex items-center justify-center">
                        <Link to={'/third'} className="w-full">
                            <button className="heading w-full pt-2 pb-2 rounded-lg shadow-lg bg-pink border-pink text-white">
                                {/* Click to know more... */}
                                When and where ?? 
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Second;