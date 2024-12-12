import { useState } from "react"
import Dio from "../assets/Dio.png"
import Jojo from "../assets/Jojo.png"
import Polnareff from "../assets/Polnareff.png"
import Avdol from "../assets/Avdol.png"
import kakyoin from "../assets/kakyoin.png"
import koichi from "../assets/Koichi.png"


const PointMain = () => {
  const [next, setNext] = useState({ display: "block" })
  const [countPoint1, setCountPoint1] = useState(0)
  const [countPoint2, setCountPoint2] = useState(0)
  const [countPoint3, setCountPoint3] = useState(0)
  const [countPoint4, setCountPoint4] = useState(0)
  const [countPoint5, setCountPoint5] = useState(0)
  const [countPoint6, setCountPoint6] = useState(0)
  const [next2Players, setNext2Players] = useState({ display: "none" })
  const [next4Players, setNext4Players] = useState({ display: "none" })
  const [next6Players, setNext6Players] = useState({ display: "none" })

  const nextSection = () => {
    setNext({ display: "none" })
    let playerPage = document.querySelector(".Player-section")
    playerPage.style.display = "block"
  }

  const Players2 = () => {
    setNext2Players({ display: "flex" })
    let player2Page = document.querySelector(".Players2-section")
    let playerPage = document.querySelector(".Player-section")
    playerPage.style.display = "none"
    player2Page.style.display = setNext2Players
  }

  const Players4 = () => {
    setNext4Players({ display: "flex" })
    let player4Page = document.querySelector(".Players4-section")
    let player2Page = document.querySelector(".Players2-section")
    let playerPage = document.querySelector(".Player-section")
    playerPage.style.display = "none"
    player2Page.style.display = "none"
    player4Page.style.display = setNext4Players
  }

  const Players6 = () => {
    setNext6Players({ display: "flex" })
    let player6Page = document.querySelector(".Players6-section")
    let player4Page = document.querySelector(".Players4-section")
    let player2Page = document.querySelector(".Players2-section")
    let playerPage = document.querySelector(".Player-section")
    playerPage.style.display = "none"
    player2Page.style.display = "none"
    player4Page.style.display = "none"
    player6Page.style.display = setNext6Players
  }

  const countPoint1Handler = () => {
    setCountPoint1(prevCount => prevCount + 1);
  };

  const countPoint2Handler = () => {
    setCountPoint2(prevCount => prevCount + 1);
  };
  const countPoint3Handler = () => {
    setCountPoint3(prevCount => prevCount + 1);
  };
  const countPoint4Handler = () => {
    setCountPoint4(prevCount => prevCount + 1);
  };
  const countPoint5Handler = () => {
    setCountPoint5(prevCount => prevCount + 1);
  };
  const countPoint6Handler = () => {
    setCountPoint6(prevCount => prevCount + 1);
  };


  return (
    <>
      <div className="container">
        <section className="welcome-section" style={next}>
          <div className="welcome-title">
            <h1>Welcome</h1>
          </div>
          <div className="Next">
            <button onClick={nextSection} className="NextBtn">Next</button>
          </div>
        </section>
        <section className="Player-section">
          <div className="Player-text">
            <h3>
              How many players will be participating?
            </h3>
          </div>
          <div className="Player-category">
            <div className="Player2">
              <button onClick={Players2} className="Player2Btn">
                2 Players
              </button>
            </div>
            <div className="Player4">
              <button onClick={Players4} className="Player4Btn">
                4 Players
              </button>
            </div>
            <div className="Player6">
              <button onClick={Players6} className="Player6Btn">
                6 Players
              </button>
            </div>
          </div>
        </section>
        <section className="Players2-section" style={next2Players}>
          <div className="Player-1">
            <div className="Player-title">
              <h2>Player 1</h2>
            </div>
            <div className="Player-image">
              <img src={Dio} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint1}
              </p>
            </div>
            <button onClick={countPoint1Handler} className="winCountBtn">
              Win count
            </button>
          </div>
          <div className="Player-2">
            <div className="Player-title">
              <h2>Player 2</h2>
            </div>
            <div className="Player-image">
              <img src={Jojo} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint2}
              </p>
            </div>
            <button onClick={countPoint2Handler} className="winCountBtn">
              Win count
            </button>
          </div>
        </section>
        <section className="Players4-section" style={next4Players}>
          <div className="Player-1">
            <div className="Player-title">
              <h2>Player 1</h2>
            </div>
            <div className="Player-image">
              <img src={Dio} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint1}
              </p>
            </div>
            <button onClick={countPoint1Handler} className="winCountBtn">
              Win count
            </button>
          </div>
          <div className="Player-2">
            <div className="Player-title">
              <h2>Player 2</h2>
            </div>
            <div className="Player-image">
              <img src={Jojo} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint2}
              </p>
            </div>
            <button onClick={countPoint2Handler} className="winCountBtn">
              Win count
            </button>
          </div>
          <div className="Player-3">
            <div className="Player-title">
              <h2>Player 3</h2>
            </div>
            <div className="Player-image">
              <img src={Polnareff} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint3}
              </p>
            </div>
            <button onClick={countPoint3Handler} className="winCountBtn">
              Win count
            </button>
          </div>
          <div className="Player-4">
            <div className="Player-title">
              <h2>Player 4</h2>
            </div>
            <div className="Player-image">
              <img src={Avdol} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint4}
              </p>
            </div>
            <button onClick={countPoint4Handler} className="winCountBtn">
              Win count
            </button>
          </div>
        </section>
        <section className="Players6-section" style={next6Players}>
          <div className="Player-1">
            <div className="Player-title">
              <h2>Player 1</h2>
            </div>
            <div className="Player-image">
              <img src={Dio} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint1}
              </p>
            </div>
            <button onClick={countPoint1Handler} className="winCountBtn">
              Win count
            </button>
          </div>
          <div className="Player-2">
            <div className="Player-title">
              <h2>Player 2</h2>
            </div>
            <div className="Player-image">
              <img src={Jojo} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint2}
              </p>
            </div>
            <button onClick={countPoint2Handler} className="winCountBtn">
              Win count
            </button>
          </div>
          <div className="Player-3">
            <div className="Player-title">
              <h2>Player 3</h2>
            </div>
            <div className="Player-image">
              <img src={Polnareff} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint3}
              </p>
            </div>
            <button onClick={countPoint3Handler} className="winCountBtn">
              Win count
            </button>
          </div>
          <div className="Player-4">
            <div className="Player-title">
              <h2>Player 4</h2>
            </div>
            <div className="Player-image">
              <img src={Avdol} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint4}
              </p>
            </div>
            <button onClick={countPoint4Handler} className="winCountBtn">
              Win count
            </button>
          </div>
          <div className="Player-5">
            <div className="Player-title">
              <h2>Player 5</h2>
            </div>
            <div className="Player-image">
              <img src={kakyoin} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint5}
              </p>
            </div>
            <button onClick={countPoint5Handler} className="winCountBtn">
              Win count
            </button>
          </div>
          <div className="Player-6">
            <div className="Player-title">
              <h2>Player 6</h2>
            </div>
            <div className="Player-image">
              <img src={koichi} alt="" />
            </div>
            <div className="displayPoint">
              <p>
                {countPoint6}
              </p>
            </div>
            <button onClick={countPoint6Handler} className="winCountBtn">
              Win count
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default PointMain