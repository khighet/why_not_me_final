import React, {Component}       from "react";
// containers for the bootstrap
import Jumbotron                from "../../components/Jumbotron";
import { Col, Row, Container }  from "../../components/Grid";
import API                      from "../../utils/API.js"
import { List, ListItem }       from "../../components/List";
import { Nav }                    from "../../components/Nav";
import { Link }                    from "../../components/Link";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Card                         from "../../components/Card";

class Articles extends Component{

    state={

        articles:[],
        title:"",
        date:"",
        link:"",
    }
    async getSession(){
        const x = await fetch('/sessionstatus');
        const y = await x.json();
        console.log(y);
    }
    componentDidMount(){
        console.log("running dis mount");
        this.getSession()
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
                            cardHeader="Welcome to Why Not Me"
                            cardBody="Why Not Me is the latest alternative dating website where you can access thousands of possible companions looking for the same thing you are! Not only does our site provide you access to others with similar interests, we also tell you the truth about why individuals DID NOT select you. No worries! We aren't out to hurt your feelings or make you feel bad. Our goal is to help YOU improve your chances of meeting that number ONE! By knowing what others did or didn't like about your profile and pictures, you can change it to better your chances! Or you can tell them to stick it and keep everything the same!"
                            >
                        
                            
                        The Alternative Dating Website..

                           
                            </Jumbotron>
                    

                        <footer
                            text align="center"
                            >

                            
                            <h5>Why Not Me Copyright©2018 - Charlotte, NC - whynotme.com</h5>
                        </footer>

                    </Col>
                </Row>
            </Container>
        );// 
    }// end render
}// end class

export default Articles;