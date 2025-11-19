import Logo from "./Logo";

function PageNav() {
  return (
    <nav className="bg-zinc-800 px-4 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Logo />
      </div>
    </nav>
  );
}

export default PageNav;
