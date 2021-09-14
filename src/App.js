import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      counter: 0,
      posts: [
        {
          id: 1,
          title: 'Título 1',
          body: 'Corpo 1'
        },
        {
         id: 2,
          title: 'Título 2',
          body: 'Corpo 2'
        },
        {
          id: 3,
           title: 'Título 3',
           body: 'Corpo 3'
         },
      ]
    }
  }

  timeOutUpdate = null;

  componentDidMount() {
    //realizando a chamanda do método
    this.handleChange();
  }

  componentDidUpdate() {
    //this.handleChange
    this.handleChange();
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutUpdate)
  }

    handleChange() {
      const { posts, counter } = this.state;
      posts[0].title = 'Título mudou';

      setTimeout(() => {
        this.setState({ posts: posts, counter: counter + 1 });
      }, 1000)
  }
    

  render() {
    const { posts , counter} = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post, index) => (
          <div key={index}>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default App;