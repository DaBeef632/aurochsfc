import React, { Component } from 'react'
import BeerService from "../../services/BeerService";

class ViewBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beerId: this.props.match.params.beerId,
            beer: {}
        }
    }

    componentDidMount(){
        BeerService.getBeerById(this.state.beerId).then( res => {
            this.setState({beer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Beer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Beer Name: </label>
                            <div> { this.state.beer.beerName }</div>
                        </div>
                        <div className = "row">
                            <label> Beer Type: </label>
                            <div> { this.state.beer.beerType }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBeer