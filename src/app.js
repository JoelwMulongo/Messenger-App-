import { Container } from "react-bootstrap";
import ApolloProvider from "./apollo-provider";
import { BrowserRouter, Switch } from "react-router-dom";
import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { AuthProvider } from "./context/auth";
import { MessageProvider } from "./context/message";
import DynamicRoute from "./utils/dynamic-route";

const App = () => {
  return (
    <ApolloProvider>
      <AuthProvider>
        <MessageProvider>
          <BrowserRouter>
            <div className="px-2">
              <Container className="pt-5">
                <Switch>
                  <DynamicRoute
                    exact
                    path="/"
                    component={IndexPage}
                    authenticated
                  />
                  <DynamicRoute path="/login" component={LoginPage} guest />
                  <DynamicRoute
                    path="/register"
                    component={RegisterPage}
                    guest
                  />
                </Switch>
              </Container>
            </div>
          </BrowserRouter>
        </MessageProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
