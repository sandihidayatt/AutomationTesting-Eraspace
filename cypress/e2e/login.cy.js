import 'cypress-xpath';

describe('Login Functionality', () => {
  it('Success Login', () => {
    cy.visit('https://eraspace.com')
    cy.xpath("//span[normalize-space()='Masuk']").click() //masuk
    cy.get('#email').type('sandihidayat175@gmail.com') //email
    cy.get('#password').type('zxcv123') //password
    cy.wait(1000)
    cy.get('#mcis-button-login').click() //login
    cy.wait(7000)
    //vallidasi
    cy.get('.mr-3 > .block').should('be.visible')
  })

  it('Login Invalid Email & Password', () => {
    cy.visit('https://eraspace.com')
    cy.xpath("//span[normalize-space()='Masuk']").click() //masuk
    cy.get('#email').type('sandihidayat13@gmail.com') //email
    cy.get('#password').type('bukanzxcv123') //password
    cy.wait(1000)
    cy.get('#mcis-button-login').click() //login
    cy.wait(7000)
    //vallidasi
    cy.get('.py-2 > .rounded-lg').should('have.text', 'Akun tidak ditemukan, silahkan cek ulang data Anda')
  })

  it('Login Invalid Email', () => {
    cy.visit('https://eraspace.com')
    cy.xpath("//span[normalize-space()='Masuk']").click() //masuk
    cy.get('#email').type('sandihidayat13@gmail.com') //email
    cy.get('#password').type('zxcv123') //password
    cy.wait(1000)
    cy.get('#mcis-button-login').click() //login
    cy.wait(7000)
    //vallidasi
    cy.get('.py-2 > .rounded-lg').should('have.text', 'Akun tidak ditemukan, silahkan cek ulang data Anda')
  })

  it('Login Invalid Password', () => {
    cy.visit('https://eraspace.com')
    cy.xpath("//span[normalize-space()='Masuk']").click() //masuk
    cy.get('#email').type('sandihidayat175@gmail.com') //email
    cy.get('#password').type('bukanzxcv123') //password
    cy.wait(1000)
    cy.get('#mcis-button-login').click() //login
    cy.wait(7000)
    //vallidasi
    cy.get('.py-2 > .rounded-lg').should('have.text', 'Email atau password salah, silahkan cek ulang data Anda')
  })

  it('Login Empty Email & Password', () => {
    cy.visit('https://eraspace.com')
    cy.xpath("//span[normalize-space()='Masuk']").click() //masuk
    cy.wait(1000)
    cy.get('#mcis-button-login').click() //login
    cy.wait(7000)
    //vallidasi
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Please fill out this field.'); // Replace with the expected alert message
    });
  })

  it('Login Empty Password', () => {
    cy.visit('https://eraspace.com')
    cy.xpath("//span[normalize-space()='Masuk']").click() //masuk
    cy.get('#email').type('sandihidayat175@gmail.com') //email
    cy.wait(1000)
    cy.get('#mcis-button-login').click() //login
    cy.wait(7000)
    //vallidasi
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Please fill out this field.'); // Replace with the expected alert message
    });
  })

  it('Login Empty Email', () => {
    cy.visit('https://eraspace.com')
    cy.xpath("//span[normalize-space()='Masuk']").click() //masuk
    cy.get('#password').type('zxcv123') //password
    cy.wait(1000)
    cy.get('#mcis-button-login').click() //login
    cy.wait(6000)
    //vallidasi
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Please fill out this field.'); // Replace with the expected alert message
    });
  })

  it('Login Invalid Format Email', () => {
    cy.visit('https://eraspace.com')
    cy.xpath("//span[normalize-space()='Masuk']").click() //masuk
    cy.get('#email').type('sandihidayat175gmail.com') //email
    cy.get('#password').type('zxcv123') //password
    cy.wait(1000)
    cy.get('#mcis-button-login').click() //login
    cy.wait(6000)
    //vallidasi
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Please fill out this field.'); // Replace with the expected alert message
    });
  })
})