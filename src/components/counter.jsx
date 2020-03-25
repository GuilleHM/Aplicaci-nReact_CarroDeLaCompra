import React, { Component } from "react";

class Counter extends Component {
  // Este es un 'Controlled Component', sin estado local
  //   state = {
  //     value: this.props.counter.value
  //     // tags: ["tag1", "tag2", "tag3"]
  //     // imageUrl: "https://picsum.photos/200"
  //   };

  //   styles = {
  //     fontSize: 30, //React will automatically convert it into '10px'
  //     fontWeight: "bold"
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   renderTags() {
  //     if (this.state.tags.length === 0) {
  //       return <p>No hay etiquetas</p>;
  //     }
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag, index) => (
  //           <li key={index}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  // Tampoco este metodo ya que es un 'Controlled Component'
  // Deberá disparar un evento y que sea el elemento padre el que modifique
  // los datos
  //   handleIncrement = product => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  // Updating Lyfecycle Hook Method
  //   componentDidUpdate(prevProps, prevState) {
  //     console.log("PrevProps", prevProps);
  //     console.log("PrevState", prevState);
  //     if (prevPros.counter.value !== this.props.counter.value) {
  //         // Ajax call and get new data from the server
  //     }
  //   }

  // Unmounting Lyfecyle Hook Method
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <React.Fragment>
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Incrementar
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Borrar
        </button>
        <br />
        {/* <ul>
          {this.state.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul> */}
        {/* {this.state.tags.length === 0 && "Guille es lo más"} */}
        {/* {this.renderTags()} */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button style={{ fontSize: 50 }} className="btn btn-secondary btn-sm">
          Increment
        </button> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value !== 0 ? value : "Cero";
  }
}

export default Counter;
