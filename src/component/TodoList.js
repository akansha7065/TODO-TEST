import React from "react";
class TodoList extends React.Component {
  render() {
    const {
      healthList,
      handleDelete,
      handleEdit,
      handleClear,
      handleHealth,
    } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-12 head">
            <span>TODO TABLE</span>
            <button type="text" className="btn btn-success pull-right" onClick={() => { handleHealth() }}>
              <i className="fa fa-plus "></i> Add
            </button>
          </div>
        </div>
        <div className="bd-example">-
          <div className="row">
            <div className="col-md-12  table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Height</th>
                    <th scope="col">Width</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {healthList.map((health, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{health.name}</td>
                      <td>{health.description}</td>
                      <td>{health.price}</td>
                      <td>{health.width}</td>
                      <td>{health.height}</td>
                      <td>
                        <span className="pointer">
                          <i
                            className="fa fa-edit fa-2x text-primary"
                            onClick={() => {
                              handleEdit(health.id);
                            }}
                          ></i>
                        </span>
                      </td>
                      <td>
                        <span className="pointer">
                          <i
                            className="fa fa-trash fa-2x text-danger"
                            onClick={() => {
                              handleDelete(health.id);
                            }}
                          ></i>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="bd-example">
              <button
                type="button"
                className="btn btn-danger btn-lg btn-block"
                onClick={handleClear}
              >
                Clear List
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TodoList;
