import bk from "../../assets/global-village/bk.mp4";

const VideoSection = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <video
      src={bk}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30" />
  </section>
);


export default VideoSection;
