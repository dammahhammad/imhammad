import Typewriter from "./typewriter";

export default function Title() {
    return (
        <div className="flex items-end space-x-4">
            <h2 className="text-3xl font-mono font-medium">M.Hammad</h2>
            <Typewriter />
        </div>
    );
}