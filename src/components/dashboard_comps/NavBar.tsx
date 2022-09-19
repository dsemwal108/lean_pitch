import React from "react";
import { Box, Stack } from "@mui/system";
import { makeStyles } from "@mui/styles";

interface IProps {
    userSelect?: number | null;
    setUserSelect: any;
}

const NavBar: React.FC<IProps> = (props) => {
    const { userSelect, setUserSelect } = props;
    const styles = useStyles();
    const navList: string[] = ["Trainings", "MeetUps", "Webinars", "Conference", "Videos", "PM Speak Series", "Blogs", "Podcasts", "Be A Speaker", "Be A Volunteer", "About Us"];
    return (
        <Box className={styles.outerBox}>
            <Stack spacing={1}>
                {navList.map((item: string, index: number) => {
                    return (
                        <Box
                            className={styles.listItem}
                            sx={userSelect === index && index < 8 ? { background: "yellow", color: "#000" } : {}}
                            onMouseOver={(e) => {
                                if (index < 8) setUserSelect(index);
                                else setUserSelect(null);
                            }}
                        >
                            {item}
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
};

const useStyles: any = makeStyles({
    outerBox: {
        width: "90%",
        height: "100%",
    },
    listItem: {
        color: "#fff",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        padding: "0.3em 1.5rem",
        fontWeight: "500",
        cursor: "pointer",
    },
});

export default NavBar;
