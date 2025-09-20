"use client";

export default function VideoSection() {
  return (
    <section id="demo" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          See BackyardGolf in Action
        </h2>

        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/vqalb2jbfak"
            title="BackyardGolf Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-primary">Day Mode</h3>
            <p className="text-gray-400">
              Practice your chipping with precision tracking in daylight conditions.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-primary">LED Night Mode</h3>
            <p className="text-gray-400">
              8 vibrant LED colors illuminate your practice sessions after dark.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-primary">Smart Tracking</h3>
            <p className="text-gray-400">
              Track every shot with our mobile app and improve your accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}