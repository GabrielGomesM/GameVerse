import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="container header-conteudo">
        <a className="header-logo" href="/">
          <span className="header-logo-icone">◈</span>
          <span>
            Game<strong>Verse</strong>
          </span>
        </a>

        <nav className="header-nav" aria-label="Navegação principal">
          <a href="/#catalogo">Catálogo</a>
          <a href="/#busca">Pesquisar</a>
          <a href="/sobre">Sobre</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
