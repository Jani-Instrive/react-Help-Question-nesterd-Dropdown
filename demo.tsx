import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [childData, setChildData] = React.useState<string | false>(false);

  const handleChildChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setChildData(isExpanded ? panel : false);
    };

  const handleParentChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const renderChildren = () => {
    return (
      <Grid>
        <Accordion
          childData={childData === 'panel1'}
          onChange={handleChildChange('panel1')}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%' }}>How to use Navan?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>JONS need to provide content</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          childData={childData === 'panel2'}
          onChange={handleChildChange('panel2')}
        >
          <AccordionSummary
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%' }}>
              Explore how to navigate Zaven from
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>JONS need to provide content</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          childData={childData === 'panel3'}
          onChange={handleChildChange('panel3')}
        >
          <AccordionSummary
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%' }}>
              RFP drafting to use of analytics
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>JONS need to provide content</Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    );
  };

  return (
    <>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleParentChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: '33%' }}>Visit Help Center</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Typography>{renderChildren()}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
