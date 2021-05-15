import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "./navbar.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Paper className={classes.root} className="tabs">
      <Tabs
        // value={value}
        // onChange={handleChange}
        // indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Link to="/" className="change-color">
          <Tab label="HOME" className="change-color" />
        </Link>
        <Link to="/categories">
          <Tab label="CATEGORIES" className="change-color" />
        </Link>
        <Link to="/features">
          <Tab label="FEATURES" className="change-color" />
        </Link>
        <Link to="/blog">
          <Tab label="BLOG" className="change-color" />
        </Link>
      </Tabs>
    </Paper>
  );
}



