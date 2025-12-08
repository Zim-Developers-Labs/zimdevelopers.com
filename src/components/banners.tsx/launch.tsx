"use client";

export default function LaunchBanner() {
  const handleBannerClick = () => {
    const whatsappMessageText = encodeURIComponent(
      `Hi, my name is [Your Name], and I am interested in learning more about the Zim Developers Community and how I can contribute to improving the Zimbabwean Tech Ecosystem.`
    );
    const whatsappLink = `https://wa.me/+263717238876?text=${whatsappMessageText}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <aside role="banner">
      <div
        className="flex items-center justify-center gap-2 bg-zinc-900 px-4 py-3 text-center text-white"
        role="alert"
      >
        <div className="text-xs">Improving Zimbabwe's Tech Ecosystem</div>
        <button
          onClick={handleBannerClick}
          className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-zinc-900 cursor-pointer hover:bg-zinc-200 transition"
        >
          Learn more
        </button>
      </div>
    </aside>
  );
}
