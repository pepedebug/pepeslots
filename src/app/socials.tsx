import TwitterXIcon from "@/components/social-icons/twitter-x-icon";
import TgIcon from "@/components/social-icons/tg-icon";
import DiscordIcon from "@/components/social-icons/discord-icon";
export default function Socials() {
    return (
        <div className="overflow-visible z-20 flex flex-row space-x-6 my-6 md:my-0">
            <TwitterXIcon/>
            <TgIcon/>
            <DiscordIcon/>
        </div>
    )
}