import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentprompt,showResult,loading,resultData,setInput,input} = useContext(Context) 



  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello User.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>What are the reasons of deciling job market in India?</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Breifly summarize the topic: Machine learning in 2024</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Teams qualified for ICC Men's t20 World Cup 2024 </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>What is Redux Tookit?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            </>
            : <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentprompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<>
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    </>
                    : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    
                    }
                    
                </div>

            </div>
            
            }


            
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text"
                    placeholder='Enter a prompt here'
                    onChange={ (e) =>setInput(e.target.value)}
                    value={input}
                     />
                     <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={ ()=> onSent()} src={assets.send_icon} alt="" />:null}
                     </div>
                </div>
                <p className="bottom-info">Gemini may display inaccurate info, including about people ,so double check it's responses . Your privay and Gemini Apps  </p>
            </div>
        </div>
    </div>
  )
}

export default Main