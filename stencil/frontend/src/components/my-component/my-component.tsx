import { Component, Prop, h } from '@stencil/core';
 

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  render() {
    return (
      <div class="container">
        <h1>Hello Stencil.js with Bootstrap!</h1>
        <button class="btn btn-primary">Click me</button>
      </div>
    );
  }
}
