import React from 'react';

type HeaderProps = {
	title?: string;
};

function Header({ title }: HeaderProps) {
	console.log('...rendering');
	return (
		<div>
			<h1>{title}</h1>
            {/* {props.title} */}
			Header
		</div>
	);
}

export default React.memo(Header);

// React.memo ile sarmalanmış olan component'in herhangi bir props değerinde güncellenme yoksa component de memoisation yapılmış olup tekrar render alamaz.

