import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Box} from "@mui/material";
import {useEffect} from "react";

export default function BasicAccordion() {
    const [accordion, setAccordion] = React.useState<object | any>({
        'firstAccordion': true,
        'secondAccordion': false,
        'thirdAccordion': false,
        'fourthAccordion': false,
        'fifthAccordion': false
    });

    return (
        <Box>
            <Box className="faq_bg" />
            <Accordion
                expanded={!!accordion.firstAccordion}
                sx={{
                    marginBottom: 3,
                    borderRadius: "6px",
                    boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
                    "&.MuiAccordion-root::before": {
                        backgroundColor: "unset"
                    },
                    "&.MuiAccordion-root:first-of-type": {
                        borderTopLeftRadius: "6px",
                        borderTopRightRadius: "6px"
                    }
                }}
            >
                <AccordionSummary
                    onClick={() => {
                        let newAccordion = {...accordion};
                        newAccordion.firstAccordion = !accordion.firstAccordion;
                        setAccordion(newAccordion);
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        "&.MuiAccordionSummary-root:hover": {
                            background: "#43a2ff"
                        },
                        transition: ".45s all",
                        borderRadius: !accordion.firstAccordion ? "6px" : "6px 6px 0 0",
                        background: accordion.firstAccordion ? "#43a2ff" : "unset"
                    }}
                >
                    <Typography sx={{ fontWeight: "600" }}>
                        Вопрос 1?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ляляляляляляллялялялялялляляляляллляляляллялялялляляля<br/>
                        ляляляляляляллялялялялялляляляляллляляляллялялялляляля
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={accordion.secondAccordion}
                sx={{
                marginBottom: 3,
                borderRadius: "6px",
                boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
                "&.MuiAccordion-root::before": {
                    backgroundColor: "unset"
                }
            }}
            >
                <AccordionSummary
                    onClick={() => {
                        let newAccordion = {...accordion};
                        newAccordion.secondAccordion = !accordion.secondAccordion;
                        setAccordion(newAccordion);
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        "&.MuiAccordionSummary-root:hover": {
                            background: "#43a2ff"
                        },
                        transition: ".45s all",
                        borderRadius: !accordion.secondAccordion ? "6px" : "6px 6px 0 0",
                        background: accordion.secondAccordion ? "#43a2ff" : "unset"
                    }}
                >
                    <Typography sx={{ fontWeight: "600" }}>
                       Вопрос 2?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ляляляляляляллялялялялялляляляляллляляляллялялялляляля<br/>
                        ляляляляляляллялялялялялляляляляллляляляллялялялляляля
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={accordion.thirdAccordion}
                sx={{
                marginBottom: 3,
                boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
                borderRadius: "6px",
                "&.MuiAccordion-root::before": {
                    backgroundColor: "unset"
                }
            }}
            >
                <AccordionSummary
                    onClick={() => {
                        let newAccordion = {...accordion};
                        newAccordion.thirdAccordion = !accordion.thirdAccordion;
                        setAccordion(newAccordion);
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        "&.MuiAccordionSummary-root:hover": {
                            background: "#43a2ff"
                        },
                        transition: ".45s all",
                        borderRadius: !accordion.thirdAccordion ? "6px" : "6px 6px 0 0",
                        background: accordion.thirdAccordion ? "#43a2ff" : "unset"
                    }}
                >
                    <Typography sx={{ fontWeight: "600" }}>
                        Вопрос 3?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ляляляляляляллялялялялялляляляляллляляляллялялялляляля<br/>
                        ляляляляляляллялялялялялляляляляллляляляллялялялляляля
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={accordion.fourthAccordion}
                sx={{
                marginBottom: 3,
                boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
                borderRadius: "6px",
                "&.MuiAccordion-root::before": {
                    backgroundColor: "unset"
                }
            }}
            >
                <AccordionSummary
                    onClick={() => {
                        let newAccordion = {...accordion};
                        newAccordion.fourthAccordion = !accordion.fourthAccordion;
                        setAccordion(newAccordion);
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        "&.MuiAccordionSummary-root:hover": {
                            background: "#43a2ff"
                        },
                        transition: ".45s all",
                        borderRadius: !accordion.fourthAccordion ? "6px" : "6px 6px 0 0",
                        background: accordion.fourthAccordion ? "#43a2ff" : "unset"
                    }}
                >
                    <Typography sx={{ fontWeight: "600" }}>
                        Вопрос 4?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ляляляляляляллялялялялялляляляляллляляляллялялялляляля<br/>
                        ляляляляляляллялялялялялляляляляллляляляллялялялляляля
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={accordion.fifthAccordion}
                sx={{
                marginBottom: 3,
                boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
                borderRadius: "6px",
                "&.MuiAccordion-root::before": {
                    backgroundColor: "unset"
                },
                transition: ".45s all"
            }}>
                <AccordionSummary
                    onClick={() => {
                        let newAccordion = {...accordion};
                        newAccordion.fifthAccordion = !accordion.fifthAccordion;
                        setAccordion(newAccordion);
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        "&.MuiAccordionSummary-root:hover": {
                            background: "#43a2ff"
                        },
                        transition: ".45s all",
                        borderRadius: !accordion.fifthAccordion ? "6px" : "6px 6px 0 0",
                        background: accordion.fifthAccordion ? "#43a2ff" : "unset"
                    }}
                >
                    <Typography sx={{ fontWeight: "600" }}>
                        Вопрос 5?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ляляляляляляллялялялялялляляляляллляляляллялялялляляля<br/>
                        ляляляляляляллялялялялялляляляляллляляляллялялялляляля
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
