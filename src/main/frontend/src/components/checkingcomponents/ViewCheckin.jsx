import React, { Component } from 'react'
import CheckinService from "../../services/CheckinService";

class ViewCheckin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkinId: this.props.match.params.checkinId,
            checkin: {}
        }
    }

    componentDidMount(){
        CheckinService.getCheckinById(this.state.checkinId).then( res => {
            this.setState({checkin: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Checkin Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Has Aurochs?: </label>
                            <div> { this.state.checkin.hasAurochs }</div>
                        </div>
                        <div className = "row">
                            <label> Venue: </label>
                            <div> { this.state.checkin.venue }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCheckin