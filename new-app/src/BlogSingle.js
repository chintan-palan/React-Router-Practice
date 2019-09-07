import React, { Component } from "react";
import "./bootstrap.min.css";
import { Link } from "react-router-dom";

class Blogs extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            showingPost: false
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => this.setState({ posts }))
    }

    showPost(id){
        this.setState({
            showingPost: id,
            comments: false
        });
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(comments => {
                this.setState({
                    comments
                });
            });
    }

    render(){
        const { showingPost,comments, posts } = this.state;
        return (
            <div className={"container"}>
                <div className="row">
                    <div className="col-md-12">
                        {
                            this.state.showingPost ?
                                <BlogPostSingle post={posts.find(post => post.id === showingPost)} comments={comments} /> :
                                this.state.posts.map(post => <BlogPost post={post} showPost={id => this.showPost(id)} />)}
                    </div>
                </div>
            </div>
        )
    }
}


class BlogPost extends Component{
    render() {
        const { post, showPost } = this.props;
        return (
            <div className={"card"}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link to={"/blog/"+post.id}>View Post</Link>
                {/*<button onClick={() => showPost(post.id)}>View Post</button>*/}
                <hr/>
            </div>
        );
    }
}


class BlogPostSingle extends Component{
    render() {
        let { post, comments } = this.props;
        return (
            <div>
                <div className={"card"}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
                <div className="card">
                    {
                        comments ?
                            comments.map(({ name, body, email}) => {
                                return (
                                    <div>
                                        <h2>{name}</h2>
                                        <p>{body}</p>
                                        <p><i>{email}</i></p>
                                    </div>
                                )
                            })
                            : "loading comments"
                    }
                </div>
            </div>
        );
    }
}


export default Blogs;