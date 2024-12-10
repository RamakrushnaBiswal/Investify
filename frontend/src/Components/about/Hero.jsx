function AboutHero() {
  return (
    <>
    <div className="flex flex-col justify-center items-center mt-14">
      <div className="text-center flex flex-col px-40 py-28 text-slate-700">
        <h1 className="text-4xl">We pioneered the discount broking model in India.</h1>
        <h1 className="text-4xl">Now, we are breaking ground with our technology.</h1>
      </div>
      <hr className="w-3/5"/>
      <div className="flex px-60 gap-32 mt-20">
        <div className="w-1/2">
          <p className="text-slate-700">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and &quot;Rodha&quot;, the Sanskrit
            word for barrier.
            <br />
            <br /> Today, our disruptive pricing models and in-house
            technology have made us the biggest stock broker in India. <br /><br /> Over 1+
            Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-slate-700">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors. <br /><br />
            <a href="/" className="text-blue-600">Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets. <br /> <br /> And yet, we are always up to something new every day. Catch
            up on the latest updates on our <a href="/" className="text-blue-600">blog</a> or see what the media is <a href="/" className="text-blue-600">saying
            about us</a>.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutHero;
