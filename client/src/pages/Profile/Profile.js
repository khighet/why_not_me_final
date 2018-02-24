import React, { Component }         from "react";
// containers for the bootstrap
import Jumbotron                    from "../../components/Jumbotron";
import { Col, Row, Container }      from "../../components/Grid";
import API                          from "../../utils/API.js"
import { List, ListItem }           from "../../components/List";
// import ProfileX                from "../../components/Profile";
import { Input, RadBtnInput, ßTextArea, FormBtn, Label, FileInput } from "../../components/Form";
import { Link }                     from "../../components/Link";



class Profile extends Component {

    state = {

        user: [],
        name: "",
        password: "",
        location: "",
        email: "",
        state: "",
        sex: "",
        dob: "",
        seeking: "",
        race: "",
        about: "",
        pic1:"placeholder"
        // ,
        // openFile:""
        // 
        // pic1: "",
        // pic2: "",,
        // openFile: "",
    }

    openFile = (event) => {

        console.log(" from open file " )
        var openFile = function (event) {
            var input = event.target;

            var reader = new FileReader(); 

            reader.onload = function () {

                var dataURL = reader.result;
                var output = document.getElementById('output');
                output.src = dataURL;
                this.setState({"pic1":output.src});

            };
        };

    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        console.log("running lo pages/Articles/Articles.js componentDidMount()")
        // this.loadProfile();
    }

    handleFormSubmit = (event) => {
        ////////////////////////////////////////////////////////////////////////
        // submits the button action to return data from nytimes
        ////////////////////////////////////////////////////////////////////////
        // prevents default behavior
        console.log("from pages/Profile/Profiles.js - handleFormSubmit")
        event.preventDefault();

        const imgValue = (this.state.sex === "male")? "/images/boy1.jpg":"/images/girl1.jpg";
        if (this.state.name && this.state.password) {
            API.createProfile({
                user: this.state.user,
                name: this.state.name,
                password: this.state.password,
                location: this.state.location,
                state: this.state.state,
                sex: this.state.sex,
                dob: this.state.dob,
                seeking: this.state.seeking,
                race: this.state.race,
                about: this.state.about,
                pic1: imgValue
                // pic2: this.state.pic2,
                // pic3: this.state.pic3
                // openFile: this.state.openFile



            })// end getArticles
                .then(res => {
                    var holdArticles = res.data.response.docs;

                    var arrayNewArticles = {};
                    arrayNewArticles.newArticles = [];

                    for (var i = 0; i < holdArticles.length; i++) {
                        var tmpArticle = holdArticles[i];

                        arrayNewArticles.newArticles.push({
                            "key": i,
                            "title": tmpArticle.snippet,
                            "url": tmpArticle.web_url
                        })


                    }
                    console.log("from pages/articles/Articles.js - getNewArticles - response - ");
                    this.setState({ newArticles: arrayNewArticles.newArticles })
                })
                .catch(err => console.log(err));
        }// endn  if
    }


    render() {
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
                
                    img="/images/bubblelogo.png"
                    width="125"
                    padding="10px"
                    cardHeader="Its Easy to Join"
                    cardBody="We will collecte a bit of information about you..and your best picture. They will do he rest."
                    
                    >
               
                Get Started!!! Create Your Profile Here.
            
                       
            </Jumbotron>
                        <form>

                            <Input
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                type="email"
                                placeholder="User Name"
                                min="8"
                                max="25" />

                                <Input
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Your Email"
                                min="8"
                                max="255" />                                

                            <Input
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Password here"
                                min="8"
                                max="25" />

                            <Input
                                name="confirm"
                                value={this.state.confirm}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Confirm Password" />


                            <Label for="sex">Sex</Label>
                            <RadBtnInput
                                name="sex"
                                value="male"
                                onChange={this.handleInputChange}
                                type="radio"
                                placeholder="Male" />

                            <RadBtnInput
                                name="sex"
                                value="female"
                                onChange={this.handleInputChange}
                                type="radio"
                                placeholder="Female" />

                            

                            <Label for="seeking">Seeking</Label>
                            <RadBtnInput
                                name="seeking"
                                value="male"
                                onChange={this.handleInputChange}
                                type="radio"
                                placeholder="Male" />

                            <RadBtnInput
                                name="seeking"
                                value="female"
                                onChange={this.handleInputChange}
                                type="radio"
                                placeholder="Female" />

                            <Input
                                name="dob"
                                value={this.state.birthday}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Enter Birthday (MM/DD/YYYY)" />
                            <Input
                                name="about"
                                value={this.state.about}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="A little about me" />


                            <Input
                                name="race"
                                value={this.state.race}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Race"
                                min="8"
                                max="25" />

                            {/* <label for="inputEmail3" class="col-sm-4 col-form-label">Confirm Password</label> */}

                            {/* <Input
                                name="location"
                                value={this.state.passwlocationord}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="location"
                                min="8"
                                max="25" />

                            <Input
                                name="state"
                                value={this.state.state}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="state"
                                min="8"
                                max="25" /> */}

                             {/* <label for="pic1" class="col-sm-4 col-form-label">My Best Picture</label> */}

                             <FileInput
                                name="pic1"
                                value={this.state.pic1}
                                onClick={this.openFile}
                                type="image"
                                placeholder="Profile Pic1"
                            />
                            <FormBtn
                                disabled={!(this.state.name && this.state.password)}
                                onClick={this.handleFormSubmit}>
                                Create Profile
                        </FormBtn>

                        </form>


                    </Col>
                </Row>
            </Container>
        );// 
    }// end render
}// end class

export default Profile;