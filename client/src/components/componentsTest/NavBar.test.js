import React from 'react'

// import testing
import { render } from '@testing-library/react'

// import nav bar for testing
import NavBar from '../NavBar'

// first test
test('testing naming of nav', () => {

    // arrange
    const { getByText, getByTestId } = render(<NavBar />)

    // act
    const header = getByText(/woman world cup/i)
    const darkMode = getByTestId(/dark-mode_toggle/i)
    const navBar = getByTestId(/navbar/i)

    // assert
    expect(header).toBeTruthy()
    expect(darkMode).toBeTruthy()
    expect(navBar).toBeTruthy()
})