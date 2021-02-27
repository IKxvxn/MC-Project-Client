import React, { Component } from 'react';
import { Route, Switch, withRouter, Link, Redirect } from 'react-router-dom'
import { Layout, Menu, Typography } from 'antd';
import { BookOutlined, BulbOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import HomeBreadCrumb from './homeBreadCrumb'
import DecksLayout from '../deck/decksLayout'
import CardLayout from '../card/cardLayout'
import QuizzLayout from '../quizz/quizzLayout'
import InfoLayout from '../info/infoLayout'
import LostPage from '../otherComponents/lostPage'
import * as LoginActions from '../login/loginActions'
import * as HomeActions from './homeActions'
import * as QuizzActions from '../quizz/quizzActions'
import * as Style from '../../style/myStyle'
import * as CLIENT_ROUTES from '../../assets/clientRoutes'

const { Header, Content, Footer } = Layout;

class homeLayout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };

    switch (window.location.pathname) {
      case CLIENT_ROUTES.homeRoute:
        this.state.actualMenuTab = '1'
        break;
      case CLIENT_ROUTES.accountRoute:
        this.state.actualMenuTab = '2'
        break;
      case CLIENT_ROUTES.decksRoute:
        this.state.actualMenuTab = '3'
        break;
      case CLIENT_ROUTES.quizzesRoute:
        this.state.actualMenuTab = '4'
        break;
      default:
        this.state.actualMenuTab = '1'
    }

  }

  handleLogout = () => {
    this.props.logout(this.props.history);
  }

  render() {

    return (
      <Layout style={Style.homeMainLayout}>

        <Header style={Style.HomeLayoutMenu}>
          <Menu style={Style.homeMenuText} theme="light" mode="horizontal" defaultSelectedKeys={[this.state.actualMenuTab]}>
            <Menu.Item key="1">
              <Link to={CLIENT_ROUTES.homeRoute}>
                <Typography style={Style.homeLogoText}>medCards</Typography>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />} disabled={true}>
              <Link to={CLIENT_ROUTES.accountRoute}>
                Cuenta
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<BookOutlined />}>
              <Link to={CLIENT_ROUTES.decksRoute}>
                Mazos
                </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BulbOutlined />}>
              <Link to={CLIENT_ROUTES.quizzesRoute}>
                Quizzes
              </Link>
            </Menu.Item>
            <Menu.Item onClick={this.handleLogout} style={Style.homeLogoutButton} key="6" icon={<LogoutOutlined />}>
              Cerrar Sesión
            </Menu.Item>

          </Menu>
        </Header>

        <Layout>

          <Header style={Style.homeLayoutHeader} />
          <Scrollbars autoHide style={{ height: "90vh" }}>
            <Content style={Style.homeLayoutMainContent}>

              <HomeBreadCrumb pathName={""} />

              <Content style={Style.homeLayoutSecondaryContent}>
                <Switch>
                  <Route exact path={CLIENT_ROUTES.homeRoute} render={() => <InfoLayout />} />
                  <Route exact path={CLIENT_ROUTES.decksRoute} render={() => <DecksLayout decks={this.props.decks} isLoading={this.props.isLoading} isCreating={this.props.isCreating} createDeck={this.props.createDeck} importDeck={this.props.importDeck} updateDeck={this.props.updateDeck} deleteDeck={this.props.deleteDeck} />} />
                  <Route exact path={CLIENT_ROUTES.cardsRoute} render={() => <CardLayout decks={this.props.decks} isLoading={this.props.isLoading} isCreating={this.props.isCreating} createCard={this.props.createCard} updateCard={this.props.updateCard} deleteCard={this.props.deleteCard} />} />
                  <Route exact path={CLIENT_ROUTES.quizzesRoute} render={() => <QuizzLayout createQuizz={this.props.createQuizz} decks={this.props.decks} isCreatingQuizz={this.props.isCreatingQuizz} quiz={this.props.quiz} />} />
                  <Route path={CLIENT_ROUTES.homeNotFoundRoute} render={() => <LostPage />} />
                  <Redirect from='*' to={CLIENT_ROUTES.homeNotFoundRoute} />
                </Switch>
              </Content>
            </Content>

            <Footer style={Style.homeLayoutFooter}>Creado por Kevin Arias C. - kevinarias66@gmail.com</Footer>

          </Scrollbars>

        </Layout>
      </Layout>

    );
  }

  componentDidMount() {
    if (!this.props.isSettingUpAccount) {
      this.props.loadSessionState(this.props.history)
      this.props.getMazos()
    }
  }

}

function mapStateToProps(state) {
  return {
    user: state.loginReducer.user,
    decks: state.homeReducer.decks,
    isCreating: state.homeReducer.isCreating,
    isLoading: state.homeReducer.isLoading,
    isSettingUpAccount: state.loginReducer.isLoading,
    isCreatingQuizz: state.quizzReducer.isCreating,
    quiz: state.quizzReducer.quiz
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadSessionState: (history) => dispatch(LoginActions.loadSessionState(history)),
    logout: (history) => dispatch(LoginActions.logout(history)),
    createDeck: (deck, onSucces) => dispatch(HomeActions.crearMazo(deck, onSucces)),
    importDeck: (deckShareCode, onSucces) => dispatch(HomeActions.importMazo(deckShareCode, onSucces)),
    updateDeck: (deck, onSucces) => dispatch(HomeActions.updateMazo(deck, onSucces)),
    getMazos: () => dispatch(HomeActions.getMazos()),
    deleteDeck: (deckId) => dispatch(HomeActions.deleteMazo(deckId)),
    createCard: (deckId, card, onSucces) => dispatch(HomeActions.createCard(deckId, card, onSucces)),
    updateCard: (deckId, card, onSucces) => dispatch(HomeActions.updateCard(deckId, card, onSucces)),
    deleteCard: (deckId, cardId) => dispatch(HomeActions.deleteCard(deckId, cardId)),
    createQuizz: (mazos, numPreguntas, onSucces, onFailure) => dispatch(QuizzActions.createQuizz(mazos, numPreguntas, onSucces, onFailure))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(homeLayout))

