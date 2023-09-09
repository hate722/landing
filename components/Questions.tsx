import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Box} from "@mui/material";

export default function BasicAccordion() {
    const [openAccordion, setOpenAccordion] = React.useState<boolean | HTMLElement>(true);

    return (
        <Box>
            <Accordion
               expanded={!!openAccordion}
               onClick={() => openAccordion === true ? setOpenAccordion(false) : setOpenAccordion(true)}
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
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        "&.MuiAccordionSummary-root:hover": {
                            background: "#43a2ff"
                        },
                        transition: ".45s all",
                        borderRadius: "6px"
                    }}
                >
                    <Typography sx={{
                        fontWeight: "600"
                    }}
                    >
                        Что такое nameSite?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Мы небольшая команда энтузиастов, желающая максимально упростить Вам игру.<br/>
                        Сделать времяпровождение в различных играх максимально комфортным и приносящим удовольствие!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
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
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                        "&.MuiAccordionSummary-root:hover": {
                            background: "#43a2ff"
                        },
                        transition: ".45s all"
                    }}
                >
                    <Typography sx={{ fontWeight: "600" }}>
                        На что способно ваше ПО?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Всё зависит от конкретной игры и общего времени работы над софтом.<br/>
                        Более подробную информацию о каждом продукте можно увидеть на странице самого ПО.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
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
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                        "&.MuiAccordionSummary-root:hover": {
                            background: "#43a2ff"
                        },
                        transition: ".45s all"
                    }}
                >
                    <Typography sx={{ fontWeight: "600" }}>
                        Сложно ли новичку освоиться с настройками?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Наше меню интуитивно понятное. Имеется поддержка нескольких языков.<br/>
                        В случае возникновения различных вопросов Вы всегда можете обратиться к нам за помощью.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
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
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                        "&.MuiAccordionSummary-root:hover": {
                            background: "#43a2ff"
                        },
                        transition: ".45s all"
                    }}
                >
                    <Typography sx={{ fontWeight: "600" }}>
                        Могу ли я использовать один аккаунт на двух ПК?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Нет. У нас действует определённое правило: Один аккаунт = Один ПК.<br/>
                        За передачу аккаунта выдаётся блокировка на весь аккаунт.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
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
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                        "&.MuiAccordionSummary-root:hover": {
                            background: "#43a2ff"
                        },
                        transition: ".45s all"
                    }}
                >
                    <Typography sx={{ fontWeight: "600" }}>
                        Могу ли я получить бан за использование вашего софта?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Никто не может гарантировать 100% защиты от возможных блокировок.<br/>
                        Мы стараемся максимально огородить наших пользователей от проблем с обнаружением ПО.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}