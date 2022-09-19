import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MeetUps } from "./DummyData";
import { Webinars } from "./DummyData";

interface IProps {
    comp?: string;
    from?: string;
}

const OurMeetUp: React.FC<IProps> = (props) => {
    const { comp, from } = props;
    const [type, setType] = useState<string>("upcoming");
    const styles = useStyles();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if (comp === "meetups") {
            setData(MeetUps);
        } else if (props.comp === "webinars") {
            setData(Webinars);
        } else {
            setData(MeetUps);
        }
    }, [comp]);

    return (
        <Box className={styles.outerBox}>
            {from !== "nav" && (
                <Stack direction="row" width="fit-content">
                    <Box onClick={() => setType("upcoming")} className={styles.toggle} sx={type === "upcoming" ? { background: "#000", color: "#fff" } : {}}>
                        Upcoming
                    </Box>
                    <Box onClick={() => setType("past")} className={styles.toggle} sx={type === "past" ? { background: "#000", color: "#fff" } : {}}>
                        Past
                    </Box>
                </Stack>
            )}
            <Box className={styles.container}>
                {type === "past" ? (
                    <Box sx={{ display: "flex", width: "100%", overflowX: "scroll", overflowY: "hidden" }}>
                        {data.map((ele: any, index: number) => {
                            return (
                                <Box key={index} className={styles.card} sx={{ backgroundImage: `url(${ele.image})` }}>
                                    <Box className={styles.textContain}>
                                        <Typography className={styles.title}>{ele.title}</Typography>
                                        <Typography variant="subtitle1" color="#fff">
                                            {ele.date}
                                        </Typography>
                                        <Typography variant="subtitle1" color="#fff">
                                            {ele.place}
                                        </Typography>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                ) : (
                    <Typography variant="h6" textAlign="center" width="100%" sx={from === "nav" ? { color: "#fff", fontWeight: "bold", fontSize: "2rem" } : {}}>
                        Awesome {props.comp} will be here soon!
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

const useStyles = makeStyles({
    outerBox: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        // overflowX: "auto",
        marginTop: "3rem",
    },
    card: {
        marginLeft: "3rem",
        position: "relative",
        minWidth: "18rem",
        borderRadius: "1rem",
        height: "12rem",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        objectFit: "fill",
    },
    title: {
        height: "3rem",
        color: "yellow",
        fontSize: "0.9rem !important",
        fontWeight: "bold !important",
    },
    btn: {
        color: "#fff !important",
        borderRadius: "4rem !important",
        width: "fit-content",
    },
    toggle: {
        padding: "0.7rem 1.5rem",
        border: "1px solid #000 !important",
        fontWeight: "600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    },
    textContain: {
        background: "rgba(0, 0, 0, 0.7)",
        height: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
});

export default OurMeetUp;
