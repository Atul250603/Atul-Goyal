function Heading({title}:{title:string}){
    return(
        <div className="flex gap-2 items-center">
            <div className="text-3xl xxs:text-4xl xs:text-5xl font-semibold">{title}</div>
            <div className="bg-gradient-to-r from-custom-yellow to-custom-red h-[3px] rounded-full w-[30%]"></div>
        </div>
    )
}

export default Heading;