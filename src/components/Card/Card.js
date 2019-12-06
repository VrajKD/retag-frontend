import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faDollarSign, faExchangeAlt, faUnlockAlt, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card br3 bg-white shadow-5 ph2 dib mr4 grow">
                <div className="card-prod-desc pa3 pb2 pl0 ">
                    <div className="fl w-10 dib">
                        <FontAwesomeIcon icon={faFileAlt} className="f5 " />
                    </div>
                    <div className="dib">
                        <p className="f7 dib ma0 pt0 pb2 ml3 v-top">TShirt Item 1</p><br />
                        <p className="f5 pt0 ml3 dib v-top">TShirt Item 1</p>
                    </div>
                    <div className="card-price fr dib">
                        <div className="fl w-10 dib mr2">
                            <FontAwesomeIcon icon={faDollarSign} className="f5 dib" />
                        </div>
                        <div className="dib">
                            <p className="f5 b ma0 dib pa0 ml3 v-top">Rs. 1250</p>
                            <p className="f7 b moon-gray pt0 ml3 v-top"><a>Update</a></p>
                        </div>
                    </div>
                </div>
                <hr className="mw9 bb bw1 b--black-10" />
                <div className="tag-desc mt3 pa0 pb3 center">
                    <div className="tag-id mt0 w-50 dib">
                        <p className="fw9 f7 pa2 pt0 dib light-silver">TAG ID :</p>
                        <p className="fw9 f5 pt1 pl2 ">12345678910</p>
                    </div>
                    <div className="added-on dib fr pl4 pt1 w-40 ma0 pa0">
                        <p className="fw9 f7 v-top dib ph2 mt0 pt0 light-silver">ADDED ON :</p>
                        <p className="fw9 f5 pl2 pt1 v-top">12-05-19</p>
                    </div>
                </div>
                <div className="ma0 f7 mt1 ml3 fw8 mid-gray">
                    <div className="w-30 dib mb3 tl mr3">
                        <FontAwesomeIcon icon={faExchangeAlt} className="mr2 " />
                        <span>REPLACE</span>
                    </div>
                    <div className="w-30 dib tc mr2">
                        <FontAwesomeIcon icon={faUnlockAlt} className="mr2" />
                        <span>DEACTIVATE</span>
                    </div>
                    <div className="w-30 dib tr mr3">
                        <FontAwesomeIcon icon={faVolumeUp} className="mr2" />
                        <span>ALERT</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;