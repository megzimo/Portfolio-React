import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <footer>
          <div className="row">
            <h2>connect with me</h2>
            <div className="twelve columns">
              <ul className="social-links">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li>
                        <a href={item.url}>
                          <i className={item.className}  id="fa-link"/>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}
