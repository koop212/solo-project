import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';


class CarRequested extends Component {

    state = {
        approveStatus: 'Approved',
        declineStatus: 'Declined',
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_REQUESTED_CAR' });
    }

    handleApprove = (orderId) => {
        this.props.dispatch({ type: 'UPDATE_STATUS', payload: { status: this.state.approveStatus, id: orderId } });
        // this.props.dispatch({ type: 'FETCH_MY_ORDER' });
    }

    handleDecline = (id) => {
        this.props.dispatch({ type: 'UPDATE_STATUS', payload: { status: this.state.declineStatus, id: id }});
        // this.props.dispatch({ type: 'FETCH_MY_ORDER' });
    }

    render() {        
        return(
            <div>
                <h2>Requests to book your vehicle</h2>
                {this.props.requestedCar.map(request => {
                    if (request.status === 'Pending') {
                        return (
                            <div key={request.id}>
                                <p>{request.username} would like to book your <br />
                                    {request.make} {request.model} for ${request.price} per day <br />
                                    on <Moment format='MM/DD/YYYY'>{request.start_date}</Moment> to <Moment format='MM/DD/YYYY'>{request.end_date}</Moment></p>
                                <button onClick={() => this.handleApprove(request.id)}>Approve</button>
                                <button onClick={() => this.handleDecline(request.id)}>Decline</button>
                            </div>
                            )
                    } else if (request.status === 'Approved' || request.status === 'Declined') {
                        return (
                            <div key={request.id}>
                                <p>
                                    {request.username} would like to book your <br />
                                    {request.make} {request.model} for ${request.price} per day <br />
                                    on <Moment format='MM/DD/YYYY'>{request.start_date}</Moment> to <Moment format='MM/DD/YYYY'>{request.end_date}</Moment>
                                    <br/>
                                    {request.status}
                                </p>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return {
        requestedCar: reduxState.requestedCarReducer
    }
}


export default connect(mapStateToProps)(CarRequested);