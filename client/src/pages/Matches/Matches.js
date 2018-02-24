import React, {Component}       from "react";
// containers for the bootstrap
import Jumbotron                        from "../../components/Jumbotron";
import { Col, Row, Container }          from "../../components/Grid";
import API                              from "../../utils/API.js"
import { List, ListItem }               from "../../components/List";
import { Nav }                          from "../../components/Nav";
import { Link }                         from "../../components/Link";
import { Input, FormBtn }               from "../../components/Form";
import { CarouselControl, CarouselInner}  from "../../components/Carousel";
import { Modal, ModalBtn}                from "../../components/Modal";


class Articles extends Component{

    state={

        matches:[],
        id:"",
        name:"",
        targetId:"",
        woo:"",
        id:""

    }

    handleInputChange = event =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });

    };

    async getSession(){
        const x = await fetch('/sessionstatus');
        const y = await x.json();
        console.log("*********************************************")
        console.log(" from get matches/session " + JSON.stringify(y));
        console.log("*********************************************")
    }
    componentDidMount(){
        console.log("running pages/Matches/Matches.js componentDidMount()")
        this.getSession();
        this.loadMatches();
    }
     loadMatches = () =>{
        console.log("trying to run loadMatchs")
        API.getMatches()
            .then(res =>{
                console.log(res.data.dbModel);

                this.setState({matches: res.data.dbModel})
                // console.log("finisjed running loadMatches " + JSON.stringify(res.data));

        });


     }; // end loadMatches

     setId =(id) =>{

        this.state.id=id;
     }
     //put the fcn her
     saveOverture = () =>{

      console.log("trying to run loadOverture")
        API.createOverture({
            targetId: this.state.id,
            woo: this.state.woo
        })
            .then(res =>{
                console.log(res.data.dbModel);

               // this.setState({matches: res.data.dbModel})
                // console.log("finisjed running loadMatches " + JSON.stringify(res.data));

                // empties teht state value
                this.setState({
                    woo: ""
                });

        });
      
      



     }// end 



    render(){
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Link
                            link="/logon">
                        Logon
                        </Link>
                        ::
                        <Link
                            link="/createProfile"
                        >
                        Join
                        </Link>
                        <Jumbotron
                            img="/images/collage.png"
                            width="125"
                            // leadValue="This is the Alternative Dating Site"
                            cardHeader="Hear are your recent matches"
                            cardBody="You will see those who have made overtures to you and also those can match. Before you get to your matches, please indicate to your overtures if you are interested or not.  Please be kind."
>
                            Matches
                        </Jumbotron>
                        
                        {this.state.matches.length ? (
                            <div>
                            <CarouselControl>
                                {this.state.matches.map((match, index) => {
                                    var check = (index < 1);
                                    // var img   = (match.sex === "male")? "boy1.jpg":"girl1.jpg";
                                    // var fullImg = "/images/"+img;
                                    //console.log("the  image " + fullImg)
                                    return (
                                    <CarouselInner 
                                        key     ={index}
                                        listId  ={index}
                                        matchid = {match._id}
                                        name    ={match.name} 
                                        active  ={check}
                                        hndlmethod={this.handleInputChange}
                                        savemethod={this.saveOverture}
                                        woovalue  ={this.state.woo}
                                        setid     ={this.setId}
                                        img       ={this.img}>
                                            <strong>
                                                {match.name}
                                            </strong>
                                    </CarouselInner>
                                    )
                                })
                                }

                                
                            </CarouselControl>   
                            </div>
                            
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    <Modal
                        hndlmethod={this.handleInputChange}
                        savemethod={this.saveOverture}
                        woovalue  ={this.state.woo}
                        setid     ={this.setId}
                    
                    />
                    </Col>
                </Row>
            </Container>
        );// 
    }// end render
}// end class

export default Articles;