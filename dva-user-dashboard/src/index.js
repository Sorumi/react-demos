import dva from 'dva';
import './index.css';

import createLoading from 'dva-loading';

import { browserHistory, hashHistory } from 'dva/router';

import { useRouterHistory } from 'react-router'
import { createHistory, createBrowserHistory} from 'history'

const history = useRouterHistory(createHistory)({
  basename: '/fxp/public'
});

// 1. Initialize
const app = dva({
  history: hashHistory,
});



app.model(require("./models/users"));

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
