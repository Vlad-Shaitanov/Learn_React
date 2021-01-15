import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
	/*Компонент высшего порядка принимает какой-то другой компонент.
	Когда мы получаем контекст, то применяем его на полученном компоненте*/
	return (props) => {
		return <RestoServiceContext.Consumer>
			{
				(RestoService) => {
					return <Wrapped {...props} RestoService={RestoService} />
				}
			}
		</RestoServiceContext.Consumer>
	};
};

export default WithRestoService;