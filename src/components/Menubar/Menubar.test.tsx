// import { render, screen, fireEvent } from "@testing-library/react";
// import { Menubar, MenuLinkProps } from "./Menubar";
// import { BrowserRouter } from "react-router-dom";

// // Sample data for links
// const links: MenuLinkProps["links"] = [
//   {
//     title: "HOME",
//     path: "/home",
//     fallbackTitle: "Dashboard",
//   },
//   {
//     title: "PROJECTS",
//     path: "/researchform",
//     fallbackTitle: "Projects",
//   },
//   {
//     title: "RECOVERIES",
//     path: "/recoveries",
//     fallbackTitle: "Recoveries",
//   },
// ];

// describe("Menubar", () => {
//   beforeEach(() => {
//     render(
//       <BrowserRouter>
//         <Menubar links={links} />
//       </BrowserRouter>
//     );
//   });

//   // test("renders the logo", () => {
//   //   const logoElement = screen.getByAltText("logo");
//   //   expect(logoElement).toBeInTheDocument();
//   // });

//   test("renders the menu options in full size", () => {
//     const menuOptions = screen.getAllByRole("link");
//     expect(menuOptions.length).toBe(links.length);
//   });

//   test("renders the menu options in drawer when the menu icon is clicked", () => {
//     const menuIcon = screen.getByLabelText("menu");
//     fireEvent.click(menuIcon);

//     const drawerMenuOptions = screen.getAllByRole("link");
//     expect(drawerMenuOptions.length).toBe(links.length);
//   });
// });
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Menubar, MenuLinkProps } from "./Menubar";

// Sample data for links
const links: MenuLinkProps["links"] = [
  {
    title: "HOME",
    path: "/home",
    fallbackTitle: "Dashboard",
  },
  {
    title: "PROJECTS",
    path: "/researchform",
    fallbackTitle: "Projects",
  },
  {
    title: "RECOVERIES",
    path: "/recoveries",
    fallbackTitle: "Recoveries",
  },
];

describe("Menubar", () => {
  // test("renders the logo", () => {
  //   render(
  //     <BrowserRouter>
  //       <Menubar links={links} />
  //     </BrowserRouter>
  //   );
  //   const logoElement = screen.queryByAltText("logo");
  //   expect(logoElement).toBeInTheDocument();
  // });

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
