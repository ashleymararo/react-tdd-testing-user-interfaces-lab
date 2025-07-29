import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/my photo|image of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const subheading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(subheading).toBeInTheDocument();
});

test("displays a paragraph biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i.*(developer|student|engineer|create|build)/i); // adjust regex if needed
  expect(paragraph).toBeInTheDocument();
});

test("displays a link to GitHub", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("displays a link to LinkedIn", () => {
  render(<App />);
  const linkedInLink = screen.getByRole("link", {
    name: /linkedin/i,
  });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});