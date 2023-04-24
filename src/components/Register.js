import React, { useState } from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import AnimatedButton from "./AnimatedButton";
import AnimatedTextField from "./AnimatedTextField";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {  Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";


const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "url('./bggggggggg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  },
  formContainer: {
    border: "1px solid #BDBDBD",
    borderRadius: "40px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    backgroundColor: "white",
    width:"50%",
  },
  heading: {
    marginRight: "2rem",
  },
  coloredButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height:"150%"
  },

});

const Register = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [showRegister, setShowRegister] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return;
    }
    try {
        if (showRegister) {
            await axios.post("http://91.203.132.6/register", {
              name,
              email,
              password,
              phone,
            });
            setSnackbarOpen(true);
            setTimeout(() => {
              navigate("/data-form");
            }, 2000);
          } else {
            await axios.post("http://91.203.132.6/login", {
              email,
              password,
            });
            setSnackbarOpen(true);
            setTimeout(() => {
              navigate("/data-form");
            }, 2000);
          }
          
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <div className={classes.container}>

<motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: snackbarOpen ? 1 : 0, y: snackbarOpen ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {showRegister
            ? "Registered successfully! Redirecting to dashboard..."
            : "Logged in successfully! Redirecting to dashboard..."}
        </Alert>
      </Snackbar>
    </motion.div>
    <motion.div
        className={classes.heading}
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
      >
        <Typography variant="h2">
          Hi there, let's {showRegister ? "register" : "login"} and start your
          journey with us!
        </Typography>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className={classes.formContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={3}>
          {showRegister && (
            <Grid item xs={12}>
              <AnimatedTextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <AnimatedTextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <AnimatedTextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          {showRegister && (
            <Grid item xs={12}>
              <AnimatedTextField
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                required
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <AnimatedButton type="submit" className={classes.coloredButton} >
              {showRegister ? "Register" : "Login"}
            </AnimatedButton>
          </Grid>
          <Grid item xs={12}>
            {showRegister ? (
              <Typography>
                Already registered?{" "}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => setShowRegister(false)}
                >
                  Login
                </Link>
              </Typography>
            ) : (
              <Typography>
                First time?{" "}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => setShowRegister(true)}
                >
                  Register
                </Link>
              </Typography>
            )}
          </Grid>
        </Grid>
      </motion.form>
    </div>
  );
};

export default Register;
