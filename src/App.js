import React from "react";
import { Box, Badge, Avatar, makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",

    "& > *": {
      margin: theme.spacing(2)
    }
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    border: `2px solid pink`,
    // backgroundColor: "transparent",
    color: "black"
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        badgeContent={
          <Avatar className={classes.small}>
            <EditIcon />
          </Avatar>
        }
      >
        <Avatar
          className={classes.large}
          alt="Travis Howard"
          src="https://picsum.photos/536/354"
        />
      </Badge>
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        badgeContent={
          <Avatar className={classes.small}>
            <EditIcon />
          </Avatar>
        }
      >
        <Avatar
          className={classes.large}
          alt="Travis Howard"
          src="https://picsum.photos/533/354"
        />
      </Badge>
    </Box>
  );
}
