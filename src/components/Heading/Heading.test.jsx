import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should renders with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { text: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });
  it('should renders with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { text: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });
  it('should renders with xlarge font size', () => {
    renderTheme(<Heading size="big">texto</Heading>);
    const heading = screen.getByRole('heading', { text: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });
  it('should renders with medium font size', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { text: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
  it('should renders with large font size', () => {
    renderTheme(<Heading size="medium">texto</Heading>);
    const heading = screen.getByRole('heading', { text: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });
  it('should render with text transform ', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { text: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
  it('should render correct font-size when screen is minor then 768px', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', { text: 'texto' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h2">texto</Heading>);
    const heading = screen.getByRole('heading', { text: 'texto' });
    const h2 = container.querySelector('h2');
    expect(h2.tagName.toLowerCase()).toBe('h2');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>texto</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
