describe('template spec', () => {
  beforeEach( () => {
    cy.visit('/')
  })

  context('проверка входа', () => {

  it('successful login', () => {
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })

  it('empty email', () => {
    cy.login(null, 'test')
    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('empty password', () => {
    cy.login('test@test.com', null)
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
})

context('тесты для добавления книг в избранное', () => {
  beforeEach( () => {
    cy.login('test@test.com', 'test')
  })

 it('add new book', () => {
    cy.addBook('Зов Ктулху', 'ужасы', 'Говард Лавкрафт')
    cy.contains('Зов Ктулху').click()
    cy.contains('Dowload book').should('be.visible')
  })

  it('add to favorite', () => {
    cy.addBook('Степной волк', 'проза', 'Герман Гессе')
    cy.addFavorite()
    cy.contains('Степной волк').should('be.visible')
  })

  it('delete from favorite', () => {
    cy.addBook('Миф о Сизифе', ' ', 'Альбер Камю')
    cy.addFavorite()
    cy.get('button').contains('Delete from favorite').last().click()
    cy.get('.btn > a').should('be.visible')
  })
})
})