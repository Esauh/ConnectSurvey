const dataUrl = "https://api.surveyjs.io/private/Surveys/getSurveyPublicResults/a8fbb673-2519-4e3b-85ef-08429c15d9ff";
class SurveyDashboardComponent extends React.Component {
    componentDidMount() {
        const survey = new Survey.Model(json);
        fetch(dataUrl).then(response => response.json()).then(data => {
            const dataFromServer = data.Data;
            const vizPanel = new SurveyAnalytics.VisualizationPanel(
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

const root = ReactDOM.createRoot(document.getElementById("surveyDashboardComponent"));
root.render(<SurveyDashboardComponent />);
