import React, { Component } from 'react';
import Quote from './Quote';

class QuoteList extends Component {
  render() {
    const quoteList = this.props.quotes.map(quoteObj => (
      <Quote
        key={quoteObj.id}
        id={quoteObj.id}
        author={quoteObj.author}
        content={quoteObj.content}
      />
    ));

    return <ul>{quoteList}</ul>;
  }
}

export default QuoteList;
