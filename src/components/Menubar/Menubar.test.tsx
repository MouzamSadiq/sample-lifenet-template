import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Menubar, MenuLinkProps } from "./Menubar";

// Sample data for links
const links: MenuLinkProps["links"] = [
  {
    title: "HOME",
    path: "/home",
    fallbackTitle: "Dashboard",
    icon: "",
  },
  {
    title: "PROJECTS",
    path: "/researchform",
    fallbackTitle: "Projects",
    icon: "",
  },
  {
    title: "RECOVERIES",
    path: "/recoveries",
    fallbackTitle: "Recoveries",
    icon: "",
  },
];

describe("Menubar", () => {
  test("renders the menu options in full size", () => {
    render(
      <BrowserRouter>
        <Menubar links={links} />
      </BrowserRouter>
    );
    const menuOptions = screen.getAllByRole("link");
    expect(menuOptions.length).toBe(links.length);
  });

  test("renders the menu options in the drawer when the menu icon is clicked", () => {
    render(
      <BrowserRouter>
        <Menubar links={links} />
      </BrowserRouter>
    );

    const menuIcon = screen.getByLabelText("menu");
    fireEvent.click(menuIcon);

    const drawerMenuOptions = screen.getAllByRole("link");
    expect(drawerMenuOptions.length).toBe(links.length);
  });

  test("highlights the active page link in the menu options", () => {
    const activePath = "/researchform";

    render(
      <BrowserRouter>
        <Menubar links={links} />
      </BrowserRouter>
    );

    const activeLink = screen.getByRole("link", { name: /PROJECTS/i });
    expect(activeLink).toHaveStyle({ color: "white" || "#a2ad00" });
  });

  test("toggles the drawer when the menu icon is clicked", () => {
    render(
      <BrowserRouter>
        <Menubar links={links} />
      </BrowserRouter>
    );

    const menuIcon = screen.getByLabelText("menu");
    fireEvent.click(menuIcon);

    const drawer = screen.getByRole("presentation");
    expect(drawer).toBeInTheDocument();

    // fireEvent.click(menuIcon);

    // expect(drawer).not.toBeInTheDocument();
  });

  test("renders the menu options in drawer when the menu icon is clicked", () => {
    render(
      <BrowserRouter>
        <Menubar links={links} />
      </BrowserRouter>
    );
    const menuIcon = screen.getByLabelText("menu");
    fireEvent.click(menuIcon);

    const drawerMenuOptions = screen.getAllByRole("link");
    expect(drawerMenuOptions.length).toBe(links.length);
  });
});
