import "./cardStyles.css";
import Card from "./cardCmpts/Card";
import React from "react";
import { useState } from "react";
import { CgEditFlipH } from "react-icons/cg";
import { useAuth } from "../context";
import { updateDoc , doc , getDoc , arrayUnion} from 'firebase/firestore';
import { db } from './firebaseconfig';
import { useNavigate } from 'react-router-dom';
export default function CardApp() {
  const months = [];
  const year = [];
  var [focus, setFocus] = useState("none");
  for (let i = 1; i < 13; i++) {
    months.push(i);
  }
  for (let i = new Date().getFullYear(); i < 2030; i++) {
    year.push(i);
  }
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [flip, setFlip] = useState(false);
  const [cvv, setCvv] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expDate, setExpDate] = useState({ month: "10", year: 21 });
  const type = "visa"; /* or Discover,MasterCard HBK's Custom feature */
  const {user} = useAuth()
  let iid = user.uid
  const updatehavecard = async function(iid)  {
    const userDoc = doc(db,"userinformation",iid)
    const newFields = {haveCard: true}
    await updateDoc(userDoc,newFields)
}
  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    if (
      /^[0-9]{16}$/.test(cardNumber) &&
      /^[a-zA-Z ]{5,15}$/.test(cardHolder.trim()) &&
      /^[0-9]{3}$/.test(cvv) &&
      checkExpDate() !== "Expired"
    ) {
      setSuccess(true);
      updatehavecard(iid)
      setError("Your information have been captured successfully!");
      setTimeout(() => {
        setError("");
        setSuccess(false);
        navigate(-1)
      }, 5000);
    } else {
      setError("Some of your information are invalid! please retry");
      setTimeout(() => {
        setError("");
        setSuccess(false);
      }, 3000);
    }
  };
  const handleInputChange = (e) => {
    var value = e.target.value;
    var type = e.target.name;
    if (type === "number") {
      if (
        !isNaN(value) &&
        !isNaN(value.charAt(value.length - 1)) &&
        value.length <= 16 &&
        value.charAt(value.length - 1) !== " "
      ) {
        setCardNumber(value);
      }
    } else if (type === "name") {
      console.log(value);
      if (/^[a-zA-Z ]{1,15}$/.test(value.trim())) {
        setCardHolder(value);
      } else {
        setError(
          "Names must contain letters from A-Z only and less than 15 characters"
        );
        setTimeout(() => {
          setError("");
        }, 4000);
      }
    } else if (type === "cvv") {
      console.log(value);
      if (/^[0-9]{3}$/.test(value)) {
        setCvv(value);
      } else {
        if (!isNaN(value)) setCvv(value.substring(0, 3));
        setError(
          "CVV must contain numbers only and should be 3 characters only"
        );
        setTimeout(() => {
          setError("");
        }, 1500);
      }
    }
  };
  const handleInputFocus = (e) => {
    console.log(e.target.name);
    setFocus(e.target.name);
    if (e.target.name === "cvv") {
      setFlip(true);
    } else {
      setFlip(false);
    }
  };
  const checkExpDate = () => {
    var gap = expDate.year - new Date().getFullYear().toString().substring(2);
    if (gap < 1 && expDate.month < new Date().getMonth() + 1) {
      return "Expired";
    } else if (gap <= 1) {
      return "expires soon";
    } else {
      return null;
    }
  };
  return (
    <div className="CardApp">
      <form  className="cardForm" action="#" onSubmit={(e) => handleSubmit(e)}>
        <div
          onClick={() => {
            setFlip(!flip);
          }}
          className="cardFlip"
          style={{ background: flip ? "#a4d2f8" : "#001a2f" }}
        >
          {flip ? (
            <CgEditFlipH size="2em" />
          ) : (
            <CgEditFlipH size="2em" color="white" />
          )}
        </div>
        <Card
          cvv={cvv}
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          expDate={expDate}
          type={type}
          flip={flip}
          focus={focus}
        />
        <div className="inputs">
          <div
            id={success ? "success" : ""}
            className={error ? "error" : "d-none"}
          >
            {error}
          </div>
          <div className="cardInfo">
            <label className="cardLabel" htmlFor="cardNumber">Card Number</label>
            <input
              className="cardInput"
              type="tel"
              name="number"
              placeholder="Card Number"
              pattern="[\d]{16}"
              title="Numbers only (16 digits)"
              required
              value={cardNumber}
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
              onBlur={() => setFocus("none")}
            />
          </div>
          <div className="cardInfo">
            <label className="cardLabel" htmlFor="cardHolder">Card Holder</label>
            <input
            className="cardInput"
              type="text"
              name="name"
              placeholder="Card Name"
              pattern="^[a-zA-Z ]{5,15}$"
              title="Names must contain letters from A-Z only and less than 15 characters"
              required
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
              onBlur={() => setFocus("none")}
            />
          </div>
          <div className="beforeLast">
            <div className="date">
              <label className="cardLabel" htmlFor="ExpDate">Expiration Date</label>
              <span id="dateSelection">
                <select
                  value={expDate.month}
                  onFocus={(e) => handleInputFocus(e)}
                  onBlur={() => setFocus("none")}
                  onChange={(e) =>
                    setExpDate({ ...expDate, month: e.target.value })
                  }
                  name="month"
                  id="month"
                >
                  <option value="Month" disabled>
                    Month
                  </option>
                  {months.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                <select
                  onFocus={(e) => handleInputFocus(e)}
                  onBlur={() => setFocus("none")}
                  onChange={(e) =>
                    setExpDate({
                      ...expDate,
                      year: e.target.value.substring(2)
                    })
                  }
                  name="year"
                  id="year"
                >
                  <option value="Year" disabled>
                    Year
                  </option>
                  {year.map((e) => (
                    <option key={e}>{e}</option>
                  ))}
                </select>
                <span className={checkExpDate() ? "expired" : "none-expired"}>
                  {checkExpDate()}
                </span>
              </span>
            </div>
            <div className="groupCvv">
              <label className="cardLabel" htmlFor="cvv">CVV</label>
              <input
              className="cardInput"
                type="tel"
                name="cvv"
                pattern="\d{3}"
                title="Numbers only (3 digits)"
                required
                onChange={(e) => handleInputChange(e)}
                onFocus={(e) => handleInputFocus(e)}
                onBlur={() => setFlip(false) & setFocus("none")}
              />
            </div>
          </div>
          <button className="cardButton" type="submit" 
          // onClick={(e)=>{
          //   e.preventDefault()
          //   if(cardNumber===''|| cardHolder===''){
          //     setError('you must fill all fields')
          //   }
          //   else{
          //     setSuccess('good')
          //     console.log('asdas')
          //   }
          // }}
          >Submit</button>
        </div>
      </form>
    </div>
  );
}
