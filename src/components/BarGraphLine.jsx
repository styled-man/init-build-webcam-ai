import emojiIcon from "./Emoji/iconMap";

export default ({ emoji, percentage }) => {
    return (
        <div className="flex items-center justify-between gap-3 w-full">
            <h3 className="text-3xl text-left w-10">{emojiIcon[emoji]}</h3>
            <span className="bg-blue-400 h-4 w-full rounded-md">
                <div
                    style={{ width: `${percentage}%` }}
                    className="bg-blue-700 h-4 w-full rounded-l-md"
                />
            </span>
            <h3 className="w-10 text-right">{percentage}%</h3>
        </div>
    );
};
