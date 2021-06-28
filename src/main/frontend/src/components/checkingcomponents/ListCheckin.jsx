import React, { Component } from 'react'
import CheckinService from "../../services/CheckinService";

class ListCheckin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkins: []
        }
        this.addCheckin = this.addCheckin.bind(this);

        this.deleteCheckin = this.deleteCheckin.bind(this);
    }

    deleteCheckin(checkinId){
        CheckinService.deleteCheckin(checkinId).then( res => {
            this.setState({checkins: this.state.checkins.filter(checkin => checkin.checkinId !== checkinId)});
        });
    }
    viewCheckin(checkinId){
        this.props.history.push(`/view-checkin/${checkinId}`);
    }
    editSupporter(checkinId){
        this.props.history.push(`/add-checkin/${checkinId}`);
    }

    componentDidMount(){
        CheckinService.getAllCheckins().then((res) => {
            this.setState({ checkins: res.data});
        });
    }

    addCheckin(){
        this.props.history.push('/add-checkin/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Beers List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCheckin}> Add Checkin</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>

                            <th> Has Aurochs?</th>
                            <th> Venue </th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.checkins.map(
                                checkin =>
                                    <tr key = {checkin.checkinId}>
                                        <td> {checkin.hasAurochs} </td>
                                        <td> {checkin.venue}</td>

                                        <td>
                                            <button onClick={ () => this.editCheckin(checkin.checkinId)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCheckin(checkin.checkinId)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewBeer(checkin.checkinId)} className="btn btn-info">View </button>
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

export default ListCheckin