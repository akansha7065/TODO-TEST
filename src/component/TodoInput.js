import React from "react";
import TodoList from "./TodoList";
import { v1 as uuid } from "uuid";
class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      healthList: [],
      id: uuid(),
      name: "",
      description: "",
      price: "",
      height: "",
      width: "",
      isEdit: false,
      isHealth: true,
    };
  }
  handleValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onPost = (event) => {
    event.preventDefault();
    let newDate = new Date();
    const newHealth = {
      id: uuid(),
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      height: this.state.height,
      width: this.state.width,
      time: newDate.toLocaleTimeString(),
    };
    console.log(newHealth);
    const updateHealthList = [...this.state.healthList, newHealth];
    this.setState({
      healthList: updateHealthList,
      id: uuid(),
      name: "",
      description: "",
      price: "",
      height: "",
      width: "",
      isEdit: false,
      isHealth: true,
    });
  };
  onDelete = (id) => {
    const filteredHealthList = this.state.healthList.filter(
      (health) => health.id !== id
    );
    this.setState({
      healthList: filteredHealthList,
    });
  };
  onEdit = (id) => {
    const selectedHealth = this.state.healthList.find(
      (health) => health.id == id
    );
    const filteredHealthList = this.state.healthList.filter(
      (health) => health.id !== id
    );
    this.setState({
      healthList: filteredHealthList,
      id: uuid(),
      name: selectedHealth.name,
      description: selectedHealth.description,
      price: selectedHealth.price,
      height: selectedHealth.height,
      width: selectedHealth.width,
      isEdit: true,
      isHealth: false,
    });
  };
  onClear = () => {
    this.setState({
      healthList: [],
    });
  };
  onHealth = () => {
    this.state.isHealth
      ? this.setState({ isHealth: false })
      : this.setState({ isHealth: true });
  }
  render() {
    return (
      <div>
        {this.state.isHealth ? (
          <div>
            <TodoList
              healthList={this.state.healthList}
              handleDelete={this.onDelete}
              handleEdit={this.onEdit}
              handleClear={this.onClear}
              handleHealth={this.onHealth}
            ></TodoList>
          </div>
        ) : (
            <div>
              <div className="row">
                <div className="col-md-12 head">
                  <span>Form</span>
                  <button
                    type="text"
                    className="btn btn-info pull-right"
                    onClick={this.onHealth}
                  >
                    <i className="fa fa-info-circle"></i> Show Table
                </button>
                </div>
              </div>
              <div className="bd-example">
                <div className="row">
                  <div className="col-md-6">
                    <form>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          onChange={this.handleValue}
                          value={this.state.name}
                        />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          name="description"
                          value={this.state.description}
                          onChange={this.handleValue}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label>Price</label>
                        <input
                          type="text"
                          className="form-control"
                          name="price"
                          onChange={this.handleValue}
                          value={this.state.price}
                        />
                      </div>
                      <div className="form-group">
                        <label>Width</label>
                        <input
                          type="text"
                          className="form-control"
                          name="width"
                          onChange={this.handleValue}
                          value={this.state.width}
                        />
                      </div>
                      <div className="form-group">
                        <label>Height</label>
                        <input
                          type="text"
                          className="form-control"
                          name="height"
                          onChange={this.handleValue}
                          value={this.state.height}
                        />
                      </div>

                      <div className="form-group">
                        <button
                          type="button"
                          className={
                            this.state.isEdit
                              ? "btn btn-success"
                              : "btn btn-primary"
                          }
                          onClick={this.onPost}
                        >
                          {this.state.isEdit ? "Update" : "Save"}
                        </button>
                      &nbsp;&nbsp;
                    </div>
                    </form>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}
export default TodoInput;
