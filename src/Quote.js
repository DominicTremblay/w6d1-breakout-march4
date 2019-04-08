import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <div>
        <li>
          <a
            data-toggle="collapse"
            href={`#${this.props.id}`}
            aria-expanded="true"
            aria-controls="collapseExample">
            {this.props.author}
          </a>
        </li>
        <div className="collapse show" id={this.props.id}>
          <div className="card card-body">
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
