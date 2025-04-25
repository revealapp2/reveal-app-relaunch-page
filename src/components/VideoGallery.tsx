
const VideoGallery = () => {
  const videos = [
    'wgzzXJx_TAI',
    're55vC5-7IQ',
    'ptQIe4OyJrE'
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">See the App in Action</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {videos.map((videoId) => (
          <div key={videoId} className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              className="w-full h-full rounded-lg shadow-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
