/** The URL of the service. */
const SERVICE_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson';

/** Simple Testing of the app.*/
describe('Testing for the simple USGS data app', () => {
    it('Ensure main page can load from the API', () => {
        // this test assumes that at least one earth quake is present
        cy.visit('');
        cy.get('[data-cy=earthquakes]').find('[data-cy=earthquake]').should('have.length.greaterThan', 0);
    });
    it('Filter out small earthquakes', () => {
        cy.server();
        cy.fixture('three_earthquakes.json').then((quakes) => {
            cy.route(SERVICE_URL, quakes);
        });
        cy.visit('');
        // expecting one to be filtered out
        cy.get('[data-cy=earthquakes]').find('[data-cy=earthquake]').should('have.length', 2);
    });
    it('Handle when unable to retrieve earthquakes', () => {
        cy.server({ status: 500 });
        cy.route(SERVICE_URL, {});
        cy.visit('');
        // expecting one to be filtered out
        cy.get('[data-cy=errorFeedback]').should('be.visible');
    });
});
