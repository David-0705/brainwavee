import Header from "./Header";
import Footer from "./Footer";

const DefaultPage =({ children })=>{
    return(
        
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </div>
        
    );
};

export default DefaultPage;