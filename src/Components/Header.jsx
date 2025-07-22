function Header() {
  return (
    <>
      <header className="relative flex flex-col items-center justify-center min-h-[350px] w-full">
        <img
          src="/hero.png"
          alt="Hero Logo"
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-full opacity-60 z-0 select-none pointer-events-none"
          style={{ objectFit: "contain" }}
        />
      </header>
      <h1 className="absolute bottom-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center [@media(max-width:515px)]:text-3xl">
        Your Next <span className="text-gradient">Movie</span> Awaits!
        <br />
        Watch. Enjoy. Repeat.
      </h1>
    </>
  );
}

export default Header;
