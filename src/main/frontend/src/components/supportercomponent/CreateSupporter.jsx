import React, { Component } from 'react'
import SupporterService from "../../services/SupporterService";

class CreateSupporter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,

            firstName: '',
            lastName: '',
            email: '',

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateSupporter = this.saveOrUpdateSupporter.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            SupporterService.getSupporterById(this.state.id).then( (res) =>{
                let supporter = res.data;
                this.setState({

                    firstName: supporter.firstName,
                    lastName: supporter.lastName,
                    email : supporter.email
                });
            });
        }
    }
    saveOrUpdateSupporter = (e) => {
        e.preventDefault();
        let supporter = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName
            };
        console.log('supporter => ' + JSON.stringify(supporter));

        // step 5
        if(this.state.id === '_add'){
            SupporterService.createSupporter(supporter).then(res =>{
                this.props.history.push('/supporters');
            });
        }else{
            SupporterService.updateSupporter(supporter, this.state.id).then(res => {
                this.props.history.push('/supporters');
            });
        }
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }




    cancel(){
        this.props.history.push('/supporters');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Supporter</h3>
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
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateSupporter}>Save</button>
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

export default CreateSupporter