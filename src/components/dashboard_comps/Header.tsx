import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../asserts/logoleanpitch.webp";

const Header = () => {
    const styles = useStyles();
    return (
        <Box className={styles.outerBox}>
            <Box className={styles.logo} >
                <img src={Logo} alt="logo" height="45" />
                <Typography sx={{ color: "#fff", fontSize: "1.3rem", display: "flex", alignItems: "center", fontWeight: "600", ml: 1 }}>Leanpitch</Typography>
            </Box>
            <Stack spacing={1} width="fit-content" direction="row">
                <Box className={styles.subscribe}>Subscribe</Box>
                <Box className={styles.contact}>Contact Us</Box>
            </Stack>
        </Box>
    );
};

const useStyles = makeStyles({
    outerBox: {
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: "0",
        right: "0",
        left: "0",
        zIndex: "10",
        background: "#272626",
    },
    logo: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        marginLeft: "1rem",
    },
    subscribe: {
        paddingInline: "1.5rem",
        display: "flex",
        alignItems: "center",
        background: "red",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
    },
    contact: {
        paddingInline: "1.5rem",
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
    },
});

export default Header;
