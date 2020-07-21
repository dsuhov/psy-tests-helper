import React, { FC, useState } from "react";
import { TestsChart } from "./TestsChart";

import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import IconButton from '@material-ui/core/IconButton';
import {ReactComponent as TableIcon} from "../../../../Assets/table.svg";
import {ReactComponent as ChartIcon} from "../../../../Assets/chart.svg";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";
import { TestsListTable } from "./TestsListTable";

const useSyles = makeStyles((theme: Theme) => createStyles({
  details: {
    flexDirection: "column",
  },
  icnsBox: {
    borderTop: `1px solid ${grey[300]}`,
    borderBottom: `1px solid ${grey[300]}`,
    display: "flex",
    alignItems: "flex-start",
  }
}));

export const AccItem: FC<{
  title: string;
  accItemData: Array<{
    date: string;
    result: number;
  }>;
}> = ({ title, accItemData }) => {
  const classes = useSyles();
  const [displayState, setDisplayState] = useState<"chart" | "table">("table");

  const changeView = (view: "chart" | "table") => {
    setDisplayState(view)
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id={`panel-${title}`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Box className={classes.icnsBox} py={1} mb={1}>
          <IconButton style={{ marginRight: 14 }} onClick={() => changeView("table")}>
            <TableIcon style={{ width: 30, height: 30 }} />
          </IconButton>
          <IconButton onClick={() => changeView("chart")}>
            <ChartIcon style={{ width: 30, height: 30 }} />
          </IconButton>
        </Box>
        {displayState === "chart" ? 
          <TestsChart data={accItemData.reverse()} /> :
          <TestsListTable testData={accItemData} />
        }
        
      </AccordionDetails>
    </Accordion>
  );
}