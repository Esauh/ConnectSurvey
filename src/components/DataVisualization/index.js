import React from "react";
import { Model } from "survey-core";
import { VisualizationPanel } from "survey-analytics";
import "survey-analytics/survey.analytics.css";
import "./index.css";
import { json } from "./json";
// import { dataUrl } from "./dataurl";

const dataUrl = "https://api.surveyjs.io/private/Surveys/getSurveyPublicResults/a8fbb673-2519-4e3b-85ef-08429c15d9ff";

class SurveyDashboardComponent extends React.Component {
    componentDidMount() {
        const survey = new Model(json);
        fetch(dataUrl)
            .then(response => response.json())
            .then(data => {
                const dataFromServer = data.Data;
                const vizPanel = new VisualizationPanel(
                    survey.getAllQuestions(),
                    dataFromServer
                );
    
                const loadingIndicator = document.getElementById("loadingIndicator");
                if (loadingIndicator) {
                    loadingIndicator.style.display = "none";
                    vizPanel.render("surveyDashboardContainer");
                } else {
                    console.error("Loading indicator element not found.");
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
}

export default SurveyDashboardComponent;


