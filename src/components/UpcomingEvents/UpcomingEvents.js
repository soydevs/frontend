import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { IoIosClose } from "react-icons/io";
import { GiCalendar } from "react-icons/gi";
import './UpcomingEvents.css'


const events = [
    {
        id: 1,
        name: 'Diwali',
        date: 'Nov 4',
        image: 'https://images.unsplash.com/photo-1530405911872-686782e1a995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=457&q=80'
    },
    {
        id: 2,
        name: 'Diwali',
        date: 'Nov 4',
        image: 'https://images.unsplash.com/photo-1530405911872-686782e1a995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=457&q=80'
    },
    {
        id: 3,
        name: 'Diwali',
        date: 'Nov 4',
        image: 'https://images.unsplash.com/photo-1530405911872-686782e1a995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=457&q=80'
    },
    {
        id: 4,
        name: 'Diwali',
        date: 'Nov 4',
        image: 'https://images.unsplash.com/photo-1530405911872-686782e1a995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=457&q=80'
    }
]

function UpcomingEvents() {

    const [open, setOpen] = useState(false);

    const handleEventsOpen = () => {
      setOpen(true);
    };
    const handleEventsClose = () => {
      setOpen(false);
    };

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
        <div className="upcomingEvents">
            <h1>Upcoming Events</h1>

            <div className="upcomingEvents__container">
                {events.map(event => (
                    <div className="singleEvent" key={event.id}>
                        <img src={event.image} alt={event.name} />
                        <div className="singleEvent__content">
                            <h2>{event.name}</h2>
                            <h6>{event.date}</h6>
                        </div>
                    </div>
                ))}
            </div>

            <div className="events__mob">
                <GiCalendar className="events__open" onClick={handleEventsOpen}/>
                <Dialog 
                    PaperProps={{
                        style: {
                            margin: 0
                        },
                    }}
                    onClose={handleEventsClose} 
                    open={open} 
                    scroll="paper"
                    classes={{
                        scrollPaper: classes.topScrollPaper,
                        paperScrollBody: classes.topPaperScrollBody,
                        paper: classes.paper 
                    }}
                >
                    <DialogContent>
                        <IoIosClose className="events__close" onClick={handleEventsClose} aria-label="close"/>
                        <div className="eventsMobContainer" onClick={handleEventsClose}>
                            <h1>Upcoming Events</h1>

                            <div className="upcomingEvents__container_mob">
                                {events.map(event => (
                                    <div className="singleEvent" key={event.id}>
                                        <img src={event.image} alt={event.name} />
                                        <div className="singleEvent__content">
                                            <h2>{event.name}</h2>
                                            <h6>{event.date}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>


        </div>
    )
}

export default UpcomingEvents
