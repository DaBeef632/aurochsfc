import React, { Component } from 'react'
import SupporterService from "../../services/SupporterService";

class ListSupporterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            supporters: []
        }
        this.addSupporter = this.addSupporter.bind(this);
        this.editSupporter = this.editSupporter.bind(this);
        this.deleteSupporter = this.deleteSupporter.bind(this);
    }

    deleteSupporter(supporterId){
        SupporterService.deleteSupporter(supporterId).then( res => {
            this.setState({supporters: this.state.supporters.filter(supporter => supporter.supporterId !== supporterId)});
        });
    }
    viewSupporter(supporterId){
        this.props.history.push(`/view-supporter/${supporterId}`);
    }
    editSupporter(supporterId){
        this.props.history.push(`/add-supporter/${supporterId}`);
    }

    componentDidMount(){
        SupporterService.getSupporters().then((res) => {
            this.setState({ supporters: res.data});
        });
    }

    addSupporter(){
        this.props.history.push('/add-supporter/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Supporters List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addSupporter}> Add Supporter</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>

                            <th> Supporter First Name</th>
                            <th> Supporter Last Name</th>
                            <th> Supporter Email </th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.supporters.map(
                                supporter =>
                                    <tr key = {supporter.supporterId}>
                                        <td> {supporter.firstName} </td>
                                        <td> {supporter.lastName}</td>
                                        <td> {supporter.email}</td>
                                        <td>
                                            <button onClick={ () => this.editSupporter(supporter.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSupporter(supporter.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewSupporter(supporter.id)} className="btn btn-info">View </button>
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

export default ListSupporterComponent