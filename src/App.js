import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { router } from './router';
import 'antd/dist/antd.min.css';
import 'react-notifications-component/dist/theme.css';
import { connect } from 'react-redux';
import { Spin } from 'antd';

function App(props) {
  const { isLoading } = props;
  return (
    <>
      <BrowserRouter>
        <Spin spinning={isLoading}>
          <Switch>
            {router.map((item) => (
              <Route exact path={item.path} component={item.component} />
            ))}
          </Switch>
        </Spin>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {})(App);
