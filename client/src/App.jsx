import React from 'react';
import { Container } from 'semantic-ui-react';

import Navbar from './Navbar';
import Footer from './Footer';
import Inner from './Inner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Navbar />
        <div id="event" />
        <Inner />
        <div
          id="rsvp"
          style={{
            position: 'sticky',
            bottom: 0
          }}
        />
        <Footer />
      </Container>
    );
  }
}

export default App;
