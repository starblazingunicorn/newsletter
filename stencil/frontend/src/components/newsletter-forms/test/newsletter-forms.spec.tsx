import { newSpecPage } from '@stencil/core/testing';
import { NewsletterForms } from '../newsletter-forms';

describe('newsletter-forms', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewsletterForms],
      html: `<newsletter-forms></newsletter-forms>`,
    });
    expect(page.root).toEqualHtml(`
      <newsletter-forms>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </newsletter-forms>
    `);
  });
});
