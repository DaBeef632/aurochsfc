import React, { Component } from 'react'
import BeerService from "../../services/BeerService";
import CheckinService from "../../services/CheckinService";

class CreateCheckin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            checkinId: this.props.match.params.checkinId,

            hasAurochs: '',
            venue: '',

        }
        this.changeHasAurochsHandler = this.changeHasAurochsHandler.bind(this);
        this.changeVenueHandler = this.changeVenueHandler.bind(this);
        this.saveOrUpdateVenue = this.saveOrUpdateVenue.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.checkinId === '_add'){
            return
        }else{
            CheckinService.getById(this.state.checkinId).then( (res) =>{
                let checkin = res.data;
                this.setState({

                    hasAurochs: checkin.hasAurochs,
                    checkin: checkin.venue
                });
            });
        }
    }
    saveOrUpdateCheckin = (e) => {
        e.preventDefault();
        let checkin = {
            hasAurochs: this.state.hasAurochs,
            venue: this.state.venue
        };
        console.log('checkin => ' + JSON.stringify(checkin));

        // step 5
        if(this.state.checkinId === '_add'){
            CheckinService.createCheckin(checkin).then(res =>{
                this.props.history.push('/checkins');
            });
        }else{
            CheckinService.updateCheckin(checkin, this.state.checkinId).then(res => {
                this.props.history.push('/checkins');
            });
        }
    }


    changeBeerNameHandler= (event) => {
        this.setState({hasAurochs: event.target.value});
    }

    changeBeerTypeHandler= (event) => {
        this.setState({venue: event.target.value});
    }


    cancel(){
        this.props.history.push('/checkins');
    }

    getTitle(){
        if(this.state.checkinId === '_add'){
            return <h3 className="text-center">Add Checkin</h3>
        }else{
            return <h3 className="text-center">Update Checkin</h3>
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
                                        <label> Has Aurochs: </label>
                                        <input placeholder="Check In" name="hasAurochs" className="form-control"
                                               value={this.state.hasAurochs} onChange={this.changeHasAurochsHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> venue </label>
                                        <input placeholder="venue" name="venue" className="form-control"
                                               value={this.state.venue} onChange={this.changeVenueHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateVenue}>Save</button>
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

export default CreateCheckin