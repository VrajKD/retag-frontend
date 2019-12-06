import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLayerGroup, faPlusCircle, faListAlt, faPhoneAlt, faIndustry } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
    render() {
        const { page, onRouteChange } = this.props;
        const className = ["grow", "grow", "grow", "grow", "grow"];
        if (page === "dashboard") {
            className[0] += " active";
        }
        else if (page === "add") {
            className[1] += " active";
        }
        if (page === "list") {
            className[2] += " active";
        }

        return (
            <div className="perm-nav fl">
                <div className="user-session">
                    <img src="https://secure.webtoolhub.com/static/resources/icons/set110/7d2f7e06.png" height="60px" width="60px" />
                    <h2>Vraj Dugar</h2>
                    <h5>Store Manager</h5>
                    <button id="logout" className="br3 grow">LOGOUT</button>
                </div>
                <div className="nav">
                    <div className="nav-links">
                        <a href="#" className={className[0]} onClick={() => onRouteChange("dashboard")}><FontAwesomeIcon className="ficon" icon={faLayerGroup} />DASHBOARD</a>
                        <a href="#" className={className[1]} onClick={() => onRouteChange("add")}><FontAwesomeIcon className="ficon" icon={faPlusCircle} />ADD TAG</a>
                        <a href="#" className={className[2]} onClick={() => onRouteChange("list")}><FontAwesomeIcon className="ficon" icon={faListAlt} />TAG LIST</a>
                        <a href="#" className={className[3]}><FontAwesomeIcon className="ficon" icon={faEye} />STORE VISION</a>
                        <a href="#" className={className[4]} id="nav-security"><FontAwesomeIcon className="ficon" icon={faPhoneAlt} />CALL SECURITY</a>
                        <a href="#" className="active grow" id="nav-store"><FontAwesomeIcon className="ficon" icon={faIndustry} /><strong>STORE DETAILS</strong></a>
                        <p className="f5 b para">American Fabrics</p>
                        <p className="para"><span>Lorem ipsum City</span></p>
                        <p className="para"><span>Oobla Doobla Doo</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;