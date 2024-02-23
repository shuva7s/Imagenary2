import Mobilenav from "@/components/shared/Mobilenav"
import Sidebar from "@/components/shared/Sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="root">
            <Sidebar />
            <Mobilenav />

            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout