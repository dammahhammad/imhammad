import { BlogsGrid } from "@/components/blogs/BlogsGrid";
import { BLOGS } from "@/components/data/blogs";

export default function Blogs() {
    return(
        <div>
            <h2 className="text-3xl font-bold font-mono border-b-1 border-zinc-300">Blogs</h2>
            <BlogsGrid items={BLOGS} />
        </div>
    )
}