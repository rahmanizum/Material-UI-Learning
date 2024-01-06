import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const MuiAccordian = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={() => setExpanded(expanded === "panel1" ? null : "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            harum officiis ex rerum? Aliquid ratione blanditiis sapiente dolor
            tempore, quibusdam nam temporibus. Dolorem, reiciendis id
            perferendis consectetur iusto quod labore?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={() => setExpanded(expanded === "panel2" ? null : "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            harum officiis ex rerum? Aliquid ratione blanditiis sapiente dolor
            tempore, quibusdam nam temporibus. Dolorem, reiciendis id
            perferendis consectetur iusto quod labore?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={() => setExpanded(expanded === "panel3" ? null : "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            harum officiis ex rerum? Aliquid ratione blanditiis sapiente dolor
            tempore, quibusdam nam temporibus. Dolorem, reiciendis id
            perferendis consectetur iusto quod labore?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordian;
