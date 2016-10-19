import React from 'react';

// add state to Fields
// Fields state params are: url, title and rating
// set onChange listeners for three fields
// automatically change Fields state depending on what is typed
// place onSubmit handler on form called 'addImage'
// addImage should input state variables
// define addImage method in App component
// feed addImage as props from App down to Fields
// Debug

export default class Fields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newURL: '',
      newTitle: '',
      newRating: '',
    };
    this.changeURL = this.changeURL.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  changeURL(event) {
    var url = event.target.value;
    this.setState({
      newURL: url
    });
  }

  changeTitle(event) {
    var title = event.target.value;
    this.setState({
      newTitle: title
    })
  }

  changeRating(event) {
    var rating = event.target.value;
    this.setState({
      newRating: rating
    })
  }

  render () {
    var context = this;
    return (
      <div>
        <hr />
        <form onSubmit={
          function(event){
            event.preventDefault();
            console.log('1: context is: ', context.state);
            context.props.addImage({
              url: context.state.newURL, 
              title: context.state.newTitle, 
              rating: context.state.newRating
            });
            context.refs.url.value = null;
            context.refs.title.value = null;
            context.refs.rating.value = null;
          }
        }>
          <input className='url-input' type='text' placeholder='Enter URL of new image' onChange={this.changeURL} ref='url'/>
          <input className='url-input second-input' type='text' placeholder='Enter TITLE' onChange={this.changeTitle} ref='title'/>
          <input className='url-input second-input' type='text' placeholder='Enter RATING' onChange={this.changeRating} ref='rating'/>
          <button type='submit' className='btn btn-primary sub-btn'> Submit</button>
        </form>
      </div>
    );
  }
};
