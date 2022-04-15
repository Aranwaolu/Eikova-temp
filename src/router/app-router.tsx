import { Router, Switch, Route, Redirect } from 'react-router-dom'
import SigninPage from '../components/user/pages/signin'
import HomePage from '../components/user/pages/index'
import { createBrowserHistory } from 'history'
import SearchPage from '../components/user/pages/search'
import Dashboard from '../components/contributor/pages/dashboard'
import Upload from '../components/contributor/pages/upload'
import UploadDetails from '../components/contributor/pages/upload-details'

import SuperAdminDashboard from '../components/admin/pages/super-admin/dashboard'
import AdminDashboard from '../components/admin/pages/admin/dashboard'
import CompleteRegistration from '../components/admin/pages/complete-registration'

const history = createBrowserHistory()

const AppRouter = () => {
	return (
		<Router history={history}>
			<>
				{/* <ScrollToTop /> */}
				<Switch>
					<Route path='/' component={HomePage} exact={true} />
					<Route path='/signin' component={SigninPage} exact={true} />
					<Route path='/search' component={SearchPage} exact={true} />
					<Route path='/dashboard' component={Dashboard} exact={true} />
					<Route path='/upload' component={Upload} exact={true} />
					<Route path='/upload-details' component={UploadDetails} exact={true} />
					<Route path='/super-admin/dashboard' component={SuperAdminDashboard} exact={true} />
					<Route path='/admin/dashboard' component={AdminDashboard} exact={true} />
					<Route
						path='/admin/complete-registration'
						component={CompleteRegistration}
						exact={true}
					/>
					{/* <Redirect to="/not-found" /> */}
				</Switch>
			</>
		</Router>
	)
}

export default AppRouter
