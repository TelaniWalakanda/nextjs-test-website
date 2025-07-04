interface HeaderWithDescriptionProps {
    titleThin: string;
    titleBold: string;
    description: string;
}

export default function HeaderWithDescription({
    titleThin,
    titleBold,
    description,
}: HeaderWithDescriptionProps) {
    return (
        <div className='text-center md:max-w-[70%] mx-auto'>
            <h2 className='uppercase text-3xl lg:text-5xl'>
                <span className='block'>{titleThin}</span>
                <span className='block font-bold text-primary'>{titleBold}</span>
            </h2>
            <p className='my-10'>{description}</p>
        </div>
    );
}