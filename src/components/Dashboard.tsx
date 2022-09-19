import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./dashboard_comps/Header";
import NavBar from "./dashboard_comps/NavBar";
import leanpitchImg from "./asserts/leanpitch.jpg";
import WhyWeMatter from "./dashboard_comps/WhyWeMatter";
import CommonComp from "./dashboard_comps/CommonComp";
import OurMeetUp from "./dashboard_comps/OurMeetUp";

const Dashboard = () => {
    const styles = useStyles();
    const [userSelect, setUserSelect] = useState<number | null>(null);
    return (
        <Box className={styles.mainBox}>
            <Header />
            <Stack direction="row" width="100%" marginTop="1rem" onMouseLeave={() => setUserSelect(null)}>
                <Box className={styles.navBar}>
                    <NavBar setUserSelect={setUserSelect} userSelect={userSelect} />
                </Box>
                <Box className={styles.bodyBox}>
                    <Box className={styles.container} sx={userSelect !== null ? { height: "73vh", overflowY: "auto", padding: "1rem", border: "5px solid yellow", background: "rgba(0, 0, 0, 0.4)" } : {}} onMouseLeave={() => setUserSelect(null)}>
                        {userSelect === 0 && <CommonComp type="trainings" from={"nav"} />}
                        {userSelect === 1 && <OurMeetUp comp={"meetups"} from={"nav"} />}
                        {userSelect === 2 && <OurMeetUp comp={"webinars"} from={"nav"} />}
                        {userSelect === 3 && (
                            <OurMeetUp comp={"conference"} from={"nav"} />
                        )}
                        {userSelect === 4 && <CommonComp type="videos" from={"nav"} />}
                        {userSelect === 5 && <CommonComp type="pmspeaks" from={"nav"} />}
                        {userSelect === 6 && <CommonComp type="blogs" from={"nav"} />}
                    </Box>
                </Box>
            </Stack>
            <WhyWeMatter />
            <Box className={styles.commonComp}>
                <Typography variant="h3" className={styles.textComp}>
                    Our Trainings
                </Typography>
                <CommonComp type="trainings" />
            </Box>
            <Box className={styles.commonComp2}>
                <Typography variant="h3" className={styles.textComp}>
                    Our MeetUps
                </Typography>
                <OurMeetUp comp={"meetups"} />
            </Box>
            <Box className={styles.commonComp2}>
                <Typography variant="h3" className={styles.textComp}>
                    Our Webinars
                </Typography>
                <OurMeetUp comp={"webinars"} />
            </Box>
            <Box className={styles.commonComp2} sx={{ background: "#000",marginBottom:"4rem" }}>
                <Typography variant="h3" className={styles.textComp} color="#fff" mb={2}>
                    Our Conference
                </Typography>
                <OurMeetUp comp={"conference"} />
            </Box>
            <Box className={styles.commonComp}>
                <Typography variant="h3" className={styles.textComp}>
                    Videos
                </Typography>
                <CommonComp type="videos" />
            </Box>
            <Box className={styles.commonComp}>
                <Typography variant="h3" className={styles.textComp}>
                    Blogs
                </Typography>
                <CommonComp type="blogs" />
            </Box>
            <Box className={styles.commonComp}>
                <Typography variant="h3" className={styles.textComp}>
                    PM Speak Series
                </Typography>
                <CommonComp type="pmspeaks" />
            </Box>
        </Box>
    );
};

const useStyles = makeStyles({
    mainBox: {
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        backgroundImage: `url(${leanpitchImg})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        objectFit: "fill",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    bodyBox: {
        width: "74%",
        height: "80vh",
    },
    navBar: {
        width: "25%",
        display: "flex",
        justifyContent: "flex-end",
    },
    container: {
        width: "96%",
        height: "90%",
    },
    commonComp: {
        width: "100%",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "2rem",
    },
    commonComp2: {
        width: "100%",
        background: "#fff",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "2rem",
    },
    textComp: {
        fontWeight: "bold !important",
        textAlign: "center",
        marginBlock: "3rem !important",
    },
});

export default Dashboard;
