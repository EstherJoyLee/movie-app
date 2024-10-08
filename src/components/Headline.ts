import { Component } from "../core/core";

export default class Headline extends Component {
  render() {
    this.el.classList.add("headline");
    this.el.innerHTML = /* html */ `
            <h1>
                <span>OMDb API</span> <br>
                THE OPEN <br>
                MOVIE DATABASE
            </h1>

            <p>
                The OMDb API is a RESTful web service to obtain movie information,
                all content and images on the site are contributed and maintained by our users.
                If you find this service usrful, please consider making a one-time donation or becom a patron.
            </p>
        `;
  }
}
