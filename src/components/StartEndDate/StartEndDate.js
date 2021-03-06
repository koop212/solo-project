import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Checkout from '../Checkout/Checkout';
import '../StartEndDate/StartEndDate.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class StartEndDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: new Date(),
            end_date: new Date(),
        };
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);

    }

    handleStartChange(date) {
        console.log('Start date picked',date);
        
        this.setState({
            start_date: date
        });
    }

    handleEndChange(date) {
        console.log('End date picked', date);

        this.setState({
            end_date: date
        });
    }

    render() {
        return (
            <div className="datePicker">
                <label>Start Date</label>
                <br/>
                <DatePicker
                    selected={this.state.start_date}
                    onChange={this.handleStartChange}
                    minDate={new Date()}
                />
                <br/>
                <label>End Date</label>
                <br/>
                <DatePicker
                    selected={this.state.end_date}
                    onChange={this.handleEndChange}
                    minDate={new Date()}
                />
                <br/>
                <div className="checkoutBtn">
                    <Checkout startDate={this.state.start_date} endDate={this.state.end_date} carId={this.props.carId} />
                </div>
            </div>
            
        );
    }
}

export default StartEndDate;