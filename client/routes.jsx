import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout'
import ImagenesWrapper from '../imports/imagenes/ImagenesWrapper'
FlowRouter.route('/',{
	action()
	{
		mount(MainLayout,{
			content: (<ImagenesWrapper />)
		})
	}
})