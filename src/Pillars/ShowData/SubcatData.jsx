import React,{Component} from 'react';
//import api from "../../api/jsonconnect";

class SubCatDatas extends Component{
  constructor(props) {
      super(props);
      this.state = { 
        data: [],
        categoryName: props.catName };
  }
  


  componentDidMount() {
      fetch(`http://localhost:3004/subdatas`)
      .then(res => res.json())
      .then(json => this.setState({data: json}));
       //console.log(this.state.data)
      
  }


  render(){
      return(
          <div>
          <h1>Subddatas</h1>
         
         
          {this.state.data.map(el => {
              console.log(el);
             
                 
                  
                  if((el.category) === (this.state.categoryName)){
                      return(
                        <h1>{el.link}</h1>
                      )
                      

                  }
                  
             

          }
          )}
         
         
          </div>
      )
  }
}
    
    


    


    
       
    

export default SubCatDatas