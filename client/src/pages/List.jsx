import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import axios from "axios";

const List = () => {
  const navigate = useNavigate();

  const [newDog, setNewDog] = useState({
    name: "",
    phone: "",
    comments: "",
    photos: "",
  });

  const handleChange = (e) => {
    setNewDog({ ...newDog, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("/create", {
          name: newDog.name,
          phone: newDog.phone,
          comments: newDog.comments,
          photos: newDog.photos,
        })
        .then((res) => {
          console.log(res);
          navigate("/dogs");
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex justify-content-center h-75">
      <form
        onSubmit={handleSubmit}
        className="text-center align-self-center bg-dark bg-opacity-50"
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
          <div className="input-group-prepend">
            <span className="input-group-text">Introduction</span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="A lovely dog "
            value={newDog.comments}
            onChange={handleChange}
            name="comments"
            label="comments"
          ></textarea>
        </div>

        <div class=" mb-3 bg-light">
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setNewDog({ ...newDog, photos: base64 })}
          />
        </div>

        <button className="btn btn-light btn-outline-dark" type="submit">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default List;
