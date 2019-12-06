import React from 'react';
import './TagList.css';
import ListProduct from './ListProduct/ListProduct'

class TagList extends React.Component {
    render() {
        return (
            <div className="fl w-90 dib ml5 mr2 mv5">
                <table className="list-table tc dib">
                    <tr className="white bg-dark-gray f5 tc ">
                        <th>TAG ID</th>
                        <th>PRODUCT NAME</th>
                        <th>PRICE</th>
                        <th className="table-func">FUNCTIONS</th>
                    </tr>
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                </table>
            </div>
        );
    }
}

export default TagList;