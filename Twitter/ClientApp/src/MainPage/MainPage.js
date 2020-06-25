import React, { Component } from 'react';
import {Sidebar} from "../Sidebar/Sidebar";
import {Header} from "../Header/Header";
import {SidebarRight} from "../SidebarRight/SidebarRight";
import "./MainPage.css"

export class MainPage extends Component {
  static displayName = MainPage.name;

  constructor(props) {
      super(props);
      this.state = { posts: [], loading: true };
  }

    componentDidMount() {
        this.populateData();
    }

    static renderPosts(posts) {
        return (

            posts.map(post => {
                return (
                    // ЗДЕСЬ КАК БУДЕТ ВЫГЛЯДЕТЬ ТВИТ
                    <div className="twitView">
                        <div className={"post"} key={post.id}>
                                <div className="twitAvatar rounded-circle inline">
                                </div>

                            {/*<div className="image">{post.image}</div>*/}
                            <div className="inline outside">
                                <div className="user outs1">{post.user.name}</div>
                                <div className="text outs2">{post.text}</div>
                            </div>
                        </div>
                    </div>
                );
            })
        );
    }

    async populateData() {

        const response = await fetch('api/getposts');
        const data = await response.json();
        this.setState({ posts: data, loading: false });
    }

render () {
    let content = this.state.loading
        ? <div className="loader">Loading...</div>
        : MainPage.renderPosts(this.state.posts);
      console.log(this.state.posts);
    return (

        <>
          <Header>
            <div className="container">
              <div className="inlineBlock">Главная</div>
            </div>
          </Header>
            {/*ТУта*/}
            <div className="mainPgContent">
                {content}
            </div>
            {/*Посюда*/}
          <Sidebar />
          <SidebarRight />
        </>
    );
  }
}
