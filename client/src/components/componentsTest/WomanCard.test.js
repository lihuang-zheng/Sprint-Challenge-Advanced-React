import React from 'react'

// import testing
import { render } from '@testing-library/react'

// import nav bar for testing
import WomanCard from '../WomanCard'

// first test
test('testing naming of nav', () => {

    // arrange
    const { getByTestId } = render(<WomanCard />)

    // act
    const playerName = getByTestId(/players-name/i)
    const playerCountry = getByTestId(/players-country/i)

    // assert
    expect(playerName).toBeTruthy()
    expect(playerCountry).toBeTruthy()
})