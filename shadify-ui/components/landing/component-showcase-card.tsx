interface ComponentShowcaseCardProps {
    className: string;
}

export function ComponentShowcaseCard({
    className,
}: ComponentShowcaseCardProps) {
    return (
        <div className={className}>
            <div className="flex flex-nowrap overflow-hidden justify-center items-end gap-4 relative h-full">
                <img className="rounded-2xl"src="https://res.cloudinary.com/dou5rypdf/image/upload/v1760628911/Screenshot_2025-09-26_025658_hoxc9a.png" alt="" />
                <img  className="hidden md:block lg:block rounded-2xl" src="https://res.cloudinary.com/dou5rypdf/image/upload/v1760629931/Screenshot_2025-10-04_173637_nrwjz3.png " alt="" />
            </div>
        </div>
    );
}
