export default function About() {
    return (
        <div>
            <h2 className="text-3xl font-bold font-mono border-y-1 border-zinc-300">About me</h2>
            <div className="space-y-4 font-mono text-sm text-justify my-4">
                <p>
                    Hi, I’m <span className="font-semibold text-gray-900 dark:text-gray-100">M. Hammad</span> —
                    a passionate <span className="font-medium">Product Developer</span> with experience
                    building multiple products across diverse technologies. My focus is on creating scalable
                    and impactful digital solutions that deliver real value.
                </p>

                <p>
                    I love exploring both the creative and technical sides of development — from designing
                    clean, user-friendly UIs to engineering robust backends and experimenting with{" "}
                    <span className="font-medium">AI, Next.js, .NET, Python, and modern frontend ecosystems</span>.
                </p>

                <p>
                    Beyond work, I’m naturally curious — I enjoy{" "}
                    <span className="font-medium">working with other developers</span>, keeping up with
                    tech trends, and experimenting. I also love reading, riding in{" "}
                    <span className="font-medium">mountains</span>, and exploring hobbies
                    that keep me balanced and inspired.
                </p>

                <p>
                    For me, technology isn’t just about code — it’s about building experiences that{" "}
                    <span className="italic">simplify, connect, and empower</span>.
                </p>
            </div>
        </div>
    );
}
