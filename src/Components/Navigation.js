import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
const Navigation = () => {
	const [showMenu, setShowMenu] = useState(false);

	const maskTransitions = useTransition(showMenu, null, {
		from: { position: 'absolute', opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});
	const menuTransitions = useTransition(showMenu, null, {
		from: { opacity: 0, transform: 'translateX(-100%)' },
		enter: { opacity: 1, transform: 'translateX(0%)' },
		leave: { opacity: 0, transform: 'translateX(-100%)' },
	});

	return (
		<nav className='border-b font-bold'>
			<span className='text-x1'>
				<FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(true)} />
			</span>

			{maskTransitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div
							key={key}
							style={props}
							className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'
							onClick={() => setShowMenu(false)}
						></animated.div>
					)
			)}

			{menuTransitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div key={key} style={props} className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3'>
							<span className = 'font-bold'>This is the Menu</span>
							<ul>
								<li>Homepage</li>
							</ul>
						</animated.div>
					)
			)}
		</nav>
	);
};

export default Navigation;
