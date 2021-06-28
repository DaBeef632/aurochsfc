import React, { Component } from 'react'
import SupporterService from "../../services/SupporterService";

class ViewSupporter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            supporter: {}
        }
    }

    componentDidMount(){
        SupporterService.getSupporterById(this.state.supporterId).then( res => {
            this.setState({supporter: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Supporter Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Supporter First Name: </label>
                            <div> { this.state.supporter.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Supporter Last Name: </label>
                            <div> { this.state.supporter.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Supporter Email: </label>
                            <div> { this.state.supporter.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewSupporter