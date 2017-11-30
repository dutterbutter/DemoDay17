import React from 'react';
import axios from 'axios';
import Nav from './Nav';
import TopBar from './TopBar';
import { localURL } from './keys';



class Squares extends React.Component {
    constructor() {
        super()
        this.state = {
            past: []
        }
    }

    componentWillMount() {
        axios.get(localURL + '/foodify')
            .then(result => {
                this.setState({
                    past: result.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        console.log(this.state.past);
        let cb;
        if (window.screen.width > 780) {
            //cb = [0,1,2,3,4,5,6,7,8,9];
            cb = ["#0092c9", "#ff0000", "#ff9b00", "#11a51b", "#0092c9", "#ff0000", "#ff9b00", "#11a51b"]
        } else {
            cb = ["#0092c9", "#ff0000", "#ff9b00", "#11a51b"];
        }

        let pastItems = this.state.past;

        let gridJSX = this.state.past.map((el, i) => {
            console.log(el._id)
            let style = {
                backgroundColor: cb[i],
            }
            let ingredients = el.ingredients.map((el, i) => {
                return <li className="ing">{el}</li>
            })

            return <div className="card small col s2 col m4" style={style}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={el.imageURI} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4 title-sq">{el.visionName}<i className="material-icons right">more_vert</i></span>
                    <div className="card-content desc-sq">
                        <p className="">{el.description}</p>
                    </div>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Ingredients<i className="material-icons right">close</i></span>
                    {ingredients}
                </div>
            </div>

        })

        return (
            <div>
                <Nav />
                <div className="App" >
                    <TopBar />
                    <div className="container">
                        <div className="row col s12 other-title">
                            Bon Appetit
                        </div>
                        <div className="row">
                            {gridJSX}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Squares;