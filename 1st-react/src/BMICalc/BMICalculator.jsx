import React, { useState } from "react";
import "./BMICalc.css";

function BMICalculator() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState("");

    const calculateBmi = () => {
        if (!height || !weight) {
            alert("Please enter both height and weight");
            return;
        }

        const heightInMeter = parseFloat(height) * 0.0254;
        const bmiValue = (parseFloat(weight) / (heightInMeter * heightInMeter)).toFixed(2);
        setBmi(bmiValue);

        let bmiStatus = '';
        if (bmiValue < 18.5) {
            bmiStatus = 'Underweight';
        } else if (bmiValue < 24.9) {
            bmiStatus = 'Normal weight';
        } else if (bmiValue < 29.9) {
            bmiStatus = 'Overweight';
        } else {
            bmiStatus = 'Obesity';
        }
        setStatus(bmiStatus);

    };

    const handleWeight = (e) => {
        setWeight(e.target.value);
    }
    const handleHeight = (e) => {
        setHeight(e.target.value);
    }

    const handleReload=()=>{
        setWeight('');
        setHeight('');
        setBmi(null);
        setStatus('');
    }


    return (
        <div className="bmi-conatiner">
            <h1>BMI Calculator</h1>
            <div className="input-container">
                <label>Weight(kg)</label>
                <input type="number" onChange={handleWeight} value={weight} placeholder="Enter your weight" />
                <label>Height(in)</label>
                <input type="number" onChange={handleHeight} value={height} placeholder="Enter your height" />
            </div>
            <br />
            <div className="buttons">
                <button onClick={calculateBmi}>Calculate</button>
                <button onClick={handleReload}>Reload</button>
            </div>
            <div className="result-container">
                <p>your BMI is: {bmi}</p>
                <p>Status:{status}</p>
            </div>
        </div>
    );
}

export default BMICalculator;
