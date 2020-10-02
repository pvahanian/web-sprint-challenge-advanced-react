import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => { 
    
    render(<CheckoutForm />)

    const header = screen.getAllByText(/Checkout Form/i)
    console.log(header)
    expect(header.values === 'Checkout Form').toBeTruthy()  

});


test("form shows success message on submit with form details", () => {});


