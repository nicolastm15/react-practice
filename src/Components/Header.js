import { React } from 'react';
import Navigation from "./Navigation";

const Header = ({ name }) => {
	return <header className='border-b p-3 flex justify-between items-center'>
        <span className = "font-bold">
            AppName
        </span>
        <Navigation></Navigation>
    </header>;
};

export default Header;
