import { useState } from "react";

export default function RequestForMovie() {
    const [movieName, setMovieName] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [directorName, setDirectorName] = useState("");
    const [language, setLanguage] = useState("");

    const allFilled =
        movieName.trim() !== "" &&
        releaseYear.trim() !== "" &&
        directorName.trim() !== "";

    const handleSubmit = () => {
        alert("Your request has been submitted! Thank you for your suggestion.");

        // Clear input fields
        setMovieName("");
        setReleaseYear("");
        setDirectorName("");
        setLanguage("");
    };

    return (
        <section className="w-full md:w-1/2">
            <h1 className="text-center font-black text-4xl my-10 w-full">
                Request For Movie
            </h1>

            <div className="w-full mx-auto  flex flex-col gap-3">
                <h2>
                    Movie name :
                    <br />
                    <input
                        type="text"
                        required
                        placeholder="Enter the Movie name"
                        value={movieName}
                        onChange={(e) => setMovieName(e.target.value)}
                        className="input w-full border rounded-xl text-white placeholder-gray-400"
                    />
                </h2>

                <h2>
                    Release year :
                    <br />
                    <input
                        type="text"
                        required
                        placeholder="Enter the Release year"
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        className="input w-full  border rounded-xl text-white placeholder-gray-400"
                    />
                </h2>

                <h2>
                    Director name :
                    <br />
                    <input
                        type="text"
                        required
                        placeholder="Enter the Director name"
                        value={directorName}
                        onChange={(e) => setDirectorName(e.target.value)}
                        className="input w-full border rounded-xl text-white placeholder-gray-400"
                    />
                </h2>

                <h2>
                    Language :
                    <br />
                    <input
                        type="text"
                        placeholder="Enter the Language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="input w-full border rounded-xl text-white placeholder-gray-400"
                    />
                </h2>

                {/* Button: disabled   */}
                <button
                    onClick={handleSubmit}
                    disabled={!allFilled}
                    className={`btn text-lg mt-3 w-full rounded-xl
                        ${
                            allFilled
                                ? "bg-red-600 text-white hover:bg-white hover:text-red-600 cursor-pointer"
                                : "bg-gray-500 text-gray-300 cursor-not-allowed"
                        }
                    `}
                >
                    Submit
                </button>
            </div>
        </section>
    );
}
