import React, { Component, Fragment } from 'react';
import { Row, Divider, Input } from 'antd';
import { withRouter } from 'react-router-dom'
import CardContainer from './cardContainer'
import LoadingScreen from '../otherComponents/loadingScreen'
import * as Messages from '../../assets/mensajes'
import * as ClientColors from '../../assets/clientColors'
import * as ClientBanners from '../../assets/clientBanners'
import * as Style from '../../style/myStyle'

class cardLayout extends Component {
  constructor(props) {
    super(props)

    let deck = this.getDeck()

    this.state = {
      deck: deck,
      deckAttributes: [],
      filteredData: deck.cards,
      filter: ""
    }
  }

  cardPlaceholderText = [{ fact: "Hint 1", description: Messages.cardsHint1 },
  { fact: "Hint 2", description: Messages.cardsHint2 },
  { fact: "Hint 3", description: Messages.cardsHint3 }]

  getDeck = () => {
    let deck = this.props.decks.find(deck => deck._id === this.props.match.params.mazoId)
    if (deck === undefined) {
      return { name: "Cargando...", _id: 0, colorKey: 0, bannerkey: 0, cards: [], deckAttributes: [] }
    }
    return deck
  }

  getDeckAttributes = () => {
    let deckAttributes = []
    if(this.state.deck.cards.length!==0) {
      this.state.deck.cards[0].details.map(attribute => deckAttributes.push({fact:attribute.fact, description:""}))
      this.setState({deckAttributes})
    }
    else {
      this.setState({deckAttributes})
    }
  } 

  onSearchAux = (filter) => {
    if (filter !== "") {
      this.setState({ filteredData: this.state.deck.cards.filter(card => card.name.toLowerCase().includes(filter)) })
    }
    else {
      this.setState({ filteredData: this.state.deck.cards })
    }
  }

  onSearch = (event) => {
    this.setState({ filter: event.target.value.toLowerCase() })
    this.onSearchAux(event.target.value.toLowerCase())
  }

  render() {
    return (
      <Fragment>
        <Divider style={Style.overFlowHidden}>{"Cartas del Mazo: " + this.state.deck.name}</Divider>
        <Row gutter={[8, 8]}>
          <Input.Search placeholder="Buscar Carta" onChange={this.onSearch} allowClear size="large" />
          {!this.props.isLoading

            ?
            <Fragment>
              <CardContainer
                createMode={true}
                selectedBanner={this.state.deck ? ClientBanners.getBannerByKey(this.state.deck.bannerKey).banner.large : null}
                selectedColor={this.state.deck ? ClientColors.getColorByKey(this.state.deck.colorKey).name : null}
                onFinish={this.props.createCard}
                isCreating={this.props.isCreating}
                deckId={this.state.deck._id}
                cardName="Añadir Carta"
                cardData={this.cardPlaceholderText}
                deckAttributes={this.state.deckAttributes}
              />

              {this.state.filteredData.map((card) => (
                <CardContainer
                  createMode={false}
                  selectedBanner={this.state.deck ? ClientBanners.getBannerByKey(this.state.deck.bannerKey).banner.large : null}
                  selectedColor={this.state.deck ? ClientColors.getColorByKey(this.state.deck.colorKey).name : null}
                  onFinish={this.props.updateCard}
                  onDelete={this.props.deleteCard}
                  isCreating={this.props.isCreating}
                  deckId={this.state.deck._id}
                  cardName={card.name}
                  cardData={card.details}
                  cardId={card._id}
                />
              ))}
            </Fragment>
            :
            <LoadingScreen marginTop="25vh" />
          }

        </ Row>
      </Fragment>
    );
  }
  componentDidUpdate(oldProps, oldState) {
    if (oldProps.isLoading === true && this.props.isLoading === false) {
      let deck = this.getDeck()
      this.setState({ deck: deck, filteredData: deck.cards })
    }
    if (oldProps.isCreating === true && this.props.isCreating === false) {
      let deck = this.getDeck()
      this.setState({ deck: deck })
      this.onSearchAux(this.state.filter)
      this.getDeckAttributes()
    }

  }
  componentDidMount(){this.getDeckAttributes()}
}

export default withRouter(cardLayout)