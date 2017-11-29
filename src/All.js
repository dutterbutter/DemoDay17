import React from 'react';
import { Link, Route } from 'react-router-dom';
import MobileNav from './MobileNav';
import Learn from './Learn';


class All extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0
        }
        this.nextGuess = this.nextGuess.bind(this)
    }

    nextGuess(direction) {
        this.setState({
            index: this.state.index + direction
        })
    }
    render() {

        let foodInfo = this.props.food;
        let score;

        let foodJSX = foodInfo.map((el, i) => {

            score = <div>CL: {el.vision.webEntities[this.state.index].score.toFixed(2)}</div>
            let wiki = el.wiki[2];
            let foodTitle = el.vision.webEntities[this.state.index].description;
            let dishTitle = <div className="move"><a className={this.state.index <= 0 ? "disabled" : ""} onClick={() => this.nextGuess(-1)} ><i className="material-icons next disabled">navigate_before</i></a>
                <div className="dish-title">{foodTitle}</div>
                <i className="material-icons next" onClick={() => this.nextGuess(+1)}>navigate_next</i>
            </div>
            let wikiPedia = <div className="Wikipedia-content">{wiki}</div>


            let recipes = el.yummly.matches.map((el, i) => {
                return <div>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={el.smallImageUrls} />
                        </div>
                        <div className="card-stacked">
                            <span className="card-title">
                                {el.recipeName}
                            </span>
                            <div className="card-content">
                                <span className="ingredient-title">Ingredients: </span><br />
                                <span className="ingredients-body align-left">{" " + el.ingredients + "  ,  "}</span>
                            </div>
                        </div>
                    </div>
                </div>
            })

            let places = el.places.results.map((el, i) => {
                let addy = el.formatted_address.slice(0, -8);
                if (i <= 4) {
                    return <div>
                        <div className="card-stacked">
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
                    </div>
                }
            })

            return <div>
                <div id="test1" className="col s12">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={el.vision.fullMatchingImages[0].url} />
                        </div>
                        <span className="card-title">{dishTitle}</span>
                        <span className="sub-header">{score}</span>
                        <div className="card-content">
                            <p>{wikiPedia}</p>
                        </div>
                        <div className="card-action">
                            <Learn website={el.wiki[3][0]} />
                        </div>
                    </div>
                </div>
                <div id="test2" className="col s12">
                    {recipes}
                </div>
                <div id="test3" className="col s12">
                    {places}
                </div>
            </div>
        })

        return (
            <div className="container" >
                <div className="row">
                    {foodJSX}
                </div>
            </div>
        )
    }
}
export default All;