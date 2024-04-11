import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen ">
        <Sidebar />

        <div className="w-[85.1041666667vw] bg-[#F7F8FB] flex flex-col">
          <Header />
          <div className="py-[1.35416666667vw] w-[82.7083333333vw] mx-[auto]  grow-[10] ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
