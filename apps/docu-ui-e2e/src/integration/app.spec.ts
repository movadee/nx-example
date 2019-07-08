import { getGreeting } from '../support/app.po';

describe('docu-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to docu-ui!');
  });
});
