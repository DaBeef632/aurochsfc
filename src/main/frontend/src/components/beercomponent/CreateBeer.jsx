import React, { Component } from 'react'
import BeerService from "../../services/BeerService";

class CreateBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            beerId: this.props.match.params.beerId,

            beerName: '',
            beerType: '',

        }
        this.changeBeerNameHandler = this.changeBeerNameHandler.bind(this);
        this.changeBeerTypeHandler = this.changeBeerTypeHandler.bind(this);
        this.saveOrUpdateBeer = this.saveOrUpdateBeer.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.beerId === '_add'){
            return
        }else{
            BeerService.getBeerById(this.state.beerId).then( (res) =>{
                let beer = res.data;
                this.setState({

                    beerName: beer.beerName,
                    typeName: beer.typeName
                });
            });
        }
    }
    saveOrUpdateBeer = (e) => {
        e.preventDefault();
        let beer = {
            beerName: this.state.beerName,
            beerType: this.state.beerType
        };
        console.log('beer => ' + JSON.stringify(beer));

        // step 5
        if(this.state.beerId === '_add'){
            BeerService.createBeer(beer).then(res =>{
                this.props.history.push('/beers');
            });
        }else{
            BeerService.updateBeer(beer, this.state.beerId).then(res => {
                this.props.history.push('/beers');
            });
        }
    }


    changeBeerNameHandler= (event) => {
        this.setState({beerName: event.target.value});
    }

    changeBeerTypeHandler= (event) => {
        this.setState({beerType: event.target.value});
    }


    cancel(){
        this.props.history.push('/beers');
    }

    getTitle(){
        if(this.state.beerId === '_add'){
            return <h3 className="text-center">Add Beer</h3>
        }else{
            return <h3 className="text-center">Update Supporter</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>

                                    <div className = "form-group">
                                        <label> Beer Name: </label>
                                        <input placeholder="Beer Name" name="beerName" className="form-control"
                                               value={this.state.beerName} onChange={this.changeBeerNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Beer Type" name="beerType" className="form-control"
                                               value={this.state.beerType} onChange={this.changeBeerTypeHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateBeer}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateBeer