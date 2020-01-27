import React from 'react';
import Card from '../Card/Card';
import './Dashboard.css'


class Dashboard extends React.Component {
    render() {
        return (
            <div className="right-div">
                <div className="dashboard fl ">
                    <div className="recent-cover">
                        <p className="list-title mt4 mb2 fw3">Recently added products</p>
                        <hr className="mv3 mw6 b--black-10" />
                        <p className="f5 fw8 gray ">Showing 333 results</p>
                        <div className="card-list mv4 nowrap overflow-x-auto pb2">
                            {/* Card Start */}
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            {/* CARD END */}
                        </div>
                    </div>
                    <div className="mt2">
                        <p className="list-title mt2 mb2 fw3">All products</p>
                        <hr className="mv3 mw6 b--black-10" />
                        <p className="f5 fw8 gray mb4">Showing 1,444 results</p>
                        <div className="card-list mv4 nowrap overflow-x-auto pb3">
                            {/* Card Start */}
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            {/* CARD END */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;