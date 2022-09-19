import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ConferenceData, Webinars, MeetUps, ConferenceTxt } from "./DummyData";

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
        } else if (comp === "webinars") {
            setData(Webinars);
        } else if (comp === "conference") {
            setData(ConferenceData);
        }
    }, [comp]);

    const meetUp = (ele: any, index: number) => {
        return (
            <Box key={index} className={styles.card} sx={{ backgroundImage: `url(${ele.image})` }}>
                <Box sx={{ background: "rgba(0, 0, 0, 0.7)", height: "100%" }}>
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
            </Box>
        );
    };

    const conferenceTemplate = (ele: any, index: number) => {
        return (
            <Stack direction="row" key={index} spacing={4} sx={{ marginTop: `${index !== 0 ? "4rem" : ""}` }}>
                <Box>
                    <img src={ele.image} alt="conferenceImg" height="200" />
                </Box>
                <Stack spacing={3}>
                    <Stack direction="row" spacing={20}>
                        <Typography variant="subtitle1" color="#fff">
                            <CalendarMonthIcon sx={{ color: "#fff", fontSize: "1rem", marginRight: "0.2rem" }} />
                            {ele.date}
                        </Typography>
                        <Typography variant="subtitle1" color="#fff">
                            <LocationOnIcon sx={{ color: "#fff", fontSize: "1rem", marginRight: "0.2rem" }} />
                            {ele.place}
                        </Typography>
                    </Stack>
                    <Typography variant="subtitle1" color="#fff">
                        {ele.title}
                    </Typography>
                    <Stack direction="row" spacing={4}>
                        <Typography variant="subtitle1" color="#fff">
                            {ele.speakers}
                            <br />
                            <strong>Speakers</strong>
                        </Typography>
                        <Typography variant="subtitle1" color="#fff">
                            {ele.attendees}
                            <br />
                            <strong>Attendees</strong>
                        </Typography>
                        <Typography variant="subtitle1" color="#fff">
                            {ele.prizes}
                            <br />
                            <strong>Prizes</strong>
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        );
    };

    const displayFn = (ele: any, index: number) => {
        switch (comp) {
            case "meetups":
                return meetUp(ele, index);
            case "webinars":
                return meetUp(ele, index);
            case "conference":
                return conferenceTemplate(ele, index);
        }
    };

    const checkColor = (ele: string) => {
        if (comp === "conference") {
            if (ele === "b") return "#fff";
            else return "#000";
        } else {
            if (ele === "b") return "#000";
            else return "#fff";
        }
    };

    return (
        <Box className={styles.outerBox}>
            {from !== "nav" && (
                <Stack direction="row" width="fit-content" sx={{ border: `${comp === "conference" && "1px solid #fff"}` }}>
                    <Box onClick={() => setType("upcoming")} className={styles.toggle} sx={type === "upcoming" ? { background: checkColor("b"), color: checkColor("c") } : { background: checkColor("c"), color: checkColor("b") }}>
                        Upcoming
                    </Box>
                    <Box onClick={() => setType("past")} className={styles.toggle} sx={type === "past" ? { background: checkColor("b"), color: checkColor("c") } : { background: checkColor("c"), color: checkColor("b") }}>
                        Past
                    </Box>
                </Stack>
            )}
            <Box className={styles.container}>
                {type === "past" ? (
                    <Box sx={comp === "conference" ? { overflowX: "hidden" } : { display: "flex", overflowY: "hidden", overflowX: "scroll" }}>
                        {data.map((ele: any, index: number) => {
                            return displayFn(ele, index);
                        })}
                    </Box>
                ) : (
                    <>
                        {comp !== "conference" ? (
                            <Typography variant="h6" textAlign="center" width="100%" sx={from === "nav" ? { color: "#fff", fontWeight: "bold", fontSize: "2rem" } : {}}>
                                Awesome {props.comp} will be here soon!
                            </Typography>
                        ) : (
                            <Typography variant="h6" className={styles.conference}>{ConferenceTxt}</Typography>
                        )}
                    </>
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
        marginBottom: "1rem",
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
        height: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    conference: {
        color: "#fff",
        height: "100%",
        textAlign: "center",
        lineHeight: "3rem !important",
        letterSpacing: "0.09rem !important",
        fontWeight: "bold !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default OurMeetUp;
