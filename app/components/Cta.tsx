export function CTA() {
    return (
      <section className="py-20 px-6 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Join thousands of creators building their personal links with blinklyy. Start now and customize your page in minutes.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#get-started"
              className="bg-pink-600 hover:bg-pink-700 text-lg font-bold py-3 px-8 rounded-lg shadow-md transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-lg font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    )
  }
  