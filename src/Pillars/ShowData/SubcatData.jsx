import React, { Component } from "react";
//import api from "../../api/jsonconnect";
import Cards from "./Card/CardComponent";
import api from "../../api/jsonconnect";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


class SubCatDatas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      categoryName: props.catId,
    };
  }

  getData(){
    setTimeout(() => {
      fetch(`http://localhost:3004/subdatas`)
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
    }, 1000)
  }
  
  componentDidMount() {
    this.getData();
  }

  
   deleteConactHandler = (id, e) =>{  
     
      confirmAlert({

        title: 'Confirm to Delete',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              api.delete(`http://localhost:3004/subdatas/${id}`)  
              .then(res => {   
                const data = this.state.data.filter(item => item.id !== id);  
                this.setState({ data });  
              })
            }
          },
          {
            label: 'No',
            //onClick: () => alert('Click No')
          }
        ]
      });
    
      
    
     
   } 
  

  render() {
    return (
      <div>
        <div className="card-list">
          {this.state.data.map((el) => {
          // console.log(el);

            if (el.catid === this.state.categoryName) {
              return (
                <div className="links">
               {/* <a  key={el.id} target="_blank" href={el.link} > */}
                  <Cards
                    key={el.id}
                    // subname={el.subcategory}
                    // link={el.link}
                    // subid={el.id}
                    clickHander={this.deleteConactHandler}
                    total={el}
                   
                  ></Cards>
                {/* </a>*/}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default SubCatDatas;
