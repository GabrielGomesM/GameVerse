import "./Loading.css";
function Loading() {
  return (
    <div className="carregando" role="status">
      <span className="carregando-anel" aria-hidden="true" />
      <p>Carregando jogos...</p>
    </div>
  );
}
export default Loading;