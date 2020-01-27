import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './AddTag.css'

class AddTag extends React.Component {
    render() {
        return (
            <div className="right-div">
                <div className="w-60 fl dib ml4 mt5">
                    <p className="fw9 f4 b  mb3">Details of the Product</p>
                    <hr className="mv3 mw6 b--black-10" />
                    <form className="mt3">
                        <input type="text" placeholder="Name of the Product" id="form-name" size="100" required className="dim add-text mv4 f3 pa3 br2 black db b--black-20 b" />
                        <input type="text" placeholder="Category of the Product" id="form-cat" size="100" required className="dim mv4 add-text f3 pa3 br2 black db b--black-20 b" />
                        <input type="text" placeholder="Cost of the Product" id="form-cost" size="100" required className="dim mv4 add-text f3 pa3 br2 black db b--black-20 b " />
                        <p className="fw9 f4 b mt4 mb3 pt3">Scan Tag</p>
                        <hr className="mv3 mw6 b--black-10" />
                        <p className="red fw3 f5 pt2">Please bring your UV Tag towards the receiver</p>
                        <input type="text" placeholder="No Tag Detected" id="form-cost" size="79" className="mv4 add-tag f3 pa2 br2 black db b--black-20 b" />
                        <button type="submit" className="add-submit grow f3 pt2 dark-gray tr db"><FontAwesomeIcon className="pr3" icon={faCheckCircle} />Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddTag;