import React, { useState } from 'react'
import { IoIosAdd, IoIosRemove } from "react-icons/io";

function SlideThree() {

    const [activity, setActivity] = useState('')
    const [activities, setActivities] = useState([])


    const addActivity = () => {
        if(activity) {
            setActivities([...activities, activity])
            setActivity('')
        }
    }

    const removeActivity = (time, id) => {
        let x = activities.filter((el, i)=>{
            return i !== id;
        })
       
        setActivities(x)
    }

    return (
        <div className="slides" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/kids-holding-colorful-blocks-illustration_53876-40275.jpg?size=626&ext=jpg)'}}>
            <div className="slide__content">
                <h1 className="slide__header">Add your <span className="primary__span">activities</span></h1>
                <div className="activity__slots">
                    {activities?.length > 0 && activities.map((time, id) => (
                        <div key={id}  className="added_avtivity">
                            <input className="activity__input" type="text" placeholder="Add activities..." value={time} disabled/> 
                            <IoIosRemove className="slider_subtractBtn" onClick={() => removeActivity(time, id)} />
                        </div>
                    ))}
                    <div className="add_activity">
                        <input className="activity__input" type="text" placeholder="Add activities..." value={activity} onChange={(e) => setActivity(e.target.value)}/> 
                        <IoIosAdd className="slider_addBtn" onClick={addActivity} style={{visibility: !activity ? 'hidden': 'visible'}}/>
                    </div>  
                </div>  
            </div>
        </div>
    )
}

export default SlideThree
