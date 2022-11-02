import axios from "axios";
import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      comments: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

 
  handleSubmit() {
    var Dog = {
      name: this.state.name,
      phone: this.state.phone,
      comments: this.state.comments
    };

    axios.post("http://localhost:3001/api/create", Dog)
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="d-flex justify-content-center h-75">
        <form
          onSubmit={this.handleSubmit}
          className="text-center align-self-center bg-dark bg-opacity-50"
          style={{
            border: "5px solid",
            "borderStyle": "double",
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
              value={this.state.name}
              onChange={this.handleInputChange}
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
              value={this.state.phone}
              onChange={this.handleInputChange}
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
              value={this.state.comments}
              onChange={this.handleInputChange}
              name="comments"
              label="comments"
            ></input>
          </div>

          {/* <div className="input-group mb-3">
              <input type="file" className="form-control" id="inputGroupFile02"></input> 
              <label className="input-group-text" for="inputGroupFile02">Upload</label>
            </div> */}
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}
export default List;
