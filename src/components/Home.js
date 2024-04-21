import React from "react";
import img1 from "../images/image1.png"
import img2 from "../images/img3.png"
import bitget from "../images/bitget.png"
import okx from "../images/okx.png"
import binance from "../images/binance.png"
import img3 from "../images/img4.png"
import img5 from "../images/img5.png"
import Header from "./Header";
import img6 from "../images/sec6img.png"
import img7 from "../images/binance1.png"
import img8 from "../images/okx1.png"
import img9 from "../images/byte1.png"
import img10 from "../images/max1.png"
import img11 from "../images/max2.png"
import img12 from "../images/max3.png"
import Easy from "./Easy";







const Home = () => {
    return (
        <>

            <div id="main-page">

                <Header />

                <div className="container">

                    <div className="row">
                        <div className="col-md-6">

                            <h1 className="copy">Crypto Copy <br></br>
                                Trading</h1>

                            <p className="start-para">Start investing in cryptocurrencies together with professional traders and benefit from their experience. Start growing your crypto investment on autopilot with full transparency and control on WunderTrading's copy trading platform.</p>

                            <button className="button1">Get Started</button>


                        </div>

                        <div className="col-md-6">


                            <img id="img1" src={img1} alt="" />
                        </div>
                    </div>

                </div>


                <div className="container-fluid" id="sec-2">

                    <div className="container">

                        <div className="row">


                            <div className="col-md-4">

                                <h3 className="eighty">80k + (TRADES)</h3>

                            </div>


                            <div className="col-md-4">

                                <h3 className="eighty">12k + (BOTS)</h3>

                            </div>



                            <div className="col-md-4">

                                <h3 className="eighty">$320M + (VOLUME)</h3>

                            </div>

                        </div>

                    </div>
                </div>



                {/*========================= sec-3 =========================== */}

                <div className="container" id="sec3">
                    <div className="row">
                        <div className="col-12">

                            <h1 className="connected">Connected exchanges</h1>

                        </div>



                        <div className="col-md-3" id="sec311">


                            <button className="btn2">

                                <img className="btnimg" src={img2} alt="" />

                            </button>

                        </div>


                        <div className="col-md-3">


                            <button className="btnbitget">

                                <img className="btnimgbitget" src={bitget} alt="" />

                            </button>

                        </div>




                        <div className="col-md-3">


                            <button className="btnokx">

                                <img className="btnimgokx" src={okx} alt="" />

                            </button>

                        </div>


                        <div className="col-md-3">


                            <button className="btn2">

                                <img className="btnimg" src={binance} alt="" />

                            </button>

                        </div>

                    </div>


                </div>


                {/*========================= sec-4 =========================== */}



                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <img className="img3" src={img3} alt="img3" />


                        </div>

                        <div className="col-md-6">

                            <h1 className="what">What is copy trading?</h1>

                            <p className="coy">Copy-trading (aka mirror trading and shadow trading) is a great tool for cryptocurrency investors who would like to grow their cryptocurrency portfolio on autopilot. Copy trading crypto is very dynamic. Our advanced copy trading system will copy and execute the trades of the professional traders that you follow automatically.</p>
                            <button className="button1">Get Started</button>



                        </div>

                    </div>

                </div>







                {/*========================= sec-5 =========================== */}



                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <img className="img5" src={img5} alt="img3" />


                        </div>

                        <div className="col-md-6">

                            <h1 className="how">How to copy Traders on Wunder Trading?</h1>

                            <h6 className="connect">Connect Exchange</h6>

                            <p className="coy">In your exchange account, create an API and add it in the copy trading app  WunderTrading.</p>


                            <h6 className="connect">Select Trader</h6>

                            <p className="coy">Open the Marketplace tab, analyse the available Traders and choose the one you would like to follow.</p>
                            <button className="button1">Get Started</button>

                        </div>

                    </div>

                </div>


                {/*========================= sec-6 =========================== */}



                <div className="container">
                    <div className="row">
                        <div className="col-12">



                            <h1 className="how1">How does copy trading work?</h1>
                            <p className="once">Once a Trader creates an order in his account at WunderTrading, our copy trading platform will copy that trade and it will be replicated on your account automatically. In other words, Traders create signals that are then sent to copy-trading.You will see all strategies in the Positions tab of the console and you will also have full control over it. As a copy-trader you can close or edit the strategy, or wait for the exit signal from the Trader. Our crypto bot trading service runs 24/7.Apart from the main copy-trading function, Copy-Traders have a number of options that adds flexibility and more control over the process of copy-trading. For example, when a Copy-Trader decides to start copying a specific Trader, he can specify the custom size of funds used for copy-trading. It is possible to choose a share of the portfolio that will be used for copy-trading or a fixed amount. For example a Copy-Trader specifies $100 to be used as a fixed amount custom setting, then every trade opened by the Trader will use $100 of the Copy-Traders available funds.</p>


                            <img className="img6" src={img6} alt="img6" />
                        </div>

                    </div>

                </div>


                {/*========================= sec-6 =========================== */}


                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h1 className="more">More Copy Trading</h1>


                        </div>

                    </div>
                </div>


                <div className="container text-center" id="sec6">
                    <div className="row">
                        <div className="col-md-4">


                            <button className="morebtn1">

                                <img className="btnimgokx" src={img7} alt="" />

                            </button>


                        </div>



                        <div className="col-md-4">


                            <button className="morebtn1">

                                <img className="btnimgokx" src={img8} alt="" />

                            </button>


                        </div>



                        <div className="col-md-4">


                            <button className="morebtn1">

                                <img className="btnimgokx" src={img9} alt="" />

                            </button>


                        </div>




                            <div className="col-md-4">

                                <button id="btngap" className="morebtn1">

                                    <img className="btnimgokx" src={img10} alt="" />

                                </button>


                            </div>


                            <div className="col-md-4">


                                <button id="btngap" className="morebtn1">

                                    <img className="btnimgokx" src={img11} alt="" />

                                </button>


                            </div>


                            <div className="col-md-4">


                                <button id="btngap" className="morebtn1">

                                    <img className="btnimgokx" src={img12} alt="" />

                                </button>


                            </div>

                        </div>

                    </div>





<div className="container text-center" id="sec7">
    <div className="row">
        <div className="col-12">

        <h1 className="start">Start 7-day trial on a PRO plan</h1>
<p className="p">A lifetime Free plan is available.</p>

<button className="button11">Get Started</button>


        </div>

    </div>

</div>



<Easy/>
                </div>







        </>
    )
}

export default Home