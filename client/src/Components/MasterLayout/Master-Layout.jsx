import React, {Fragment, useRef} from "react";
import {Container,Navbar} from "react-bootstrap";
import logo from "../../Assets/Images/logo.png";
import { removeSessions} from "../../Helper/SessionHelper";



const MasterLayout = (props) => {

    let contentRef = useRef();

    const onLogout=()=>{
        removeSessions();
    }


    return (
        <Fragment>
            <Navbar  className="fixed-top px-0  nav-color ">
                <Container fluid={true}>
                    <Navbar.Brand >
                        <img className="logo"  src={logo} alt="logo"/>
                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">

                                <a onClick={onLogout}  className="side-bar-item">
                                    <span className="side-bar-item-caption text-white">SignOut</span>
                                </a>
                            </div>
                        </div>
                </Container>
            </Navbar>

            <div ref={(div) => (contentRef = div)} className="content">
                {props.children}
            </div>

        </Fragment>
    );
};

export default MasterLayout;