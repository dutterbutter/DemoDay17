import React from 'react'

class Places extends React.Component {
    render() {

        let places = this.props.place;

        let placesJSX = places.map((el, i) => {
            let addy = el.formatted_address.slice(0, -8);

            if (i <= 4) {
                return <div className="card-stacked">
                    <ul className="collection">
                        <li className="collection-item avatar">
                            <i class="material-icons">restaurant</i>
                            <span className="title">{el.name}</span>
                            <p>{addy} <br />
                                {el.opening_hours.open_now ? 'Open Now' : "Closed Now"}
                            </p>
                            <a href="#!" class="secondary-content">{el.rating}</a>
                        </li>
                    </ul>
                </div>
            }
        })

        return (

            <div className="col s6">
                {placesJSX}
            </div>
        )
    }
}

export default Places;
