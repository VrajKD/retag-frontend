import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLayerGroup, faPlusCircle, faListAlt, faPhoneAlt, faIndustry } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        const { history: { location: { pathname } } } = this.props;
        const className = ["grow", "grow", "grow", "grow", "grow", "grow"]
        if (pathname === "/dashboard") {
            className[0] += " active";
        }
        else if (pathname === "/requestLog") {
            className[3] += " active";
        }
        if (pathname === "/list") {
            className[2] += " active";
        }


        console.log(pathname);
        return (
            <div className="perm-nav fl">
                <div className="user-session">
                    <img src="https://secure.webtoolhub.com/static/resources/icons/set110/7d2f7e06.png" height="60px" alt="user-img" width="60px" />
                    <h2>Vraj Dugar</h2>
                    <h5>Store Manager</h5>
                    <button id="logout" className="br3 grow">LOGOUT</button>
                </div>
                <div className="nav">
                    <div className="nav-links">
                        <Link to="/dashboard" className={className[0]}><FontAwesomeIcon className="ficon" icon={faLayerGroup} />DASHBOARD</Link>
                        {/* <Link to="/add" className={className[1]}><FontAwesomeIcon className="ficon" icon={faPlusCircle} />ADD TAG</Link> */}
                        <Link to="/list" className={className[2]}><FontAwesomeIcon className="ficon" icon={faListAlt} />TAG LIST</Link>
                        {/* <Link to="/dashboard" className={className[3]}><FontAwesomeIcon className="ficon" icon={faEye} />STORE VISION</Link> */}
                        <Link to="/requestLog" className={className[3]}><FontAwesomeIcon className="ficon" icon={faListAlt} />REQUEST LOGS</Link>
                        <Link to="/dashboard" className={className[4]} id="nav-security"><FontAwesomeIcon className="ficon" icon={faPhoneAlt} />CALL SECURITY</Link>
                        <Link to="/dashboard" className="active grow" id="nav-store"><FontAwesomeIcon className="ficon" icon={faIndustry} /><strong>STORE DETAILS</strong></Link>
                        <p className="f7 b para">American Fabrics</p>
                        <p className="para"><span>Lorem ipsum City</span></p>
                        <p className="para"><span>Oobla Doobla Doo</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Nav);