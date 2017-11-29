import React from 'react';
import TillICollapse from './TillICollapse';

class RecipeList extends React.Component {

    render() {

        let cb;
        if (window.screen.width > 780) {
            //cb = [0,1,2,3,4,5,6,7,8,9];
            cb = ["#0092c9", "#ff0000", "#ff9b00", "#11a51b", "#0092c9", "#ff0000", "#ff9b00", "#11a51b"]
        } else {
            cb = ["#0092c9", "#ff0000", "#ff9b00", "#11a51b"];
        }
        let colorIcon = cb.map((el, i) => {
            return <div key={i} className="color-line" style={{ color: cb[i] }}></div>
        })



        let matchesObj = this.props.recipeTitle;
        let recipeNames = matchesObj.map((el, i) => {

            let minute = el.totalTimeInSeconds / 60

            return <TillICollapse>
                <div className="accor">
                    {colorIcon}
                    <div className="head">
                        <div className="left-align">
                            <i className="material-icons" style={{ color: cb[i] }}>
                                local_dining</i>{" " + el.recipeName}
                        </div>
                        <div className="right-align time">
                            {minute} min
                </div>
                    </div>
                    <div className="body left-align">
                        <span className="ingredient-title">Ingredients: </span><br />
                        <span>{" " + el.ingredients + "  ,  "}</span>
                    </div>
                    <div className="body left-align">
                        <span className="ingredient-title">Flavors: </span><br />
                        <span>{" " + el.flavors + ",  "}</span>
                    </div>
                    <div className="body left-align">
                        <span className="ingredient-title">Course: </span><br />
                        <span>{" " + el.attributes.course + ",  "}</span>
                    </div>
                    <div className="body left-align">
                        <span className="ingredient-title">Cuisine: </span><br />
                        <span>{" " + el.attributes.cuisine + ",  "}</span>
                    </div>
                </div>
            </TillICollapse>
        })

        return (
            <div>

                {recipeNames}

            </div>
        )
    }
}
export default RecipeList;




