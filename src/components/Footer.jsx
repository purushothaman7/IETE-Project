export default function Footer() {
  return (
    <footer className="bg-purple-gradient text-white font-bold md:p-16 p-4">
      <div className="md:flex md:justify-between">
        <div className="md:max-w-md">
          <h1 className="md:text-6xl text-4xl pb-8 md:text-left text-center">
            IETE CHENNAI
          </h1>
          <p>
            IETE Chennai centre, No: 37, Conran Smith Road Entrance Peters
            Road,Gopalapuram, Chennai, Tamil Nadu 600086
          </p>
          <div className="bg-white flex justify-between  mt-8 p-2 pr-0 rounded-md max-w-sm">
            <input
              type="email"
              placeholder="Enter email"
              className="rounded-sm text-black focus:outline-none p-2"
            />
            <button className="rounded-lg bg-black mr-3 md:p-3 p-2 md:ml-10">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex font-light md:text-3xl md:mr-32 pt-6 justify-between">
          <div className="md:pr-16">
            <h2 className="font-bold">Useful links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/executive">Executive</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Socials</h2>
            <ul>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">X</a>
              </li>
              <li>
                <a href="">YouTube</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
