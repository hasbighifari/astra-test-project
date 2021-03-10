import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from './index'
configure({ adapter: new Adapter() })

describe("<Login/>", () => {
    it("should render <Login/>", () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.contains("FormControl"))
    })
})

describe("<Login/> have form control", () => {
    it("state", () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.contains("FormControl"))
    })
})