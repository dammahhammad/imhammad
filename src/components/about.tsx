import PandaAvatar from "./panda";
import Typewriter from "./typewriter";

export default function About() {
    return (
        <div className="flex items-end space-x-4">
            <h2 className="text-2xl sm:text-4xl font-mono">M.Hammad</h2>
            <Typewriter />
        </div>
    );
}