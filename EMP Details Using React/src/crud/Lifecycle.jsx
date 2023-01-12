import { Component } from "react";
import style from "./home.module.css";

class Lifecycle extends Component {
  constructor() {
    super();

    console.log("constructor got lodded");

    this.state = {
      count: 0,
    };
  }

  incre = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount(){
    console.log("compont got birth");
  }

  componentDidUpdate(){
    console.log("component is updating");
  }

  render() {
    console.log("rednder lodded");
    return (
      <div id={style.lc}>
        Hi-
        {this.state.count}
        <button onClick={this.incre}>Increment</button>
      </div>
    );
  }
  componentWillUnmount(){
    alert("component will kill")
  }
}

export default Lifecycle;
