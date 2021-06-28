import React, { Component } from 'react'
import BeerService from "../../services/BeerService";

class ListBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: []
        }
        this.addBeer = this.addBeer.bind(this);

        this.deleteBeer = this.deleteBeer.bind(this);
    }

    deleteBeer(beerId){
        BeerService.deleteBeer(beerId).then( res => {
            this.setState({beers: this.state.beers.filter(beer => beer.beerId !== beerId)});
        });
    }
    viewBeer(beerId){
        this.props.history.push(`/view-beer/${beerId}`);
    }
    editSupporter(beerId){
        this.props.history.push(`/add-beer/${beerId}`);
    }

    componentDidMount(){
        BeerService.getAllBeers().then((res) => {
            this.setState({ beers: res.data});
        });
    }

    addBeer(){
        this.props.history.push('/add-beer/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Beers List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addBeer}> Add Beer</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>

                            <th> Beer Name</th>
                            <th> Beer Type</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.beers.map(
                                beer =>
                                    <tr key = {beer.beerId}>
                                        <td> {beer.beerName} </td>
                                        <td> {beer.beerType}</td>

                                        <td>
                                            <button onClick={ () => this.editBeer(beer.beerId)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBeer(beer.beerId)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewBeer(beer.beerId)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }


}

export default ListBeer