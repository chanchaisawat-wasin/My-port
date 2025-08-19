import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbynl-XgHxqrKesLHEl_4zXdIIk9ornsvkFWdUsdI6FSNtpixwdmgluWDVD2w_Pxv9O7Zg/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.result === "success") {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="bg-black p-8 rounded-2xl max-w-lg mx-auto relative overflow-hidden">
      {/* Neon glow overlay */}
      <div className="absolute inset-0 bg-green-400 opacity-10 blur-xl animate-pulse-slow pointer-events-none rounded-2xl"></div>

      <h2 className="text-3xl font-bold text-green-400 mb-6 text-center animate-pulse">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
        {/** Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="bg-gray-900 text-green-400 border border-green-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 transform hover:scale-105 placeholder-green-600"
          required
        />

        {/** Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="bg-gray-900 text-green-400 border border-green-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 transform hover:scale-105 placeholder-green-600"
          required
        />

        {/** Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="bg-gray-900 text-green-400 border border-green-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 transform hover:scale-105 resize-none placeholder-green-600"
          required
        />

        {/** Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-green-400 text-black font-bold py-3 rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && (
        <p className="text-green-400 mt-4 text-center animate-bounce z-10 relative">
          Message Sent!
        </p>
      )}

      {/* Inline animation */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        @keyframes pulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}


export default Contact;
