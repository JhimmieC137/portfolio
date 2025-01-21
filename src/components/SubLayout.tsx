export default function SubLayout({children, className = ''}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={`size-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}>
            {children}
        </div>
    );
};