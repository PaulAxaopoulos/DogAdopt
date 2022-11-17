import React, { useState } from "react";
import axios from "axios";

const List = () => {
    const [newDog,setNewDog]= useState(
        {
            name: "",
            phone: "",
            comments: "",
            photos:"",
        }
    );

    const handleChange = (e) => {
        setNewDog({...newDog,[e.target.name]: e.target.value});
    }

    const handlePhoto= (e) => {
        setNewDog({...newDog, photos: e.target.files[0]});
    }

    const handleSubmit = (e) =>{
        // e.preventDefault();
        const formData = new FormData();
        formData.append('name',newDog.name);
        formData.append('phone',newDog.phone);
        formData.append('comments',newDog.comments);
        formData.append('photos',newDog.photos);
        
        axios.post("/create", formData)
        .then(res => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
    });
    }

    return(
        <div className="d-flex justify-content-center h-75">
        <form
          onSubmit={handleSubmit}
          className="text-center align-self-center bg-dark bg-opacity-50"
          encType="multipart/form-data"
          style={{
            border: "5px solid",
            borderStyle: "double",
            padding: 15,
          }}
        >
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Dogs Name
            </span>
            <input
              placeholder="Sherlock"
              className="form-control"
              value={newDog.name}
              onChange={handleChange}
              name="name"
              label="name"
            ></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Phone
            </span>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="6912345678"
              className="form-control"
              value={newDog.phone}
              onChange={handleChange}
              name="phone"
              label="phone"
            ></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Introduction
            </span>
            <input
              placeholder="A lovely dog "
              className="form-control"
              value={newDog.comments}
              onChange={handleChange}
              name="comments"
              label="comments"
            ></input>
          </div>

          <div className="input-group mb-3">
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              className="form-control"
              onChange={handlePhoto} 
              name="photos"
              id="inputGroupFile02"
            ></input>
            <label className="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>

          <button type="submit"> Submit </button>
        </form>
      </div>

    )
}

export default List;
