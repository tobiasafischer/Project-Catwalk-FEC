import React from 'react';
const Carouse = (props)=>{
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src='https://images.unsplash.com/photo-1614349164218-1e05fe55b825?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80' className="d-block w-100" alt="..."></img>
        </div>›
            {
          props.data.map((pic, index) => {
            return (
              <div className="carousel-item" key={index}>
                <img src={pic} className="d-block w-100" alt="..."></img>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Carouse;