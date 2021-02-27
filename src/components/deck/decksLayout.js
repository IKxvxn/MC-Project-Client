import React, { Component, Fragment } from 'react';
import { Row, Input, Divider } from 'antd';
import DeckContainer from './deckContainer'
import LoadingScreen from '../otherComponents/loadingScreen'
import * as ClientColors from '../../assets/clientColors'
import * as ClientBanners from '../../assets/clientBanners'

class deckLayout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filteredData: this.props.decks,
      filter: "",
    }
  }

  onSearchAux = (filter) => {
    if (filter !== "") {
      this.setState({ filteredData: this.props.decks.filter(deck => deck.name.toLowerCase().includes(filter)) })
    }
    else {
      this.setState({ filteredData: this.props.decks })
    }
  }

  onSearch = (event) => {
    this.setState({ filter: event.target.value.toLowerCase() })
    this.onSearchAux(event.target.value.toLowerCase())
  }

  render() {
    return (
      <Fragment>
        <Divider>Mis Mazos</Divider>
        <Row gutter={[8, 8]}>
          <Input.Search placeholder="Buscar Mazo" onChange={this.onSearch} allowClear size="large" />

          {!this.props.isLoading

            ?
            <Fragment>
              <DeckContainer
                createMode={true}
                selectedBanner={ClientBanners.banners[0].key}
                selectedColor={ClientColors.colors[5]}
                onFinish={this.props.createDeck}
                isCreating={this.props.isCreating}
                importDeck={this.props.importDeck}
                deckName="Añadir Mazo"
              />

              {this.state.filteredData.map((deck) => (
                <DeckContainer
                  selectedBanner={deck.bannerKey}
                  selectedColor={ClientColors.getColorByKey(deck.colorKey)}
                  onFinish={this.props.updateDeck}
                  onDelete={this.props.deleteDeck}
                  onExport={this.onExport}
                  isCreating={this.props.isCreating}
                  deckName={deck.name}
                  _id={deck._id}
                  deckShareCode={deck.shareCode}
                />
              ))}
            </Fragment>

            :
            <LoadingScreen marginTop="25vh" />
          }

        </Row>
      </Fragment>
    );
  }

  componentDidUpdate(oldProps) {
    if (oldProps.isLoading === true && this.props.isLoading === false) {
      this.setState({ filteredData: this.props.decks })
    }
    if (oldProps.isCreating === true && this.props.isCreating === false) {
      this.onSearchAux(this.state.filter)
    }
  }
}

export default deckLayout

