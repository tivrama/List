App.spec.js/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const showCard = require('../js/showCard')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')
const { store, rootReducer } = require('../js/Store')

describe('Testing App.spec tests', () => {
  it('should pass', () => {
    expect(1 + 1 === 2).to.be.true
  })

  it('should pass', () => {
    expect(1 + 1).to.equal(2)
  })

})

xdescribe('Testing <Search />', () => {
  // it('Should show the brand', () => {
  //   const wrapper = shallow(<Search />)
  //   // console.log(wrapper.debug())
  //   expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  // })

  it('Should render as many shows as there is data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(showCard).length).to.equal(shows.length)
  })

  it('Should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, { type: '@@redux/INIT' })
    expect(state).to.deep.equal({ searchTerm: '' })
  })
  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({ searchTerm: 'test random test string' }, { type: 'setSearchTerm', value: 'random test string' })
    expect(state).to.deep.equal({ searchTerm: 'random test string' })
  })
})
