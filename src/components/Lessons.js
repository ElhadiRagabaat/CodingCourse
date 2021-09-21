import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ImageAvatars from './ImageAvatars';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{padding:"20px", alignItems:"center" ,textAlign:"center", marginLeft:"200px",marginTop:"-50px"}}>
       <Button onClick={()=>window.open("https://code.visualstudio.com/Download")}variant="contained" style={{marginBottom:"10px"}}>
      Download 
               Visualstudio </Button>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>HTML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          What is HTML?
         <ul>

  
            <li>
              <span> HTML stands for Hyper Text Markup Language</span>
           
            </li>
            <li>
              <span>HTML is the standard markup language for creating Web pages</span>
            
            </li>
            <li>

              <span>
              HTML describes the structure of a Web page
              </span>
            
            </li>
            <li>
              <span>
              HTML consists of a series of elements
              </span>
            </li>
            <li>
              <span>
              HTML elements tell the browser how to display the content
              </span>
            
            </li>
            <li>
              <span>
              HTML elements label pieces of content such as "this is a heading", 
            "this is a paragraph",
             "this is a link", etc.
              </span>
            
            </li>
            </ul>
            <Button onClick={()=>window.open("https://www.w3schools.com/html/html_basic.asp")}   variant="contained">Learn more</Button>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
        What is CSS?
         <ul>
            <li>
              <span> CSS stands for Cascading Style Sheets</span>
            </li>
            <li>
              <span>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</span>
            </li>
            <li>
              <span>
              CSS saves a lot of work. It can control the layout of multiple web pages all at once
              </span>
            </li>
            <li>
              <span>
              External stylesheets are stored in CSS files
              </span>
            </li>
            </ul>
            <Button onClick={()=>window.open("https://www.w3schools.com/css/css_intro.asp")}variant="contained">Learn more</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography> JavaScript </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                <span>
                JavaScript is the world's most popular programming language.
                </span>
              </li>
              <li>
                <span>
                JavaScript is the programming language of the Web.
                </span>
              </li>
              <li>
                <span>
                JavaScript is easy to learn.
                </span>
              </li>
            </ul>
          
          
           
          </Typography>
          <Button onClick={()=>window.open("https://www.w3schools.com/js/default.asp")}variant="contained">Learn more</Button>
        </AccordionDetails>
      </Accordion>
      <div style={{marginTop:"300px"}}>
      <ImageAvatars/>
      </div>
     
    </div>
  );
}