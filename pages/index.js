import Head from "next/head"
import stays from "../data/stays.json"
import Card from "../components/Card/Card"

export default function Home() {
  return (
    <div className="w-11/12 mx-auto my-4 flex flex-col gap-8">
      <Head>
        <title>Windbnb</title>
        <link rel="icon" href="/triangleLogo.png" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Mulish:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className="flex flex-col gap-8">
        <img className="self-start" src="/logo.png" alt="logo" />
        <div className="flex items-center justify-evenly mx-8 rounded-xl shadow-md h-12 font-mulish text-sm border border-gray-100">
          <p className="">Helsinki, Finland</p>
          <p className="text-gray-300">Add guests</p>
          <button className="">
            <span className="text-red-500 align-middle material-icons">
              search
            </span>
          </button>
        </div>
      </nav>

      <main className="flex flex-col gap-8">
        <div className="flex justify-between font-mont">
          <h1 className="font-bold text-lg">Stays in Finland</h1>
          <p className="font-medium text-sm">12+ stays</p>
        </div>
        {stays.map((stay) => (
          <Card key={stay.photo} stay={stay} />
        ))}
      </main>

      <footer className="self-center">
        <p className="font-mont text-gray-500 text-sm font-semibold">
          <a href="https://github.com/durashere">durashere</a> @{" "}
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  )
}
