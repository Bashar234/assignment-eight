import React from "react";

const Question = () => {
  return (
    <div className="container my-4">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How does react work?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong> How does it work:</strong> While building client-side
              apps, a team of Facebook developers realized that the DOM is slow
              (The Document Object Model (DOM) is an application programming
              interface (API) for HTML and XML documents. It defines the logical
              structure of documents and the way a document is accessed and
              manipulated.). So, to make it faster, React implements a virtual
              DOM that is basically a DOM tree representation in JavaScript. So
              when it needs to read or write to the DOM, it will use the virtual
              representation of it. Then the virtual DOM will try to find the
              most efficient way to update the browser’s DOM.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Define props and State
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Props are used to pass data from one component to another. The
              state is a local data storage that is local to the component only
              and cannot be passed to other components.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Using the Effect Hook Except data load
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong> 1.Add document title:</strong>
              Here, we can set the document title by using the useEffect hook.
              This hook executes at the initial stage when the component is
              mounted and also when the components state changes or the
              component re-renders. <br />
              <strong> 2.Cleanup function in useEffect:</strong>
              If we are setting state using setInterval and that side effect is
              not cleaned up, when our component unmounts and we're no longer
              using it, the state is destroyed with the component – but the
              setInterval function will keep running.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
