import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, active, isRed, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBOx ${active && "infoBox--selected"} ${
        //--= modification
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        {/* {Title} */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* {Num of case} */}
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
