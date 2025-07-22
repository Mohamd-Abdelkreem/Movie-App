function Header() {
  return (
    <header className=" flex flex-col items-center">
      <img src="/hero.png" alt="Hero Logo" className=" max-w-[300px] w-full" />
      <h1>
        Find <span className="text-gradient">Movies</span>
        You 'll Enjoy Without the Hassle
      </h1>
    </header>
  );
}

export default Header;
