import { render, screen } from "@testing-library/react";
import Musiques from "../pages/Musiques";

import { rest } from "msw";
import { setupServer } from "msw/node";
import musiquesMock from "../../mocks/musiques.json";
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.get(`${process.env.REACT_APP_BACKEND_URL}/musiques`, (req, res, ctx) => {
    return res(ctx.json(musiquesMock), ctx.status(200));
  })
);

beforeEach(() => render(<Musiques />));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Composant Musiques",  () => {
  test("Renvoie le nb de CARD", async () => {
    const musiques = await screen.findAllByRole("card-item"); // findAllByRole en mode ASYNC
    expect(musiques.length).toBe(4);
  });

  test("Filtre la liste de musiques",  async () => {
    const cards = await screen.findAllByRole("card-item");
    userEvent.type(screen.getByPlaceholderText("Rechercher ..."), "a");

    expect(screen.getAllByRole("card-item").length).toBe(2);
    
    expect(screen.getByText("Titanium")).toBeInTheDocument();
    expect(screen.getByText("Natural")).toBeInTheDocument();
    expect(screen.queryByText("Smells like teen spirits")).not.toBeInTheDocument(); //getByText renvoie une erreur car attend 1 élément ou Throw Error
    // expect(screen.getAllByRole("card-item")).toHaveValue([cards[1], cards[3]])
  });
});
