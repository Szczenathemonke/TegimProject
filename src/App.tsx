import "./App.css";

function App() {
  return (
    <div>
      <div>navbar</div>
      <div className="hero min-h-screen justify-start m-100">
        <div className="hero-content ml-12 flex-col justify-start lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl w-96 font-custom1 font-bold">
              Znajdźmy razem Twój nowy Dom
            </h1>
            <p className="py-6 font-custom1">
              Domy, mieszkania, działki na terenie Dolnego Śląska dopasowane do
              Ciebie
            </p>
            <div className="flex flex-row gap-4">
              <button className="btn pt-4 pb-3 px-16 bg-base-100 rounded-none font-custom1 text-primary">
                Zobacz Oferty
              </button>
              <button className="btn pt-4 pb-3 px-16 bg-secondary rounded-none font-custom1 text-base-100">
                Napisz do Nas
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>usługi</div>
      <div>kontakt</div>
      <footer className="min-h-84 bg-base-200">Tegim footer</footer>
    </div>
  );
}

export default App;
