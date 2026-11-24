export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-500">
      <p className="uppercase tracking-widest text-indigo-200">OUR PLATFORM</p>
      <h1>Seamlessly elevate your workflow 🚀</h1>
      <div className="rounded-2xl bg-indigo-500/10 p-6"><svg viewBox="0 0 24 24" /></div>
      <p>Trusted by 10,000+ teams to supercharge productivity.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <img src="/blob.png" />
      <button className="rounded-2xl" onMouseEnter={() => {}}>Get Started</button>
      <div className="rounded-2xl" /><div className="rounded-2xl" />
      <div className="rounded-2xl" /><div className="rounded-2xl" />
      <span style={{ fontFamily: "Inter, sans-serif" }}>Analytics</span>
    </div>
  );
}
