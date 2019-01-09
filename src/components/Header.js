import React, { Component } from 'react';
import "../App.css"

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll atb-modern-b" data-text="home" href="#home"><span>h</span><span>o</span><span>m</span><span>e</span></a></li>
               <li><a className="smoothscroll atb-modern-b" data-text="about" href="#about"><span>a</span><span>b</span><span>o</span><span>u</span><span>t</span></a></li>
               <li><a className="smoothscroll atb-modern-b" data-text="resume" href="#resume"><span>r</span><span>e</span><span>s</span><span>u</span><span>m</span><span>e</span></a></li>
               <li><a className="smoothscroll atb-modern-b" data-text="works" href="#portfolio"><span>w</span><span>o</span><span>r</span><span>k</span><span>s</span></a></li>
               <li><a className="smoothscroll atb-modern-b" data-text="contact" href="#footer"><span>c</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span></a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline name-tag">Meg Gallagher</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.roleDescription}
               </h3>
               <hr/>
               
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}