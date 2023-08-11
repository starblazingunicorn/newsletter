import { newE2EPage } from '@stencil/core/testing';

describe('newsletter-forms', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<newsletter-forms></newsletter-forms>');

    const element = await page.find('newsletter-forms');
    expect(element).toHaveClass('hydrated');
  });
});
