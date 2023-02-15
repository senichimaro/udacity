import React from "react";
import { connect } from "react-redux";
import { newDataObjectUsers } from '../utils/helpers'

// Components
import List from "./List";
import { CardUser } from './Card'

class LeaderboardContainer extends React.Component {
  render() {
    
    // create score values
    this.props.users.map( entry => {
      const totalAnsw = Object.keys(entry.answers).length
      const totalAskd = entry.questions.length
      const totalQ = totalAnsw + totalAskd
      entry['score'] = {
        "totalAnsw":totalAnsw,
        "totalAskd":totalAskd,
        "totalQ":totalQ,
      }
    })

    // sort decending order
    this.props.users.sort((first,second) => {
      let comparison = 0
      if(first.score.totalQ > second.score.totalQ){
        comparison = -1
      } else if(first.score.totalQ < second.score.totalQ){
        comparison = 1
      }
      return comparison
    })

    return this.props.users && <List componentUsed={CardUser} componentPropName="entry" data={this.props.users}/>
  }
}
export default connect(newDataObjectUsers)(LeaderboardContainer);
