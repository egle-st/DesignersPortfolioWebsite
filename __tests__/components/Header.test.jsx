import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../../src/Components/Header/Header';
import { linksInfo } from '../../data/data.json';

describe('Header', () => {
  it('displays correct links from props', () => {
    render(<Header links={linksInfo} />);
    linksInfo.map((link) => {
      const linkComponent = screen.getByText(link.title);
      expect(linkComponent).toBeInTheDocument();
      expect(linkComponent).toHaveAttribute('href', link.path);
    });
  });
});

it('logo image displays successfully in screen', () => {
  const { getByAltText } = render(<Header links={linksInfo} />);
  const logoElement = getByAltText('logo');
  expect(logoElement).toBeInTheDocument();
  expect(logoElement).toHaveAttribute('alt', 'logo');
});

it('social media links displays', () => {
  const { getByLabelText } = render(<Header links={linksInfo} />);
  const linkedinIcon = getByLabelText('LinkedIn');
  expect(linkedinIcon).toBeInTheDocument();
  expect(linkedinIcon.getAttribute('href')).toBe('https://www.linkedin.com');
  const InstagramIcon = getByLabelText('Instagram');
  expect(InstagramIcon).toBeInTheDocument();
  expect(InstagramIcon.getAttribute('href')).toBe('https://www.instagram.com');
});

it('toggle mobile menu, when hamburger button is clicked', async () => {
  render(<Header links={linksInfo} />);
  const mobileMenu = screen.queryByTestId('open-menu');
  expect(mobileMenu).not.toBeInTheDocument();
  //first click to open menu
  const hamburgerTheButton = screen.getByTestId('btn-burger');
  expect(hamburgerTheButton).toBeInTheDocument();
  fireEvent.click(hamburgerTheButton); // simulate first click
  //after mobile menu state changes we search for it again
  //firstly we wait for this element(mobile menu) to show on screen, only after the condition is met - the code lines under continue,
  //screen.querybytestid return element if found, or null if not found
  const mobileMenuAfterClick = await waitFor(
    () => screen.queryByTestId('open-menu'),
    { timeout: 0 }
  );
  await waitFor(() => expect(mobileMenuAfterClick).toBeInTheDocument(), {
    timeout: 0,
  });
  //second click to close menu
  fireEvent.click(hamburgerTheButton);
  //after mobile menu state changes we search for it again to be hidden
  const mobileMenuAfterSecondClick = await waitFor(
    () => screen.queryByTestId('open-menu'),
    { timeout: 0 }
  );
  await waitFor(
    () => expect(mobileMenuAfterSecondClick).not.toBeInTheDocument(),
    {
      timeout: 0,
    }
  );
});
