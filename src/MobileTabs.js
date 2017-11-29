import React from 'react';


class MobileTabs extends React.Component {
    render() {
        return (
            <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab"><a className="active" href="#test1">All</a></li>
                    <li className="tab"><a  href="#test2">Recipes</a></li>
                    <li className="tab"><a  href="#test3">Places</a></li>
                </ul>
            </div>
        )
    }
}
export default MobileTabs;