import * as React from 'react'
import { render } from 'react-dom'
import Root from './root'
import * as settings from './setting'

settings.getSettings().siteUrl = window.location.origin

render(
	<Root />,
	document.getElementById('root')
)
