import React from "react";

// import material ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

// Card styling for flex
const useStyles = makeStyles({
    card: {
        display: "flex",
        padding: "10px",
        margin: "20px 0",
        backgroundColor: "#f2f2f2"
    },
    cardDetails: {
        flex: 1
    },
    cardMedia: {
        width: 120,
        height: 120,
        borderRadius: "50%"
    }
});

// below are the function for the follower card
function WomanCard(props) {
    // set useStyles to classes for easier modify
    const classes = useStyles();

    return (
        <div>
            {props.players.map(players => (
                <Grid container item xs={12} key={players.name}>
                    <CardActionArea component="a">
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        {players.name}
                                    </Typography>
                                    <Typography component="h2" variant="h5">
                                        {players.country}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </CardActionArea>
                </Grid>
            ))}
        </div>
    );
}

export default WomanCard;
