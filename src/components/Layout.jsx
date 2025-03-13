
export default function Layout({ children }) {
    return (
        <div className="h-screen overflow-y-auto snap-y snap-mandatory">
            {children}
        </div>
    )
}
