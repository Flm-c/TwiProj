import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {MainPage} from "../MainPage/MainPage";
import {MessagePage} from "../MessagePage/MessagePage";
import {Profile} from "../ProfilePage/Profile";
import {Route} from "react-router-dom";
import {Auth} from "../AuthPage/Auth";
import {RegPage} from "../RegPage/RegPage";

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
          {/*<Sidebar/>*/}
          {/*<Header>*/}
          {/*    <div>asdmkasd</div>*/}
          {/*    <div>qqqqqqq2</div>*/}
          {/*</Header>*/}
        {/*<NavMenu />*/}
        <Container>
            <Route exact path='/' component={MainPage} />
            <Route path='/messages' component={MessagePage} />
            <Route path='/profile' component={Profile} />
            <Route path='/auth' component={Auth} />
            <Route path='/reg' component={RegPage} />
          {/*{this.props.children}*/}
        </Container>
      </div>
    );
  }
}
