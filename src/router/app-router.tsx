import { Router, Switch, Route } from 'react-router-dom'
import SigninPage from '../components/user/pages/signin'
import HomePage from '../components/user/pages/index'
import { createBrowserHistory } from 'history'
import SearchPage from '../components/user/pages/search'
import Dashboard from '../components/contributor/pages/dashboard'
import Upload from '../components/contributor/pages/upload'
import UploadDetails from '../components/contributor/pages/upload-details'
import ProtectedRoute from './protected-route'
import { useContext, useEffect } from 'react'
import { PictureFilesContext } from '../contexts/pictures-files-context'
import { PicturesDetailsContext } from '../contexts/pictures-details-context'

import SuperAdminDashboard from '../components/admin/pages/super-admin/dashboard'
import CompleteRegistration from '../components/admin/pages/complete-registration'
import { UserContext } from '../contexts/user-context'
import AdminSigninPage from '../components/contributor/pages/admin-signin'

const history = createBrowserHistory()

const AppRouter = () => {
	const { pictures } = useContext(PictureFilesContext)
	const { setPictureDetails } = useContext(PicturesDetailsContext)
	const { user } = useContext(UserContext)
	useEffect(() => {
		if (pictures.files) {
			const defaultDetails = pictures.files.map((file) => ({
				title: '',
				description: '',
				tags: '',
				meeting: '',
				location: '',
				date: '',
				minister: '',
				songMinister: '',
			}))
			setPictureDetails(defaultDetails)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pictures])
	// Check subdomain
	const host = window.location.host
	const subdomain = host.split('.')[0]
	return (
		<Router history={history}>
			<>
				{/* <ScrollToTop /> */}
				{subdomain === 'admin' && (
					<Switch>
						<ProtectedRoute
							isAuthenticated={user.isLoggedIn}
							redirectPath='/signin'
							path='/'
							component={SuperAdminDashboard}
							exact={true}
						/>
						<Route path='/signin' component={AdminSigninPage} exact={true} />
						<Route path='/complete-registration' component={CompleteRegistration} exact={true} />
						{/* <Redirect to="/not-found" /> */}
					</Switch>
				)}
				{subdomain === 'contributor' && (
					<Switch>
						<ProtectedRoute
							isAuthenticated={user.isLoggedIn}
							redirectPath='/signin'
							path='/'
							component={Dashboard}
							exact={true}
						/>
						<Route path='/signin' component={SigninPage} exact={true} />
						<Route path='/dashboard' component={Dashboard} exact={true} />
						<Route path='/upload' component={Upload} exact={true} />
						<ProtectedRoute
							isAuthenticated={!!pictures.files}
							path='/upload-details'
							redirectPath='/upload'
							component={UploadDetails}
							exact={true}
						/>
						{/* <Redirect to="/not-found" /> */}
					</Switch>
				)}
				{subdomain !== 'admin' && subdomain !== 'contributor' && (
					<Switch>
						<ProtectedRoute
							isAuthenticated={user.isLoggedIn}
							redirectPath='/signin'
							path='/'
							component={HomePage}
							exact={true}
						/>
						<Route path='/signin' component={SigninPage} exact={true} />
						<Route path='/search' component={SearchPage} exact={true} />
						{/* <Redirect to="/not-found" /> */}
					</Switch>
				)}
			</>
		</Router>
	)
}

export default AppRouter
