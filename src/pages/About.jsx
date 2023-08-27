const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-4xl mx-auto">
        At Comfy Store, we understand that a home is more than just four walls;
        A place where memories are made and comfort is cherished. we are excited
        to offer you a curated collection of the finest home furniture that
        combines style, quality, and functionality. Explore our wide range of
        furniture pieces, carefully designed to transform your living spaces
        into cozy havens.
      </p>
      <br />
      <br />
      <br />
      <div className="mt-6 text-lg leading-8 max-w-4xl mx-auto">
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content font-bold tracking-widest">
              Why choose comfy?
            </div>
          </div>
        </div>
        <br />
        <br />
        <ul>
          <li>
            <h2 className="text-4xl font-bold leading-none tracking-tight sm:text-xl">
              QUALITY CRAFTSMANSHIP
            </h2>
            Our furniture is crafted with precision and care, ensuring that each
            piece is a testament to exceptional craftsmanship and durability. We
            believe that furniture should not only be visually appealing but
            also serve a purpose.
          </li>
          <br />
          <br />
          <li>
            <h2 className="text-4xl font-bold leading-none tracking-tight sm:text-xl">
              STYLE FOR EVERY HOME
            </h2>
            Whether your aesthetic is classic, modern, or eclectic, find
            furniture that complements your unique style and enhances your homes
            ambiance. From elegant sofas that invite relaxation to functional
            dining sets.
          </li>
          <br />
          <br />
          <li>
            <h2 className="text-4xl font-bold leading-none tracking-tight sm:text-xl">
              SEAMLESS SHOPPING
            </h2>
            Enjoy a hassle-free shopping experience with our user-friendly
            website. Browse, select, and purchase your favorite pieces from the
            comfort of your own home.Our collection includes clever storage
            solutions and multi-functional pieces.
          </li>
        </ul>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
export default About;
