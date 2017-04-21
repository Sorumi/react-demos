import dva from 'dva';
import './index.css';

import createLoading from 'dva-loading';

import { browserHistory } from 'dva/router';

// 1. Initialize
const app = dva({
  history: browserHistory,
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
