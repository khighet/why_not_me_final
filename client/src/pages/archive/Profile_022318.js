import React, {Component}       from "react";
// containers for the bootstrap
import Jumbotron                from "../../components/Jumbotron";
import { Col, Row, Container }  from "../../components/Grid";
import API                      from "../../utils/API.js"
import { List, ListItem }       from "../../components/List";
// import ProfileX                from "../../components/Profile";
import { Input, RadBtnInput, ßTextArea, FormBtn , Label} from "../../components/Form";


class Profile extends Component{

    state={

        user:[],
        name:"",
        password:"",
        location:"",
        state:"",
        sex:"",
        dob:"",
        seeking:"",
        race:"",
        pic1:"",
        pic2:"",
        pic3:"",
    }



    handleInputChange = event =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
   };

    componentDidMount(){
        console.log("running lo pages/Articles/Articles.js componentDidMount()")
        // this.loadProfile();
    }

    // loadProfile = () =>{
    //     console.log("tring to run loadArticles")
    //     API.getProfile()
    //         .then(res => {
    //                 this.setState({articles: res.data})
    //                 console.log("finished runing loadProfile " +JSON.stringify( res.data));
                    
    //             }
    //         )
    //         .catch(err=> console.log(err));
    // };

    handleFormSubmit = (event) =>{
        ////////////////////////////////////////////////////////////////////////
        // submits the button action to return data from nytimes
        ////////////////////////////////////////////////////////////////////////
            // prevents default behavior
            console.log("from pages/Profile/Profiles.js - handleFormSubmit")
            event.preventDefault();
        
           if (this.state.name && this.state.password){
                API.createNewProfile({
                    topic: this.state.topic,
                    startYear: this.state.startYear,
                    endYear: this.state.endYear,
                    name: this.state.name,
                    password: this.state.password,
                    location: this.state.location,
                    state: this.state.state,
                    sex: this.state.sex,
                    dob: this.state.dob,
                    seeking: this.state.seeking,
                    race: this.state.race,
                    pic1: this.state.pic1,
                    pic2: this.state.pic2,
                    pic3: this.state.pic3,
            



                })// end getArticles
                    .then(res =>{
                        var holdArticles = res.data.response.docs;
    
                       var arrayNewArticles = {};
                        arrayNewArticles.newArticles = [];
    
                       for (var i = 0; i < holdArticles.length; i++){
                            var tmpArticle = holdArticles[i];
    
                           arrayNewArticles.newArticles.push({
                                "key":i,
                                "title":tmpArticle.snippet,
                                "url":tmpArticle.web_url
                            })
    
    
                       }
                        console.log("from pages/articles/Articles.js - getNewArticles - response - " );
                        //+ JSON.stringify(arrayNewArticles))
                        this.setState({newArticles: arrayNewArticles.newArticles})
                    })
                    .catch(err => console.log(err));
            }// endn  if
        }


    render(){
        return (
            <Container fluid>
                <Row>
                    <Col size="md-8">
                        <Jumbotron>

                            <h1>Welcome To Why Not Me</h1>
                            <h4>Create Your Profile</h4>
                        </Jumbotron>
                        {/* <ProfileX/> */}
        <form>                
        <Label for="inputEmail3">Email</Label>

        <Input 
        name="name"
        value={this.state.name}
        onChange={this.handleInputChange}
        type="email" 
        placeholder="kjonasse@hotmail.com" 
        min="8" 
        max="25"/>
      
      {/* <label for="inputEmail3" class="col-sm-2 col-form-label">Password</label> */}
        <Input 
        name="password" 
        value={this.state.password}
        onChange={this.handleInputChange}
        type="text" 
        placeholder="Password here" 
        min="8" 
        max="25"/>

        {/* <label for="inputEmail3" class="col-sm-4 col-form-label">Confirm Password</label> */}
        <Input 
        name="confirm"
        value={this.state.confirm}
        onChange={this.handleInputChange}
        type="text" 
        placeholder="Confirm Password"/>
       
        {/* <label for="inputEmail3" type="Radio" class="col-sm-2 col-form-check">Sex - Male</label> */}
        <Label for="sex">Sex</Label>
        <RadBtnInput
        name="sex" 
        value="male"
        onChange={this.handleInputChange}
        type="radio" 
        placeholder="Male"/>

        <RadBtnInput 
        name="sex"
        value="female"
        onChange={this.handleInputChange}
        type="radio" 
        placeholder="Female"/>
        
        {/* <label for="inputEmail3" class="col-sm-2 col-form-label">Birthday</label> */}
        <Input 
        name="dob"
        value={this.state.birthday}
        onChange={this.handleInputChange}
        type="text" 
        placeholder="Enter MM/YY"/>
       
        {/* <label for="inputEmail3" class="col-sm-4 col-form-label">I am seeking Males</label> */}
        <Label for="seeking">Seeking</Label>
        <RadBtnInput
        name="seeking" 
        value="male"
        onChange={this.handleInputChange}
        type="radio" 
        placeholder="Male"/>

        <RadBtnInput 
        name="seeking"
        value="female"
        onChange={this.handleInputChange}
        type="radio" 
        placeholder="Female"/>
        
        {/* <label for="inputEmail3" class="col-sm-2 col-form-label">About Me</label> */}
        <Input 
        name="about"
        value={this.state.about}
        onChange={this.handleInputChange}
        type="text" 
        placeholder="Here is about me"/>
       
        {/* <label for="inputEmail3" class="col-sm-2 col-form-label">Past Feedback</label> */}
        <Input 
        name="feedback"
        value={this.state.feedback}
        onChange={this.handleInputChange}
        type="text" 
        placeholder="Feedback"/>

        <FormBtn
                                disabled={!(this.state.name && this.state.password)}
                                onClick={this.handleFormSubmit}>
                                Create Profile
        </FormBtn>

        </form>


        {/* <button type="button" classNames="btn btn-success">Submit</button> */}


                        {/* {this.state.articles.length ? (
                            <List>
                                {this.state.articles.map(article =>(
                                    <ListItem key={article._id}>
                                        <a href={"/articles/" + article._id}>
                                            <strong>
                                                {article.title}
                                            </strong>

                                        </a>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )} */}
                    </Col>
                </Row>
            </Container>
        );// 
    }// end render
}// end class

export default Profile;