import React from "react";
import { Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  container: {
    
    border: "1px solid #ccc",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    padding: theme.spacing(3),
    borderRadius: "4px",
    margin:"200px",
    marginLeft:"400px",
    width:"450px",
    height:"150px",
    
  },
  buttons: {
    display: "flex",
    justifyContent:"center",
    margin: theme.spacing(4),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: "#f50057", transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={classes.container}
      variants={containerVariants}
      initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
    >
      <Typography variant="h4" gutterBottom>
        Hi, welcome to OCPL-Tech
      </Typography>
      <Box className={classes.buttons}>
        
        <motion.div variants={buttonVariants} whileHover="hover">
          <Button component={Link} to="/register" color="primary" variant="contained">
            Let's Start
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HomePage;
