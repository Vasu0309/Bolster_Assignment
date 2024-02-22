describe('Backend API Tests', () => {
  beforeEach('Navigate to APIs Page', () => {
  it('Test visit Backend APIs Page', () => {
    cy.visit('https://reqres.in/')
  })
})

//API Test Case 1
  it('GET list of users', () => {
    cy.intercept('GET', 'https://reqres.in/api/users?page=2').as('getUser');
    cy.visit('https://reqres.in');
    cy.log('Action performed to trigger the request');
    cy.request('https://reqres.in/api/users?page=2');
    cy.log('Request made');
    cy.wait('@getUser').its('response').should((response) => {
      expect(response).to.have.property('statusCode', 200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.all.keys('page', 'per_page', 'total', 'total_pages', 'data', 'support');
      expect(response.body.page).to.be.a('number');
      expect(response.body.per_page).to.be.a('number');
      expect(response.body.total).to.be.a('number');
      expect(response.body.total_pages).to.be.a('number');
      const data = response.body.data;
      expect(data).to.be.an('array').and.not.empty;
      data.forEach(user => {
        expect(user).to.have.property('id').that.is.a('number');
        expect(user).to.have.property('email').that.is.a('string');
        expect(user).to.have.property('first_name').that.is.a('string');
        expect(user).to.have.property('last_name').that.is.a('string');
      });
    });
  });

//API Test Case 2
  it('GET a Single User', () => {
    cy.intercept('GET', 'https://reqres.in/api/users?page=2').as('getUser');
    cy.visit('https://reqres.in');
    cy.log('Action performed to trigger the request');
    cy.request('https://reqres.in/api/users?page=2');
    cy.log('Request made');
    cy.wait('@getUser').its('response').should((response) => {
      expect(response).to.have.property('statusCode', 200);
      expect(response.body).to.be.an('object');
      const data = response.body.data[0];
      expect(data).to.be.an('Object').and.not.empty;
      expect(data).to.have.property('id').that.is.a('number');
      expect(data).to.have.property('email').that.is.a('string');
      expect(data).to.have.property('first_name').that.is.a('string');
      expect(data).to.have.property('last_name').that.is.a('string');
    });
  });

//API Test Case 3
  it('GET Single User Not Found', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in//api/users/23',
      failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(404);
    });
  });

//API Test Case 4
  it('GET Unknown Single resource', ()=>{
    cy.request('GET', 'https://reqres.in/api/unknown/2').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.property('id', 2);
      expect(response.body.data).to.have.property('name', 'fuchsia rose');
      expect(response.body.data).to.have.property('year', 2001);
      expect(response.body.data).to.have.property('color', '#C74375');
      expect(response.body.data).to.have.property('pantone_value', '17-2031');
    });
  });

//API Test Case 5
  it('POST Create User', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users', 
      body: {
        "name": "test",
        "job": "leader"
      }
    }).then((response) =>{
      cy.log("response:", response);
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property('name', 'test');
      expect(response.body).to.have.property('job', 'leader');
      expect(response.body).to.have.property('id').that.is.a('string')
      expect(response.body).to.have.property('createdAt').that.is.a('string');
    })
  });

//API Test Case 6
  it('PUT Update Users', () => {
    cy.request({
      method: 'PUT',
      url: "https://reqres.in/api/users/2",
      body: {
        "name": "Backend",
        "job": "zion resident"
      }
    }).then((response)=>{
      cy.log('response', response);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('name', 'Backend');
        expect(response.body).to.have.property('job', 'zion resident');
        expect(response.body).to.have.property('updatedAt').that.is.a('string');
    });
  });

//API Test Case 7
  it('PATCH Update Users', ()=>{
    cy.request({
      method: 'PATCH',
      url: "https://reqres.in/api/users/2",
      body: {
        "name": "Test",
        "job": "Test"
      }
    }).then((response)=>{
      console.log(response);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('name', 'Test');
      expect(response.body).to.have.property('job', 'Test');
      expect(response.body).to.have.property('updatedAt').that.is.a('string');
    });
  });

//API Test Case 8
  it('DELETE User', ()=>{
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2'
    }).then((response)=>{
      cy.log('response', response);
      expect(response.status).to.equal(204);
    });
  });

//API Test Case 9
  it('Register User', ()=>{
    cy.request({
      method: 'POST',
    url: 'https://reqres.in/api/register',
    body: {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    }
  }).then((response) => {
    cy.log('reponse', response);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('id').that.is.a('number');
    expect(response.body).to.have.property('token').that.is.a('string');
    });
  });

//API Test Case 10
  it('Register User with Missing Password', ()=>{
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      body: {
      "email": "sydney@fife"
      },
      failOnStatusCode: false
    }).then((response)=>{
        cy.log('reponse', response);
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('error', 'Missing password');
    });
  });

//API Test Case 11
  it('Login Test', ()=>{
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }).then((response)=>{
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('token');
    });
  });

//API Test Case 12
  it('Retrieves User Data with a Delay', ()=>{
    cy.intercept('GET', 'https://reqres.in/api/users?delay=3', (req) => {
      req.reply((res) => {
        cy.wait(3000);
        res.send({
          statusCode: 200,
          body: {
          "page": 1,
          "per_page": 6,
          "total": 12,
          "total_pages": 2,
          "data": [
              {
                  "id": 1,
                  "email": "george.bluth@reqres.in",
                  "first_name": "George",
                  "last_name": "Bluth",
                  "avatar": "https://reqres.in/img/faces/1-image.jpg"
              },
              {
                  "id": 2,
                  "email": "janet.weaver@reqres.in",
                  "first_name": "Janet",
                  "last_name": "Weaver",
                  "avatar": "https://reqres.in/img/faces/2-image.jpg"
              },
              {
                  "id": 3,
                  "email": "emma.wong@reqres.in",
                  "first_name": "Emma",
                  "last_name": "Wong",
                  "avatar": "https://reqres.in/img/faces/3-image.jpg"
              },
              {
                  "id": 4,
                  "email": "eve.holt@reqres.in",
                  "first_name": "Eve",
                  "last_name": "Holt",
                  "avatar": "https://reqres.in/img/faces/4-image.jpg"
              },
              {
                  "id": 5,
                  "email": "charles.morris@reqres.in",
                  "first_name": "Charles",
                  "last_name": "Morris",
                  "avatar": "https://reqres.in/img/faces/5-image.jpg"
              },
              {
                  "id": 6,
                  "email": "tracey.ramos@reqres.in",
                  "first_name": "Tracey",
                  "last_name": "Ramos",
                  "avatar": "https://reqres.in/img/faces/6-image.jpg"
              }
          ],
          "support": {
              "url": "https://reqres.in/#support-heading",
              "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
          }
      }
      });
    });
  }).as('delayedRequest');
  cy.visit('https://reqres.in');
  cy.wait('@delayedRequest', { timeout: 5000 });
});
});