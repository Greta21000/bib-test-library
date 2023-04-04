import { render, screen } from "@testing-library/react";
import Card from "../card-item/Card-item";

const cardProps = {
  route: "musiques",
  onDelete: () => {},
  oeuvre: {
    id: "1234",
    titre: "Imagine",
    auteur: "John Lennon",
    annee: "1970",
    imageUrl: "https://i1.sndcdn.com/artworks-000017289777-n5qjf4-t500x500.jpg",
  },
};

describe("Composant CARD", () => {
  test("Renvoie le titre de l'oeuvre", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/imagine/i)).toBeInTheDocument();
  });

  test("Renvoie l'auteur de l'oeuvre", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/john lennon/i)).toBeInTheDocument();
  });

  test("Renvoie l'année de l'oeuvre", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/1970/i)).toBeInTheDocument();
  });
});
