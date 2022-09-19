import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";
import LearnPitch3 from "../asserts/leanpitch3.png";
import RedArrow from "../asserts/red_arrow.png";

const WhyWeMatter = () => {
    const styles = useStyles();
    return (
        <Box className={styles.outerBox}>
            <Stack sx={{ my: 5 }}>
                <Typography variant="h3" sx={{ textAlign: "center", color: "yellow" }}>
                    Why We Matter?
                </Typography>
                <Box display="flex" width="fit-content" marginLeft="15rem">
                    <img src={RedArrow} height="70" alt="Red Arrow" />
                </Box>
            </Stack>
            <Stack spacing={5} direction="row" width="90%" alignItems="center" justifyContent="center">
                <Stack spacing={1} width="50%">
                    <Typography variant="h3" color="#fff">
                        Creative Thinking for <br /> creating a impact!
                    </Typography>
                    <Typography variant="subtitle1" color="#fff">
                        Product thinking is problem solving. Whether it’s your kid asking for a solution to his day to day problems or the rise in threats of Global Warming, it’s evident that the whole human kind needs to be product thinkers. We, at Product Thinking community, strive to provide such a platform for practitioners to come together and learn from each other about the craft of building products. This Platform is run by the community for the community. We are a community with 46k+ product thinkers hosting various events across India: Webinars every week, meet-ups every month in every city, two conference a year.
                    </Typography>
                </Stack>
                <iframe width="450" height="240" src="https://www.youtube.com/embed/S8KwpKxRmsc?autoplay=1&mute=1" title="Why us | Leanpitch.com" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Stack>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon sx={{ fontSize: "1rem", color: "#fff" }} />} className={styles.btn}>
                Join Our Community
            </Button>
            <Divider style={{ width: "100%", background: "#fff", marginBlock: "4rem" }} />

            <Stack direction="row" width="90%" alignItems="center" justifyContent="center">
                <Stack spacing={1} width="50%">
                    <Typography variant="h3" color="red" textAlign="center">
                        Leanpitch Thinking <br />
                        Labs
                    </Typography>
                    <Typography variant="subtitle1" color="#fff">
                        Product Thinking Community introduces PT Labs powered by Leanpitch. Product Managers are creative thinkers and life long researchers. Their curiosity to understand the problem, persistence to solve them, and empathy to make the solutions easy makes them resourceful in solving Social Problems.
                        <br /> If you have it in you and are looking for an opportunity to contribute back to society, join PT Labs. Become part of a product team of volunteers, pickup a social problem, swarm together, design, and run experiments to find a problem/solution fit. Present your discovery and be recognized at next Product Thinking Conference. Product Thinking community will pursue further on implementing a solution in the subsequent cohorts, which you can again be part of.
                    </Typography>
                    <Typography variant="subtitle1" color="#fff" fontWeight="bold">
                        Share your interest by submitting your details. We will get back to you with more information.
                    </Typography>
                    <Stack spacing={1} direction="row">
                        <Button variant="contained" sx={{ background: "red" }} endIcon={<ArrowForwardIosIcon sx={{ fontSize: "1rem", color: "#fff" }} />} className={styles.btn1}>
                            View Details
                        </Button>
                        <Button variant="contained" sx={{ background: "red" }} endIcon={<ArrowForwardIosIcon sx={{ fontSize: "1rem", color: "#fff" }} />} className={styles.btn1}>
                            Register Now
                        </Button>
                    </Stack>
                </Stack>
                <img src={LearnPitch3} width="550" alt="learnpitch" />
            </Stack>
        </Box>
    );
};

const useStyles = makeStyles({
    outerBox: {
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10rem",
        marginBottom: "4rem",
    },
    btn: {
        width: "fit-content",
        color: "#fff",
        borderRadius: "5rem",
        borderColor: "#fff",
        padding: "1rem",
        marginTop: "3rem !important",
    },
    btn1: {
        color: "#fff",
        padding: "1rem",
        ":hover": {
            opacity: "0.9 !important",
            background: "red !important",
        },
    },
});

export default WhyWeMatter;
