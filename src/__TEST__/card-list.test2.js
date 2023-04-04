import { render, screen } from "@testing-library/react";
import CardList from "../card-list/Card-list";
import Musiques from "../pages/Musiques"
import musiques from "../../mocks/musiques.json";

describe("Composant Musiques", () => {
  test("Renvoie le titre de l'oeuvre", async () => {
    render(<Musiques />);
    screen.debug({ musiques });
    expect(await screen.findAllByRole("card-item").length).toBe(4);
  });
});
