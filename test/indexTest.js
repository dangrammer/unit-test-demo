const chai = require('chai')
const expect = chai.expect
chai.use(require("chai-sorted"))
const index = require('../src/index')

describe('index', () => {
  describe('launchSkyNet', () => {
    it('is defined', () => {
      expect(index.launchSkyNet).to.exist
    })
    it('is a function', () => {
      expect(index.launchSkyNet).to.be.a('function')
    })
    it('returns the message TERMINATOR', () => {
      expect(index.launchSkyNet()).to.equal('TERMINATOR')
    })
  })
  describe('targetOrganizer', () => {
    it('is defined', () => {
      expect(index.targetOrganizer).to.exist
    })
    it('is a function', () => {
      expect(index.targetOrganizer).to.be.a('function')
    })    
    it('returns an array of target names sorted by name', () => {
      expect(index.targetOrganizer(['sarah', 'john', 'kyle'])).to.be.sorted()
    })
  })
})
