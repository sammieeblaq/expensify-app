import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css/normalize.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./styles/styles.scss";


// const Info = props => (
//     <div>
//         <h1>Info</h1>
//         <p>The Info is: { props.info }</p>
//     </div>
// )

// // const withAdminWarning = (WrappedComponent) => {
// //     return (props) => (
// //         <div>
// //             {
// //                 props.isAdmin && <p>This is private info, pls don't share</p>
// //             }
// //             <WrappedComponent { ...props } />
// //         </div>
// //     )
// // };

// // const AdminInfo = withAdminWarning(Info);


// const requireAuthentication = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {
//                 props.isAuthenticated ? ( <WrappedComponent { ...props } /> ) : <p>Please login to view info</p>
//             }
//         </div>
//     )
// }

// const AuthInfo = requireAuthentication(Info);


// // ReactDOM.render(<AdminInfo isAdmin={ false } info="There are the detail" />, document.getElementById('root'));
// ReactDOM.render(<AuthInfo isAuthenticated={ !false } info="There are the detail" />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
