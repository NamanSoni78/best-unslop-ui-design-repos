/* Menu board style for a neighborhood bakery. Tokens: ink on paper. */
.menu { font-family: Georgia, "Times New Roman", serif; }
.menu h2 { font-size: 1.333rem; letter-spacing: 0; text-transform: none; }
.menu .price { font-variant-numeric: tabular-nums; }
.order-button { background: #1a1a1a; color: #f5f2ea; border-radius: 6px; }
.order-button:focus-visible { outline: 3px solid #b3541e; outline-offset: 2px; }
.order-button:hover { background: #333; }
export default function Menu() {
  return (
    <section className="menu">
      <h2>Saturday, the oven runs at six</h2>
      <img src="/counter.jpg" alt="Bread cooling on the bakery counter" />
      <button className="order-button" onClick={placeOrder}>Reserve a loaf</button>
      <p aria-live="polite">Rye: 4 left. Sourdough: sold out at nine, as usual.</p>
    </section>
  );
}
