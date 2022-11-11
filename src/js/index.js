//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return (
    <div className="counterBody"> 
        <div className="counter">
            <div className="clock digit">
                <i className="far fa-clock"></i>
            </div>
            <div className="six digit">{props.digitSix % 10}</div>
            <div className="five digit">{props.digitFive % 10}</div>
            <div className="four digit">{props.digitFour % 10}</div>
            <div className="three digit">{props.digitThree % 10}</div>
            <div className="two digit">{props.digitTwo % 10}</div>
            <div className="one digit">{props.digitOne % 10}</div>
        </div>
    </div>
    )
}

let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);

    // console.log(four, three, two, one)
    counter++;

    //render your react application
    ReactDOM.render(
        <SimpleCounter 
        digitOne={one} 
        digitTwo={two} 
        digitThree={three} 
        digitFour={four}
        digitFive={five}
        digitSix={six}/>, 
        document.querySelector("#app")
    );

}, 1000);


