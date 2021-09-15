import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { IoIosClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { AuthContext } from '../../../context/AuthContext'
import './Navbar.css'



function Navbar() {

    const [open, setOpen] = useState(false);
    const { handleLogout } = useContext(AuthContext);

    const history = useHistory()

    const handleNavOpen = () => {
      setOpen(true);
    };
    const handleNavClose = () => {
      setOpen(false);
    };

    const logout = () => {
        handleLogout()
        history.push('/login')
    }

    const useStyles = makeStyles({
        topScrollPaper: {
            alignItems: "flex-start",
            justifyContent: "flex-end",
            margin: 0,
        },
        topPaperScrollBody: {
            verticalAlign: "top",
            margin: 0,
        },
        paper: { 
            borderRadius: '0px 0px 0px 20px'
        },
        nav_login: {
            border: 'none',
            background: '#31A0DE',
            color: '#F3F5F7',
            height: 45
        },
        nav_signup: {
            border: '3px solid #31A0DE',
            background: 'none',
            color: '#31A0DE',
            height: 45
        }
    });

    const classes = useStyles();

      
    const DialogContent = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
            background: '#F3F5F7;',
            boxShadow: '-3px 3px 6px rgba(49, 160, 222, 0.2)',
        },
    }))(MuiDialogContent);

    return (
        <div className="navbar">
            <div className="navbar--container">
                <h2>Logo</h2>

                <div className="nav_btn_container">
                    <Link to="/login">
                        <button className="navBtn nav_login">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="navBtn nav_signup">Signup</button>
                    </Link>
                    <button onClick={logout} className="navBtn nav_signup">Logout</button>
                </div>

                <div className="nav__mob">
                    <GiHamburgerMenu className="nav__open" onClick={handleNavOpen}/>
                    <Dialog 
                          PaperProps={{
                            style: {
                                margin: 0
                            },
                          }}
                        onClose={handleNavClose} 
                        open={open} 
                        scroll="paper"
                        classes={{
                            scrollPaper: classes.topScrollPaper,
                            paperScrollBody: classes.topPaperScrollBody,
                            paper: classes.paper 
                        }}
                    >
                        <DialogContent>
                            <IoIosClose className="nav__close" onClick={handleNavClose} aria-label="close"/>
                            <div className="navContainer" onClick={handleNavClose}>
                                <Link to="/login">
                                    <button className={`${classes.nav_login} navBtn`}>Login</button>
                                </Link>
                                <Link to="/signup">
                                    <button className={`${classes.nav_signup} navBtn`}>Signup</button>
                                </Link>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default Navbar