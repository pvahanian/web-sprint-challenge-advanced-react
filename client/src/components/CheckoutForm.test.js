import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test("form header renders", async () => { 
    
render(<CheckoutForm />)


});


test("form shows success message on submit with form details",async () => {
 render(<CheckoutForm />)
    
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const button = screen.getByRole("button", { name: /Checkout/i });

  fireEvent.change(firstNameInput, {
        target: { name: "firstName", value: "Pablo" },
      });
      fireEvent.change(lastNameInput, {
        target: { name: "lastName", value: "Vahanian" },
      });
      fireEvent.change(addressInput, {
        target: { name: "address", value: "12asdfasdft" },
      });
      fireEvent.change(cityInput, {
        target: { name: "city", value: "iowa city" },
      });
      fireEvent.change(stateInput, {
        target: { name: "state", value: "iowa" },
      });
      fireEvent.change(zipInput, {
        target: { name: "zip", value: "52422" },
      });
    
      fireEvent.click(button);
    
      const newOrder = await screen.findByText(/Pablo/i);
    });


