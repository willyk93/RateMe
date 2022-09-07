import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

const EditProfileUser = () => {
    const { _id } = useParams()
    const [userData, setuserData] = useState(null)
    const [bio, setBio] = useState("")
    const [name, setName] = useState("")
    const [update, setUpdate] = useState(false)

    console.log(_id)

    useEffect(() => {
        fetch(`/api/get-single/${_id}`)
        .then(res => res.json())
        .then(data => {setuserData(data.data)
        })
    }, [update])
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/api/get-single/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify({
            bio: bio,
            _id: _id,
            name: name,

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
    console.log(userData)
    return (
        <div>
            {userData &&
                    <div>
                        <p>{userData.bio}</p>
                        <p>{userData.name}</p>
                        <form onSubmit={handleSubmit}>
                            <label>Update bio</label>
                            <input value={bio} onChange= {(e) => setBio(e.target.value)} type="text"/>
                            <label>Update name</label>
                            <input value={name} onChange= {(e) => setName(e.target.value)} type="text"/>
                            <Button type="submit">submit</Button>
                        </form>
                    </div>
            }
            
    </div>

    )
};


export default EditProfileUser;
