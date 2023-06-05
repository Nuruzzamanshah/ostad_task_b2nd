import React, { Suspense} from 'react';
import Footer from "../../Components/User/Footer";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";

const FooterPage = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <Footer/>
        </Suspense>
    );
};

export default FooterPage;