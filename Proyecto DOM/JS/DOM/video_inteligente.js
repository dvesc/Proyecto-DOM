const $d = document;

export default function videoIntell(etiVideo) {
  const videos = $d.querySelectorAll("[data-video-intel]"),
    call = (entries) => {
      entries.forEach((entri) => {
        (entri.isIntersecting) 
          ? entri.target.play()
          : entri.target.pause();
        
        window.addEventListener("visibilitychange", () => 
          ($d.visibilityState === "visible" && entri.isIntersecting) 
            ? entri.target.play() 
            : entri.target.pause()
          );
      });
    };
  videos.forEach((video) =>
    new IntersectionObserver(call, { threshold: [0.7, 1] }).observe(video)
  );
}
