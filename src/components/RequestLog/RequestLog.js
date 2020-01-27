import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './RequestLog.css'

class RequestLog extends React.Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    };
    handleChangeStart = date => {
        this.setState({
            startDate: date
        });
    };
    handleChangeEnd = date => {
        this.setState({
            endDate: date
        });
    };
    render() {
        return (
            <div className="right-div">
                <div className="w-60 fl dib ml4 mt5">
                    <p className="fw9 f4 b  mb3">Request Tag Logs</p>
                    <hr className="mv3 mw6 b--black-10" />
                    <div className="date-inputs">
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChangeStart}
                            className="date-input"
                            dateFormat="MMMM d, yyyy"
                        />
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={this.handleChangeEnd}
                            className="date-input"
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                    <button className="date-submit grow ">Submit Request</button>
                </div>
            </div>
        )
    }
}

export default RequestLog;