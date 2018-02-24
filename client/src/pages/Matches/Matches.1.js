import React, {Component}       from "react";
// containers for the bootstrap
import Jumbotron                from "../../components/Jumbotron";
import { Col, Row, Container }  from "../../components/Grid";
import API                      from "../../utils/API.js"
import { List, ListItem }       from "../../components/List";
import { Nav }                    from "../../components/Nav";
import { Link }                    from "../../components/Link";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import { Carousel}                   from "../../components/Carousel";

// class ControlledCarousel extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleSelect = this.handleSelect.bind(this);

//     this.state = {
//       index: 0,
//       direction: null
//     };
//   }

//   handleSelect(selectedIndex, e) {
//     alert(`selected=${selectedIndex}, direction=${e.direction}`);
//     this.setState({
//       index: selectedIndex,
//       direction: e.direction
//     });
//   }

//   render() {
//     const { index, direction } = this.state;

//     return (
//       <Carousel
//         activeIndex={index}
//         direction={direction}
//         onSelect={this.handleSelect}
//       >
//         <Carousel.Item>
//           <img width={900} height={500} alt="900x500" src="/carousel.png" />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img width={900} height={500} alt="900x500" src="/carousel.png" />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img width={900} height={500} alt="900x500" src="/carousel.png" />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
// }

// // render(<ControlledCarousel />);




// // class Articles extends Component{

// //     state={

// //         articles:[],
// //         title:"",
// //         date:"",
// //         link:"",
// //     }

// //     componentDidMount(){
// //         console.log("running lo pages/Articles/Articles.js componentDidMount()")
// //        // this.loadArticles();
// //     }

// //     loadArticles = () =>{
// //         console.log("tring to run loadArticles")
// //         API.getArticles()
// //             .then(res => {
// //                     this.setState({articles: res.data})
// //                     console.log("finished runing loadArticles " +JSON.stringify( res.data));
                    
// //                 }
// //             )
// //             .catch(err=> console.log(err));
// //     };

// //     render(){
// //         return (
// //             <Container fluid>
// //                 <Row>
// //                     <Col size="md-6">
// //                         <Link
// //                             link="/logon"
// //                         >
// //                         Logon
// //                         </Link>
// //                         ::
// //                         <Link
// //                             link="/createProfile"
// //                         >
// //                         Join
// //                         </Link>
// //                         <Jumbotron>
// //                             <h1>Why Not Me!!!</h1>
// //                         </Jumbotron>
// //                         {/* {this.state.articles.length ? (
// //                             <List>
// //                                 {this.state.articles.map(article =>(
// //                                     <ListItem key={article._id}>
// //                                         <a href={"/articles/" + article._id}>
// //                                             <strong>
// //                                                 {article.title}
// //                                             </strong>

// //                                         </a>
// //                                     </ListItem>
// //                                 ))}
// //                             </List>
// //                         ) : (
// //                             <h3>No Results to Display</h3>
// //                         )} */}
// //                     </Col>
// //                 </Row>
// //             </Container>
// //         );// 
// //     }// end render
// // }// end class

// export default ControlledCarousel;