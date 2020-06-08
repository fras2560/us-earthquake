/** Simple Testing of the app.*/
describe('Testing for the simple USGS data app', () => {
    it('Ensure main page can load from the API', () => {
        // this test assumes that at least one earth quake is present
        cy.visit('');
        cy.get('[data-cy=earthquakes]').find('[data-cy=earthquake]').should('have.length.greaterThan', 0);
    });
});
