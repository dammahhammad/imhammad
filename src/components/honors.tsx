import Image from "next/image";
import nagarro from "@/assets/logos/nagarro.png";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import cbse from "@/assets/logos/cbse.png"

const awards = [
    {
        title: "Clash of TechTons",
        company: "Nagarro",
        logo: nagarro,
        receivedOn: "27.07.23",
        link: "https://drive.google.com/file/d/1EgsNd-tM3xxd8dT01tl1K74-tzb30qBs/view"
    },
    {
        title: "Roblox Hackathon Runnerup",
        company: "Nagarro",
        logo: nagarro,
        receivedOn: "16.06.23"
    },
    {
        title: "Academics Exceptional Performance",
        logo: cbse,
        company: "C.B.S.E",
        receivedOn: "27.07.15",
        link: "https://drive.google.com/file/d/1EC01qOiVvhzGF26W3gSZYC1D8ODafWRW/view"
    }
]

export function Honors() {
    return (
        <div className='mt-4'>
            <h2 className="text-3xl font-bold font-mono border-y-1 border-zinc-300">Honors & Awards</h2>
            {
                awards.map((award, index) => (
                    <div key={index} className="flex flex-row items-center justify-between gap-4 py-2 mt-4">
                        <div className="flex gap-4 items-end">
                            <div className="flex size-14 shrink-0 items-center justify-center select-none">
                                <Image
                                    src={award.logo}
                                    alt={award.company}
                                    width={50}
                                    height={50}
                                    quality={100}
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex flex-col">
                                <div className="text-md leading-snug font-mono">
                                    {award.title}
                                </div>
                                <div className="flex items-center gap-0.5 text-sm text-muted-foreground text-mono">
                                    {award.company}
                                    <Separator
                                        className="data-[orientation=vertical]:h-4 mx-1"
                                        orientation="vertical"
                                    />
                                    {award.receivedOn}
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                award.link && (

                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={award.link}
                                    >
                                        <ExternalLink size={14} />
                                    </Link>
                                )
                            }
                        </div>

                    </div>
                ))
            }
        </div>
    )
}