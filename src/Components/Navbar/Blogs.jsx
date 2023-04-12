import React from 'react';

const Blogs = () => {
    return (
      <div>
        <h2 className="text-3xl font-semibold  bg-indigo-100  py-9 mx-14 container text-center  px-4">
          {" "}
          Blogs{" "}
        </h2>
        <div className="collapse rounded-md mx-10 my-6">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-indigo-500 text-primary-content  text-xl peer-checked:bg-violet-500 peer-checked:text-white font-normal">
            1.when should you use context api?
          </div>
          <div className="collapse-content bg-indigo-500 text-primary-content  text-xl peer-checked:bg-violet-500 peer-checked:text-white font-normal">
            <p>
              Context provides a way to share values like these between
              components without having to explicitly pass a prop through every
              level of the tree. Context API is a built-in React tool that does
              not influence the final bundle size, and is integrated by design.
            </p>
          </div>
        </div>
        <div className="collapse rounded-md mx-10 my-6">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-indigo-500 text-primary-content  text-xl peer-checked:bg-violet-500 peer-checked:text-white font-normal">
            2.What is Useref?
          </div>
          <div className="collapse-content bg-indigo-500 text-primary-content  text-xl peer-checked:bg-violet-500 peer-checked:text-white font-normal">
            <p>
              UseRef(initialValue) is a built-in React hook that accepts one
              argument as the initial value and returns a reference.
            </p>
          </div>
        </div>
        <div className="collapse rounded-md mx-10 my-6">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-indigo-500 text-primary-content  text-xl peer-checked:bg-violet-500 peer-checked:text-white font-normal">
            3.what is a custom hook?
          </div>
          <div className="collapse-content bg-indigo-400 text-primary-content  text-xl peer-checked:bg-violet-500 peer-checked:text-white font-normal">
            <p>
              A custom Hook is a JavaScript function whose name starts with
              ”use” and that may call other Hooks.
            </p>
          </div>
        </div>
        <div className="collapse rounded-md mx-10 my-6">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-indigo-500 text-primary-content  text-xl peer-checked:bg-violet-500 peer-checked:text-white font-normal">
            4.What is usememo?
          </div>
          <div className="collapse-content bg-indigo-500 text-primary-content  text-xl peer-checked:bg-violet-500 peer-checked:text-white font-normal">
            <p>
              React has a built-in hook called useMemo that allows you to
              memoize expensive functions so that you can avoid calling them on
              every render.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;