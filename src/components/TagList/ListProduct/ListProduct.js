import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faUnlockAlt, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
class ListProduct extends React.Component {
    render() {
        return (
            <tr className="black bg-white tc ">
                <td>12A21345D8</td>
                <td>Nike DryFit Blue TShirt</td>
                <td>₹ 1,799</td>
                <td className="table-func">
                    <div className="func-div ma0 mt1 ml3 fw8 mid-gray">
                        <div className="dib tl grow">
                            <FontAwesomeIcon icon={faExchangeAlt} className="mr2 " />
                            <span>REPLACE</span>
                        </div>
                        {/* <div className="dib tc dim">
                            <FontAwesomeIcon icon={faUnlockAlt} className="mr2" />
                            <span>DEACTIVATE</span>
                        </div>
                        <div className=" dib grow">
                            <FontAwesomeIcon icon={faVolumeUp} className="mr2" />
                            <span>ALERT</span>
                        </div> */}
                    </div></td>
            </tr>
        )
    }
}
export default ListProduct;