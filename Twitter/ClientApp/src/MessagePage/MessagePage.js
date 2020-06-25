import React, { Component } from 'react';
import {Sidebar} from "../Sidebar/Sidebar";
import {Header} from "../Header/Header";
import {Messagebar} from "./Messagebar";
import {MessageContent} from "./MessageContent";


export  class MessagePage extends Component{
    render() {
        return(
            <>
                <Header>
                    <div className="container">
                        <div>Сообщения</div>
                    </div>
                </Header>
                <Sidebar />
                <MessageContent />
                <Messagebar />
            </>
        );
    }

}
// export class MessagePage extends Component {
//   static displayName = MessagePage.name;
//
//   constructor(props) {
//     super(props);
//     this.state = { currentCount: 0 };
//     this.incrementCounter = this.incrementCounter.bind(this);
//   }
//
//   incrementCounter() {
//     this.setState({
//       currentCount: this.state.currentCount + 1
//     });
//   }
//
//   render() {
//     return (
//       <div>
//           <Sidebar />
//         <h1>Counter</h1>
//
//         <p>This is a simple example of a React component.</p>
//
//         <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>
//
//         <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
//       </div>
//     );
//   }
// }
