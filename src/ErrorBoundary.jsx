// mostly code from reactjs.org/docs/error-boundaries.html
import { Component } from "react";
import { Link } from "react-router-dom";
//  creating reusable error boundaries and using a feature called componentDidCatch to handle the caught errors. A component can only catch errors in its children and cannot catch its own errors.
class ErrorBoundary extends Component {
  state = { hasError: false };
  //its like setState:, call it on the class like ErrorBoundary.getDerivedStateFromError() and not on the instance of the class
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>
          to back to the home page.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
