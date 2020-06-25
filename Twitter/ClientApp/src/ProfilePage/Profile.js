import React, { Component } from 'react';
import {Sidebar} from "../Sidebar/Sidebar";
import {Header} from "../Header/Header";
import './Profile.css';
import {SidebarRight} from "../SidebarRight/SidebarRight";
import {ProfileInfo} from "./ProfileInfo";


export class Profile extends Component{
    render() {
        return(
            <>
                <Header>
                    <div className="container">
                        <div className="inlineBlock">Кусок воды</div>
                        <div className="twitCou inlineBlock">1174 твитов</div>
                    </div>
                </Header>
                <Sidebar />
                <ProfileInfo/>
                <SidebarRight>
                    <div></div>
                </SidebarRight>
            </>

        );
    }
}
// export class ProfilePage extends Component {
//   static displayName = ProfilePage.name;
//
//   constructor(props) {
//     super(props);
//     this.state = { forecasts: [], loading: true };
//   }
//
//   componentDidMount() {
//     this.populateWeatherData();
//   }
//
//   static renderForecastsTable(forecasts) {
//     return (
//       <table className='table table-striped' aria-labelledby="tabelLabel">
//         <Sidebar />
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Temp. (C)</th>
//             <th>Temp. (F)</th>
//             <th>Summary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {forecasts.map(forecast =>
//             <tr key={forecast.date}>
//               <td>{forecast.date}</td>
//               <td>{forecast.temperatureC}</td>
//               <td>{forecast.temperatureF}</td>
//               <td>{forecast.summary}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     );
//   }
//
//   render() {
//     let contents = this.state.loading
//       ? <p><em>Loading...</em></p>
//       : ProfilePage.renderForecastsTable(this.state.forecasts);
//
//     return (
//       <div>
//         <h1 id="tabelLabel" >Weather forecast</h1>
//         <p>This component demonstrates fetching data from the server.</p>
//         {contents}
//       </div>
//     );
//   }
//
//   async populateWeatherData() {
//     const response = await fetch('weatherforecast');
//     const data = await response.json();
//     this.setState({ forecasts: data, loading: false });
//   }
// }
