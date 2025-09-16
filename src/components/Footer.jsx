function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] text-black py-8 px-6 mt-6 border-t-2">
      {/* Social Links for my account*/}
      <section className="flex flex-col items-center gap-3">
        <h3 className="text-lg font-semibold">Follow Me</h3>
        <ul className="flex gap-6">
          <li>
            <a
              href="https://www.linkedin.com/in/ashreek-a-r-38499a268/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ashreekar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://x.com/a_ashreek"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              X (Twitter)
            </a>
          </li>
        </ul>
      </section>

      {/* Disclaimer and about */}
      <div className="mt-6 text-center text-xs text-gray-400">
        <p>
          Designed & built by <span className="font-semibold">Ashreek A R</span>
        </p>
        <p>
          Created as part of the{" "}
          <span className="font-medium text-amber-300">
            Internshala Full Stack Developer Program
          </span>
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Ashreek A R. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
