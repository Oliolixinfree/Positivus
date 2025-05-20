interface ITagProps {
    tag: string
}

const Tag = ({ tag }: ITagProps) => {
    return (
        <div className="flex items-center px-2 font-medium bg-green text-[40px] rounded-[7px] h-12">
            {tag}
        </div>
    )
}

export default Tag
