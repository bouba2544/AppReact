import React,{Component, useState} from 'react';
import EmployeeService from "../services/EmployeeService";
import Moment from 'react-moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'moment-timezone';
import moment from "moment";
class FormVoitureComponent extends Component {
    constructor(props) {
        super(props);
        var today = new Date(),

            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state ={
            showMessage: false,

            immat:"",
            numSerie:'',
            firstDate:'',
            formuleNum:'',
            power:'',
            department:'',
            nameOld:'',
            priceTot:'',
            curTime : date,
            typeVoiture:'',
            taxeUtilitaire :'',
            taxeAcheminement:2.76,
            taxeFiscal: 4,
            fraisTrait:30
        }
    }

    changefirstDateHandler= (event) => {
        this.setState({firstDate: event.target.value});
    }

    changepowerHandler= (event) => {
        this.setState({power: event.target.value});
    }
    changedepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }
    changetypevoitureHandler=(event) =>{
        this.setState({typeVoiture:event.target.value});
        if(event.target.value==1){
            this.state.taxeUtilitaire=0
        }else{
            this.state.taxeUtilitaire=32
        }
    }

    taxe=(type)=>{

    }

    calculatePrice = (e) => {
        e.preventDefault();
        this.setState({showMessage: true});
        const start = new Date(this.state.curTime)
        const end = new Date(this.state.firstDate)
        const s = moment(start);
        const d = moment(end);
        const r = s.diff(d, 'years')

        if(r>=10 ) {

                this.state.priceTot = (this.state.power * this.state.department) / 2 + this.state.fraisTrait + this.state.taxeUtilitaire+this.state.taxeAcheminement+ this.state.taxeFiscal

        }else{
                this.state.priceTot = (this.state.power * this.state.department)+ this.state.fraisTrait + this.state.taxeUtilitaire +this.state.taxeAcheminement+ this.state.taxeFiscal

        }

        console.log('employee => ' + JSON.stringify(this.state.priceTot));
        console.log(this.state.typeVoiture,"type de voiture")

        //console.log(thispriceTot, "final")
    }

    redirection = (e)=>{
        e.preventDefault();
        this.props.history.push('/client');

    }

    render() {
        return (

            <div className = "container">
                <br></br>

                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">

                        <h3 className='text-center'>Devis rapide</h3>

                        <form>
                            <div className = "form-group">
                                <label> Type de véhicule (J.1) : </label>
                                <select name="villes" className="form-control" onChange={this.changetypevoitureHandler}>
                                    <option value={this.state.typeVoiture} >choisir le type de véhicule</option>
                                    <option value={1} >Véhicule de tourisme (VP)</option>
                                    <option value={2} >Utilitaire (CTTE)</option>
                                </select>
                            </div>
                    <div className = "form-group">
                        <label> Date de première immatriculation (B) : </label>
                        <input id={this.state.curTime} type='date' placeholder="ex : 13/01/2012" name="emailId" className="form-control"
                              max={moment(this.state.curTime)} value={this.state.firstDate} onChange={this.changefirstDateHandler}/>
                    </div>



                            <div className = "form-group">
                        <label> Puissance en chevaux fiscaux (P.6) : </label>
                        <input min="1" max="50" type ='number' placeholder="Ex : 6"name="emailId" className="form-control"
                               value={this.state.power} onChange={this.changepowerHandler}/>
                    </div>

                    <div className = "form-group">
                        <label> Votre département de résidence (pas de naissance): </label>
                         <select name="villes" className="form-control" onChange={this.changedepartmentHandler}>
                             <option value={this.state.department} >choisir votre département</option>
                             <option value={43} >Ain (01)</option>
                            <option value={33} >Aisne (02)</option>
                            <option value={43} >Allier (03)</option>
                            <option value={51.2}>Alpes-de-Haute-Provence (04)</option>
                            <option value={51.2}>Hautes-Alpes (05)</option>
                            <option value={51.2}>Alpes-Maritimes (06)</option>
                            <option value={43}>Ardêche (07)</option>
                            <option value={42}>Ardennes (08)</option>
                            <option value={44}>Ariège (09)</option>
                            <option value={42}>Aube (10)</option>
                            <option value={44}>Aude (11)</option>
                            <option value={44}>Aveyron (12)</option>
                            <option value={51.2}>Bouches-du-Rhône (13)</option>
                            <option value={35}>Calvados (14)</option>
                            <option value={43}>Cantal (15)</option>
                            <option value={41}>Charente (16)</option>
                            <option value={41}>Charente-Maritime (17)</option>
                            <option value={49.8}>Cher (18)</option>
                            <option value={41}>Corrèze (19)</option>
                            <option value={27}>Corse-du-Sud (2A)</option>
                            <option value={27}>Haute-Corse (2B)</option>
                            <option value={51}>Côte-d'Or (21)</option>
                            <option value={51}>Côtes d'Armor (22)</option>
                            <option value={41}>Creuse (23)</option>
                            <option value={41}>Dordogne (24)</option>
                            <option value={51}>Doubs (25)</option>
                            <option value={43}>Drôme (26)</option>
                            <option value={35}>Eure (27)</option>
                            <option value={49.8}>Eure-et-Loir (28)</option>
                            <option value={51}>Finistère (29)</option>
                            <option value={44}>Gard (30)</option>
                            <option value={44}>Haute-Garonne (31)</option>
                            <option value={44}>Gers (32)</option>
                            <option value={41}>Gironde (33)</option>
                            <option value={44}>Hérault (34)</option>
                            <option value={51}>Île-et-Vilaine (35)</option>
                            <option value={49.8}>Indre (36)</option>
                            <option value={49.8}>Indre-et-Loire (37)</option>
                            <option value={43}>Isère (38)</option>
                            <option value={51}>Jura (39)</option>
                            <option value={41}>Landes (40)</option>
                            <option value={49.8}>Loir-et-Cher (41)</option>
                            <option value={43}>Loire (42)</option>
                            <option value={43}>Haute-Loire (43)</option>
                            <option value={48}>Loire-Atlantique (44)</option>
                            <option value={49.8}>Loiret (45)</option>
                            <option value={44}>Lot (46)</option>
                            <option value={41}>Lot-et-Garonne (47)</option>
                            <option value={44}>Lozère (48)</option>
                            <option value={48}>Maine-et-Loire (49)</option>
                            <option value={35}>Manche (50)</option>
                            <option value={42}>Marne (51)</option>
                            <option value={42}>Haute-Marne (52)</option>
                            <option value={48}>Mayenne (53)</option>
                            <option value={42}>Meurthe-et-Moselle (54)</option>
                            <option value={42}>Meuse (55)</option>
                            <option value={51}>Morbihan (56)</option>
                            <option value={42}>Moselle (57)</option>
                            <option value={51}>Nièvre (58)</option>
                            <option value={35.4}>Nord (59)</option>
                            <option value={33}>Oise (60)</option>
                            <option value={35}>Orne (61)</option>
                            <option value={35.4}>Pas-de-Calais (62)</option>
                            <option value={43}>Puy-de-Dôme (63)</option>
                            <option value={41}>Pyrénées-Atlantiques (64)</option>
                            <option value={44}>Hautes-Pyrénées (65)</option>
                            <option value={44}>Pyrénées-Orientales (66)</option>
                            <option value={42}>Bas-Rhin (67)</option>
                            <option value={42}>Haut-Rhin (68)</option>
                            <option value={43}>Rhône (69)</option>
                            <option value={51}>Haute-Saône (70)</option>
                            <option value={51}>Saône-et-Loire (71)</option>
                            <option value={48}>Sarthe (72)</option>
                            <option value={43}>Savoie (73)</option>
                            <option value={43}>Haute-Savoie (74)</option>
                            <option value={46.15}>Paris (75)</option>
                            <option value={35}>Seine-Maritime (76)</option>
                            <option value={46.15}>Seine-et-Marne (77)</option>
                            <option value={46.15}>Yvelines (78)</option>
                            <option value={41}>Deux-Sèvres (79)</option>
                            <option value={33}>Somme (80)</option>
                            <option value={44}>Tarn (81)</option>
                            <option value={44}>Tarn-et-Garonne (82)</option>
                            <option value={51.2}>Var (83)</option>
                            <option value={51.2}>Vaucluse (84)</option>
                            <option value={48}>Vendée (85)</option>
                            <option value={41}>Vienne (86)</option>
                            <option value={41}>Haute-Vienne (87)</option>
                            <option value={42}>Vosges (88)</option>
                            <option value={51}>Yonne (89)</option>
                            <option value={51}>Territoire-de-Belfort (90)</option>
                            <option value={46.15}>Essonne (91)</option>
                            <option value={46.15}>Hauts-de-Seine (92)</option>
                            <option value={46.15}>Seine-Saint-Denis (93)</option>
                            <option value={46.15}>Val-de-Marne (94)</option>
                            <option value={46.15}>Val-d'Oise (95)</option>
                             <option value={41}>Guadeloupe (971)</option>
                             <option value={30}>Martinique (972)</option>
                             <option value={42.5}>Guyane (973)</option>
                             <option value={51}>La réunion (974)</option>
                             <option value={30}>Mayotte (976)</option>

                        </select>
                    </div>
                    <button  disabled={!this.state.power || !this.state.department || !this.state.firstDate}className="btn btn-success" onClick={this.calculatePrice} >Afficher le prix</button>
                    {
                        this.state.showMessage && <h4 style={{ marginTop:"10px"}}>Le prix de votre carte grise est de : {this.state.priceTot}€ TTC </h4>

                    }
                    { this.state.showMessage && <button onClick={this.redirection} className='btn btn-primary align-content-center'  style={{ marginTop:"10px", marginLeft: "200px"}}>Commander ma carte grise</button>}
                    { this.state.showMessage && <p >Vous revevrez votre carte grise en recommandé sous 48h jours ouvrables si vous commandez avant 16h</p>}

                </form>
            </div>
            </div>
            </div>

        );
    }
}

export default FormVoitureComponent;