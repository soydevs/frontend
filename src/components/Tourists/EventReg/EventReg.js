import React, { useState } from 'react'
import { HiOutlinePhotograph } from "react-icons/hi";

import eventReg from '../../../assets/svg/eventReg.svg'

import './EventReg.css'

function EventReg() {

    const [image, setImage] = useState(null)
    const [imageName, setImageName] = useState('')

    const [name, setName] = useState('');
    const [services, setServices] = useState('');
    const [description, setDescription] = useState('');



    const types = ['image/png', 'image/jpeg', 'image/jpg']

    
    const imageHandler = (e) => {
        let selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
                setImageName(selected.name)
            }
            reader.readAsDataURL(selected)
        } else {
            setImage(null)
        }
    }


    const upload = ''

    return (
        <div className="eventReg">
            <h1>Event Registration</h1>
            <div className="eventReg__container">
                <div className="eventReg__left">
                    <div className="eventReg__left_image">
                        <div className="eventRegImage">
                            <div style={{background: image? `url("${image}") no-repeat center/cover`: `url(${upload}) no-repeat center/cover`}} className="image-upload">
                                <input 
                                    type="file"     
                                    onChange={imageHandler} 
                                    name="image"
                                    id="fileUpload"
                                />
                                <label htmlFor="fileUpload" className="customFileUpload">
                                    {image ? '' : 'Upload File'}
                                </label>
                            </div>
                        </div>
                        <div className="eventRegImageName">
                            {imageName && (
                                <>
                                    <HiOutlinePhotograph className="photo_icon"/>
                                    <h2>{imageName}</h2>
                                    <p>uploaded</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="eventReg__form">
                        <form>
                            <div className="eventReg__inputContainer">
                                <label htmlFor="Name"  className="eventReg__label">Name</label>
                                <input placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} type="text" name="Name" className="eventReg__input"/>
                            </div>
                            <div className="eventReg__inputContainer">
                                <label htmlFor="Name"  className="eventReg__label">Services</label>
                                <textarea placeholder="John Doe" value={services} onChange={(e) => setServices(e.target.value)} type="text" name="Name" className="eventReg__input" style={{height: 70}}/>
                            </div>
                            <div className="eventReg__inputContainer">
                                <label htmlFor="Name"  className="eventReg__label">Description</label>
                                <textarea placeholder="John Doe" value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="Name" className="eventReg__input" style={{height: 110}}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="eventReg__right">
                    <img src={eventReg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default EventReg
