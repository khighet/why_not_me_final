import React from "react";
import './jumbotron.css';
import Card  from "../../components/Card";
import { Col, Row, Container }  from "../../components/Grid";






const Jumbotron = ( props ) =>
     
<div style={{height: 245, width: "100%", color: "#000000", clear: 'both'}} className="jumbotron">
   <Row>
   <Col size="md-6" >
       <h3 className="display-4">{props.children}</h3>
       <p className="lead">{props.leadValue}</p>
       {/* {children}*/} 
       <div><img src={props.img} height={props.width}/></div>
   </Col>
   <Col size="md-6"  >
       <Card
           cardHeader={props.cardHeader}
           cardBody={props.cardBody}
       >
           
       </Card>
   </Col>
   </Row>
</div>;

export default Jumbotron;