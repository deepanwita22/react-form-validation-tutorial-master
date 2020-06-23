import React, { Component } from "react";
import "./App.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Cholesterollevels: null,
      Bpdia: null,
      Bpsys:{
        a : null,
        b :null},
      Triglycerides: null,
      HDL: null,
      LDL: null,
      RBC: null,
      Ketone: null,
      ACR: null,
      T3: null,
      T4: null,
      TSH: null,
      Vitamind: null,
      Calcium: null,
      Phosphorous: null,
      Bun: null,
      Bilirubintotal: null,
      Bilirubindirect: null,
      Bilirubinindirect: null,
      Alkalinephosphatase: null,
      Globulin: null,
      AGratio: null,
      Creatinine: null,
      Uricacid: null,
      Totalprotein: null,
      Albumin: null,
      Glucosevalues: null,
      TotalCholestrol: null,
      formErrors: {
        Cholesterollevels: "",
        Bpdia: "",
        Bpsys: "",
        Triglycerides: "",
        HDL: "",
        LDL: "",
        RBC: "",
        Ketone: "",
        ACR: "",
        T3: "",
        T4: "",
        TSH: "",
        Vitamind: "",
        Calcium: "",
        Phosphorous: "",
        Bun: "",
        Bilirubintotal: "",
        Bilirubindirect: "",
        Bilirubinindirect: "",
        Alkalinephosphatase: "",
        Globulin: "",
        AGratio: "",
        Creatinine: "",
        Uricacid: "",
        Totalprotein: "",
        Albumin: "",
        Glucosevalues: "",
        TotalCholestrol: "",


      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        
        Cholesterol levels: ${this.state.Cholesterollevels}
        Bpdia: ${this.state.Bpdia}
        Bpsys: 
        a:${this.state.Bpsys.a}
	      b:${this.state.Bpsys.b}
        Triglycerides: ${this.state.Triglycerides}
        HDL: ${this.state.HDL}
        LDL: ${this.state.LDL}
        RBC: ${this.state.RBC}
        Ketone: ${this.state.Ketone}
        ACR: ${this.state.ACR}
        T3: ${this.state.T3}
        T4: ${this.state.T4}
        TSH: ${this.state.LDL}
        Vitamind: ${this.state.Vitamind}
        Calcium: ${this.state.Calcium}
        Phosphorous: ${this.state.Phosphorous}
        Bun: ${this.state.Bun}
        Bilirubintotal: ${this.state.Bilirubintotal}
        Bilirubindirect: ${this.state.Bilirubindirect}
        Bilirubinindirect: ${this.state.Bilirubinindirect}
        Alkalinephosphatase: ${this.state.Alkalinephosphatase}
        Globulin: ${this.state.Globulin}
        AGratio: ${this.state.AGratio}
        Creatinine: ${this.state.Creatinine}
        Uricacid: ${this.state.Uricacid}
        Totalprotein: ${this.state.Totalprotein}
        Albumin: ${this.state.Albumin}
        Glucosevalues: ${this.state.Glucosevalues}
        TotalCholestrol: ${this.state.TotalCholestrol}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
     
      case "Cholesterol levels":
        formErrors.Cholesterollevels =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Bpdia":
        formErrors.Bpdia = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "Bpsys":
        formErrors.Bpsys =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Triglycerides":
        formErrors.Triglycerides =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "HDL":
        formErrors.HDL =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "LDL":
          formErrors.LDL =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "RBC":
        formErrors.RBC =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Ketone":
        formErrors.Ketone =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "ACR":
        formErrors.ACR = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "T3":
        formErrors.T3 =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "T4":
        formErrors.T4 =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "TSH":
        formErrors.TSH =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Vitamind":
          formErrors.Vitamind =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Calcium":
          formErrors.Calcium =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Phosphorous":
          formErrors.Phosphorous =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break; 
      case "Bun":
          formErrors.Bun =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Bilirubintotal":
          formErrors.Bilirubintotal =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case " Bilirubindirect":
          formErrors.Bilirubindirect =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Bilirubinindirect":
          formErrors.Bilirubinindirect =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;    
      case "Alkalinephosphatase":
          formErrors.Alkalinephosphatase =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Globulin":
          formErrors.Globulin =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "AGratio":
          formErrors.AGratio =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Creatinine":
          formErrors.Creatinine =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Uricacid":
          formErrors.Uricacid =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Totalprotein":
          formErrors.Totalprotein =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Albumin":
          formErrors.Albumin =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "Glucosevalues":
          formErrors.Glucosevalues =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      case "TotalCholestrol":
          formErrors.TotalCholestrol =
          value.length < 6 ? "minimum 6 characaters required" : "";
          break;                                                                      
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Fill Your Test Report</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            
            <div className="Cholesterollevels">
              <label htmlFor="Cholesterollevels">Cholesterol levels</label>
              <input
                className={formErrors.Cholesterollevels.length > 0 ? "error" : null}
                placeholder="Cholesterol levels"
                type="text"
                name="Cholesterollevels"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Cholesterollevels.length > 0 && (
                <span className="errorMessage">{formErrors.Cholesterollevels}</span>
              )}
            </div>
            <div className="Bpdia">
              <label htmlFor="Bpdia"> Bp_dia</label>
              <input
                className={formErrors.Bpdia.length > 0 ? "error" : null}
                placeholder="Bpdia"
                type="text"
                name="Bpdia"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Bpdia.length > 0 && (
                <span className="errorMessage">{formErrors.Bpdia}</span>
              )}
            </div>
            <div className="Bpsys">
              <label htmlFor="Bpsys">Bp_sys</label>
              <input
                className={formErrors.Bpsys.length > 0 ? "error" : null}
                placeholder="Bpsys"
                type="text"
                name="Bpsys"
                noValidate
                onChange={this.handleChange}
              />
             
             {formErrors.Bpsys.length > 0 && (
                <span className="errorMessage">{formErrors.Bpsys}</span>
              )}
            </div>
            <div className="Triglycerides">
              <label htmlFor="Triglycerides">Triglycerides</label>
              <input
                className={formErrors.Triglycerides.length > 0 ? "error" : null}
                placeholder="Triglycerides"
                type="text"
                name="Triglycerides"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Triglycerides.length > 0 && (
                <span className="errorMessage">{formErrors.Triglycerides}</span>
              )}
            </div>
            <div className="HDL">
              <label htmlFor="HDL">HDL</label>
              <input
                className={formErrors.HDL.length > 0 ? "error" : null}
                placeholder="HDL"
                type="text"
                name="HDL"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.HDL.length > 0 && (
                <span className="errorMessage">{formErrors.HDL}</span>
              )}
            </div>
            <div className="LDL">
              <label htmlFor="LDL">LDL</label>
              <input
                className={formErrors.LDL.length > 0 ? "error" : null}
                placeholder="LDL"
                type="text"
                name="LDL"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.LDL.length > 0 && (
                <span className="errorMessage">{formErrors.LDL}</span>
              )}
            </div>
            <div className="RBC">
              <label htmlFor="RBC">RBC</label>
              <input
                className={formErrors.RBC.length > 0 ? "error" : null}
                placeholder="RBC"
                type="text"
                name="RBC"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.RBC.length > 0 && (
                <span className="errorMessage">{formErrors.RBC}</span>
              )}
            </div>
            <div className="Ketone">
              <label htmlFor="Ketone">Ketone</label>
              <input
                className={formErrors.Ketone.length > 0 ? "error" : null}
                placeholder="Ketone"
                type="text"
                name="Ketone"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Ketone.length > 0 && (
                <span className="errorMessage">{formErrors.Ketone}</span>
              )}
            </div>
            <div className="ACR">
              <label htmlFor="ACR">ACR</label>
              <input
                className={formErrors.ACR.length > 0 ? "error" : null}
                placeholder="ACR"
                type="text"
                name="ACR"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.ACR.length > 0 && (
                <span className="errorMessage">{formErrors.ACR}</span>
              )}
            </div>
            <div className="T3">
              <label htmlFor="T3">T3</label>
              <input
                className={formErrors.T3.length > 0 ? "error" : null}
                placeholder="T3"
                type="text"
                name="T3"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.T3.length > 0 && (
                <span className="errorMessage">{formErrors.T3}</span>
              )}
            </div>
            <div className="T4">
              <label htmlFor="T4">T4</label>
              <input
                className={formErrors.T4.length > 0 ? "error" : null}
                placeholder="T4"
                type="text"
                name="T4"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.T4.length > 0 && (
                <span className="errorMessage">{formErrors.T4}</span>
              )}
            </div>
            <div className="TSH">
              <label htmlFor="TSH">TSH</label>
              <input
                className={formErrors.TSH.length > 0 ? "error" : null}
                placeholder="TSH"
                type="text"
                name="TSH"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.TSH.length > 0 && (
                <span className="errorMessage">{formErrors.TSH}</span>
              )}
            </div>
            <div className="Vitamind">
              <label htmlFor="Vitamind">Vitamin d</label>
              <input
                className={formErrors.Vitamind.length > 0 ? "error" : null}
                placeholder="Vitamind"
                type="text"
                name="Vitamind"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Vitamind.length > 0 && (
                <span className="errorMessage">{formErrors.Vitamind}</span>
              )}
            </div>
            <div className="Calcium">
              <label htmlFor="Calcium">Calcium</label>
              <input
                className={formErrors.Calcium.length > 0 ? "error" : null}
                placeholder="Calcium"
                type="text"
                name="Calcium"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Calcium.length > 0 && (
                <span className="errorMessage">{formErrors.Calcium}</span>
              )}
            </div>
            <div className="Phosphorous">
              <label htmlFor="Phosphorous">Phosphorous</label>
              <input
                className={formErrors.Phosphorous.length > 0 ? "error" : null}
                placeholder="Phosphorous"
                type="text"
                name="Phosphorous"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Phosphorous.length > 0 && (
                <span className="errorMessage">{formErrors.Phosphorous}</span>
              )}
            </div>
            <div className="Bun">
              <label htmlFor="Bun">Bun</label>
              <input
                className={formErrors.Bun.length > 0 ? "error" : null}
                placeholder="Bun"
                type="text"
                name="Bun"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Bun.length > 0 && (
                <span className="errorMessage">{formErrors.Bun}</span>
              )}
            </div>
            <div className="Bilirubintotal">
              <label htmlFor="Bilirubintotal">Bilirubin total</label>
              <input
                className={formErrors.Bilirubintotal.length > 0 ? "error" : null}
                placeholder="Bilirubintotal"
                type="text"
                name="Bilirubintotal"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Bilirubintotal.length > 0 && (
                <span className="errorMessage">{formErrors.Bilirubintotal}</span>
              )}
            </div>
            <div className="Bilirubindirect">
              <label htmlFor="Bilirubindirect">Bilirubin direct</label>
              <input
                className={formErrors.Bilirubindirect.length > 0 ? "error" : null}
                placeholder="Bilirubindirect"
                type="text"
                name="Bilirubindirect"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Bilirubindirect.length > 0 && (
                <span className="errorMessage">{formErrors.Bilirubindirect}</span>
              )}
            </div>
            <div className="Bilirubinindirect">
              <label htmlFor="Bilirubinindirect">Bilirubin indirect</label>
              <input
                className={formErrors.Bilirubinindirect.length > 0 ? "error" : null}
                placeholder="Bilirubinindirect"
                type="text"
                name="Bilirubinindirect"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Bilirubinindirect.length > 0 && (
                <span className="errorMessage">{formErrors.Bilirubinindirect}</span>
              )}
            </div>
            <div className="Alkalinephosphatase">
              <label htmlFor="Alkalinephosphatase">Alkaline phosphatase</label>
              <input
                className={formErrors.Alkalinephosphatase.length > 0 ? "error" : null}
                placeholder="Alkalinephosphatase"
                type="text"
                name="Alkalinephosphatase"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Alkalinephosphatase.length > 0 && (
                <span className="errorMessage">{formErrors.Alkalinephosphatase}</span>
              )}
            </div>
            <div className="Globulin">
              <label htmlFor="Globulin">Globulin</label>
              <input
                className={formErrors.Globulin.length > 0 ? "error" : null}
                placeholder="Globulin"
                type="text"
                name="Globulin"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Globulin.length > 0 && (
                <span className="errorMessage">{formErrors.Globulin}</span>
              )}
            </div>
            <div className="AGratio">
              <label htmlFor="AGratio">AG ratio</label>
              <input
                className={formErrors.AGratio.length > 0 ? "error" : null}
                placeholder="AGratio"
                type="text"
                name="AGratio"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.AGratio.length > 0 && (
                <span className="errorMessage">{formErrors.AGratio}</span>
              )}
            </div>
            <div className="Creatinine">
              <label htmlFor="Creatinine">Creatinine</label>
              <input
                className={formErrors.Creatinine.length > 0 ? "error" : null}
                placeholder="Creatinine"
                type="text"
                name="Creatinine"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Creatinine.length > 0 && (
                <span className="errorMessage">{formErrors.Creatinine}</span>
              )}
            </div>
            <div className="Uricacid">
              <label htmlFor="Uricacid">Uric acid</label>
              <input
                className={formErrors.Uricacid.length > 0 ? "error" : null}
                placeholder="Uricacid"
                type="text"
                name="Uricacid"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Uricacid.length > 0 && (
                <span className="errorMessage">{formErrors.Uricacid}</span>
              )}
            </div>
            <div className="Totalprotein">
              <label htmlFor="Totalprotein">Total protein</label>
              <input
                className={formErrors.Totalprotein.length > 0 ? "error" : null}
                placeholder="Totalprotein"
                type="text"
                name="Totalprotein"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Totalprotein.length > 0 && (
                <span className="errorMessage">{formErrors.Totalprotein}</span>
              )}
            </div>
            <div className="Albumin">
              <label htmlFor="Albumin">Albumin</label>
              <input
                className={formErrors.Albumin.length > 0 ? "error" : null}
                placeholder="Albumin"
                type="text"
                name="Albumin"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Albumin.length > 0 && (
                <span className="errorMessage">{formErrors.Albumin}</span>
              )}
            </div>
            <div className="Glucosevalues">
              <label htmlFor="Glucosevalues">Glucose values</label>
              <input
                className={formErrors.Glucosevalues.length > 0 ? "error" : null}
                placeholder="Glucosevalues"
                type="text"
                name="Glucosevalues"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Glucosevalues.length > 0 && (
                <span className="errorMessage">{formErrors.Glucosevalues}</span>
              )}
            </div>
            <div className="TotalCholestrol">
              <label htmlFor="TotalCholestrol">Total Cholestrol</label>
              <input
                className={formErrors.TotalCholestrol.length > 0 ? "error" : null}
                placeholder="TotalCholestrol"
                type="text"
                name="TotalCholestrol"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.TotalCholestrol.length > 0 && (
                <span className="errorMessage">{formErrors.TotalCholestrol}</span>
              )}
            </div>

            
          </form>
        </div>
      </div>
    );
  }
}

export default App;
