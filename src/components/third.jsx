import React from "react";
import { GiSelfLove, GiHeadbandKnot } from 'react-icons/gi'
import { Link } from "react-router-dom";
import second_img from '../images/057A2871.jpg'


const Third = () => {

    const handleClick = () => {
        console.log('button clicked');
        const latitude = 17.5188566;
        const longitude = 76.1865786;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

        window.open(url, '_blank');
    }
    return (<>
        <div className="third-fullscreen-image flex justify-center">
            <div className="third-page-div text-pink flex flex-col items-center">
                <div className="w-full flex flex-col items-center justify-center pt-4">
                    <span style={{fontSize:'20px', textAlign:'center'}} className="heading mb-6 underline">
                        WHERE ??
                    </span>
                    <span style={{fontSize:'28px', textAlign:'center'}} className="heading flex flex-col items-center justify-center mb-2">
                        <span>VIKAS FUNCTION HALL,</span>
                    </span>
                    <span style={{fontSize:'18px', textAlign:'center'}} className="heading flex flex-col items-center justify-center mb-2">
                        <span>Byagehalli Road, Vikas Nagar,</span>
                        <span>Akkalkot, Dist. Solapur - 413216</span>
                    </span>
                    <span style={{fontSize:'18px', textAlign:'center'}} className="heading flex flex-col items-center justify-center mb-4">
                        <span>Contact - 9482887651</span>
                    </span>
                </div>
                <div className="w-full flex flex-col items-center justify-center pt-14">
                    <span style={{fontSize:'20px', textAlign:'center'}} className="heading mb-4 underline">
                        WHEN ??
                    </span>
                    <span style={{fontSize:'18px', textAlign:'center'}} className="heading flex flex-col items-center justify-center mb-2">
                        <span>DECEMBER 7, 2023</span>
                        <span>AT 12:18 PM</span>
                    </span>
                </div>
                <div className="flex flex-row w-full items-center justify-center mt-14">
                    <div className="w-3/5 p-2 pt-0 flex items-center justify-center">
                        {/* <Link to={'/third'} className="w-full"> */}
                            <button className="heading w-full pt-2 pb-2 rounded-lg shadow-lg bg-pink border-pink text-white" onClick={handleClick}>
                                View on map.. 
                            </button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Third;