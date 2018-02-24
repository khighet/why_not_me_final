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

        user:[],
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
     //   this.loadArticles();
    }

    loadArticles = () =>{
        console.log("tring to run loadArticles")
        API.getArticles()
            .then(res => {
                    this.setState({articles: res.data})
                    console.log("finished runing loadArticles " +JSON.stringify( res.data));
                    
                }
            )
            .catch(err=> console.log(err));
    };

    // handle click button event

    handleFormSubmit = (event) =>{
        ////////////////////////////////////////////////////////////////////////
        // submits the button action to return data from nytimes
        ////////////////////////////////////////////////////////////////////////
            // prevents default behavior
            console.log("from pages/Profiles/Profiles.js - handleFormSubmit")
            event.preventDefault();
    
            if (this.state.name && this.state.password){
                API.createProfile({
                    name: this.state.name,
                    password: this.state.password
                })// end getArticles
                    .then(res =>{ 
                        var holdUser= res.data;
                        var arrayNewUsers = {};
                        arrayNewUsers.info = [];

                        arrayNewUsers.info.push({
                            "name": holdUser.name,
                            "password": holdUser.password
                        })

                        this.setState({user: arrayNewUsers.info})

                    })
                    .catch(err => console.log(err));
            }// endn  if

        }

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Create Profile</h1>
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
                                Join
                            </FormBtn>
                        </form>
                        {this.state.user.length ? (
                            <div>
                        <List>
                            {this.state.user.map((user,index) =>(
                                 <ListItem key={index}>
                                 <h2>Thank you for joining: {user.name}, What would you like to do next:</h2>
                                 </ListItem>

                            ))}
                        </List>
                     
                            <Link
                            link="/logon"
                            >
                            Login In
                            </Link>
                        </div>
                     ) : (
                     <h3>Hurry...Everyone is Waiting for you..</h3>
                     )}
                    </Col>
                </Row>
            </Container>
        );// 
    }// end render
}// end class

export default Articles;