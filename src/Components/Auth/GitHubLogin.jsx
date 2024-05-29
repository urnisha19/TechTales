import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.config.js";

export default function GitHubLogin() {
    const [signInWithGithub] = useSignInWithGithub(auth);

    return (
        <div>
            <button
                onClick={() => signInWithGithub()}
                className="px-5 py-3 text-white bg-black w-full rounded-lg"
            >
                Github Login{" "}
            </button>
        </div>
    );
}