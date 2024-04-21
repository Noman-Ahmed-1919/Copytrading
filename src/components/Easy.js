import React from "react";
import hand1 from "../images/hand1.png"
import hand2 from "../images/hand2.png"
import hand3 from "../images/hand3.png"



const Easy = () =>{
    return(
        <>


        <div className="container text-center">
            <div className="row">
                <div className="col-12">

                            
        <h6 className="h6why">Why Start</h6>
        <h2 className="h2copy">Copy Trading</h2>
        <p className="hhwunder">WunderTrading is a copy-trading software to earn from cryptocurrency investment <br></br> automatically that is easy, transparent and safe.</p>

                </div>


                <div className="col-md-4 custom-width">

                    <div className="banner text-center">
                        <img src={hand1} alt="hand1" />

                        <h4 className="easy">Easy</h4>
                        <p className="this">All traders have fully transparent trade records. You can analyse all the trades, statistics and metrics of every trader that is available in the marketplace and select the one that is right for your risk/reward appetite.</p>

                    </div>

                </div>


                <div className="col-md-4 custom-width">

<div className="banner text-center">
    <img src={hand2} alt="hand1" />

    <h4 className="easy">Transparent</h4>
    <p className="this">All the trading activity happens through API, which allows the trader to execute the trades without the option of withdrawing any funds.</p>

</div>

</div>



<div className="col-md-4 custom-width">

<div className="banner text-center">
    <img src={hand3} alt="hand1" />

    <h4 className="easy">Safe</h4>
    <p className="this">This is the easiest way to profit from crypto markets if you do not have time to monitor the markets yourself. Follow professional traders and enjoy the benefits of being in the driver's seat of every trade.</p>

</div>

</div>

            </div>




        </div>

        
        
        </>
    )
}

export default Easy