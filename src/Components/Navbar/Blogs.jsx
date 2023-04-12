import React from 'react';

const Blogs = () => {
    return (
      <div>
        <h2 className="text-3xl font-semibold  bg-indigo-100  py-9 mx-14 container text-center  px-4"> Blogs </h2>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;