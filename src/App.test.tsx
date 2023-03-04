import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "./App";

describe("App", ()=>{
    it("should be render", ()=>{
        render(<App/>)
        expect(screen.getByText(/Edit/i)).toBeInTheDocument()
    })
})