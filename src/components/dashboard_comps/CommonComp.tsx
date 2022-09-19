import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TrainingData from "./DummyData";
import { Videos } from "./DummyData";
import { Blogs } from "./DummyData";
import { PmSpeaks } from "./DummyData";

interface IProps {
    type: string;
    from?: string;
}

const CommonComp: React.FC<IProps> = (props) => {
    const { type, from } = props;
    const styles = useStyles(from);
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if (type === "trainings") {
            setData(TrainingData);
        } else if (props.type === "videos") {
            setData(Videos);
        } else if (type === "blogs") {
            setData(Blogs);
        } else if (type === "pmspeaks") {
            setData(PmSpeaks);
        }
    }, [type]);

    const colorFn = (value: number) => {
        const color: string[] = ["#3F677A", "#576E9A", "#3E6B87", "#3182A0"];
        let ind = (value + 1) % color.length;
        if (ind !== 0) {
            return color[ind - 1];
        }
        return color[color.length - 1];
    };

    const VideosCard = (ele: any, index: number) => {
        return (
            <Box marginLeft="2rem" key={index}>
                <iframe width="320" height="190" loading="eager" src={ele.link} title={ele.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Box>
        );
    };
    const TrainingCard = (ele: any, index: number) => {
        return (
            <Box key={index} className={styles.card} sx={{ background: colorFn(index), margin: `${from === "nav" ? "1rem 2rem" : ""}` }}>
                <img src={ele.icon} height="50" className={styles.logo} alt="logo" />
                <Typography className={styles.title}>{ele.title}</Typography>
                <Box sx={{ background: "rgba(0, 0, 0, 0.3)", paddingInline: "1rem" }}>
                    <Typography variant="caption" color="#fff">
                        Upcoming Training
                    </Typography>
                    <Typography variant="subtitle2" color="#fff" fontWeight="bold">
                        {ele.date}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center" mt="1rem">
                    <Button variant="contained" className={styles.btn}>
                        Register
                    </Button>
                </Box>
            </Box>
        );
    };

    const BlogCard = (ele: any, index: number) => {
        return (
            <Box key={index} className={styles.blogCard} sx={{ backgroundImage: `url(${ele.image})` }}>
                <Box sx={{ background: "rgba(0, 0, 0, 0.5)", height: "100%" }}>
                    <Box className={styles.textContain}>
                        <Typography className={styles.blogTitle}>{ele.title}</Typography>
                        <Typography variant="subtitle1" color="#fff">
                            {ele.author}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        );
    };

    const PmSpeaksCard = (ele: any, index: number) => {
        return <Box key={index} className={styles.blogCard} sx={{ backgroundImage: `url(${ele})` }} />;
    };

    const displayFn = (ele: any, index: number) => {
        switch (type) {
            case "trainings":
                return TrainingCard(ele, index);
            case "videos":
                return VideosCard(ele, index);
            case "blogs":
                return BlogCard(ele, index);
            case "pmspeaks":
                return PmSpeaksCard(ele, index);
        }
    };

    return (
        <Box className={styles.container} sx={from === "nav" ? { height: "100%", flexWrap: "wrap", width: "100%", overflowX: "hidden", overflowY: "auto" } : { justifyContent: "space-between", overflowY: "hidden", overflowX: "scroll" }}>
            {data?.map((ele: any, index: number) => {
                return displayFn(ele, index);
            })}
        </Box>
    );
};

const useStyles = makeStyles({
    container: {
        display: "flex",
        width: "80%",
    },
    card: {
        cursor: "pointer",
        marginLeft: "2rem",
        marginBottom: "0.7rem",
        paddingBlock: "1rem",
        minWidth: "13rem",
        maxWidth: "13rem",
        borderRadius: "1rem",
        height: "fit-content",
    },
    logo: {
        marginLeft: "1rem",
    },
    title: {
        marginLeft: "1rem !important",
        color: "white",
        height: "3rem",
        fontSize: "0.9rem !important",
        fontWeight: "bold !important",
    },
    btn: {
        background: "#fff !important",
        color: "#000 !important",
        fontWeight: "bold !important",
        padding: "0.3rem 2rem !important",
        borderRadius: "4rem !important",
        width: "fit-content",
    },
    textContain: {
        height: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    blogTitle: {
        height: "1.5rem",
        color: "yellow",
        fontSize: "0.9rem !important",
        fontWeight: "bold !important",
    },
    blogCard: {
        cursor: "pointer",
        marginLeft: "3rem",
        marginBottom: "1rem",
        position: "relative",
        minWidth: "18rem",
        minHeight: "10rem",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        objectFit: "fill",
    },
});

export default CommonComp;
