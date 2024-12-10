/* eslint-disable react/prop-types */
function RightSec({ imgurl, name, description, learnmore }) {
  return (
    <div className="flex w-full gap-28 px-48 justify-center items-center">
      <div className="w-2/5 flex flex-col justify-center">
        <h1 className="text-4xl font-medium text-slate-700 mb-6">{name}</h1>
        <p className="text-lg text-slate-600">{description}</p>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-8">
            <a href={learnmore} className="text-blue-600">
              Learn More&#x2192;
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={imgurl} alt="product" />
      </div>
    </div>
  );
}

export default RightSec;
