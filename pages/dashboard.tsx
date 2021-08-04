import Nav from "../components/Nav"
import {IoIosWallet,IoIosSearch} from 'react-icons/io'
import {BsThreeDots} from 'react-icons/bs'
import {FiDownload, FiUpload} from 'react-icons/fi'

const Dashboard = ()=>{
    return(
        <> 
            <Nav className='navb'>
                <div>
                    <img src="/Logo.svg" alt="eolex-logo" />
                </div>
                <div className="elements sideElements">
                    <div className='circle smallPad  thick text'>
                        DA
                    </div>

                    <div className='flexAl midW '>Logout</div>

                </div>
            </Nav>

            <main>
                <div className="topBoard">

                    <div className='flexgrow'>
                        <div className="flexBtw">
                            <div className="smallf">
                                <div className='smallf head'>My Wallet</div>
                                <div className='flexAl'>
                                    <IoIosWallet className='wallet' />
                                </div>
                            </div>

                            <div className=' fullflex thicker border' style={{padding:'0.3em'}}>
                                <div className='flexAl'>
                                    <BsThreeDots/>
                                </div>
                            </div>
                        </div>

                        <div className="grow nestM">
                            <div className='flexC'>
                                <img src="metamask.png" alt="" />
                            </div>

                            <div className="flexC">
                            <div className='doubleflex nestM'>
                                <div className="head flexAl">
                                    No Wallet Address found
                                </div>

                                <div className='flexAl'>
                                    <button style={{background:'#233447',borderColor:'#233447'}} 
                                     className='padBtn thick white curveBtn'>
                                         Add Address
                                    </button>
                                </div>

                            </div>


                            </div>
                        </div>
                    </div>

                    <div className='chart'>


                    </div>
                </div>

                <div className='section'>


                    <div className="table">
                        <div></div>
                        <div>
                        
                            <div className='flexBtw'>
                            <div className="head flexAl thicker">Coinlist</div>

                            <div className='multiflex flexAl'>
                                <form action="" className="relative">
                                    <input className='searchBtn' placeholder='Search coin' type="text" />
                                    <button type="submit" className='invisibleBtn fullFlex'>
                                        <IoIosSearch className='cursor' />
                                    </button>
                                </form>

                                <div className="hashCards smallf">
                                    <div className='flexAl'>Download CSV</div>
                                    <div className='flexAl'>
                                        <FiDownload style={{fontSize:'120%'}}  />
                                    </div>
                                </div>

                            </div>

                        </div>
                            <table className='middleM fullW'>
                                <thead className='tableHeader'>
                                    <tr>
                                        <td>S/N</td>
                                        <td>Name</td>
                                        <td>Market Cap</td>
                                        <td>Price(USD)</td>
                                        <td>24Hr High</td>
                                        <td>24Hr Low</td>
                                    </tr>
                                </thead>
                                <tbody className='smallM'>
                                    <tr>
                                        <td>1</td>
                                        <td>Bitcoin</td>
                                        <td>230340404934</td>
                                        <td>45</td>
                                        <td>12334(+5%)</td>
                                        <td>12334(-5.55%)</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>




                </div>

            </main>
        
        </>
    )
}

export default Dashboard