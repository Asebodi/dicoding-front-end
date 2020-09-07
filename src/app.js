import "./css/style.scss";
import "regenerator-runtime";
import "./CovidInfo";

const htmlMain = document.querySelector("main");
const covidInfoElement = document.createElement("covid-info");
htmlMain.appendChild(covidInfoElement);
