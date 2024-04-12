import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SurveyComponent from "./SurveyComponent.jsx"
function InitialSurvey() {
    const handleContinue = () => {
        window.open('https://surveyjs.io/results/survey/e4bbc46d-969e-4700-b183-024cf4ec6fc7', '_blank');
    };

    return (
        <div>
            <SurveyComponent />
            <button
                style={{
                    backgroundColor: "rgb(4, 125, 149)",
                    color: "white",
                    padding: "10px 20px",
                    cursor: "pointer",
                    marginTop: "20px",
                    display: "block",
                    margin: "0 auto"
                }}
                onClick={handleContinue}
            >
                View Feedback Data!
            </button>
        </div>
    );
}

export default InitialSurvey;