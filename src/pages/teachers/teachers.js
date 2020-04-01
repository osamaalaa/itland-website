import React, { useState } from "react";

import * as Icons from "@material-ui/icons";

// styles
import useStyles from "./styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import image from '../../assets/img/logo.png'
import Paper from '@material-ui/core/Paper';
// icons sets

import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";
import { Grid } from "@material-ui/core";

export default function IconsPage () {
  var classes = useStyles();
  return (
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                    <Widget title="Teacher1" disableWidgetMenu >
                            <Card className={classes.root}>
                                        <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={image}
                                            title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                    Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                        </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Widget>
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <Widget title="Teacher2" disableWidgetMenu>
                                    <Card className={classes.root}>
                                                <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="140"
                                                    image={image}
                                                    title="Contemplative Reptile"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                            Lizard
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                            across all continents except Antarctica
                                                </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Widget>
                    </Grid>
                    <Grid item xs={12} md={6}>
                          <Widget title="Teacher3" disableWidgetMenu>
                                    <Card className={classes.root}>
                                                <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="140"
                                                    image={image}
                                                    title="Contemplative Reptile"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                            Lizard
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                            across all continents except Antarctica
                                                </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Widget>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Widget title="Teacher4" disableWidgetMenu>
                                        <Card className={classes.root}>
                                                    <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="140"
                                                        image={image}
                                                        title="Contemplative Reptile"
                                                            />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                Lizard
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                                across all continents except Antarctica
                                                    </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                            </Widget>
                        </Grid>
                    </Grid>       
);}

