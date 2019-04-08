import React, { Component } from 'react';
import './App.css';
import QuoteList from './QuoteList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
      quotes: [
        {
          id: 'Leonardo_da_Vinci',
          author: 'Leonardo da Vinci',
          content: 'Learning never exhausts the mind.',
          comments: [
            {
              id: 'd9b85c5e',
              content: 'Mind your language!',
            },
            {
              id: 'd6bee37e',
              content: 'Mind your business!',
            },
          ],
          category: 'top100',
        },
        {
          id: 'Audrey_Hepburn',
          author: 'Audrey Hepburn',
          content:
            "Nothing is impossible, the word itself says 'I'm possible'!",
          comments: [],
          category: 'top100',
        },
        {
          id: 'Winston_Churchill',
          author: 'Winston Churchill',
          content:
            'Success is not final, failure is not fatal: it is the courage to continue that counts.',
          comments: [],
          category: 'top100',
        },
        {
          id: 'Pablo_Picasso',
          author: 'Pablo Picasso',
          content: 'Computers are useless. They can only give you answers.',
          comments: [],
          category: 'computers',
        },
        {
          id: 'Steve_Wozniak',
          author: 'Steve Wozniak',
          content: "Never trust a computer you can't throw out a window.",
          comments: [],
          category: 'computers',
        },
        {
          id: 'Norman_Ralph_Augustine',
          author: 'Norman Ralph Augustine',
          content:
            "One of the most feared expressions in modern times is 'The computer is down.'",
          comments: [],
          category: 'computers',
        },
      ],
    };

    // bind this to the function declaration
    // this.handleQuoteFilter = this.handleQuoteFilter.bind(this);
  }

  // regular function declaration. needs to be bound to the class
  // handleQuoteFilter(evt) {

  // }

  // using the arrow function. No need to bind it
  handleQuoteFilter = evt => {
    // get the value of the filter
    const filter = evt.target.value.toLowerCase();

    // Updating the value of the filter in the state
    this.setState({ filter: filter });

    // Array.filter(...)
    // Store that value somewhere
  };

  render() {
    // filtering out the quote according to the category and the value of filter in the state
    const filteredQuotes = this.state.quotes.filter(quoteObj => {
      // Regular if in this callback
      // callback needs to return either true or false in a filter function
      if (this.state.filter === 'all') {
        return true;
      } else {
        return quoteObj.category === this.state.filter;
      }

      // Equivalent using a ternary
      // return this.state.filter === 'all'
      //   ? true
      //   : quoteObj.category === this.state.filter;
    });

    return (
      <div>
        <h1>Top Quotes</h1>
        <QuoteList quotes={filteredQuotes} />
        <input
          className="btn btn-primary"
          type="button"
          name="all"
          value="All"
          style={{ margin: '1em' }}
          onClick={this.handleQuoteFilter}
        />
        <input
          className="btn btn-primary"
          type="button"
          name="top100"
          value="Top100"
          style={{ margin: '1em' }}
          onClick={this.handleQuoteFilter}
        />
        <input
          className="btn btn-primary"
          type="button"
          name="computers"
          value="Computers"
          style={{ margin: '1em' }}
          onClick={this.handleQuoteFilter}
        />
      </div>
    );
  }
}

export default App;
