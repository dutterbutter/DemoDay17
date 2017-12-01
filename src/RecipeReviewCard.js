import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions, CardTitle } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Learn from './Learn';
import RecipeList from './RecipeList';
import Places from './Places';


const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 194,

    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

    flexGrow: {
        flex: '1 1 auto',
    },

});

class RecipeReviewCard extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0
        }
        this.nextGuess = this.nextGuess.bind(this)
    }
    state = { expanded: false };
    state = { open: false };

    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded,
            open: !this.state.open
        });
    };


    nextGuess(direction) {
        this.setState({
            index: this.state.index + direction
        })
    }

    render() {
        let cb;
        if (window.screen.width > 780) {
            //cb = [0,1,2,3,4,5,6,7,8,9];
            cb = ["#0092c9", "#ff0000", "#ff9b00", "#11a51b", "#0092c9", "#ff0000", "#ff9b00", "#11a51b"]
        } else {
            cb = ["#0092c9", "#ff0000", "#ff9b00", "#11a51b"];
        }

        let colorBar = cb.map((el, i) => {
            return <div key={i} className="color-line" style={{ backgroundColor: cb[i] }}></div>
        })

        const { classes } = this.props;

        let foodInfo = this.props.food;
        let score;

        let placeJSX = foodInfo.map((el, i) => {
            let places = el.places.results
            return <Places place={places} />

        })


        let foodJSX = foodInfo.map((el, i) => {

            score = <div>CL: {el.vision.webEntities[this.state.index].score.toFixed(2)}</div>
            let wiki = el.wiki[2];

            let recipeDetail = el.yummly.matches;
            let foodTitle = el.vision.webEntities[this.state.index].description;
            let dishTitle = <div className="move"><a className={this.state.index <= 0 ? "disabled" : ""} onClick={() => this.nextGuess(-1)} ><i className="material-icons next disabled">navigate_before</i></a>
                <div className="dish-title">{foodTitle}</div>
                <i className="material-icons next" onClick={() => this.nextGuess(+1)}>navigate_next</i>
            </div>


            let wikiPedia = <div className="Wikipedia-content">{wiki}</div>

            return <div className="col s6 ">
                <MuiThemeProvider>


                    <Card className={classes.card}>
                        <div className="hoverable">
                            <div className="card-height">
                                <CardHeader
                                    avatar={
                                        <Avatar >
                                            <div>
                                                <i className="material-icons small" style={{ color: cb[i] }}>more_vert </i>
                                            </div>
                                        </Avatar>
                                    }
                                    title={dishTitle}
                                    subheader={score}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={el.vision.fullMatchingImages[0].url}
                                    title="Food item"
                                />

                                <CardContent>
                                    <Typography component="p">
                                        {wikiPedia}
                                        <Learn website={el.wiki[3][0]} />
                                    </Typography>
                                </CardContent>
                                <div className="colorMe">
                                    {colorBar}
                                </div>
                            </div>

                            <CardActions disableActionSpacing>
                                <IconButton aria-label="Add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="Share">
                                    <ShareIcon />
                                </IconButton>
                                <div className={classes.flexGrow} />
                                <IconButton
                                    className={classnames(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded,
                                    })}
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>

                            <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                                <CardContent>
                                    <RecipeList recipeTitle={recipeDetail} />
                                </CardContent>
                            </Collapse>

                        </div>
                    </Card>
                </MuiThemeProvider>
            </div>

            RecipeReviewCard.propTypes = {
                classes: PropTypes.object.isRequired,
            };
        })

        return (
            <div className="container">
                <div className="row">
                    {foodJSX}
                    {placeJSX}
                </div>
            </div>
        );

    }
}





export default withStyles(styles)(RecipeReviewCard);