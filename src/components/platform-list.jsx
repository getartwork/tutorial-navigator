import React from 'react';
import Platform from './platform';

class PlatformList extends React.Component {

  constructor() {
    super();
    this.comparator = this.comparator.bind(this);
  }

  comparator(a, b) {
    // show third party quickstarts last
    const thirdParty = [
      this.props.quickstart.platforms[a].third_party,
      this.props.quickstart.platforms[b].third_party,
    ];

    if (thirdParty[0] !== thirdParty[1]) {
      return thirdParty[0] && !thirdParty[1] ? 1 : -1;
    }

    // sort alphabetically
    const titles = [
      this.props.quickstart.platforms[a].title.toLowerCase(),
      this.props.quickstart.platforms[b].title.toLowerCase(),
    ];

    return titles[0] < titles[1] ? -1 : titles[0] > titles[1] ? 1 : 0;
  }

  render() {
    let {quickstart, customNavigationAction} = this.props;
    let items = Object.keys(quickstart.platforms).sort(this.comparator).map((name, i) => (
      <Platform
        key={quickstart.name + i}
        delay={20 * i}
        quickstart={quickstart}
        platform={quickstart.platforms[name]}
        customNavigationAction={customNavigationAction} />
    ));

    return (
      <div className="container techlist">
        <ul className="circle-list">{items}</ul>
      </div>
    );
  }
  
}

PlatformList.propTypes = {
  quickstart: React.PropTypes.object,
  customNavigationAction: React.PropTypes.func
};

export default PlatformList;
