import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'newsletter-forms',
  styleUrl: 'newsletter-forms.scss',
  shadow: true,
})
export class NewsletterForms {
  @Prop() name: string = '';

  @State() error: string = '';

  handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!this.name) {
      this.error = 'Name is required.';
    } else {
      this.error = '';
      // Handle form submission here
    }
  };

  handleNameChange = (e: Event) => {
    this.name = (e.target as HTMLInputElement).value;
    // console.log(this.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text"  value={this.name} onInput={this.handleNameChange} class={{ invalid: !this.isFormValid }}></input>
        </div> */}
        {/* <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control"></input>
        </div> */}
        {/* <button type="submit" class="btn btn-primary" onSubmit={this.handleSubmit}>
          Submit
        </button> */}
        <div class="mb-3">
          <label class="form-label">Name</label> <input class="form-label" type="text" placeholder="Enter your name" value={this.name} onInput={this.handleNameChange} />
        </div>{' '}
        <div class="error">{this.error}</div>
        <div class="mb-3">
          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
