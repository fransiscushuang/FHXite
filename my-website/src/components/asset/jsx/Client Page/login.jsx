import React, { useEffect, useState } from "react";
import Register from "./Register";
import LoginPage from "./LoginPage";
import "../../css/Client/login.css";

const Login = ({ widths, socket }) => {
  const [displayLogin, setLogin] = useState(true);
  const [displayRegister, setRegister] = useState(false);
  const wrapperBackground = [
    { pathname: "/login", background: "#db4437" },
    { pathname: "/register", background: "#fcf500" }
  ];

  useEffect(() => {
    const LoadPage = () => {
      if (window.location.pathname === "/login") {
        setRegister(false);
        setLogin(true);
      } else {
        setRegister(true);
        setLogin(false);
      }
      const wrapper = document.getElementsByClassName("user-wrapper");
      wrapperBackground.map(bg => {
        const { pathname, background } = bg;
        if (window.location.pathname === pathname) {
          wrapper[0].style.background = `${background}`;
        }
        return bg;
      });
    };
    LoadPage();
  }, [wrapperBackground]);

  const LoadPage = () => {
    if (window.location.pathname === "/login") {
      setRegister(false);
      setLogin(true);
    } else {
      setRegister(true);
      setLogin(false);
    }
    const wrapper = document.getElementsByClassName("user-wrapper");
    wrapperBackground.map(bg => {
      const { pathname, background } = bg;
      if (window.location.pathname === pathname) {
        wrapper[0].style.background = `${background}`;
      }
      return bg;
    });
  };

  const inputTransition = e => {
    const field = [
      { target: "email", pos: "0", pathname: "/login" },
      { target: "password", pos: "1", pathname: "/login" },
      { target: "fullnameRegis", pos: "0", pathname: "/register" },
      { target: "emailRegis", pos: "1", pathname: "/register" },
      { target: "passwordRegis", pos: "2", pathname: "/register" }
    ];
    var c;
    if (window.location.pathname === "/login") {
      c = document.getElementsByClassName("loginLabel");
    } else {
      c = document.getElementsByClassName("registerLabel");
    }
    field.map(x => {
      var { target, pos, pathname } = x;
      if (pathname === window.location.pathname) {
        if (target === e.target.id) {
          var ele = document.getElementById(target);
          if (ele.value.length > 0) {
            c[pos].style.top = "10%";
            c[pos].style.fontSize = "12px";
            ele.style.padding = "20px 25px 0px 25px";
          } else {
            c[pos].style.top = "25%";
            c[pos].style.fontSize = "16px";
            ele.style.padding = "10px 25px";
          }
        }
      }
      return x;
    });
  };

  const changeLayout = e => {
    e.preventDefault();
    if (window.location.pathname === "/login") {
      setRegister(!displayRegister);
      setLogin(!displayLogin);
      window.history.pushState("object or string", "FHXite", "/register");
    } else {
      setRegister(!displayRegister);
      setLogin(!displayLogin);
      window.history.pushState("object or string", "FHXite", "/login");
    }

    const wrapper = document.getElementsByClassName("user-wrapper");
    wrapperBackground.map(bg => {
      const { pathname, background } = bg;
      if (window.location.pathname === pathname) {
        wrapper[0].style.background = `${background}`;
      }
      return bg;
    });
  };

  const renderedForm = () => {
    if (displayLogin) {
      return (
        <LoginPage
          displayLogin={displayLogin}
          changeLayout={changeLayout}
          inputTransition={inputTransition}
        ></LoginPage>
      );
    } else if (displayRegister) {
      return (
        <Register
          inputTransition={inputTransition}
          changeLayout={changeLayout}
          displayRegister={displayRegister}
          socket={socket}
        />
      );
    }
  };

  window.onpopstate = e => {
    LoadPage();
  };

  return (
    <div
      className="user-wrapper"
      style={{ zIndex: widths === 100 ? "3" : "0" }}
    >
      <div className="container">
        <a className="nav-logo" href="/">
          <span className="logo-F">F</span>H<span className="logo-X">X</span>
          ite
        </a>
        {renderedForm()}
      </div>
    </div>
  );
};

export default Login;
