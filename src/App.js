import React from 'react';
import Navbar from './templates/layout/Navbar';
import Footer from './templates/layout/Footer';

const projectName = 'Javascript Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar brand={projectName} />
        <main role="main" className="App container my-auto py-3">

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;