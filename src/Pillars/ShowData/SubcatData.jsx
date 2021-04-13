import React, { Component } from "react";
//import api from "../../api/jsonconnect";
import Cards from "./Card/CardComponent";

class SubCatDatas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      categoryName: props.catName,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3004/subdatas`)
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
    //console.log(this.state.data)
  }

  render() {
    return (
      <div>
      

        <div className="card-list">
          {this.state.data.map((el) => {
            console.log(el);

            if (el.category === this.state.categoryName) {
              return (
                <a key={el.id} href={el.link}>
                  <Cards
                    key={el.id}
                    linksDatas={el.subcategory}
                    hreflinks={el.link}
                  ></Cards>
                </a>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default SubCatDatas;
