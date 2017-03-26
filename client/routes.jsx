import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout';
import ImagenesWrapper from '../imports/imagenes/ImagenesWrapper';
import ImageForm from '../imports/imagenes/ImageForm';
FlowRouter.route('/',{
	action()
	{
		mount(MainLayout,{
			content: (<ImagenesWrapper />)
		})
	}
});

FlowRouter.route('/upload',{
	action()
	{
		
		mount(MainLayout,{
			content: (<ImageForm />)
		})
	}
});