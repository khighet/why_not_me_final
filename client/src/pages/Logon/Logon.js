import React, {Component}       from "react";
// containers for the bootstrap
import Jumbotron                from "../../components/Jumbotron";
import { Col, Row, Container }  from "../../components/Grid";
import API                      from "../../utils/API.js"
import { List, ListItem }       from "../../components/List";
import { Link }                    from "../../components/Link";
import { Input, TextArea, FormBtn } from "../../components/Form";


class Articles extends Component{

    state={

        loggedOnUser:[],
        name:"",
        password:""
    }

    handleInputChange = event =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });

    };

  
    componentDidMount(){
        console.log("running lo pages/Articles/Articles.js componentDidMount()")
    
    }


    // handle click button event

    handleFormSubmit = (event) =>{
        ////////////////////////////////////////////////////////////////////////
        // submits the button action to return data from nytimes
        ////////////////////////////////////////////////////////////////////////
            // prevents default behavior
            console.log("from pages/Logon/Logon.js - handleFormSubmit")
            event.preventDefault();
    
            if (this.state.name && this.state.password){
                API.validateId({
                    name: this.state.name,
                    password: this.state.password
                })// end getArticles
                    .then(res =>{ 
                        var holdUser= res.data;
                        var arrayUser = {};
                        arrayUser.info = [];

                        arrayUser.info.push({
                            "id" : holdUser[0]._id,
                            "name": holdUser[0].name
                        })

                        this.setState({loggedOnUser: res.data})

                    })
                    .catch(err => console.log(err));
            }// endn  if

        };

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                    <Link
                    link="/">
                Home
                </Link>
                :: 
            <Link
                    link="/logon">
                Logon
                </Link>
                ::
                <Link
                    link="/createProfile">
                Join
                </Link>

                <Jumbotron
                    img="/images/logo3.png"
                    width="125"
                    padding="10px"
                    cardHeader="Everyone's Waiting!! Hurry"
                    // cardBody="We will collecte a bit of information about you..and your best picture. They will do he rest."

                    >
                
                Logon

                   
                    </Jumbotron>
                        <form>
                            <Input 
                                name="name" 
                                type="text"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                placeholder="Name (required)" />
                            <Input
                                name="password" 
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                placeholder="Password (required)" />
                             <FormBtn
                                disabled={!(this.state.name && this.state.password)}
                                onClick={this.handleFormSubmit}>
                                Login
                            </FormBtn>
                        </form>
                        
                        {this.state.loggedOnUser.length ? (
                            <div>
                            
                            <List>
                                {this.state.loggedOnUser.map((user,index) =>(
                                     <ListItem key={index}>
                                     <h2>Welcome: {user.name}, What would you like to do today:</h2>
                                     </ListItem>

                                ))}
                            </List>
                         
                                <Link
                                link="/findMatches"
                                >
                                Find  Matches
                                </Link>
                                ::
                                <Link
                                link="/updateProfile"
                                >
                                Update Your Profile
                                </Link>
                            </div>
                         ) : (
                         <h3>Hurry...you are not logged in yet..</h3>
                         )}
                    </Col>
                </Row>
            </Container>
        );// 
    }// end render
}// end class

export default Articles;