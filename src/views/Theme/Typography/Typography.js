import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Typography extends Component {
  render() {
     return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="pass" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Select</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
          <Col sm={10}>
            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">Radio Buttons</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Option one is this and that—be sure to include why it's great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Option two can be something else and selecting it will deselect option one
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled />{' '}
                Option three is disabled
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>Checkbox</Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Check me out
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
    

      // <div className="animated fadeIn">
      //   <div className="card">
      //     <div className="card-header">
      //       Headings
      //     </div>
      //     <div className="card-body">
      //       <p>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>
      //       <table className="table">
      //         <thead>
      //         <tr>
      //           <th>Heading</th>
      //           <th>Example</th>
      //         </tr>
      //         </thead>
      //         <tbody>
      //         <tr>
      //           <td>
      //             <p><code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p>
      //           </td>
      //           <td><span className="h1">h1. Bootstrap heading</span></td>
      //         </tr>
      //         <tr>
      //           <td>
      //             <p><code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p>
      //           </td>
      //           <td><span className="h2">h2. Bootstrap heading</span></td>
      //         </tr>
      //         <tr>
      //           <td>
      //             <p><code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p>
      //           </td>
      //           <td><span className="h3">h3. Bootstrap heading</span></td>
      //         </tr>
      //         <tr>
      //           <td>
      //             <p><code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p>
      //           </td>
      //           <td><span className="h4">h4. Bootstrap heading</span></td>
      //         </tr>
      //         <tr>
      //           <td>
      //             <p><code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p>
      //           </td>
      //           <td><span className="h5">h5. Bootstrap heading</span></td>
      //         </tr>
      //         <tr>
      //           <td>
      //             <p><code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p>
      //           </td>
      //           <td><span className="h6">h6. Bootstrap heading</span></td>
      //         </tr>
      //         </tbody>
      //       </table>
      //     </div>
      //   </div>
      //   <div className="card">
      //     <div className="card-header">
      //       Headings
      //     </div>
      //     <div className="card-body">
      //       <p><code className="highlighter-rouge">.h1</code> through <code className="highlighter-rouge">.h6</code> classes are also available, for when you
      //         want to match the font styling of a heading but cannot use the associated HTML element.</p>
      //       <div className="bd-example">
      //         <p className="h1">h1. Bootstrap heading</p>
      //         <p className="h2">h2. Bootstrap heading</p>
      //         <p className="h3">h3. Bootstrap heading</p>
      //         <p className="h4">h4. Bootstrap heading</p>
      //         <p className="h5">h5. Bootstrap heading</p>
      //         <p className="h6">h6. Bootstrap heading</p>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="card">
      //     <div className="card-header">
      //       Display headings
      //     </div>
      //     <div className="card-body">
      //       <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using
      //         a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>
      //       <div className="bd-example bd-example-type">
      //         <table className="table">
      //           <tbody>
      //           <tr>
      //             <td><span className="display-1">Display 1</span></td>
      //           </tr>
      //           <tr>
      //             <td><span className="display-2">Display 2</span></td>
      //           </tr>
      //           <tr>
      //             <td><span className="display-3">Display 3</span></td>
      //           </tr>
      //           <tr>
      //             <td><span className="display-4">Display 4</span></td>
      //           </tr>
      //           </tbody>
      //         </table>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="card">
      //     <div className="card-header">
      //       Inline text elements
      //     </div>
      //     <div className="card-body">
      //       <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using
      //         a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>
      //       <div className="bd-example">
      //         <p>You can use the mark tag to <mark>highlight</mark> text.</p>
      //         <p>
      //           <del>This line of text is meant to be treated as deleted text.</del>
      //         </p>
      //         <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
      //         <p>
      //           <ins>This line of text is meant to be treated as an addition to the document.</ins>
      //         </p>
      //         <p><u>This line of text will render as underlined</u></p>
      //         <p>
      //           <small>This line of text is meant to be treated as fine print.</small>
      //         </p>
      //         <p><strong>This line rendered as bold text.</strong></p>
      //         <p><em>This line rendered as italicized text.</em></p>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="card">
      //     <div className="card-header">
      //       Description list alignment
      //     </div>
      //     <div className="card-body">
      //       <p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can
      //         optionally add a <code className="highlighter-rouge">.text-truncate</code> class to truncate the text with an ellipsis.</p>
      //       <div className="bd-example">
      //         <dl className="row">
      //           <dt className="col-sm-3">Description lists</dt>
      //           <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

      //           <dt className="col-sm-3">Euismod</dt>
      //           <dd className="col-sm-9">
      //             <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
      //             <p>Donec id elit non mi porta gravida at eget metus.</p>
      //           </dd>

      //           <dt className="col-sm-3">Malesuada porta</dt>
      //           <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

      //           <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
      //           <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

      //           <dt className="col-sm-3">Nesting</dt>
      //           <dd className="col-sm-9">
      //             <dl className="row">
      //               <dt className="col-sm-4">Nested definition list</dt>
      //               <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
      //             </dl>
      //           </dd>
      //         </dl>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    
  }
}

export default Typography;
