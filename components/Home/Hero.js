import Image from 'next/image';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-content">
        <div className="Hero-container col-lg-6">
          <p className="Hero-text">Best dishes and ingredients</p>
          <h1 className="Hero-title">
            The best options of the day in your town
          </h1>
          <p className="Hero-text">
            Aliqua enim amet anim nisi minim amet veniam eu magna tempor
            laboris. Duis veniam officia culpa sunt deserunt nisi
          </p>
        </div>
        <div className="col-lg-6">
          <div className="Hero-image">
            <Image
              width={611}
              height={611}
              alt="banner"
              src="/bg1.png"
              className="Hero-banner"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
