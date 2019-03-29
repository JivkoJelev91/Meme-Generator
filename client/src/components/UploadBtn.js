import React from 'react'
const axios = require("axios");

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null, 
            imgUrl: null,
            arrayImgs: [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/upload")
        .then((response) => {
            let array = response.data.img;
            this.setState({
                imgUrl: `http://localhost:5000/uploads/` + array[array.length-1],
                arrayImgs: array
            });
            console.log(this.state.arrayImgs);
            }).catch((error) => console.log(error));
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:5000/upload",formData,config)
            .then((response) => {
                this.setState({imgUrl: `http://localhost:5000/` + response.data.file})
            }).catch((error) => console.log(error));
    }

    onChange = (e) => {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <div>
                {/* <form onSubmit={this.onFormSubmit}>
                    <h1>File Upload</h1>
                    <input type="file" name="myImage" onChange= {this.onChange} />
                    <button type="submit">Upload</button>
                    {this.state.imgUrl !== null ? <img src={this.state.imgUrl} /> : null}
                </form> */}
            </div>
        )
    }
}

export default ReactUploadImage