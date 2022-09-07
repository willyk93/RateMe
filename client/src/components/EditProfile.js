import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

const EditProfile = () => {
    const { profileId, paintingId } = useParams()
    const [paintData, setpaintData] = useState(null)
    const [description, setDescription] = useState("")
    const [paintName, setpaintName] = useState("")
    const [update, setUpdate] = useState(false)

    console.log(profileId)

    useEffect(() => {
        fetch(`/api/get-painting/${profileId}`)
        .then(res => res.json())
        .then(data => {setpaintData(data.data.Paintings)
        })
    }, [update])
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/api/get-painting/${profileId}`, {
            method: 'PATCH',
            body: JSON.stringify({
            description: description,
            id: paintingId,
            paintName: paintName

            }),
            headers: {
                'Content-Type': 'application/json',
            },
            })
        .then(res => res.json())
        .then(data => {
            setUpdate(!update)
            console.log(data)
        })
    }
    return (
        <div>
            {paintData && paintData.map((element) => {
                if (element._id === paintingId) {
                    return <div>
                        <p>{element.description}</p>
                        <p>{element.paintName}</p>
                        <form onSubmit={handleSubmit}>
                            <label>Update description</label>
                            <input value={description} onChange= {(e) => setDescription(e.target.value)} type="text"/>
                            <label>Update Paint Name</label>
                            <input value={paintName} onChange= {(e) => setpaintName(e.target.value)} type="text"/>
                            <Button type="submit">submit</Button>
                        </form>
                    </div>
                }
            })}
            
    </div>

    )
};


export default EditProfile;
