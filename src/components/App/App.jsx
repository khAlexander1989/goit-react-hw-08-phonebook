import { render } from '@testing-library/react';
import { Component } from 'react';

import { Box } from 'components/Box';
import { Filter } from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilterValue = value => this.setState({ filter: value });

  render() {
    return (
      <Box p={2}>
        <Filter
          onFilterChange={this.changeFilterValue}
          filterValue={this.state.filter}
        />
      </Box>
    );
  }
}
