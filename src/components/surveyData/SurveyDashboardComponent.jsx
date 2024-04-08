import React from "react";
import { Model } from "survey-core";
import { VisualizationPanel } from "survey-analytics";
import "survey-analytics/survey.analytics.css";
import "./index.css";
import { json } from "./json";
import { dataUrl } from "./dataurl";

class SurveyDashboardComponent extends React.Component {
    componentDidMount() {
        const survey = new Model(json);
        fetch(dataUrl).then(response => response.json()).then(data => {
            const dataFromServer = data.Data;
            const vizPanel = new VisualizationPanel(
                survey.getAllQuestions(),
                dataFromServer
            );
            
            
            document.getElementById("loadingIndicator").style.display = "none";
            vizPanel.render("surveyDashboardContainer");
        });
    }
    render() {
        return React.createElement("div", { id: "surveyDashboardContainer" });
    }
}

export default SurveyDashboardComponent
